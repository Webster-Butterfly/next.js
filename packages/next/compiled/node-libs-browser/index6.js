module.exports=(()=>{var r={591:(r,e,t)=>{var o=t(605);var a=t(835);var i=r.exports;for(var s in o){if(o.hasOwnProperty(s))i[s]=o[s]}i.request=function(r,e){r=validateParams(r);return o.request.call(this,r,e)};i.get=function(r,e){r=validateParams(r);return o.get.call(this,r,e)};function validateParams(r){if(typeof r==="string"){r=a.parse(r)}if(!r.protocol){r.protocol="https:"}if(r.protocol!=="https:"){throw new Error('Protocol "'+r.protocol+'" not supported. Expected "https:"')}return r}},605:r=>{"use strict";r.exports=require("http")},835:r=>{"use strict";r.exports=require("url")}};var e={};function __nccwpck_require__(t){if(e[t]){return e[t].exports}var o=e[t]={exports:{}};var a=true;try{r[t](o,o.exports,__nccwpck_require__);a=false}finally{if(a)delete e[t]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(591)})();