var json=require("../json/json-load-test.json")
module.exports=function(){
  let greet = document.createElement('div');
  greet.textContent = "Hello!I'm a example of webpack!";
  var json_greet=document.createElement("div");
  greet.appendChild(json_greet);
  json_greet.textContent=json.content
  return greet;
}