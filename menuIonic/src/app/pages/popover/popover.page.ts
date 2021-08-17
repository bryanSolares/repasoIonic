import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popOverController: PopoverController) { }

  ngOnInit() {
  }

  async abrirPopOver(evt) {
    const popOver = await this.popOverController.create({
      component: PopoverInfoComponent,
      backdropDismiss: false,
      event: evt
    });

    await popOver.present();

    const data = await popOver.onWillDismiss();
    console.log(data);
  }

}
