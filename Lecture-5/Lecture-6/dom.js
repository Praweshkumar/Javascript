/*  Window object ==> The window object represents an open window in a browser.It is browser's object(not javascript's)
                      & is automatically created by browser

  1. It is global object with lots of properties & methods.

*/

console.log("hello");
console.log("window");
// window.console.log("hello prawesh");
// window.alert("error");
 
                         // (DOM part-1)//
                         
/* DOM--> when a web page is loaded,the browser creates a document object Model(DOM) of the page.
     //tree like structure every objects are node in DOM

                     window  --(node)                                 //hierarchical datastructure..//
                        |
                     document  
                        |
                         html
                        /     \
                       /       \
                      /         \
                    head         body 
                  /| \  \           |  \ 
                 / |  \  \          |   \
                /  |    \  \        |    \
          meta meta title link      |     script
                                    div 
                                  / | \  \ 
                                 /  |  \  \
                                /   |   \  \ 
                            img     h1   p div
                        
*/


console.dir(window);
console.dir(window.document);
console.dir(document.body)
// document.body.childNodes[3].innerText="prawesh";

/*                           //..DOM manipulation...//

1. Selecting with id ==> document.getElementByid("myid");
2. Selecting with class ==> document.getElementByclassName("myClass");
3. Selecting with tag ==> document.getElementBytagName("p");

*/

//  let heading=document.getElementById("heading");
// console.dir(heading);

// let headings=document.getElementsByClassName("heading-class")
// console.dir(headings);
// console.log(headings);

// let button =document.getElementById("myId");
// console.dir(button);

// let headings=document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let parahas=document.getElementsByTagName("p")
// console.dir(parahas);

/*
// DOM Manipulation //
 Query selector===> (1.)document.queryselector("myId/myClass/tag")
                    //returns first element
                    (2.) document.querySelectorAll("myId/myClass/tag")
                    //returns a  nodelist      
  **properties**...
  1.tagName :return tag for element nodes
  2.InnerText :returns the text content of the element and all its children
  3.innerHtml :returns the plain text or HTML contents in the element
  4.textContent :returns textual content even for hidden elements
  homework:(firstchild,lastchild,children read in mdn and also text nodes,comments nodes,element nodes)
*/

// let firstEl=document.querySelector("p");
// console.dir(firstEl);

// let allEl=document.querySelectorAll("p");
// console.dir(allEl);

// let Firstel=document.querySelector(".myClass");
// console.dir(Firstel)

// let Allel=document.querySelectorAll(".myClass");
// console.dir(Allel);

// console.dir(document.body.firstChild);

// properties....

let div=document.querySelector("div");
console.dir(div);

let heading=document.querySelector("h1");



