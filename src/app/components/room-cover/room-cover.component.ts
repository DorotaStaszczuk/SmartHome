import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-room-cover',
  templateUrl: './room-cover.component.html',
  styleUrls: ['./room-cover.component.css']
})

export class RoomCoverComponent implements OnInit {

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {

  }

}
