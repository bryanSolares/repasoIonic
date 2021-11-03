import { Component } from '@angular/core';

//Plugis
import { File, FileEntry } from '@ionic-native/file/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private loadingController: LoadingController,
    private file: File
  ) {}

  createFile() {
    // this.loadingController.create({ mode: 'ios', message: 'Espere...' });

    // this.file
    //   .createFile(this.file.documentsDirectory, 'NombreArchivo', true)
    //   .then(async (response: FileEntry) => {
    //     console.log('DEBUGER >> Response: ', response);
    //     await this.file.writeFile(
    //       response.fullPath,
    //       'NombreArchivo',
    //       'Este es el contenido del arhivo'
    //     );
    //     this.loadingController.dismiss();
    //   })
    //   .catch((error) => {
    //     console.log('DEBUGER >> Error:', error);
    //     this.loadingController.dismiss();
    //   });

    this.file
      .createDir(this.file.documentsDirectory, 'Nuevo Directorio', true)
      .then((res) => console.log('directorio creado:', res))
      .catch((err) => console.log('Error en creacion de directorio:', err));

    this.file
      .createFile(this.file.documentsDirectory, 'NuevoArchivo.txt', true)
      .then((res) => console.log('archivo creado:', res))
      .catch((err) => console.log('Error en creacion de archivo:', err));
  }
}
