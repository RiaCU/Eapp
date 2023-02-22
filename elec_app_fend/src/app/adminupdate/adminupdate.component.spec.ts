import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminupdateComponent } from './adminupdate.component';

describe('AdminupdateComponent', () => {
  let component: AdminupdateComponent;
  let fixture: ComponentFixture<AdminupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdateComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
