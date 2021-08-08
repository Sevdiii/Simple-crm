import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User(); //  user = variable vom Typ :User     User() heißt leerer JSON mit den ganzen Feldern drinnen. // Nun ist Models unter der variable user aufrufbar
  constructor(public dialog: MatDialog) {
    this.user.firstName
   }

  ngOnInit(): void {
  }

  openDialog(){
  
    this.dialog.open(DialogAddUserComponent);
  }

}
