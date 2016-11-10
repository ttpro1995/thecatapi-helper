var thecatapi = require('./index.js')

// just an simple link with no api, no argument
var simple_link = thecatapi.linkbuilder();
console.log(simple_link);

// with category and api
var normal_link = thecatapi.linkbuilder('caturday','MTM1MDM1');
console.log(normal_link);

// link with category, api, file type ,size,
var very_customize_link1 = thecatapi.linkbuilder('caturday','MTM1MDM1','jpg','full');
var very_customize_link2 = thecatapi.linkbuilder('caturday','MTM1MDM1','png','med');
var very_customize_link3 = thecatapi.linkbuilder('caturday','MTM1MDM1','gif','small');
console.log(very_customize_link1);
console.log(very_customize_link2);
console.log(very_customize_link3);
