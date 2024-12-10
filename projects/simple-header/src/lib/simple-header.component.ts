import { Component } from '@angular/core';

@Component({
  selector: 'lib-simple-header',
  template: `
    <header class="header">
      <div class="logo">{{ title }}</div>
      <nav>
        <ul>
          <li *ngFor="let item of menuItems">
            <a [href]="item.link">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #f8f9fa;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    nav li {
      margin-left: 1rem;
    }
    
    nav a {
      text-decoration: none;
      color: #333;
    }
  `]
})
export class SimpleHeaderComponent {
  title = 'My App';
  menuItems = [
    { label: 'Home',link: '/' },
    { label: 'About',link: '/about' },
    { label: 'Contact',link: '/contact' }
  ];
}