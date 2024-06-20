const link = document.querySelector('a');
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector('section');
const para = document.createElement('p');
const linkPara = document.querySelector('p');
const text = document.createTextNode(" — the premier source for web development knowledge.");
para.textContent = "Hope you enjoy the ride!";

sect.appendChild(para);
linkPara.appendChild(text);
sect.appendChild(linkPara);
para.setAttribute("class", "highlight");