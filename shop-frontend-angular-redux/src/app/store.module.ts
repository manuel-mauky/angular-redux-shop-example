

import { NgModule } from '@angular/core';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { AppState } from './appstate.types';
import { initialState, appReducer, } from './app-reducer';


@NgModule({
    imports: [
        NgReduxModule,
        NgReduxRouterModule,
    ]
})
export class StoreModule {
    constructor(
        store: NgRedux<AppState>,
        devTools: DevToolsExtension,
        ngReduxRouter: NgReduxRouter,
    ) {
        const middlewares = [];
        const storeEnhancer = devTools.isEnabled ? [devTools.enhancer()] : [];

        store.configureStore(
            appReducer,
            initialState,
            middlewares,
            storeEnhancer
        )

        ngReduxRouter.initialize();
    }
}