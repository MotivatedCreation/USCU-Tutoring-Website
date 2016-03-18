import {bootstrap} from 'angular2/platform/browser'
import {App} from './components/app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
