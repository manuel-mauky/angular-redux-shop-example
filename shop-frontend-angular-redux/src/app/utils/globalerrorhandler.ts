import {ErrorHandler, Injectable} from "@angular/core";

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

    constructor() {
        super(true);
    }

    handleError(error) {
        /* Do something */
        super.handleError(error);
    }
}
