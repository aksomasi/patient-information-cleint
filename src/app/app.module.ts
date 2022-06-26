import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FieldsetModule} from "primeng/fieldset";
import {HttpClientModule} from "@angular/common/http";
import {CpmConsumerModule} from "./cpm-consumer/cpm-consumer.module";
import {CpmProducerModule} from "./cpm-producer/cpm-producer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FieldsetModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CpmConsumerModule,
    CpmProducerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
