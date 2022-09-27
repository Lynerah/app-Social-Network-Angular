import { Component, HostBinding, OnInit } from '@angular/core';
import { UserColorPreferenceService } from 'src/app/shared/user-color-preference.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
    this.colorSchemeService.load();
  }
  ngOnInit(): void {

  }

  setTheme(theme: string) {
    this.colorSchemeService.update(theme);
  }

}
