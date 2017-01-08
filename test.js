//
// MIT License
//
// Copyright (c) 2016 Thai Thien
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
//

var thecatapi = require('./index.js')
const assert = require('assert')

// just an simple link with no api, no argument
var simpleLink = thecatapi.linkbuilder()
console.log(simpleLink)
var simpleLink2 = thecatapi.linkbuilder(null, 'MTM1MDM1')
console.log(simpleLink2)

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

assert.equal(simpleLink, 'http://thecatapi.com/api/images/get?type=jpg&size=full')
assert.equal(normalLink, 'http://thecatapi.com/api/images/get?type=jpg&size=full&api_key=MTM1MDM1&category=caturday')
assert.equal(customizeLink1, 'http://thecatapi.com/api/images/get?type=jpg&size=full&api_key=MTM1MDM1&category=caturday')
assert.equal(customizeLink2, 'http://thecatapi.com/api/images/get?type=png&size=med&api_key=MTM1MDM1&category=caturday')
assert.equal(customizeLink3, 'http://thecatapi.com/api/images/get?type=gif&size=small&api_key=MTM1MDM1&category=caturday')

/*
http://thecatapi.com/api/images/get?type=jpg&size=full
http://thecatapi.com/api/images/get?api_key=MTM1MDM1&category=caturday&type=jpg&size=full
http://thecatapi.com/api/images/get?api_key=MTM1MDM1&category=caturday&type=jpg&size=full
http://thecatapi.com/api/images/get?api_key=MTM1MDM1&category=caturday&type=png&size=med
http://thecatapi.com/api/images/get?api_key=MTM1MDM1&category=caturday&type=gif&size=small
*/
