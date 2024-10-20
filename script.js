//select all elements
const btnAdd = document.querySelector('.btnAdd');
const btnRemove = document.querySelector('.btnRemove');
const input = document.querySelector('input');
const select = document.querySelector('select');

//Add option in select box
btnAdd.onclick = (e)=>{
    // input validation
    if(input.value === ""){
        alert("Please enter Framework name!");
        return;
    }
    //create option with input value
    const option = new Option(input.value, input.value);
    select.add(option);

    //reset input
    input.value = "";
    input.focus();
}