(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{YBdB:function(e,t,n){(function(e){!function(t,n){"use strict";if(!t.setImmediate){var a,o=1,s={},c=!1,i=t.document,r=Object.getPrototypeOf&&Object.getPrototypeOf(t);r=r&&r.setTimeout?r:t,"[object process]"==={}.toString.call(t.process)?a=function(t){e.nextTick(function(){u(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&u(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){u(e.data)},a=function(t){e.port2.postMessage(t)}}():i&&"onreadystatechange"in i.createElement("script")?function(){var e=i.documentElement;a=function(t){var n=i.createElement("script");n.onreadystatechange=function(){u(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():a=function(e){setTimeout(u,0,e)},r.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var c={callback:e,args:t};return s[o]=c,a(o),o++},r.clearImmediate=f}function f(e){delete s[e]}function u(e){if(c)setTimeout(u,0,e);else{var t=s[e];if(t){c=!0;try{!function(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(n,a)}}(t)}finally{f(e),c=!1}}}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)}).call(this,n("8oxB"))}}]);
//# sourceMappingURL=npm.setimmediate-376978f3ec3959a95df940f645e013d5.js.map