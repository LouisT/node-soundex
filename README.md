Soundex (v0.1.0)
======

Install: npm install vidinfo
    
This project is [Unlicensed](http://unlicense.org/ "Title").
In other words, I don't care what you do with it.
However, if you make something interesting, I would like to check it out.

Information:
------
Well, the wiki article probably says enough. Find it [here](http://en.wikipedia.org/wiki/Soundex "Title").

Usage:
------
    Node.js:
       var Soundex = require('soundex');
       console.log('Euler: '+Soundex('Euler')+' - Ellery: '+Soundex('Ellery'));
       console.log('Hilbert: '+Soundex('Hilbert')+' - Heilbronn: '+Soundex('Heilbronn'));
       console.log('Lukasiewicz: '+Soundex('Lukasiewicz')+' - Lissajous: '+Soundex('Lissajous'));

    Browser:
       <script src="./soundex.js"></script>
       <script>
          alert('Euler: '+Soundex('Euler')+' - Ellery: '+Soundex('Ellery'));
          alert('Hilbert: '+Soundex('Hilbert')+' - Heilbronn: '+Soundex('Heilbronn'));
          alert('Lukasiewicz: '+Soundex('Lukasiewicz')+' - Lissajous: '+Soundex('Lissajous'));
       </script>

