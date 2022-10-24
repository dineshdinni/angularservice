import { DOCUMENT } from '@angular/common';
import { Component,Inject,OnInit } from '@angular/core';
import { TextService } from '../text.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a:string = 'hey google';
  b='no datatype';
  status=true;
  d=123;
  name1='dinesh';
  name2='sushmitha';

  money=80009;
  todaydate = new Date();
  perfomance=3;



  document:any;

  mobiles=['redmi','iphone','samsung'];

  constructor(@Inject(DOCUMENT) document:Document, private textserv:TextService){
    this.document = document;
  }
  name:undefined;

  ngOnInit(): void {
   // confirm('please enter valid information')
  }
  
printdata(event:any){
  alert(this.name);
  alert(this.document.getElementById('doctest').value); 
  }
  printdate(){
    alert(this.textserv.getmyName())

  }
    
}
 