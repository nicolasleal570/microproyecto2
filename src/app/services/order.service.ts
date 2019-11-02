import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  ordersCollection: AngularFirestoreCollection<Order>;

  constructor(private afs: AngularFirestore) {
    this.ordersCollection = this.afs.collection<Order>('orders');
  }

  addOrder(order: any){
    console.log(order);
    this.ordersCollection.add(order);
  }

  get getOrders(): Observable<Order[]>{
    return this.ordersCollection.valueChanges();
  }
}
