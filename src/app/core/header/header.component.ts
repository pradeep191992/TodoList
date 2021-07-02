import { headerConst } from './constants/header.constant';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerConst = headerConst.menuItem;
  mainIndex = 0;
  toggle = false;
  menuIcon = '#menu_icon';
  constructor(public render: Renderer2) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onButtonGroupClick(i){
    this.mainIndex = i;
  }

  // tslint:disable-next-line:typedef
  toggleNav() {
    this.toggle = !this.toggle;
    if (document.body.classList.contains('nav-open')) {
      this.render.removeClass(document.body, 'nav-open');
      this.menuIcon = '#menu_icon';
    } else{
      this.render.addClass(document.body, 'nav-open');
      this.menuIcon = '#close';
    }
  }

}
