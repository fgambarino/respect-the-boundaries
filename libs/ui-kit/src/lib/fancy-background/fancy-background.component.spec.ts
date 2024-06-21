import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FancyBackgroundComponent } from './fancy-background.component';

describe('FancyBackgroundComponent', () => {
  let component: FancyBackgroundComponent;
  let fixture: ComponentFixture<FancyBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyBackgroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FancyBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
