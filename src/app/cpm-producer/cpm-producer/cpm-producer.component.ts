import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CpmService} from "../../services/cpm.service";


@Component({
  selector: 'app-cpm-producer',
  templateUrl: './cpm-producer.component.html',
  styleUrls: ['./cpm-producer.component.scss']
})
export class CpmProducerComponent implements OnInit {

  patientEntryForm!: FormGroup;

  constructor(private cpmService: CpmService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.patientEntryForm = this.formBuilder.group(
      {
        firstName: [''],
        lastName: [''],
        email: [''],
        city: [''],
        country: [''],
      }
    );
  }

  send(){
    console.log(this.patientEntryForm.value);
    this.cpmService.savePatient(this.patientEntryForm.value).subscribe(val=>{
      console.log(val);
    })
  }

  arrayData: any[] = [];



}
