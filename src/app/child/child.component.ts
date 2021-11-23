import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Output() clicked : EventEmitter<string>=new EventEmitter<string>();

  onMyChildClick()
  {
    this.clicked.emit("Hi, I am learning output property via EventEmitter variable & invoking it in onMyChildClick().")

  }
  FirstNumber:number;
  SecondNumber:number;
  Length:number;
  width:number;
  radius:number; 
  @Output() addition : EventEmitter<number> = new EventEmitter<number>();
  @Output() subtraction : EventEmitter<number> = new EventEmitter<number>();
  @Output() multiplication : EventEmitter<number> = new EventEmitter<number>();
  @Output() division : EventEmitter<number> = new EventEmitter<number>();

  @Output() rectangle : EventEmitter<number> = new EventEmitter<number>();
  @Output() square : EventEmitter<number> = new EventEmitter<number>();
  @Output() circle : EventEmitter<number> = new EventEmitter<number>();

  add(){
    this.addition.emit(this.FirstNumber*1 + this.SecondNumber*1);
  }

  sub(){
    this.subtraction.emit(this.FirstNumber - this.SecondNumber);
  }
  mul(){
    this.subtraction.emit(this.FirstNumber * this.SecondNumber);
  }
  div(){
    this.subtraction.emit(this.FirstNumber / this.SecondNumber);
  }

  areaofRectangle(){
    this.rectangle.emit(this.Length*this.width);
  }
  areaofSquare(){
    this.rectangle.emit(this.radius*this.radius);
  }

  areaofCircle(){
    this.rectangle.emit(3.14*this.radius*this.radius);
  }

}
