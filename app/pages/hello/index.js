var json=require("../json/json-load-test.json")
import content2 from './content2.js'

module.exports=function(){
  let greet = document.createElement('div');
  greet.textContent = "Hello!I'm a example of webpack!";
  var json_greet=document.createElement("div");
  greet.appendChild(json_greet);
  json_greet.textContent=json.content//使用json loader
  var html_greet=document.createElement("div");
  html_greet.innerHTML=content2();
  greet.appendChild(html_greet)
  return greet;
}