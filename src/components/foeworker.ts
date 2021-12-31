// this works with quasar dev
// it fails with quasar build and quasar serve dist/spa --https --p 8080

/*
Uncaught DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope': The script at 'https://localhost:8080/js/js/vendor.a0e7f8f7.js' failed to load.
    at Object.o.f.i (https://localhost:8080/js/252.e776c77f.js:1:1696)
    at https://localhost:8080/js/252.e776c77f.js:1:1171
    at Array.reduce (<anonymous>)
    at Function.o.e (https://localhost:8080/js/252.e776c77f.js:1:1149)
    at Function.o.x (https://localhost:8080/js/252.e776c77f.js:1:1863)
    at https://localhost:8080/js/252.e776c77f.js:1:1884
    at https://localhost:8080/js/252.e776c77f.js:1:1889
*/

import { i18n } from 'boot/i18n';

self.onmessage = ({ data: { message } }) => {
  console.log('Worker received ', message);
  console.log(i18n.global.t('success'));

  postMessage({ response: 'Worker Done' });
};
