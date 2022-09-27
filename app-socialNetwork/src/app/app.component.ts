import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { UserColorPreferenceService } from './shared/user-color-preference.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private colorSchemeService: UserColorPreferenceService) {
    // Load Color Scheme
    this.colorSchemeService.load();
  }
  // isChecked: boolean = false;
  // mode: string = 'light_mode';
  // title = 'app-socialNetwork';



  // toggleControl = new FormControl(false);
  // @HostBinding('class') className = '';

  ngOnInit(): void {
    // this.toggleControl.valueChanges.subscribe((darkMode) => {
    //   const darkClassName = 'darkMode';
    //   this.className = darkMode ? darkClassName : '';
    // });
  }

  // changed(event: MatSlideToggleChange): void {
  //   this.mode = event.checked ? 'nightlight_round' : 'light_mode';
  //   document.body.classList.toggle('darkMode');
  // }

}
