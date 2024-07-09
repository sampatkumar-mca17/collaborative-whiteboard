import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
const CREDS = {
  tenantID: 'f8cb2709-4ed6-451b-b320-57d6d8a15d03',
  primaryKey: '42BVOOTXpW5hVLJTw0ZNQ5q99SWD1R7HlONjyqmpNMqAIg4lecRpJQQJ99AEACBkjD8y71xuAAAAAZFRnPN6',
  endpoint: 'https://us.fluidrelay.azure.com'
}
process.env['NG_APP_USE_AZURE'] = 'true';
process.env['NG_APP_TENANT_ID'] = CREDS.tenantID;
process.env['NG_APP_PRIMARY_KEY'] = CREDS.primaryKey;
process.env['NG_APP_ENDPOINT_URL'] = CREDS.endpoint;
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
