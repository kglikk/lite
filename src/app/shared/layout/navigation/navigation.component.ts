import { Observable } from 'rxjs/Observable';


import { AuthService } from './../../../services/auth/auth.service';
import {Component, OnInit} from '@angular/core';





@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  showinnavigation: boolean;

  constructor(private auth: AuthService) {
    //this.showData.currentShow = Observable.of(false);
    //this.showData.show.next(false); 
  
  }

  ngOnInit() {
    
   
  }
  

}
