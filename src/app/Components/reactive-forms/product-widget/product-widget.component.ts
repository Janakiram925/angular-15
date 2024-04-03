import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-widget.component.html',
  styles: ``
})
export class ProductWidgetComponent {
  constructor() {};
  @Input()
  products: any;


}
