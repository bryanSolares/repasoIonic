import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideshowBackdropComponent } from './slideshow-backdrop.component';

describe('SlideshowBackdropComponent', () => {
  let component: SlideshowBackdropComponent;
  let fixture: ComponentFixture<SlideshowBackdropComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowBackdropComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideshowBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
