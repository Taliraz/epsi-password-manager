window.addEventListener('DOMContentLoaded', () => {
    const NodeRSA = require('node-rsa');

    const key = new NodeRSA({b: 512});

    key.generateKeyPair()

    const publicDer = key.exportKey('pkcs8-public');
    const privateDer = key.exportKey('pkcs1');

    document.getElementsByName("nav-link").forEach((element) => {
        element.addEventListener("click",() => {
            alert(element.href)
        })
    })

    //document.getElementById("key").innerText = privateDer
})
