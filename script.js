function validateForm() {
    let nome = document.forms["myForm"]["nome"].value;
    let email = document.forms["myForm"]["email"].value;
    let msg = document.forms["myForm"]["msg"].value;
    if (nome == "" || email == "" || msg == "") {
        alert("Preencha todos os campos do formulário!");
        return false;
    }
    alert("Sucesso");
    window.location.href = (proxpath);
    return true; 
    
}

function caixas() {

const botao = document.getElementById ('caixas');
const caixao = document.getElementById ('posicao');

const container1 = document.createElement('div');
container1.className = "caixote";
container1.textContent = "Desenvolvimento de Software";

const container2 = document.createElement('div');
container1.className = "caixote";
container1.textContent = "Consultoria em Tecnologia";

caixao.appendChild(container1);
caixao.appendChild(container2);

}
