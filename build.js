!function(a){function b(a,b,c){a in i||(i[a]={name:a,declarative:!0,deps:b,declare:c,normalizedDeps:b})}function c(a){return m[a]||(m[a]={name:a,dependencies:[],exports:{},importers:[]})}function d(b){if(!b.module){var e=b.module=c(b.name),f=b.module.exports,g=b.declare.call(a,function(a,b){if(e.locked=!0,"object"==typeof a)for(var c in a)f[c]=a[c];else f[a]=b;for(var d=0,g=e.importers.length;g>d;d++){var h=e.importers[d];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===e&&h.setters[i](f)}return e.locked=!1,b},b.name);e.setters=g.setters,e.execute=g.execute;for(var j=0,k=b.normalizedDeps.length;k>j;j++){var l,n=b.normalizedDeps[j],o=i[n],p=m[n];p?l=p.exports:o&&!o.declarative?l=o.esModule:o?(d(o),p=o.module,l=p.exports):l=h(n),p&&p.importers?(p.importers.push(e),e.dependencies.push(p)):e.dependencies.push(null),e.setters[j]&&e.setters[j](l)}}}function e(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(k)for(var d in b)"default"!==d&&f(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,l(c,"__useDefault",{value:!0}),c}function f(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&l(a,c,d)}catch(d){return a[c]=b[c],!1}}function g(b,c){var d=i[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var k=d.normalizedDeps[e];-1==j.call(c,k)&&(i[k]?g(k,c):h(k))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function h(a){if(o[a])return o[a];if("@node/"==a.substr(0,6))return o[a]=e(n(a.substr(6)));var b=i[a];if(!b)throw"Module "+a+" not present.";return d(i[a]),g(a,[]),i[a]=void 0,b.declarative&&l(b.module.exports,"__esModule",{value:!0}),o[a]=b.declarative?b.module.exports:b.esModule}var i={},j=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},k=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){k=!1}var l;!function(){try{Object.defineProperty({},"a",{})&&(l=Object.defineProperty)}catch(a){l=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var m={},n="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,o={"@empty":{}};return function(a,c,d,f){return function(g){g(function(g){for(var i=0;i<c.length;i++)(function(a,b){b&&b.__esModule?o[a]=b:o[a]=e(b)})(c[i],arguments[i]);f({register:b});var j=h(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)h(a[i]);return d?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],[],!1,function(a){this.require,this.exports,this.module;a.register("2",[],function(a){"use strict";function b(){console.log("test")}return a("test",b),{setters:[],execute:function(){}}}),a.register("1",["2"],function(a){"use strict";var b;return{setters:[function(a){b=a.test}],execute:function(){b()}}})})(function(a){a()});
//# sourceMappingURL=build.js.map