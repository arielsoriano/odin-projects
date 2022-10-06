// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// 1
const p = document.createElement('p');
//p.classList.add('p');
p.textContent = "Hey I'm red";
p.style.color = "red";
container.appendChild(p);

// 2
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

// 3
const content2 = document.createElement('div');
content2.style.background = "pink";
content2.style.border = "solid";
content2.style.borderColor = "black";


const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
content2.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
content2.appendChild(p2);

container.appendChild(content2);