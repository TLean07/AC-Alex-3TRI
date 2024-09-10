import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private encryptedData: string='';

  setEncryptedData(data: string) {
    this.encryptedData = data;
  }

  getEncryptedData() {
    return this.encryptedData;
  }
}
