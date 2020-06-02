import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

    name : string ="Anderson";
  @ViewChild('customForm') public userFrm;
  constructor() { }

  ngOnInit() {
  }

}
