import { cupConstant } from './constants/cup.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea-cup',
  templateUrl: './tea-cup.component.html',
  styleUrls: ['./tea-cup.component.scss']
})
export class TeaCupComponent implements OnInit {
  constant = cupConstant.index;
  newArr = [];
  constructor() { }

  ngOnInit(): void {
    this.arraymove();
  }
  // tslint:disable-next-line:typedef
  arraymove() {
    if (this.constant.length) {
      this.constant.forEach(element => {
        const myArr = Math.floor(Math.random() * this.constant.length);
        this.newArr.push(myArr);
      });
    }
    console.log(this.newArr);
  }

}
