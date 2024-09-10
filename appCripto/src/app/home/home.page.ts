import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData = {
    name: '',
    email: '',
    note: ''
  };
  encryptionKey: string = '';
  encryptedData: string = '';

  constructor(private navCtrl: NavController, private dataService: DataService) {}

  onSubmit() {
    if (this.encryptionKey.trim() === '') {
      console.log('A chave de criptografia é necessária!');
      return;
    }

    const dataToEncrypt = JSON.stringify(this.userData);
    this.encryptedData = CryptoJS.AES.encrypt(dataToEncrypt, this.encryptionKey).toString();

    console.log('Dados criptografados:', this.encryptedData);

    this.dataService.setEncryptedData(this.encryptedData);

    this.goToDecrypt();
  }

  goToDecrypt() {
    this.navCtrl.navigateForward('/decrypt');
  }
}
