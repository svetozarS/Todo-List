const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

// ----> Add todos <----
// function for todos with html template
const addTodos = todo => {
    const html = `
    <li class="list-group-item text-light d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="delete far fa-trash-alt"></i>
    </li>`;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    // check if the todo is not empty and reset the input field
    if(todo.length > 0){
        addTodos(todo);
        addForm.reset();
    }
});


// ----> Remove todos <----
// Event delegation! Target the trash icon witch is i tag and remove the whole li tag. 
list.addEventListener('click', e => {
    if(e.target.tagName === 'I'){
        e.target.parentElement.remove();
    }
});


// ----> Search todos (keyup event)<----
const search = document.querySelector('.search input');
const searchForm = document.querySelector('.search');

// match Funciton
const matchFn = value => {
    Array.from(list.children)
            .forEach(child => {
                if(!child.textContent.toLowerCase().includes(value)){
                    child.classList.add('class', 'hide-me');
                    // child.setAttribute('class', 'hide-me');                   
                };
                if(child.textContent.toLowerCase().includes(value)){
                    child.classList.remove('hide-me');
                    // child.classList.add('list-group-item', 'text-light', 'd-flex', 'justify-content-between', 'align-items-center');
                };
            });           
}

search.addEventListener('keyup', e => {
    e.preventDefault();

    const value = searchForm.search.value.toLowerCase().trim();
    matchFn(value);
});






