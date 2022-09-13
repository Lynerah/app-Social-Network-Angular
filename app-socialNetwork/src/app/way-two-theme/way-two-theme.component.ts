import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-way-two-theme',
  templateUrl: './way-two-theme.component.html',
  styleUrls: ['./way-two-theme.component.scss']
})
export class WayTwoThemeComponent implements OnInit {

  isChecked: boolean = false;
  mode: string = 'light_mode';
  title = 'app-socialNetwork';

  ngOnInit(): void {
  }

  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'nightlight_round' : 'light_mode';
    document.body.classList.toggle('darkMode');
  }
}
