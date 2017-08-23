import { Component, OnInit } from '@angular/core';
import { FacesService } from '../faces.service';

@Component({
  selector: 'app-show-faces',
  templateUrl: './show-faces.component.html',
  styleUrls: ['./show-faces.component.css']
})
export class ShowFacesComponent implements OnInit {
	faces;
  constructor(private faceService: FacesService) { }

  ngOnInit() {
    
    /*This will get all the faces*/
    this.faceService.getAllFaces().subscribe(res=>{
      this.faces = res;
    },err => {
      console.log('Error:' + err);
    });
  }
  del(id){
    console.log('checking1');
   this.faceService.deleteFace(id).subscribe(res=>{
      console.log(res);
    },err => {
      console.log('Error:' + err);
    });
  }

}
