import { TestBed, inject } from '@angular/core/testing';

import { ProductsActionCreators } from './action-creators.service';

describe('ProductsActionCreators', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsActionCreators]
    });
  });

  it('should ...', inject([ProductsActionCreators], (service: ProductsActionCreators) => {
    expect(service).toBeTruthy();
  }));
});
