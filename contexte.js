// CODE AKIN // 


// Code pour le contexte aléatoire // 
var btnedit = document.getElementById("btnedit");
var btnalea = document.getElementById("btnalea");



function aleatoire() {
    btnedit.style.display = "none"
    btnalea.style.display = "none";

    var nombre_contextes = 4;
    var nombre_aleatoire = Math.random();
    var numero = Math.round((nombre_contextes - 1) * nombre_aleatoire) + 1;

    contextes = new Array;

    contextes[1] = "Contexte n° 01";
    contextes[2] = "Contexte n° 02";
    contextes[3] = "Contexte n° 03";
    contextes[4] = "Contexte n° 04";


    document.getElementById("contexte_aleatoire").innerHTML = "<b>Le contexte : </b>" + contextes[numero];

}



// Code pour rédiger le contexte //

function ecritContext() {
    btnedit.style.display = "none";
    btnalea.style.display = "none";

    //champ text
    var inputed = document.createElement("INPUT");
    inputed.setAttribute("type", "text");
    inputed.setAttribute("id", "myContexte");
    inputed.setAttribute("placeholder", "Ecrit ton contexte ici !");
    document.body.appendChild(inputed);
    //button d'envoi
    var button = document.createElement("BUTTON");
    button.setAttribute("type", "button");
    button.setAttribute("id", "btnCxt");
    button.innerHTML = "Envoyer";
    button.onclick = function (e) { getInputValue(); };
    document.body.appendChild(button);



    // récuperation des données et generation des
    function getInputValue() {
        // selection de la valeur du champ texte
        let inputVal = inputed.value;
        // Affichage de la valeur 
        let newContexte = new Contexte(inputVal);
        alert("Contexte : " + newContexte.texte);
        var article = document.createElement("article");
        document.body.appendChild(article);
        article.innerHTML = "<b>Le contexte :</b> " + newContexte.texte;

        myContexte.style.display = "none";
        btnCxt.style.display = "none";


    }

    class Contexte {
        constructor(texte) {
            this.texte = texte;
        }
    }

}




// FIN CODE AKIN// 





