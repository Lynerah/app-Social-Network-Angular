import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { UserColorPreferenceService } from '../shared/user-color-preference.service';

@Component({
  selector: 'app-way-two-theme',
  templateUrl: './way-two-theme.component.html',
  styleUrls: ['./way-two-theme.component.scss']
})
export class WayTwoThemeComponent implements OnInit {

  // isChecked: boolean = false;
  // mode: string = 'light_mode';
  // title = 'app-socialNetwork';

  // ngOnInit(): void {
  // }

  // changed(event: MatSlideToggleChange): void {
  //   this.mode = event.checked ? 'nightlight_round' : 'light_mode';
  //   document.body.classList.toggle('darkMode');
  // }
  public themes = [
    {
      name: 'dark',
      icon: 'brightness_3'
    },
    {
      name: 'light',
      icon: 'wb_sunny'
    }
  ];

  constructor(public colorSchemeService: UserColorPreferenceService) {
  }
  ngOnInit(): void {

  }

  setTheme(theme: string) {
    this.colorSchemeService.update(theme);
  }

}
