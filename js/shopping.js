const ul = document.querySelector('ul');
const input = document.querySelector('input');
const addBtn = document.querySelector('button');

addBtn.addEventListener('click', () => {
    let textValue = input.value;
    ul.appendChild(createNewItem(textValue));
    input.value = '';
    input.focus();
});

function createNewItem(textContent) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let button = document.createElement('button');

    button.addEventListener('click', () => {
        li.remove();
    });

    span.textContent = textContent;
    button.textContent = 'Delete';
    li.appendChild(span);
    li.appendChild(button);

    return li;
}