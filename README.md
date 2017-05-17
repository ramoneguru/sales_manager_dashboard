Author: Drew Robinson (hello@drewrobinson.com)

Sales Manager Dashboard App

Implementation:
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
 - @TODO Evaluate Jest w/Enzyme vs. Mocha w/Enzyme for unit tests


Screencast: https://www.screencast.com/t/j42B7MXxc

Prototype URL: https://sales-manager-dashboard.firebaseapp.com/#/
