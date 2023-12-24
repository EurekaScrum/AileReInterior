import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLinksComponent } from './picture-links.component';

describe('PictureLinksComponent', () => {
  let component: PictureLinksComponent;
  let fixture: ComponentFixture<PictureLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
