import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async onClick() {
    this.loading = await this.loadingController.create({
      message: 'Espere por Favor',
    });

    await this.loading.present();


    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);

    // const { role, data } = await this.loading.onDidDismiss();
    // console.log(role, data);
  }


}
