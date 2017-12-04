import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';



@Injectable()
export class ProjectService {

  //nazwa projektu jest obserwowana
  private projectName = new BehaviorSubject<string>("Project not opened");
  currentProjectName = this.projectName.asObservable();

   //id projektu jest obserwowana
   private projectId = new BehaviorSubject<number>(0);
   currentProjectId = this.projectId.asObservable();

  

  constructor(private http: Http) { }

  changeProjectName(name: string) {
    this.projectName.next(name);    
  }

  changeProjectId(id: number) {
    this.projectId.next(id);    
  }


  /*
  private projectObject = new BehaviorSubject<any>({
    id: 0,
    projName: 'Project not opened'
    });
  currentProjectObject = this.projectObject.asObservable();
  */
  /*
  changeProjectObject(object: any = {}) {
  //  this.projectName.next(name);
    
    this.projectObject.next({
      id: object.id,
      projName: object.name
    }) 
  } */


  res;
  getProjects() {
     //wczytaj dane z bazy danych
     return this.http.get('/Project/Get').map(res => res.json());
  }


 projects: any[];
 selectedProject: any = {};

  createProject(newProjectName: string) {
    var headers = new Headers();    
    headers.append('Content-Type', 'application/json; charset=utf-8');    
    
  // this.http.post('/Project/CreateProject/', JSON.stringify({ LastUpdate: "0001-01-01 00:00:00.0000000", Name: newProjectName }), { headers: headers }).subscribe(); //(data: Object) => {console.log(data);}
  //  return this.http.get('/Project/Get').map(res => res.json());
    
 
  this.http.post('/Project/CreateProject/', JSON.stringify({ LastUpdate: "0001-01-01 00:00:00.0000000", Name: newProjectName }), { headers: headers }).subscribe((data: Object) => {
   
    this.getProjects().subscribe(projects => {
      this.projects = projects; 
      this.selectedProject =  this.projects.find(p => p.name == newProjectName)
      console.log("this.projects.toString()"+this.projects.find(p => p.name == newProjectName).name);
      console.log("this.newProjectName"+newProjectName);
      console.log("this.selectedProject.id"+this.selectedProject.id);  
      this.changeProjectId(this.selectedProject.id);
    
    });
  });
 // console.log("this.selectedProject.id"+this.selectedProject.id);  
 // return this.selectedProject.id;
  
 }
 
 /*
 getIdOfCreatedProject(newProjectName: string): number {
  
   this.getProjects().subscribe(projects => {
    this.projects = projects; 
    this.selectedProject =  this.projects.find(p => p.name == newProjectName)
   // console.log("this.projects.toString()"+this.projects.find(p => p.name == newProjectName).name);
    console.log("this.newProjectName"+newProjectName);
    console.log("this.selectedProject.id"+this.selectedProject.id);
 
  
  }); 


   return 1;

 } 
 */





  

  

}
