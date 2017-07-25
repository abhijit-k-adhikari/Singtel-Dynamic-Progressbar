/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'lib/@angular/core/bundles/core.umd.min.js',
      '@angular/common': 'lib/@angular/common/bundles/common.umd.min.js',
      '@angular/compiler': 'lib/@angular/compiler/bundles/compiler.umd.min.js',
      '@angular/platform-browser': 'lib/@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser-dynamic': 'lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/http': 'lib/@angular/http/bundles/http.umd.min.js',
      '@angular/router': 'lib/@angular/router/bundles/router.umd.min.js',
      '@angular/forms': 'lib/@angular/forms/bundles/forms.umd.min.js',
      // other libraries
      'rxjs': 'lib/rxjs',
      'angular-in-memory-web-api': 'lib/angular-in-memory-web-api',        
      'ng2-nvd3': 'lib/ng2-nvd3/build'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: 'main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'ng2-nvd3': { main: 'index.js', defaultExtension: "js" }        
    }
  });
})(this);
