//console.log('hello')
let todoList=[];
displayList();
function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let inputDate=document.querySelector('#todo-date');
    let todoitem=inputElement.value;
    let todoDate=inputDate.value;
   // console.log(todoitem);
    todoList.push({item:todoitem,dueDate:todoDate});
    inputElement.value=' ';
    inputDate.value=' ';
    displayList();

}

function displayList(){
    let displayElement=document.querySelector('.todo-item');
    //displayElement.innerText='';
    let newHtml='';

    for(let i=0;i<todoList.length;i++){
        let item=todoList[i].item;
        let dueDate=todoList[i].dueDate;
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='delete-item' onclick="todoList.splice(${i},1);
         displayList();">Delete</button>
        `;
       // displayElement.innerText=displayElement.innerText+"\n"+todoList[i];
    }
    displayElement.innerHTML=newHtml;
}