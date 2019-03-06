function addTodo (event) {
    event.preventDefault();
    let list = document.querySelector('ul');
    
    let item = document.createElement('li');
    let text = document.getElementById('item').value;
    item.innerText = text;
    item.addEventListener('click', toggleTodo);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'x';
    deleteButton.addEventListener('click', removeTodo);
    item.appendChild(deleteButton);

    
    
    list.appendChild(item);
    
    document.getElementById('item').value = '';
}

function removeTodo(event) {
    event.target.parentNode.remove()
}

function toggleTodo(event) {
    let value = event.target.getAttribute('aria-checked');
    if (value !== 'true') {
        event.target.setAttribute('aria-checked', 'true');
        let success = document.getElementById('completed-message');
        success.style = 'visibility: visible'
        setTimeout(function toggleTodo(event) {
            success.style = 'visibility: hidden'
        }, 2000);
    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
}

document
    .querySelector('button')
    .addEventListener('click', addTodo)


