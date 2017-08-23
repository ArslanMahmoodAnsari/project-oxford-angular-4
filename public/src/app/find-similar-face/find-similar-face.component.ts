import { Component, OnInit } from '@angular/core';
import { FacesService } from '../faces.service';

@Component({
  selector: 'app-find-similar-face',
  templateUrl: './find-similar-face.component.html',
  styleUrls: ['./find-similar-face.component.css']
})
export class FindSimilarFaceComponent implements OnInit {
	data = {
		faceList_id:'',
		link:''
	}
  bar = false;
  found = false;
  foundData = '';
  constructor(private faceService: FacesService) { }

  ngOnInit() {
  }
  find(){
    this.bar = true;
    this.faceService.findSimilar(this.data).subscribe(res=>{
      this.foundData = res;
      this.found = true;
      this.bar = false;
    },err => {
      console.log('Error:' + err);
      this.bar = false;
    });
  }

}