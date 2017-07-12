import {Injectable, OnInit} from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService implements OnInit {

private apiURL: string= 'https://pixabay.com/api/?key=5631286-0003cd3270e217a43e0900ed8&q=';
private imageType: string= '&image_type=photo';


    constructor(public http:Http){ 
      
    }
  getData (value: string):  Observable<any>
     {
    console.log('this is:- '+ value);
    return this.http.get(this.apiURL+value+this.imageType)
     .map((data: Response) =>data.json());
    
}

ngOnInit(){
     console.log()

}

}

 