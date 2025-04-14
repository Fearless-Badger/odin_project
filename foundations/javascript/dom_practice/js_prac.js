const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = 'red';
container.appendChild(para);

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style.color = 'blue';
container.appendChild(header);


const big_guy = document.createElement("div");
big_guy.style.cssText = "border: 2px solid black; background-color: pink;";

const lil_guy_one = document.createElement("h1");
lil_guy_one.textContent = "I'm in a div";
big_guy.appendChild(lil_guy_one);

const lil_guy_two = document.createElement("p");
lil_guy_two.textContent = "ME TOO!";
big_guy.appendChild(lil_guy_two);


container.appendChild(big_guy);
