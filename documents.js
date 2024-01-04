// const newDiv = document.createElement('div');
// newDiv.id = "dynamicDiv";
// newDiv.innerText = "hello,this is added dynamically";
// document.body.appendChild(newDiv) 

// task-1
console.log(document.body.firstElementChild)
console.log(document.body.children[1])
console.log(document.body.children[1].lastElementChild.innerHTML)

// task2-The sibling question
/*If elem – is an arbitrary DOM element node…

Is it true that elem.lastChild.nextSibling is always null?
Is it true that elem.children[0].previousSibling is always null ?
solution
Yes, true. The element elem.lastChild is always the last one, it has no nextSibling.
No, wrong, because elem.children[0] is the first child among elements. But there may exist non-element nodes before it. So previousSibling may be a text node.*/

// task- Search for elements
//1. The table with `id="age-table"`.
let table = document.getElementById('age-table')

//2 All label elements inside that table
table.getElementsByTagName('label')

//3.The first td in that table (with the word "Age")
table.rows[0].cells[0]
//or
table.querySelector('td')

//4.The form with the name "search"
let form = document.getElementsByName('search')[0]
//or
document.querySelector('form[name="search"]')

//5.The first input in that form.
form.getElementsByTagName('input')[0]
//or
form.querySelector('input')

//6.The last input in that form
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]


// instanceof to check the inheritance
alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true