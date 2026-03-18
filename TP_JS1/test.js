function test_age() {
    let age = prompt("Quelle est votre age ? ");
    if (age<18)
    {
        document.write(" Attention accès refusé, vous êtes Mineur")
        document.body.style.backgroundColor ="red";
    }
    else
    {
        document.write ("OK, vous êtes Majeur");
        document.body.style.backgroundColor ="green";
    }
}

function affichage() {
    let prenom = prompt ("saisir mon prenom")
    let nom = prompt ("saisir mon nom")
    document.body.style.backgroundColor ="green";
    document.write ("<div style='border:5px solid #3858be; background-color:#c49d48; background-image width:400px; height:300px; margin:auto; font-size:2em;'>");
    document.write ("Bonjour  " + prenom + "  " + nom);
    document.write ("</div>");
}

function moyenne() {
    var n1 = prompt("Donner la première note");
    var n2 = prompt("Donner la deuxième note");
    var n3 = prompt("Donner la troisième note");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme: " + somme + "<br>");
    var moyenne = somme/3; 

    document.write("Voici la moyenne: " + moyenne + "<br>");
    if (moyenne < 10)
        {
            document.write(" Vous n'êtes pas admis")
            document.body.style.backgroundColor ="red";
        }
        else if (moyenne < 14) 
        {
            document.write ("Vous êtes admis passable");
            document.body.style.backgroundColor ="yellow";
        }
        else
        {
            document.write ("Vous êtes admis bien ");
            document.body.style.backgroundColor ="green";
        }
}

function test_couleur() {
    let couleur = prompt ("Donner un couleur")
    if (couleur == "rouge") {
        document.body.style.backgroundColor = "red"

    }
    else if (couleur == "bleu") {
        document.body.style.backgroundColor = "blue"
    }
    else if (couleur == "vert") {
        document.body.style.backgroundColor = "green"
    }

    else {
        document.write("Couleur non comprise")
    }
}
