# TheCatAPI helper
[![Build Status](https://travis-ci.org/ttpro1995/thecatapi-helper.svg?branch=master)](https://travis-ci.org/ttpro1995/thecatapi-helper)
[![npm version](https://badge.fury.io/js/thecatapi-helper.svg)](https://badge.fury.io/js/thecatapi-helper)
[![saythanks](https://img.shields.io/badge/say%20thank-!-blue.svg)](https://saythanks.io/to/ttpro1995)


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
var simpleLink = thecatapi.linkbuilder()
console.log(simpleLink)

// with category and api
var normalLink = thecatapi.linkbuilder('caturday', 'MTM1MDM1')
console.log(normalLink)

// link with category, api, file type ,size,
var customizeLink1 = thecatapi.linkbuilder('caturday', 'MTM1MDM1', 'jpg', 'full')
var customizeLink2 = thecatapi.linkbuilder('caturday', 'MTM1MDM1', 'png', 'med')
var customizeLink3 = thecatapi.linkbuilder('caturday', 'MTM1MDM1', 'gif', 'small')
console.log(customizeLink1)
console.log(customizeLink2)
console.log(customizeLink3)

```
### Disclaimer:
I am not author nor partner of http://thecatapi.com/ ,  but a cat lover.
