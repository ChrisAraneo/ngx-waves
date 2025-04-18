import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWavesComponent } from './ngx-waves.component';

describe('NgxWavesComponent', () => {
  let component: NgxWavesComponent;
  let fixture: ComponentFixture<NgxWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxWavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
