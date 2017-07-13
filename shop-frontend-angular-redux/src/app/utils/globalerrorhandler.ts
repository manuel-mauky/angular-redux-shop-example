import {ErrorHandler, Injectable} from "@angular/core";
import {} from 'sourcemapped-stacktrace'

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
