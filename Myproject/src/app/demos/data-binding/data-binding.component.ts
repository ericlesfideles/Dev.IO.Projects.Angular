import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {

  public clickCounter: number = 0;
  public imgUrl: string = "https://angular.io/assets/images/logos/angular/angular.svg"
  public name: string ="";
  addClick(){
    this.clickCounter++;
  }
  resetClick(){
    this.clickCounter = 0;
  }
  KeyUp(event: any){
    this.name = event.target.value;
  }

}
