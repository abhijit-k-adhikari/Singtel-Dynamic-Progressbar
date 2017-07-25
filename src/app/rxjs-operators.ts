// import "rxjs/Rx"; // adds ALL RxJS statics & operators to Observable

// see node_module/rxjs/Rxjs.js
// import just the rxjs statics and operators we need for THIS app.

// statics
import "rxjs/add/observable/throw";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";

// operators
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/do";
import "rxjs/add/observable/timer";
