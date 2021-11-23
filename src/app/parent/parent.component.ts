import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  value:string;
  result:number;
  onMyParentClicked(data:string){
    this.value=data;
  }
  onMyParentAdditionClicked(data:number){
    this.result=data;
  }
  onMyParentSubtractionClicked(data:number){
    this.result=data;
  }
  onMyParentMultiplicationClicked(data:number){
    this.result=data;
  }
  onMyParentDivisionClicked(data:number){
    this.result=data;
  }
  
  onMyParentRectangle(data:number){
     this.result=data;
  }
  onMyParentSquare(data:number){
    this.result=data;
 }
 onMyParentCircle(data:number){
  this.result=data;
}



}
