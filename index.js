/*
  Soundex - v0.1.1 - Node.js & Browser
  By Louis T. <louist@ltdev.im>
*/
(function(Setup) {
  "use strict"
  Setup(function (str,scale) {
          var split = String(str).toUpperCase().replace(/[^A-Z]/g,'').split(''),
              map = {BFPV:1,CGJKQSXZ:2,DT:3,L:4,MN:5,R:6},
              keys = Object.keys(map).reverse(),
              build = [split.splice(0,1)[0]],
              slen = split.length,
              max = (scale?((max=~~(str.length*2/4.4))>3?max:3):3);
          for (var index = 0; build.length < max && index <= slen; index++) {
              keys.map(function(key) {
                  if (key.indexOf(split[index]) !== -1 && split[index+1] !== split[index]) {
                     build.push(map[key]);
                  };
              });
          };
          return build.join('')+(new Array(max).join('0')).slice(build.length);
  });
})((typeof exports!=='undefined'?function(fn){module.exports=fn;}:function(fn){this['Soundex']=fn;}));
