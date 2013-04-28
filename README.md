Soundex (v0.1.1)
======

Install: npm install soundex
    
This project is [Unlicensed](http://unlicense.org/ "Title").
In other words, I don't care what you do with it.
However, if you make something interesting, I would like to check it out.

Information:
------
Well, the wiki article probably says enough. Find it [here](http://en.wikipedia.org/wiki/Soundex "Title").

Usage:
------
    NOTE: For long words/strings, you can pass a second argument to scale the results.
          Example: Soundex('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum.',true);
          Returns: L6512534623532522336312252435453 // 32 chars long: ~~(length*2/4.4)

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
