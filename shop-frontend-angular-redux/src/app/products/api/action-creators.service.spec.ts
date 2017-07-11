import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './service';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService]
    });
  });

  it('should ...', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
