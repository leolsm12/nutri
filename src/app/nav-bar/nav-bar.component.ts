import { Component } from '@angular/core';
import { SmoothScrollDirective } from '../smooth-scroll.directive';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SmoothScrollDirective],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
