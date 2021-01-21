import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-room-content',
  templateUrl: './room-content.component.html',
  styleUrls: ['./room-content.component.css']
})
export class RoomContentComponent implements OnInit {

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {

  }
}
