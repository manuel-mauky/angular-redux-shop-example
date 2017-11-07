import {NgModule} from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {AppState} from './model';
import {initialState, rootReducer, } from './reducers';
import {RootEpics} from './epics';


@NgModule({
    imports: [
        NgReduxModule,
        NgReduxRouterModule,
    ],
    providers: [RootEpics]
})
export class StoreModule {
    constructor(store: NgRedux<AppState>,
                devTools: DevToolsExtension,
                ngReduxRouter: NgReduxRouter,
                rootEpics: RootEpics) {
        const middlewares = [...rootEpics.createEpics()];
        const storeEnhancer = devTools.isEnabled ? [devTools.enhancer()] : [];

        store.configureStore(
            rootReducer,
            initialState,
            middlewares,
            storeEnhancer
        )

        ngReduxRouter.initialize();
    }
}
