# TheCatAPI helper
[![Build Status](https://travis-ci.org/ttpro1995/thecatapi-helper.svg?branch=master)](https://travis-ci.org/ttpro1995/thecatapi-helper)


This node module provides you some help so you can enjoy cats.

## Installation

```
npm install thecatapi-helper --save
```

### linkbuilder

linkbuilder(category, api_key, type = "jpg", size = "full")

**category**
See full list of category here: http://thecatapi.com/api/categories/list <br>
example: "boxes" to show cat in the box

**api_key**
Get you API key here: http://thecatapi.com/api-key-registration.html

**type**
Type of file which you would like TheCatAPI to give you. ("png", "jpg", "gif")

**size**
File size. ("small", "med", "full").


**Example**
```javascript
var thecatapi = require('thecatapi-helper')

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
```
### Disclaimer:
I am not author nor partner of http://thecatapi.com/ ,  but a cat lover.
