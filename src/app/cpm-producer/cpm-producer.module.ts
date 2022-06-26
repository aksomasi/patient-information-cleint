import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpmProducerComponent } from './cpm-producer/cpm-producer.component';
import {RouterModule, Routes} from "@angular/router";
import {FieldsetModule} from "primeng/fieldset";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarouselModule} from "primeng/carousel";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";

const routes: Routes = [
  {path: '', component: CpmProducerComponent,
    children: [
      {path: '', component: CpmProducerComponent},
    ]},
];


@NgModule({
  declarations: [
    CpmProducerComponent
  ],
  exports: [
    CpmProducerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    TableModule,
    FieldsetModule,
    ToolbarModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class CpmProducerModule { }
