let aes256 = require('aes256');
let sha256 = require('js-sha256').sha256;
let fetch = require('fetch');


//FAKE BDD
let secretList = []


let secret = {
    id: 1,
    login: "taliraz",
    domain: "google.com",
    secret: "test"
}
//FAKE BDD



/*let key = 'my passphrase';
let plaintext = 'my plaintext message';
let buffer = Buffer.from(plaintext);

let encryptedPlainText = aes256.encrypt(key, plaintext);
let decryptedPlainText = aes256.decrypt(key, encryptedPlainText);
// plaintext === decryptedPlainText

let encryptedBuffer = aes256.encrypt(key, buffer);
let decryptedBuffer = aes256.decrypt(key, encryptedBuffer);
*/

document.getElementById("btnConnect").addEventListener("click",connect);
document.getElementById("addpassword").addEventListener("click",addSecret);

function connect(){
    console.log("test1")
    let pwd = document.getElementById("pwd");
    let login = document.getElementById("loginConnect")
    let password = document.getElementById("passwordConnect")
    let authentication = document.getElementById("authentication");
    let authentifie = document.getElementById("authentifie");
    
    pwd.innerText=password.value;
    authentication.classList.add("hidden")
    authentifie.classList.remove("hidden")
    printSecrets();
}

function register(){
    let pwd = document.getElementById("pwd");
    let login = document.getElementById("password")
    let password = document.getElementById("passwordConnect")
    let authentication = document.getElementById("authentication");
    let authentifie = document.getElementById("authentifie");
    
    pwd.innerText=password.value;
    authentication.classList.add("hidden")
    authentifie.classList.remove("hidden")
}

function addSecret(){
    let pwd = document.getElementById('pwd').innerText;
    let secret = document.getElementById('passwordAdd').value;
    let login = document.getElementById('loginAdd').value;
    let domain = document.getElementById('domainAdd').value;

    secretList.push({
        id: 1,
        login: login,
        domain: domain,
        secret: aes256.encrypt(pwd, secret)
    })

    printSecrets()

}

function printSecrets(){
    let pwd = document.getElementById("pwd").innerText;
    let tbody = document.getElementById("secretList")
    tbody.innerHTML="";
    secretList.forEach((secret) => {
        let decryptedPlainText = aes256.decrypt(pwd, secret.secret);
        let tr = document.createElement("tr");
        tr.innerHTML = '<td><input class="form-control" readonly id="domain'+secret.id+'" type="text" value="'+secret.domain+'"></td>'+
        '<td><input class="form-control" readonly id="login'+secret.id+'" type="text" value="'+secret.login+'"></td>'+
        '<td><input class="form-control" readonly id="password'+secret.id+'" type="password" value="'+decryptedPlainText+'"></td>' +
        '<td> <button class="btn btn-dark" id="btnView'+secret.id+'" onclick="printPassword('+secret.id+')"><i class="fas fa-eye"></i> </button> </td>'+
        '<td><button class="btn btn-success" id="btnCopy'+secret.id+'" onclick="copyPassword('+secret.id+')"><i class="fas fa-copy"></i></button> </td>'+
        '<td><button class="btn btn-warning" id="btnEdit'+secret.id+'" onclick="edit('+secret.id+')"><i class="fas fa-pencil-alt"></i></button></td>'+
        '<td><button class="btn btn-danger" id="btnDelete'+secret.id+'"><i class="fas fa-trash-alt"></i></button></td>'
        tbody.appendChild(tr);
    })
}