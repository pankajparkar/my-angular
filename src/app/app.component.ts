import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHobbies = true;

  salary = 10000;
  date = new Date();

  // Bindings
  // A way of showing/displaying JS variable automatically on page
  student = {
    firstName: 'Pankaj',
    lastName: 'Parkar',
    age: 30,
    hobbies: [
      {value: 'Cricket'},
      {value: 'Football'},
      {value: 'Singing'}
    ]
  };

  checkboxClick() {
    if (this.showHobbies) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  submit() {

    console.log('Form Should Save');
  }
  
}
