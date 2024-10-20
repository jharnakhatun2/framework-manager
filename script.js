//select all elements
const btnAdd = document.querySelector('.btnAdd');
const btnRemove = document.querySelector('.btnRemove');
const input = document.querySelector('input');
const select = document.querySelector('select');

//Add option in select box
btnAdd.onclick = (e)=>{
    e.preventDefault();

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

btnRemove.onclick = (e)=>{
    e.preventDefault();

    // save selected option into variable
    let selectedOption = [];
    for(let i = 0; i < select.options.length; i++){
        selectedOption[i] = select.options[i].selected;
    }

    // remove option
    let index = select.options.length;
    while(index--){
        if(selectedOption[index]){
            select.remove(index);
        }
    }
}