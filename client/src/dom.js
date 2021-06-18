function navigate(path) {
    for (let element of document.getElementsByClassName("tab-pane")) {
        element.classList.remove("active");
        element.classList.remove("show");
    }
    for (let element of document.getElementsByClassName("nav-link")) {
        element.classList.remove("active");
    }
    document.getElementById(path + "Tab").classList.add("active")
    document.getElementById(path).classList.add("active")
    document.getElementById(path).classList.add("show")
}

function copier() {
    const copyText = document.getElementById("privateKey");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    let btnCopy = document.getElementById("btnCopy");
    btnCopy.classList.remove("btn-primary");
    btnCopy.classList.add('btn-success');
    btnCopy.innerText = "Clé copiée"
}

function checkChamps() {
    let valid = true
    let loginId = document.getElementById("loginId").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    const formLoginId = document.getElementById("formLoginId");
    const fbLoginId = document.getElementById("fbLoginId");
    const formConfirmPassword = document.getElementById("formConfirmPassword");
    const fbConfirmPassword = document.getElementById("fbConfirmPassword");
    const formPassword = document.getElementById("formPassword");
    const fbPassword = document.getElementById("fbPassword");
    const btnInscription = document.getElementById("btnInscription");
    fbLoginId.style.display = "block"
    fbConfirmPassword.style.display = "block"
    fbPassword.style.display = "block"
    if (loginId.length > 0) {
        formLoginId.classList.remove("has-danger")
        formLoginId.classList.add("has-success")
        fbLoginId.classList.remove("invalid-feedback")
        fbLoginId.classList.add("valid-feedback")
        fbLoginId.innerText = "Le champs est complété"
    } else {
        formLoginId.classList.remove("has-success")
        formLoginId.classList.add("has-danger")
        fbLoginId.classList.remove("valid-feedback")
        fbLoginId.classList.add("invalid-feedback")
        fbLoginId.innerText = "Ce champs doit être complété"
        valid = false;
    }
    if (passwordIsOk(password)) {
        formPassword.classList.remove("has-danger")
        formPassword.classList.add("has-success")
        fbPassword.classList.remove("invalid-feedback")
        fbPassword.classList.add("valid-feedback")
        fbPassword.innerText = "Le mot de passe est fort"
    } else {
        formPassword.classList.remove("has-success")
        formPassword.classList.add("has-danger")
        fbPassword.classList.remove("valid-feedback")
        fbPassword.classList.add("invalid-feedback")
        fbPassword.innerText = "Le mot de passe doit contenir au moins 8 caractère, une minuscule, une majuscule et un chiffre"
        valid = false;
    }
    if (password === confirmPassword) {
        formConfirmPassword.classList.remove("has-danger")
        formConfirmPassword.classList.add("has-success")
        fbConfirmPassword.classList.remove("invalid-feedback")
        fbConfirmPassword.classList.add("valid-feedback")
        fbConfirmPassword.innerText = "Les mots de passe correspondent"
    } else {
        formConfirmPassword.classList.remove("has-success")
        formConfirmPassword.classList.add("has-danger")
        fbConfirmPassword.classList.remove("valid-feedback")
        fbConfirmPassword.classList.add("invalid-feedback")
        fbConfirmPassword.innerText = "Les mots de passe ne correspondent pas"
        valid = false
    }
    if (valid) {
        btnInscription.classList.remove("disabled")
    } else {
        btnInscription.classList.add("disabled")
    }
}

function passwordIsOk(password) {
    return password.length >= 8 &&
        password.match(".*[A-Z].*") &&
        password.match(".*[a-z].*") &&
        password.match(".*[0-9].*");
}

function printPassword(number) {
    let input = document.getElementById("password" + number);
    let btnView = document.getElementById("btnView" + number);
    input.type = "text"
    let time = 15
    let save = btnView.innerHTML
    btnView.innerText = time;
    let timer = setInterval(() => {
        if (time > 0) {
            time--
            btnView.innerText = time;
        } else {
            btnView.innerHTML = save;
            input.type = "password"
            clearInterval(timer)
        }
    },1000)
}

function copyPassword(number) {
    const copyText = document.getElementById("password" + number);
    copyText.type = "text"
    copyText.select();
    copyText.setSelectionRange(0, 100);
    document.execCommand("copy");
    copyText.type = "password"
}

function edit(number){
    let btnView = document.getElementById("btnView" + number);
    let btnCopy = document.getElementById("btnCopy" + number);
    let btnEdit = document.getElementById("btnEdit" + number);
    let btnDelete = document.getElementById("btnDelete" + number);
    let domain = document.getElementById("domain" + number);
    let login  = document.getElementById("login" + number);
    let password = document.getElementById("password" + number);

    if (btnView.classList.contains("disabled")){
        btnView.classList.remove("disabled")
        btnCopy.classList.remove("disabled")
        btnDelete.classList.remove("disabled")
        btnEdit.innerHTML = '<i class="fas fa-pencil-alt"></i>'
        domain.readOnly = true
        login.readOnly = true
        password.readOnly = true
        password.type = "password"
    }else{
        btnView.classList.add("disabled")
        btnCopy.classList.add("disabled")
        btnDelete.classList.add("disabled")
        btnEdit.innerHTML = '<i class="fas fa-check"></i>'
        domain.readOnly = false
        login.readOnly = false
        password.readOnly = false
        password.type = "text"
    }
}
