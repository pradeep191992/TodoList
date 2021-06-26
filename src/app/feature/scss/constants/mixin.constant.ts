export const mixin = {
  dBloak: `
  <b class="text-large m-0">//For Remove hover effect on touch screen</b>
  @mixin remove-hover-effect {
    @media (hover: none),(pointer: coarse){
        @content;
    }
  }
  `,
  widthHeightBg: `
  <b class="text-large m-0">//For Height, Width and Background Color</b>
  @mixin width_height_bg($height: null, $width: null, $bg: null) {
    @if $height != null{
      height: $height;
    }
    @if $width != null{
      width: $width;
    }
    @if $bg != null{
      background-color: $bg;
    }
  }
  `,
  gridColRow: `
  <b class="text-large m-0">//For Grid Column and Row</b>
  @mixin grid-col-row ($col-start, $col-end, $row-start, $row-end) {
    -ms-grid-column: $col-start;
    -ms-grid-column-span: $col-end - $col-start;
    -ms-grid-row: $row-start;
    -ms-grid-row-span: $row-end - $row-start;
    grid-column: #{$col-start}/#{$col-end};
    grid-row: #{$row-start}/#{$row-end};
  }
  `,
  flexAll: `
  <b class="text-large m-0">//For Grid Column and Row</b>
  @mixin flex ($flex: null, $justify:null, $align_item:null, $wrap:null, $direction:null) {
    @if $flex !=null {
      display: $flex;
    }
    @if $justify != null{
      justify-content: $justify;
    }
    @if $align_item != null{
      align-items: $align_item;
    }
    @if $wrap != null{
      flex-wrap: $wrap;
    }
    @if $direction != null{
      flex-direction: $direction;
    }
  }
  `,
}
