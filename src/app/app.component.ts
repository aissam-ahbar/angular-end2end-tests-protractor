import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputControl = new FormControl();

  submit() {
    // make a call to your backend
    console.log(this.inputControl);
  }
}
