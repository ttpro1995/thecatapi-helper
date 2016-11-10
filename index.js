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


var thecatapi = {}
thecatapi.linkbuilder = function(category, api_key, type, size){

  var baselink = "http://thecatapi.com/api/images/get?";
  var link = baselink;

  if (api_key !== undefined){
    link = link + "api_key="+api_key;
  }

  if (category !== undefined){
    link = link+ "&category="+category+"&";
  }

  if (type === undefined){
    type = "jpg";
  }

  if (size === undefined){
    size = "full";
  }

  var size_list = ["small", "med", "full"];
  if (!size_list.includes(size)){
    size = "full";
  }

  var type_list = ["jpg", "png", "gif"];
  if (!type_list.includes(type)){
    type = "jpg"
  }

  link = link +
  "type="+ type+
  "&size="+ size;

  return link;
}

module.exports = thecatapi;
