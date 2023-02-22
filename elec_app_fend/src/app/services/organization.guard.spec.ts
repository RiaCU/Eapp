import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OrganizationGuard } from './organization.guard';

describe('OrganizationGuard', () => {
  let guard: OrganizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    guard = TestBed.inject(OrganizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
