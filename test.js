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
