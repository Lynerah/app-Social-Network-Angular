import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-way-one-theme',
  templateUrl: './way-one-theme.component.html',
  styleUrls: ['./way-one-theme.component.scss']
})
export class WayOneThemeComponent implements OnInit {

  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      document.body.classList.toggle('darkMode');
    });
  }
}
