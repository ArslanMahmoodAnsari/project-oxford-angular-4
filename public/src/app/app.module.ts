import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddfaceComponent } from './addface/addface.component';
import { ShowFacesComponent } from './show-faces/show-faces.component';
import { FindSimilarFaceComponent } from './find-similar-face/find-similar-face.component';
import { FacesService } from './faces.service'; 

@NgModule({
  declarations: [
    AppComponent,
    AddfaceComponent,
    ShowFacesComponent,
    FindSimilarFaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    	{
    		path:'addFace',
    		component: AddfaceComponent
    	},
      {
        path:'faces',
        component:ShowFacesComponent
      },
      {
        path:'findSimilarFaces',
        component:FindSimilarFaceComponent
      }
    ])
  ],
  providers: [FacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
