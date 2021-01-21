import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MainComponent } from './components/main/main.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RoomCoverComponent } from './components/room-cover/room-cover.component';
import { RoomContentComponent } from './components/room-content/room-content.component';
import { RoomHeaderComponent } from './components/room-header/room-header.component';
import { ObjectComponent } from './components/object/object.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainHeaderComponent,
    RoomCoverComponent,
    RoomContentComponent,
    RoomHeaderComponent,
    ObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
