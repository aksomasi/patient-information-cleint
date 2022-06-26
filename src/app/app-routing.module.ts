import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./cpm-producer/cpm-producer.module').then(m => m.CpmProducerModule)
  },
  {
    path: 'cpm-producer',
    loadChildren: () => import('./cpm-producer/cpm-producer.module').then(m => m.CpmProducerModule)
  },
  {
    path: 'cpm-consumer',
    loadChildren: () => import('./cpm-consumer/cpm-consumer.module').then(m => m.CpmConsumerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
