import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class AppDropdownDirective {
  @HostBinding('class.open') menuDropDown = false

  @HostListener('click') DropDownClicked ()
  {
    this.menuDropDown = !this.menuDropDown;
  }

  constructor() { }

}
