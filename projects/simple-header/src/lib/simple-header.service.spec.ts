import { ComponentFixture,TestBed } from '@angular/core/testing';
import { SimpleHeaderComponent } from './simple-header.component';

describe('SimpleHeaderComponent',() => {
  let component: SimpleHeaderComponent;
  let fixture: ComponentFixture<SimpleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',() => {
    expect(component).toBeTruthy();
  });

  it('should render title',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo').textContent).toContain('My App');
  });

  it('should render menu items',() => {
    const compiled = fixture.nativeElement;
    const menuItems = compiled.querySelectorAll('nav li');
    expect(menuItems.length).toBe(3);
  });
});