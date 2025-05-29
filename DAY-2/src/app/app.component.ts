import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library';
  CPI =6;
  name = "Divij Rana";
  inputType="number";
  bookName=''
  books : string[] =[];


  buttonClicked()
 {
  alert("Hey, you have clicked the button");
 }
 AddBook()
 {
  this.books.push(this.bookName);
 }
}

