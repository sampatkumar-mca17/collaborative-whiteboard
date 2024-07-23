import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import * as Sentry from "@sentry/angular";
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

  Sentry.init({
    dsn: "https://fb6e8c798722a90c3d4a506e9c0cb305@o4507652324720640.ingest.us.sentry.io/4507652327538688",
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
      Sentry.feedbackIntegration({
        // Additional SDK configuration goes in here, for example:
        colorScheme: "system",
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", "https://sampatkumar-mca17.github.io"],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
