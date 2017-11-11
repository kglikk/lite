import { TreeViewComponent } from './../shared/ui/tree-view/tree-view.component';
//import { CallbackComponent } from './../callback/callback.component';
//import { AuthService } from './../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {HomeComponent} from "./home.component";


@NgModule({
  imports: [
    CommonModule,
    homeRouting,
      SmartadminModule,
     
      
  ],
  declarations: [HomeComponent, TreeViewComponent],
 // providers: [AuthService]
})
export class HomeModule { }
