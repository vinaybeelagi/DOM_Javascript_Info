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