import { Injectable } from '@angular/core';
import { CollectionReference, addDoc, collection } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore/lite';
import { Categories } from '../models/addCategories/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private dbPath = '/categories';
  private categoryRef: CollectionReference<Categories>;

  constructor(private db: Firestore) {
    this.categoryRef = collection(this.db, this.dbPath) as CollectionReference<Categories>;
  }

  addCategory(categoryObj: Categories) {
    return addDoc(this.categoryRef, { ...categoryObj });
  }
}
