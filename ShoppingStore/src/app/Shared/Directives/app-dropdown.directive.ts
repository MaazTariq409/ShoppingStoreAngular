import { Directive, HostBinding, HostListener, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';

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
