// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
      apiKey: "AIzaSyAtPzJYzpISNmYOEfjXd66yR1Z_9dZXaP4",
      authDomain: "lmp-webpj.firebaseapp.com",
      databaseURL: "https://lmp-webpj.firebaseio.com",
      projectId: "lmp-webpj",
      storageBucket: "lmp-webpj.appspot.com",
      messagingSenderId: "586714579396"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
