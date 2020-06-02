import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  employee : any[] = [];

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.employee=[
    //     { fname:'John',lname:'Doe',email:'john@example.com'},
    //     { fname:'Mary',lname:'Moe',email:'mary@example.com'},
    //     { fname:'July',lname:'Dooley',email:'July@example.com'}
    //   ];
    // },1000)
    this.employee = this.router.snapshot.data['data'];
  }

}
