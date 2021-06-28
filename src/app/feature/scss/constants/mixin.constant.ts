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
  fontSizeColor: `
  <b class="text-large m-0">//For Font Size and Color</b>
  @mixin font_size_color($color: null, $font: null, $font_weight: null, $line_height: null) {
    @if $color != null{
      color: $color;
    }
    @if $font != null{
      font-size: $font;
    }
    @if $font_weight != null{
      font-weight: $font_weight;
    }
    @if $line_height != null{
      line-height: $line_height;
    }
  }
  `,
  position: `
  <b class="text-large m-0">//For Positons</b>
  @mixin position($position: null, $bottom: null, $left: null, $right: null, $top: null) {
    @if $position != null{
      position: $position;
    }
    @if $bottom != null{
      bottom: $bottom;
    }
    @if $left != null{
      left: $left;
    }
    @if $right != null{
      right: $right;
    }
    @if $top != null{
      top: $top;
    }
  }
  `,
  backGroundMixin: `
  <b class="text-large m-0">//For Background image and Position</b>
  @mixin icon_bg_img($imgpath: null, $bg_position: null, $bg_color: null, $bg_size: null, $height: null, $width: null) {
    @if $bg_color != null{
      background-color: $bg_color;
    }
    @if $imgpath != null{
      background: $bg_color url($css-base-path+'/new-icon'+$imgpath) no-repeat;
      // background: $bg_color url('/assets/new-icon'+$imgpath) no-repeat;
    }
    @if $bg_position != null{
      background-position: $bg_position;
    }
    @if $bg_size != null{
      background-size: $bg_size;
    }
    @if $height != null{
      height: $height;
    }
    @if $width != null{
      width: $width;
    }
  }
  `,
  btnStyle: `
  <b class="text-large m-0">//For Button Style</b>
  @mixin btn_style($bg_color: null, $border: null, $box_shadow: null, $border_radius: null, $color: null) {
    @if $bg_color != null{
      background: $bg_color;
    }
    @if $border != null{
      border: $border;
    }
    @if $box_shadow != null{
      box-shadow: $box_shadow;
    }
    @if $border_radius != null{
      border-radius: $border_radius;
    }
    box-sizing: border-box;
    @if $color != null{
      color: $color;
    }
  }
  `,
  allBreakPoints: `
  <b class="text-large m-0">//For All BreakPoints</b>

  @mixin device($media) {
    @if $media == sm_mobile {
      @media only screen and (max-width: #{$sm_mobile}) {
        @content;
      }
    }
    @if $media == mobile {
      @media only screen and (max-width: #{$mobile}) {
        @content;
      }
    }
    @else if $media == mobile_landscape {
      @media only screen and (min-width: #{$mobile - 59px}) and (max-width: #{$width_ipad - 201px})
      and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.8) {
        @content;
      }
    }
    @if $media == ipad_sm {
      @media only screen and (min-width: #{$mobile + 1px}) and (max-width: #{$width_ipad - 40px}) {
        @content;
      }
    }
    @if $media == ipad {
      @media only screen and (min-width: #{$mobile + 1px}) {
        @content;
      }
    }
    @if $media == laptop {
      @media only screen and (min-width: #{$width_ipad + 1px}) {
        @content;
      }
    }
    @if $media == mac {
      @media only screen and (min-width: #{$width_mac + 1}) {
        @content;
      }
    }
    @if $media == thinkpad {
      @media only screen and (min-width: #{$width_ipad + 1px}) and (max-width: #{$width_desktop + 10px})
      and (max-height: #{$mobile + 270px}) {
        @content;
      }
    }
    @if $media == desktop {
      @media only screen and (min-width: #{$width_laptop}) {
        @content;
      }
    }
    @if $media == lg_desktop {
      @media only screen and (min-width: #{$width_desktop}) {
        @content;
      }
    }
    @if $media == xlg_desktop {
      @media only screen and (min-width: #{$width_desktop + 320px}) {
        @content;
      }
    }
  }
  //Mobile Landscape
  @mixin mb_landscape {
      @include device(mobile_landscape) {@content};
      @include device(mobile) {@content};
  }
  //Mobile and iPad
  @mixin mobile_ipad {
    @include device(ipad_sm) {@content};
    @include device(mobile) {@content};
  }
  `,
}
