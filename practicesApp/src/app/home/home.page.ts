import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { tap } from 'rxjs/operators';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInput) inputCuenta: IonInput;
  data1: any[] = [];
  data2: any[] = [];
  actions: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService
      .getDataProductsAsObservable()
      .subscribe((data) => (this.data1 = data));
    this.getActions();
  }

  getData() {
    this.firebaseService
      .getDataProductsAsPromise()
      .then((data) => {
        this.data2 = data.docs.map((p) => {
          const id = p.id;
          const d = p.data();
          return { id, ...d };
        });
      })
      .catch((error) => console.error(error));
  }

  delete(id: string) {
    // console.log(id);
    this.firebaseService.deleteItem(id);
  }

  add() {
    this.firebaseService.addItem(this.inputCuenta.value);
  }

  getActions() {
    this.firebaseService
      .getDataChanges()
      .pipe(tap(console.log))
      .subscribe((changes) => (this.actions = changes));
  }
}
