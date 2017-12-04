import { Observable } from 'rxjs/Observable';
import { ShowDataService } from './../../services/show-data.service';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef  } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-open-project-form',
  templateUrl: './open-project-form.component.html',
  styleUrls: ['./open-project-form.component.css']
})
export class OpenProjectFormComponent implements OnInit {
  projects: any[];
  openedProject: any = {};

 // showHide: boolean;
  selectedProject: any = {};
  //showData:  boolean;

  modalRef: BsModalRef;

  constructor(private projectService: ProjectService, private auth: AuthService, private modalService: BsModalService, private showData: ShowDataService) {
   // this.showHide = false;

   //   this.showData.show = false;
  }

  ngOnInit() {
    /*
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;  
    });*/
    
  }

  changeShowStatus() {
   // this.showHide = !this.showHide;
  }

  openProject() {
    
    this.selectedProject =  this.projects.find(p => p.id == this.openedProject.project)
    console.log("Selected Project ", this.selectedProject);
    this.projectService.changeProjectName(this.selectedProject.name);
    //this.projectService.changeProjectObject(this.selectedProject);

    this.projectService.changeProjectId(this.selectedProject.id);

    this.showData.showIt();
    //this.showData.show.next(true); 
    this.modalRef.hide();


   }


   
   openModal(template: TemplateRef<any>) {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;      
    });

     this.modalRef = this.modalService.show(template);
   }


 
}
