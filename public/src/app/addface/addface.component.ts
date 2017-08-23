import { Component, OnInit } from '@angular/core';
import { FacesService } from '../faces.service';

@Component({
  selector: 'app-addface',
  templateUrl: './addface.component.html',
  styleUrls: ['./addface.component.css']
})
export class AddfaceComponent implements OnInit {
	data = {
	facelist_id:'',
	name:'',
	link:''
	}
  bar = false;
  check = false;
  added;
  constructor(private faceService: FacesService) { }

  ngOnInit() {
  }
  add() {
    this.bar = true;
    this.faceService.addFace(this.data).subscribe(res => {
      this.added = res;
      this.check = true;
      this.bar = false;
    },err => {
      console.log("Error:" + err);
      this.bar = false;  
    });
	}

}
