import { Component, OnInit } from '@angular/core';
import { CuidadoresService } from '../../app/services/cuidadores.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.page.html',
  styleUrls: ['./cuidadores.page.scss'],
})
export class CuidadoresPage implements OnInit {
  cuidadores: any[] = [];
  newCuidador = {
    nome: '',
    telefone: '',
    experiencia: null,
    especialidades: ''
  };

  constructor(private cuidadoresService: CuidadoresService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.loadCuidadores();
  }

  loadCuidadores() {
    this.cuidadoresService.getCuidadores().then(data => {
      this.cuidadores = data;
    });
  }

  async addCuidador() {
    if (this.newCuidador.nome && this.newCuidador.telefone && this.newCuidador.experiencia && this.newCuidador.especialidades) {
      this.cuidadoresService.addCuidador(this.newCuidador).then(() => {
        this.loadCuidadores();
        this.newCuidador = { nome: '', telefone: '', experiencia: null, especialidades: '' }; // Resetar o formulário
      }).catch(err => {
        this.showAlert('Erro', 'Erro ao adicionar cuidador: ' + err);
      });
    } else {
      this.showAlert('Atenção', 'Preencha todos os campos.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async confirmDeleteCuidador(cuidadorId: string, cuidadorName: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmação',
      message: `Tem certeza que deseja apagar o cuidador <strong>${cuidadorName}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: () => {
            this.deleteCuidador(cuidadorId);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteCuidador(cuidadorId: string) {
    this.cuidadoresService.deleteCuidador(cuidadorId).then(() => {
      this.loadCuidadores();  
    }).catch(err => {
      console.error('Erro ao excluir cuidador:', err);
    });
  }
}
