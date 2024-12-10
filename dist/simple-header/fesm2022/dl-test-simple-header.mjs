import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class SimpleHeaderComponent {
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

class SimpleHeaderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SimpleHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: SimpleHeaderModule, declarations: [SimpleHeaderComponent], imports: [CommonModule], exports: [SimpleHeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SimpleHeaderModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SimpleHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SimpleHeaderComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        SimpleHeaderComponent
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SimpleHeaderComponent, SimpleHeaderModule };
//# sourceMappingURL=dl-test-simple-header.mjs.map
