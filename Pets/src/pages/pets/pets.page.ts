import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../app/services/pets.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
})
export class PetsPage implements OnInit {
  pets: any[] = [];
  newPet = {
    nome: '',
    especie: '',
    raca: '',
    idade: null,
    observacoes: ''
  };

  constructor(private petsService: PetsService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.petsService.getPets().then(data => {
      this.pets = data;
    });
  }

  async addPet() {
    if (this.newPet.nome && this.newPet.especie && this.newPet.raca && this.newPet.idade) {
      this.petsService.addPet(this.newPet).then(() => {
        this.loadPets();
        this.newPet = { nome: '', especie: '', raca: '', idade: null, observacoes: '' }; 
      }).catch(err => {
        this.showAlert('Erro', 'Erro ao adicionar pet: ' + err);
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

  async confirmDeletePet(petId: string, petName: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmação',
      message: `Tem certeza que deseja apagar o pet <strong>${petName}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: () => {
            this.deletePet(petId);
          },
        },
      ],
    });

    await alert.present();
  }

  deletePet(petId: string) {
    this.petsService.deletePet(petId).then(() => {
      this.loadPets();
    }).catch(err => {
      console.error('Erro ao excluir pet:', err);
    });
  }
}
