import { mixin } from './constants/mixin.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scss',
  templateUrl: './scss.component.html',
  styleUrls: ['./scss.component.scss']
})
export class ScssComponent implements OnInit {
  myMixin = mixin;
  constructor() { }

  ngOnInit(): void {
  }

}
