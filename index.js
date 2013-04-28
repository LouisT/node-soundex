/*
  Soundex - v0.1.0 - Node.js & Browser
  By Louis T. <louist@ltdev.im>
*/
(function(Setup) {
  "use strict"
  Setup(function (str) {
          var split = String(str).toUpperCase().replace(/[^A-Z]/g,'').split(''),
              map = {BFPV:1,CGJKQSXZ:2,DT:3,L:4,MN:5,R:6},
              build = [split.splice(0,1)[0]],
              slen = split.length;
          for (var index = 0; index <= slen && build.length <= 3; index++) {
              Object.keys(map).reverse().map(function(key) {
                  if (key.indexOf(split[index]) !== -1 && split[index+1] !== split[index]) {
                     build.push(map[key]);
                  };
              });
          };
          return build.join('')+('0000').slice(build.length);
  });
})((typeof exports!=='undefined'?function(fn){module.exports=fn;}:function(fn){this['Soundex']=fn;}));
