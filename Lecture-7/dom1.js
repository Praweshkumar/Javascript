                 // (DOM-part2)
/*
// Dom manipulation..//

Attributes...  1. getAttribute(attr) //to get the attribute value
               2. setAttribute(attr,value)  //to set the attribute val th

Style          1.node.style
*/

// 1.getAttribute(attr)....

// let div=document.querySelector("div");
// console.log(div);

// let name=div.getAttribute("name");
// console.log(name);

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));


//2.setattribute(attr,value).....

let para=document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

//3.node.style...

let div=document.querySelector("div");

div.style.backgroundColor="green"
// div.style.visibility="hidden";

div.style.fontSize="20px";

div.innerText="hello";















