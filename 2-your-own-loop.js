// Your code here.
function loop( number,tester,change,action) {
while(tester(number)) {
 action(number)
 number = change(number)
}
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1