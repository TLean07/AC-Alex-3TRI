import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  constructor(private firebaseService: FirebaseService) {}

  async addPet(pet: any) {
    const petsRef = collection(this.firebaseService.firestore, 'pets');
    return await addDoc(petsRef, pet);
  }

  async getPets() {
    const petsRef = collection(this.firebaseService.firestore, 'pets');
    const snapshot = await getDocs(petsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async updatePet(petId: string, updatedPet: any) {
    const petRef = doc(this.firebaseService.firestore, 'pets', petId);
    return await updateDoc(petRef, updatedPet);
  }

  async deletePet(petId: string) {
    const petRef = doc(this.firebaseService.firestore, 'pets', petId);
    return await deleteDoc(petRef);
  }
}
