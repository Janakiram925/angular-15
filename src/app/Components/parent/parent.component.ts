import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  public name = 'My name is JanakiRam';
  @Input() public parentData: any;
  // if we want to use different name
  @Input('parent data') public message: any;
  @Output() public emitEvent = new EventEmitter()
  public inputValue = '';
  public hasError= true;
  public isSpecial = true;
  public greet = ''
  public messageStyles = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() {};
  ngOnInit() {};

  greetUser() {
    return "Hello " + this.name
  }
  onClick(event: any) {
    console.log(event)
    this.greet = 'welcome to Angular Application';
  }
  logMessage(message: string) {
    console.log(message);
  }
  fireEvent() {
    this.emitEvent.emit('hello parent, from child');
  }

}
