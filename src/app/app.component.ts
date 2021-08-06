import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World How are you doing?';
 
  userObject={
    name:'John',
    age:'32',
    id:0
  }
  constructor(private httpService:HttpService){

  }
  handleEvent(event:any){
    console.log(event)
    // this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    // .subscribe((response)=>{
        
    // });
  }
}
