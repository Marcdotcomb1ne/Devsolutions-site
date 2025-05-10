function validateForm() {
    let nome = document.forms["myForm"]["nome"].value;
    let email = document.forms["myForm"]["email"].value;
    let msg = document.forms["myForm"]["msg"].value;
    if (nome == "" || email == "" || msg == "") {
        alert("Preencha todos os campos do formulário!");
        return false;
    }
    alert("Sucesso");
    return true; 
    
}
