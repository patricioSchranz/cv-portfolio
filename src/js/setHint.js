/* ------------

Set the message when hover over the arrow

----------------------------------------------- */

const theHintArrow = document.querySelector('.scroll-info')

console.log(theHintArrow)

"ontouchstart" in document.documentElement 
? theHintArrow.dataset.hint = ""
: theHintArrow.dataset.hint = "Benutze dein Mauswheel oder die Pfeiltasten"

// if ("ontouchstart" in document.documentElement)
// {

//     document.write("your device is a touch screen device.");
// }
// else
// {
//  document.write("your device is NOT a touch device");
// }