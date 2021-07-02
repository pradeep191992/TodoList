import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewRef } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit, OnChanges {
  svgHashTag = '';
  svgIconPath = './assets/icon/icon.svg';
  @Input() iconHashTag: string;
  constructor(public cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.svgHashTag = `${this.svgIconPath}${this.iconHashTag}`;
    this.detectChange();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.iconHashTag.previousValue && changes.iconHashTag.currentValue !== changes.iconHashTag.previousValue) {
      // if (changes.iconHashTag.previousValue === '#luv_icon' && changes.iconHashTag.currentValue === undefined) {
      //   this.iconHashTag = changes.iconHashTag.previousValue;
      // }
      this.detectChange();
    }
  }

  detectChange() {
    if (this.cdr && !(this.cdr as ViewRef).destroyed) {
      this.svgHashTag = `${this.svgIconPath}${this.iconHashTag}`;
      this.cdr.detectChanges();
    }
  }

}
