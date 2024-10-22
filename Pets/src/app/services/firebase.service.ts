import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public firebaseApp: any;
  public firestore: any;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDepHM68jSaItT0L00fHF6KsWPMa4V1XrE",
      authDomain: "fir-65720.firebaseapp.com",
      projectId: "fir-65720",
      storageBucket: "fir-65720.appspot.com",
      messagingSenderId: "637898416691",
      appId: "1:637898416691:web:c60dc4d656530f07a7f946",
      measurementId: "G-JXBH8JQ39T"
    };

    this.firebaseApp = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.firebaseApp);
  }
}
