var request = require("request");
var fs = require("fs")
var microtime = require('microtime')


var thecatapi = {}
thecatapi.linkbuilder = function(category, api_key, type = "jpg", size = "full"){

  var baselink = "http://thecatapi.com/api/images/get";
  var link = baselink;

  if (api_key !== "undefined"){
    link = link + "?api_key="+api_key;
  }

  if (category !== "undefined"){
    link = link+ "&category="+category;
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
  "&type="+ type+
  "&size="+ size;

  return link;
}

module.exports = thecatapi;
