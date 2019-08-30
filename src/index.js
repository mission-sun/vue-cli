import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import printMe from "./print.js";
import Vue from "vue";
import App from '../app.vue';

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  btn.innerHTML = "Click me and check !";
  btn.onclick = printMe;
  element.appendChild(btn);

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.classList.add("hello");
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
  return element;
}

// document.body.appendChild(component());
console.log("开发环境", process);
console.log("开发环境", process.env.NODE_ENV);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}

// var vm = new Vue({
//   el: "#app",
//   data: {
//     msg: "hello vue"
//   }
// });

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
