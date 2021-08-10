import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Componente } from '../../interfaces/interfaces';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  menu: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.menu = this.dataService.getMenuOpts();
  }


}
