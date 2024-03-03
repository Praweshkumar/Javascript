// DOM Manipulation

/*    (A).Insert elements ==> let el=document.createElement("div")..

1. node.append(el)  //adds at the end of node(inside)                 | appendchild(),removeChild() read MDN
2. node.prepend(el) //adds at the start of node(inside)
3. node.before(el)  //adds before the node(outside)
4. node.after(el)   //adds after the node(outside)

    (B).Delete Element..

1. node.remove() //removes the node    

*/

let newBtn=document.createElement("button");
console.log(newBtn);

newBtn.innerText="click me";

let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn)
// div.before(newBtn)
// div.after(newBtn);

let p=querySelector("p");
p.after(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHtml="<i> Hi,I am a new</i>";

document.querySelector("body").prepend(newHeading);

newHeading.remove();







