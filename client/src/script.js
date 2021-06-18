window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("chargement").classList.add("hidden");
    document.getElementById("contenu").classList.remove("hidden");
    const NodeRSA = require('node-rsa');

    const key = new NodeRSA({b: 512});

    key.generateKeyPair()

    const publicDer = key.exportKey('pkcs8-public');
    const privateDer = key.exportKey('pkcs1');

    document.getElementById("privateKey").value = privateDer
})
