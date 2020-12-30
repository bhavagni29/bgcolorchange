let btnred = document.querySelector("#btn-red");
let btngreen = document.querySelector("#btn-green");
let btnblue = document.querySelector("#btn-blue");
let dropdown = document.querySelector("select");
btnred.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
})
btngreen.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
})
btnblue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
})
dropdown.addEventListener('change', function()  {
    const color = this.value;
    switch(color){
        case 'default':
            document.body.style.backgroundColor = 'black';
            break;
            case 'green':
            document.body.style.backgroundColor = 'green';
            break;
            case 'blue':
            document.body.style.backgroundColor = 'blue';
            break;
            case 'yellow':
            document.body.style.backgroundColor = 'yellow';
            break;

    }


    })
    



