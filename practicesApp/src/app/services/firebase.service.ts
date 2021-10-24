/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private angularFireStore: AngularFirestore) {
    this.getDataChanges();
    // this.getDiferentMethods();
  }

  getDataProductsAsObservable() {
    return (
      this.angularFireStore
        .collection('bancos')
        // .snapshotChanges(['added','modified','removed'])
        // .stateChanges(['added', 'removed'])
        .valueChanges({ idField: 'my_id' })
      // .pipe(
      //   map((data) =>
      //     data.map((elements) => {
      //       const id = elements.payload.doc.id;
      //       const document = elements.payload.doc.data() as any;
      //       return { id, ...document };
      //     })
      //   )
      // )
    );
  }

  getDataProductsAsPromise() {
    return this.angularFireStore.collection('bancos').get().toPromise();
  }

  deleteItem(id: string) {
    this.angularFireStore.collection('bancos').doc(id).delete();
  }

  addItem(item: any) {
    this.angularFireStore.collection('bancos').add({ no_cuenta: item });
  }

  getDataChanges() {
    return this.angularFireStore
      .collection('bancos')
      .auditTrail(['added', 'removed'])
      .pipe(
        map((d) =>
          d.map((a) => {
            const type = a.type;
            const id = a.payload.doc.id;

            return { type, id };
          })
        )
      );
    //   // .pipe(tap(console.log))
    //   .subscribe(console.log);

    // return this.angularFireStore.collection('bancos').stateChanges();
  }

  getDiferentMethods() {
    // this.angularFireStore
    //   .collection('bancos')
    //   .snapshotChanges()
    //   .subscribe((d) => console.log('-----> snapshotChanges:', d));
    // this.angularFireStore
    //   .collection('bancos')
    //   .stateChanges()
    //   .subscribe((d) => console.log('-----> stateChanges:', d));
    // this.angularFireStore
    //   .collection('bancos')
    //   .valueChanges()
    //   .subscribe((d) => console.log('-----> valueChanges:', d));
  }
}
