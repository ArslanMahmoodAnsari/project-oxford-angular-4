import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class FacesService {

  constructor(private http:Http) { }

  /*Add a face to a face list*/
  addFace(data) {
	  return this.http.post('http://localhost:3000/api/faces/', data).map(res => res.json());
  }
  
  /*find a similar face in the face list*/
  findSimilar(data){
	  return this.http.post('http://localhost:3000/api/faces/find', data).map(res=>res.json());
  }
  
  /*Show all the avaliable faces*/
  getAllFaces(){
	  return this.http.get('http://localhost:3000/api/faces').map(res => res.json());
  }
  
  /*Delete the selected face*/
  deleteFace(id){
    console.log('checking2');
    return this.http.delete('http://localhost:3000/api/faces/'+id).map(res => res.json());
  }
}
