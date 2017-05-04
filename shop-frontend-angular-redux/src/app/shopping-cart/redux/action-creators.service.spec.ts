import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartActionCreators } from './action-creators.service';

describe('ShoppingCartActionCreators', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartActionCreators]
    });
  });

  it('should ...', inject([ShoppingCartActionCreators], (service: ShoppingCartActionCreators) => {
    expect(service).toBeTruthy();
  }));
});
