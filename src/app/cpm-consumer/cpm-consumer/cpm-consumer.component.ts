import {Component, OnInit, ViewChild} from '@angular/core';
import {CpmService} from "../../services/cpm.service";
import {Table} from "primeng/table";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-cpm-consumer',
  templateUrl: './cpm-consumer.component.html',
  styleUrls: ['./cpm-consumer.component.scss']
})
export class CpmConsumerComponent implements OnInit {
  client: any;
  constructor(private cpmService: CpmService, private messageService: MessageService) { }

  patients : any[]=[];


  ngOnInit(): void {
    this.client = this.cpmService.connection()
    let that = this;
    this.client.connect({}, (frame: any) => {
      that.client.subscribe("/topic/greeting", ((message: any) => {
        if(message.body) {
          const patient = JSON.parse(message.body);
          this.patients.push(patient)
          this.messageService.add(
            {severity:'success', summary:'New Patient Added', detail: patient.firstName + ' added as a Patient'});
          console.log(message.body)
        }
      }))
    });
  }

}
