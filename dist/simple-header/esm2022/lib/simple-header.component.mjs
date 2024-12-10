import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SimpleHeaderComponent {
    constructor() {
        this.title = 'My App';
        this.menuItems = [
            { label: 'Home', link: '/' },
            { label: 'About', link: '/about' },
            { label: 'Contact', link: '/contact' }
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SimpleHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SimpleHeaderComponent, selector: "lib-simple-header", ngImport: i0, template: `
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
  `, isInline: true, styles: [".header{display:flex;justify-content:space-between;align-items:center;padding:1rem;background-color:#f8f9fa;box-shadow:0 2px 4px #0000001a}.logo{font-size:1.5rem;font-weight:700}nav ul{display:flex;list-style:none;margin:0;padding:0}nav li{margin-left:1rem}nav a{text-decoration:none;color:#333}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SimpleHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-simple-header', template: `
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
  `, styles: [".header{display:flex;justify-content:space-between;align-items:center;padding:1rem;background-color:#f8f9fa;box-shadow:0 2px 4px #0000001a}.logo{font-size:1.5rem;font-weight:700}nav ul{display:flex;list-style:none;margin:0;padding:0}nav li{margin-left:1rem}nav a{text-decoration:none;color:#333}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaW1wbGUtaGVhZGVyL3NyYy9saWIvc2ltcGxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBZ0QxQyxNQUFNLE9BQU8scUJBQXFCO0lBOUNsQztRQStDRSxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ2pCLGNBQVMsR0FBRztZQUNWLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzNCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2pDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1NBQ3RDLENBQUM7S0FDSDs4R0FQWSxxQkFBcUI7a0dBQXJCLHFCQUFxQix5REE1Q3RCOzs7Ozs7Ozs7OztHQVdUOzsyRkFpQ1UscUJBQXFCO2tCQTlDakMsU0FBUzsrQkFDRSxtQkFBbUIsWUFDbkI7Ozs7Ozs7Ozs7O0dBV1QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNpbXBsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+e3sgdGl0bGUgfX08L2Rpdj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWVudUl0ZW1zXCI+XG4gICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLmxpbmtcIj57eyBpdGVtLmxhYmVsIH19PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgfVxuICAgIFxuICAgIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIFxuICAgIG5hdiB1bCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIFxuICAgIG5hdiBsaSB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgbmF2IGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVIZWFkZXJDb21wb25lbnQge1xuICB0aXRsZSA9ICdNeSBBcHAnO1xuICBtZW51SXRlbXMgPSBbXG4gICAgeyBsYWJlbDogJ0hvbWUnLGxpbms6ICcvJyB9LFxuICAgIHsgbGFiZWw6ICdBYm91dCcsbGluazogJy9hYm91dCcgfSxcbiAgICB7IGxhYmVsOiAnQ29udGFjdCcsbGluazogJy9jb250YWN0JyB9XG4gIF07XG59Il19