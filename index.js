// Your code goes here
document.addEventListener('DOMContentLoaded', function(event) {
  console.log('The dom has loaded');
  const pTag = event.target.querySelector('p#text');
  pTag.textContent = "This is really cool!";
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
