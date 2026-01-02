const Todo = [{
    name : 'Make Roti',
    dueDate : '2025-12-01'},
    {
        name : 'Make sabji',
        dueDate : '2025-12-01'
}];

render();

function render() {
    let todoListHtml = '';

    for (let i = 0; i < Todo.length; i++) {
        const todobject = Todo[i];
        //const name = todobject.name;
        //const dueDate = todobject.dueDate;
        const {name,dueDate} = todobject;
        const html = `<p>${name} ${dueDate}
        <button onclick ="
        
        Todo.splice(${i},1);
        render();
        ">Delete</button> </p>`;
        todoListHtml += html;
    }

    console.log(todoListHtml);

    document.querySelector('.Js-To').innerHTML = todoListHtml;
}
function addTodo() {
    const inputElement = document.querySelector('.Todo');
    const name = inputElement.value;
    

    const dateInputElement = document.querySelector('.date');
    const date = dateInputElement.value;
    Todo.push(name); 
    console.log(Todo);  

    inputElement.value = '';
    render();
}
