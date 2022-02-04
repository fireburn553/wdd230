const list = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click' , function (){
	let myItem = input.value;

    if (myItem !=""){
        let listItem = document.createElement('li');
        let delBtn = document.createElement('button');

        listItem.textContent = myItem;
        delBtn.textContent = "\u274C";

        listItem.appendChild(delBtn);
        list.appendChild(listItem);

        delBtn.addEventListener('click', function (){
            list.removeChild(listItem);
        })
    }

    input.focus();
    input.value = '';
})
