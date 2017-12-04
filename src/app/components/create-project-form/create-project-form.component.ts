import { ShowDataService } from './../../services/show-data.service';

import { ProjectService } from './../../services/project.service';

import { Http, Headers } from '@angular/http';
import { Component, OnInit, TemplateRef} from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.css']
})
export class CreateProjectFormComponent implements OnInit {
  showHide: boolean;
  newProjectName;
  modalRef: BsModalRef;

  projects: any[];
  selectedProject: any = {};
  openedProject: any = {};

  constructor(public http: Http, private auth: AuthService, private projectService: ProjectService, private showData: ShowDataService,  private modalService: BsModalService) {
    this.showHide = false;
  }

  ngOnInit() {
  }
  /*
  changeShowStatus() {
    this.showHide = !this.showHide;
  } */

  projectId: number;
  createProject() {

    
    this.projectService.createProject(this.newProjectName); 
   // this.projectService.getIdOfCreatedProject(this.newProjectName);
    this.projectService.changeProjectName(this.newProjectName);
   // this.projectService.changeProjectId(this.projectId);
    
   
   
   
   /*
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;

      

      this.selectedProject =  this.projects.find(p => p.name == this.newProjectName)
      console.log("this.newProjectName"+this.newProjectName);
      console.log("this.selectedProject.id"+this.selectedProject.ID);
      
       this.projectService.changeProjectId(this.selectedProject.id);
    }); */

   
    
    
    this.showData.showIt();

    this.modalRef.hide();
    } 


    openModal(template: TemplateRef<any>) {
    
       this.modalRef = this.modalService.show(template);
       
     }
}
