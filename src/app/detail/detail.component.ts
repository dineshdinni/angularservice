import { Component, OnInit } from '@angular/core';
import { TextService } from '../text.service';
import { User } from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  name='Details Page';
  user:User[] = [];


  constructor(private textserv : TextService) { }

  ngOnInit(): void {
    alert(this.textserv.gettodaysdate());
  }
  getallusers(){
    this.textserv.getallusersInfo().subscribe(user=>{
      this.user=user
      console.log(this.user);
    });
}

}
