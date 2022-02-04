const list = document.querySelector('ul');
const input = document.querySelector('input');
const mybtn = document.querySelector('button');

mybtn.addEventListener('click',function () {
    
    let myItem = input.value;
    input.value = '';

    if (myItem != ""){
        console.log("successfully enter")
        let listItem = document.createElement('li');
        let listText = document.createElement('span');
        let listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listItem.appendChild(listBtn);

        listText.textContent = myItem;
        listBtn.textContent = 'Delete';

        list.appendChild(listItem);

        listBtn.addEventListener('click', function (e){
            list.removeChild(listItem);
        })
        input.focus();
    }
})