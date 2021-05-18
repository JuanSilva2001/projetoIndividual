function verificaApelido(Apelido){
    if(Apelido.length<5){
        alert('Apelido curto demais');
        return false;
    }
    return true;
}

function verificaEmail(Email){
    if(Email.length<6 || Email.indexOf('@')<0 || Email.indexOf('.')<0){
        alert('Email Incorreto');
        return false;
    }
    return true;
}

function verificaSenha(Senha){
    if(Senha.length<8 || Senha.length>15){
        alert('Senha tem que ter no minimo 8 digitos e no maximo 15');
        return false;
    }
    return true;
}

function confirmaSenha(confiSenha, Senha){
    if(confiSenha != Senha){
        alert('Senhas diferentes');
        return false;
    }
    return true;
}