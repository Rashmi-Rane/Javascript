(function() {
   // your page initialization code here
   // the DOM will be available here
document.querySelector("#innerchild").addEventListener("click",function() {
  console.log("I am " + event.currentTarget.id);
});

document.querySelector("#child").addEventListener("click",function() {
  console.log("I am " + event.currentTarget.id);
}, true); // paased true to catch an event in capturing phase

document.querySelector("#parent").addEventListener("click",function() {
  console.log("I am " + event.currentTarget.id);
});
})();