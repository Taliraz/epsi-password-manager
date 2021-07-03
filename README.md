# Prérequis
* Java 1.8
* Gradle 6.7
* Mysql
* npm

# Installation
* lancer la base de données MySQL
* Créer une base données "testdb" vide en utf8_general_ci

Se placer dans un dossier ou installer le projet
```bash 
git clone https://github.com/Taliraz/epsi-password-manager
cd epsi-password-manager/back-encrypt
./gradlew bootRun
cd  ../client
npm install
npm start
```

* Le password manager est accessible sur localhost:3000

# Explications

* L'ensemble des secrets sont chiffrés/déchiffrés côté client ce qui permt d'avoir des communications sécurisés et une base de données ne contenant que des secrets chiffrés.
* Le client chiffre les secrets avec le mot de passe utilisateur en chiffrement symétrique AES-256
* Le mot de passe utilisateur est hashé en base
