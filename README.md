Author: Drew Robinson (hello@drewrobinson.com)

##Sales Manager Dashboard App

####Env:
- Node (v6.10.2)
- NPM (4.50)

####Install Dev:
- ```npm install```
- ```npm run start-dev```
- dev-url: http://localhost:8080/
- !!Note: App.js [ln:17] isDev {bool} disables data peristance for localhost:8080


####Run Tests (Jest w/Enzyme):
- run tests: ```npm run test```
- run and watch tests: ```npm run test:watch```
- run and update snapshots: ```npm run test:update```

####Production Build:
- ```npm run build```

####Implementation:
 - ReactJS/ES6
 - WebPack
 - Redux
 - Async networking with promises
 - Local Storage
 - Code Splitting
 - App can load on offline/flaky connections
    - Registers a Service Worker
    - Responds with a 200 when offline
 - Page load performance is fast
 - Site is progressively enhanced
    - Contains some content when JavaScript is not available
 - Network connection is secure
    - Uses HTTPS
    - Redirects HTTP traffic to HTTPS
 - User can be prompted to Add to Homescreen
    - Registers a Service Worker
    - Manifest exists
 - Design is mobile-friendly
 - @TODO Firebase Integration




[Dev Site](https://sales-manager-dashboard.firebaseapp.com/#/)

[Screenshot](https://www.screencast.com/t/j42B7MXxc)