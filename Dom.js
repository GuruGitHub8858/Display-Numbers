// let header = document.getElementById('header')
// console.log(header);
// let para = document.querySelector('.para')
// console.log(para)
// let list = document.querySelector('.list')
// console.log(list);
// let pcontent = para.textContent;
// console.log(pcontent);
// let div_content = list.innerHTML;
// console.log(div_content);
// let newpara = document.getElementById('newPara').textContent = 'guru'

//inline event and event handelers
let pass = document.getElementById("Password");
pass.onfocus = function () {
    pass.style.backgroundColor = 'yellow';
};
pass.onblur = function () {
    pass.style.backgroundColor = 'white';
};
let passs = document.getElementById("email");
passs.onfocus = function () {
    passs.style.backgroundColor = 'yellow';
};
passs.onblur = function () {
    passs.style.backgroundColor = 'white';
};

let head = document.querySelector('#heading')
head.onmouseover = function () {
    head.style.color = 'red';
}
head.onmouseout = function () {
    head.style.color = 'black';
}

//addeventlistener

function alertDisplay() {
    alert('submitted')
}


document.getElementById('email')
    .addEventListener('focus', function () {
        this.style.backgroundColor = 'blue';
    })
document.getElementById('email')
    .addEventListener('blur', function () {
        this.style.backgroundColor = 'white';
    })
document.addEventListener('DOMContentLoaded', function () {
    let pass = document.getElementById('cli')
    let output = document.getElementById('output')
    pass.addEventListener('click', function () {
        let number = "";
        for (let i = 0; i < 10; i++) {
            number += i + " ";
        }
        output.textContent = number;
    });
});
document.getElementById('header')
    .addEventListener('mouseover', function () {
        this.style.backgroundColor = 'pink';
        this.style.width = 'fitContent';

    });
