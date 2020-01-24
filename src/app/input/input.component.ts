
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  serverName:string=" ";
  servers=[];
  constructor() { }

  ngOnInit() {
  }
   onAdd()
  {
    this.servers.push(this.serverName);
  }
  onRemove(id: number) {  
    const position = id + 1;  
    this.servers.splice(id, 1);  
 }
}
