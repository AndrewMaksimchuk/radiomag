let i = 0;
function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount", 500);
}
timedCount();

// setTimeout(cons, 2000);

// function cons() {
//   postMessage('Hello from web worker!');
// }
