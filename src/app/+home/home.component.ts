import { AuthService } from './../services/auth/auth.service';
import { JsonApiService } from './../core/api/json-api.service';

import { Component, OnInit, Inject } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public demo1:any;
  public demo2:any;
  
  constructor(private jsonApiService:JsonApiService, private auth: AuthService) { //
    
  }

  ngOnInit() {
    this.jsonApiService.fetch('/ui-examples/tree-view.json').subscribe(data=> {
      this.demo1 = data.demo1;
      this.demo2 = data.demo2;
    })
  }
  


  

}
