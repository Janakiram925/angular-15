import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  public counter: number = 0;
  ngOnInit(): void {
    
  }

  increment() {
    this.counter++
  }
  decrement() {
    this.counter--
  }

}
