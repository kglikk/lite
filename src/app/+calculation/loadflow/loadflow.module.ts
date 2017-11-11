import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { LoadFlowRoutingModule } from './loadflow-routing.module';
import { LoadFlowComponent } from "app/+calculation/loadflow/loadflow.component";
import {SmartadminModule} from "app/shared/smartadmin.module";

import {AgGridModule} from 'ag-grid-angular/main';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SmartadminModule,
    AgGridModule.withComponents([]),
    LoadFlowRoutingModule
    
  ],
  declarations: [
    LoadFlowComponent
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ] 
})
export class LoadFlowModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
