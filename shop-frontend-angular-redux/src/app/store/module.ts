import { NgModule } from '@angular/core';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { AppState } from './model';
import { initialState, rootReducer, } from './reducers';
import { RootEpics } from './epics';


@NgModule({
    imports: [
        NgReduxModule,
        NgReduxRouterModule,
    ],
    providers: [RootEpics]
})
export class StoreModule {
    constructor(
        store: NgRedux<AppState>,
        devTools: DevToolsExtension,
        ngReduxRouter: NgReduxRouter,
        rootEpics: RootEpics
    ) {
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
