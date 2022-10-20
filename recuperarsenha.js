document.querySelector('.eye').addEventListener('click', () => {
    let is = document.querySelector('#senha')

    if (is.getAttribute('type') == 'password') {
        is.setAttribute('type', 'text')
    } else {
        is.setAttribute('type', 'password')

    }
})

document.querySelector('.eye2').addEventListener('click', () => {
    let is = document.querySelector('#csenha')

    if (is.getAttribute('type') == 'password') {
        is.setAttribute('type', 'text')
    } else {
        is.setAttribute('type', 'password')

    }
})

listaUser = []
listaUser = JSON.parse(localStorage.getItem('listaUser'))

let login = document.querySelector('#usuario')
let email = document.querySelector('#email')

let senha = document.querySelector('#senha')
let csenha = document.querySelector('#csenha')

document.querySelector('#recuperar').addEventListener('click',valUsuario)

function valUsuario(){
    let valid;
    let arrValue;

    for(let i = 0; i < listaUser.length; i++){
        arrValue = i;
        valid = login.value == listaUser[i].usuario;
        break;
    }

    if(login.value == ''){
        alert`Campo vazio`
    }else{
        if(valid){
            valEmail(arrValue,email.value);

        }else{
            alert`Login incorreto ou não cadastrado`;
        }
    }


}

function valEmail(arrV,email){

    let valid;

    valid = email == listaUser[arrV].email;
 
    if(email == '' ){
        alert`Campo vazio`
    }else{
        if(valid == true){
            
            valSenha(senha.value,csenha.value,arrV);

        }else{
            alert`Login ou E-mail incorreto`
            console.log(valid,email,listaUser[arrV].email);
        }
    }
    }


function valSenha(senha,csenha,arrV){
    if((senha || csenha) != ''){

        if(senha == csenha){
            listaUser[arrV].senha = senha;
            localStorage.setItem('listaUser', JSON.stringify(listaUser));
            alert`Senha Alterada com sucesso`;
        }else{
            alert`Senhas não são iguais`;
        }

    }else{
        alert`Campos vazios`;
    }

}