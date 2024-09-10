import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.page.html',
  styleUrls: ['./decrypt.page.scss'],
})
export class DecryptPage {
  decryptKey: string = '';
  decryptedData: any;

  constructor(private navCtrl: NavController, private dataService: DataService) {}

  decryptData() {
    if (this.decryptKey.trim() === '') {
      console.log('A chave de descriptografia é necessária!');
      return;
    }

    const encryptedData = this.dataService.getEncryptedData();
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.decryptKey);
      const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

      this.decryptedData = JSON.parse(decryptedText);
    } catch (e) {
      console.error('Chave incorreta ou erro na descriptografia', e);
    }
  }
}
