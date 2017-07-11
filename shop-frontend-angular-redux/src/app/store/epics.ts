import { Injectable } from '@angular/core';
import { ProductComponentEpics } from '../products/api/epics';

@Injectable()
export class RootEpics {
    constructor(private productEpics: ProductComponentEpics) {}

    public createEpics() {
        return [
            ...this.productEpics.createEpics()
        ];

    }
}
