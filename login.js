function Login() {
    let done=0;
    let usuario = document.getElementsByName('username')[0].value;
    usuario=usuario.toLowerCase();
    let email = document.getElementsByName('email')[0].value;
    email=email.toLowerCase();
    let senha= document.getElementsByName('password')[0].value;
    senha=senha.toLowerCase();
    if (usuario=="miih" && senha=="1234" && email=="miihmars14@gmail.com") {
      window.location="./index.html";
      done=1;
    }
    if (done==1) { alert("Confirmação de login com sucesso"); }

    if (usuario=="miih" != senha=="1234" != email=="miihmars14@gmail.com") {
        window.location="./index.html"
        done=0;
    }
    if(done==0){alert("Dados incorretos, tente novamente"); }
  }