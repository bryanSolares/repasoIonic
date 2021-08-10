import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  usersData: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usersData = this.dataService.getUsers();
  }

  favorite(user) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  share(user) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  delete(user) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

}
