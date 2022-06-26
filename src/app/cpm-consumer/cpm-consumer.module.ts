import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpmConsumerComponent } from './cpm-consumer/cpm-consumer.component';
import {RouterModule, Routes} from "@angular/router";
import {CpmProducerComponent} from "../cpm-producer/cpm-producer/cpm-producer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarouselModule} from "primeng/carousel";
import {TableModule} from "primeng/table";
import {FieldsetModule} from "primeng/fieldset";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {ButtonModule} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

const routes: Routes = [
  {path: '', component: CpmConsumerComponent,
    children: [
      {path: '', component: CpmConsumerComponent},
    ]},
];



@NgModule({
  declarations: [
    CpmConsumerComponent
  ],
  exports: [
    CpmConsumerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    TableModule,
    ToastModule,
    PaginatorModule,
    FieldsetModule,
    ToolbarModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [MessageService]
})
export class CpmConsumerModule { }
