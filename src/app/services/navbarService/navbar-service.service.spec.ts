/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavbarServiceService } from './navbar-service.service';

describe('NavbarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarServiceService]
    });
  });

  it('should ...', inject([NavbarServiceService], (service: NavbarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
