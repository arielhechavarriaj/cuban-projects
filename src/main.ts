import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableAkitaProdMode, persistState } from '@datorama/akita';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

/**
 * Representa la persistencia de los estados de Akita.
 */
 const storage = persistState(); //by default store at localStorage
 /**
  * Representa el proveedor de la persistencia de los estados de Akita.
  */
 const providers = [{ provide: 'persistStorage', useValue: storage }];

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
