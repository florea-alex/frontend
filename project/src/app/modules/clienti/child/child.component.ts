import { Component, Input, OnInit, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() messageFromParent: any;
  @Output() messageFromChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.messageFromParent)
  }

  public EmitData(): void{
    this.messageFromChild.emit('message from Child');
  }

}
