function affichagetab(){
    document.write("<table border=2px width=30%>");
    for(let i=0; i<=5; i++){ 
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function affichagetab2(){
    var X=prompt("Combien de lignes?");
    document.write("<table border=2px width=30%>");
    for(let i=0; i<=X-1; i++){ 
        document.write("<tr><td>"+(i+1)+"</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function seconnecter(){
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")
    {document.write("Bienvenue : "+login);}
    else {alert("Accès refusé")}
}

function login(){
    var login=document.getElementById("t1").value;
    var mdp=document.getElementById("t2").value;
    if (login=="admin" && mdp=="admin")
        {window.location.href="yes.html"}
    else {window.location.href="non.html"}
}

function Annuler()
{window.location.href="tpjs4.html"}

function cdc(){
    var chaine=prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient "+chaine.length+" caracteres"+"<br>");
    document.write("La première lettre est "+chaine.substr(0,1)+"<br>");
}

function seconnecter2()
{window.location.href="identification.html"}



function seconnecter3(){
    i=0;
    do{
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")
        {document.write("Bienvenue : "+login);
    break;}
    else {alert("Accès refusé");
    i+=1;}
    }
    while(i<3)
    if (i==3){alert("Délai dépassé")}

}

function ligne()
{window.location.href="ajout.html"}


function ajouterLigne(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    if (a==""||b==""){alert("Un ou 2 champs vide");}
    else if ((Number(b)<10||Number(b)>20)){alert("Âge invalide");}
    else{
        var table=document.getElementById("myTable");
        var newRow=table.insertRow(-1);
        var cell1=newRow.insertCell(0);
        var cell2=newRow.insertCell(1);
        cell1.innerHTML=document.getElementById("t1").value;
        cell2.innerHTML=document.getElementById("t2").value;
    }
}

function bonus() {
    // Initialisation des variables
    var articles = [];
    var prixTTC = 0;

    // Boucle pour collecter les articles
    while (true) {
        var nom = prompt("Entrez le nom de l'article :").trim();
        if (!nom) {
            alert("Le nom de l'article est requis !");
            continue;
        }

        var prix = parseFloat(prompt("Entrez le prix de " + nom + " :"));
        if (isNaN(prix) || prix <= 0) {
            alert("Veuillez entrer un prix valide pour " + nom + ".");
            continue;
        }

        var quantite = parseInt(prompt("Entrez la quantité de " + nom + " :"));
        if (isNaN(quantite) || quantite <= 0) {
            alert("Veuillez entrer une quantité valide pour " + nom + ".");
            continue;
        }

        // Calcul du total pour cet article
        var total = prix * quantite;
        prixTTC += total;

        // Ajout de l'article dans le tableau
        articles.push({ nom: nom, prix: prix, quantite: quantite, total: total });

        // Vérification pour continuer ou arrêter
        var continuer = prompt("Voulez-vous ajouter un autre article ? (oui/non)").toLowerCase();
        if (continuer !== "oui") break;
    }

    // Création d'un tableau HTML pour afficher les résultats
    var table = document.createElement("table");
    table.style.width = "50%";
    table.style.margin = "20px auto";
    table.style.borderCollapse = "collapse";
    table.style.textAlign = "left";

    // Ajout de l'en-tête du tableau
    var thead = document.createElement("thead");
    thead.innerHTML = `
        <tr style="background-color: #f2f2f2;">
            <th>Nom</th>
            <th>Prix (€)</th>
            <th>Quantité</th>
            <th>Total (€)</th>
        </tr>
    `;
    table.appendChild(thead);

    // Ajout du corps du tableau
    var tbody = document.createElement("tbody");
    articles.forEach(function (article) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${article.nom}</td>
            <td>${article.prix.toFixed(2)}</td>
            <td>${article.quantite}</td>
            <td>${article.total.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Ajout du tableau au document
    document.body.appendChild(table);

    // Affichage du prix TTC
    var totalTTC = document.createElement("h2");
    totalTTC.style.textAlign = "center";
    totalTTC.style.color = "green";
    totalTTC.textContent = `Prix TTC : ${prixTTC.toFixed(2)}€`;
    document.body.appendChild(totalTTC);
}
