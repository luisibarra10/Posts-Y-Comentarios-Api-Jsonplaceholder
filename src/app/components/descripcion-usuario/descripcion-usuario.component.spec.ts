import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionUsuarioComponent } from './descripcion-usuario.component';

describe('DescripcionUsuarioComponent', () => {
  let component: DescripcionUsuarioComponent;
  let fixture: ComponentFixture<DescripcionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
