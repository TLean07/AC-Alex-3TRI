import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {
  constructor(private firebaseService: FirebaseService) {}

  async addCuidador(cuidador: any) {
    const cuidadoresRef = collection(this.firebaseService.firestore, 'cuidadores');
    return await addDoc(cuidadoresRef, cuidador);
  }

  async getCuidadores() {
    const cuidadoresRef = collection(this.firebaseService.firestore, 'cuidadores');
    const snapshot = await getDocs(cuidadoresRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }


  async updateCuidador(cuidadorId: string, updatedCuidador: any) {
    const cuidadorRef = doc(this.firebaseService.firestore, 'cuidadores', cuidadorId);
    return await updateDoc(cuidadorRef, updatedCuidador);
  }


  async deleteCuidador(cuidadorId: string) {
    const cuidadorRef = doc(this.firebaseService.firestore, 'cuidadores', cuidadorId);
    return await deleteDoc(cuidadorRef);
  }
}
