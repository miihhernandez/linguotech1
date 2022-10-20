// if (sessionStorage.username) {
//   document.getElementById("username").value = sessionStorage.username;
// }

// if (sessionStorage.email) {
//   document.getElementById("email").value = sessionStorage.email;
// }

// if (sessionStorage.password) {
//   document.getElementById("password").value = sessionStorage.password;
// }

let salvarData = function() {


  let inputLogin = $("username", "email");
  let inputSenha = $("password");
  
  listaUser = [];
  listaUser = JSON.parse(localStorage.getItem("listaUser"))
  
  $("username").click(()=>{
      
    let valid;
    let arrValue;
  
  for(let i = 0; i < listaUser.length; i++){
    arrValue = i;
    valid = inputLogin.val() == listaUser[i].usuario;
    
      if(valid==true){
        break
      }
        }
    
      if(valid){
        validaSenha(inputSenha.val(),arrValue)
    
      }else{
      alert`Login incorreto ou não cadastrado`
      }
  })
    
    function validaSenha(senha,arrV) {
    
        let valid;
    
        valid = senha == listaUser[arrV].senha;
    
        if(valid){
            alert`Você será redirecionado`
    
        }else{
            alert`Login ou senha incorreto`
        }
     
    }
    
    
    
    let checkemail = () =>{
    
        validUsuario = $("username")
        
        if(validUsuario.val().indexOf('@') == -1 || validUsuario.val().indexOf('.com') == -1){
            validUsuario.attr('style', 'color:red');
            validUsuario.attr('style', 'border-color:red');
            $("#lbusuario").attr('style', 'color:red');
        }else{
            validUsuario.attr('style', 'color:green');
            validUsuario.attr('style', 'border-color:green');
            $("#lbusuario").attr('style', 'color:green');
        }
    }
}

document.onchange = salvarData;