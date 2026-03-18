// Fonction pour ajouter une ligne vide au tableau
function ajouterLigne() {
    const tableBody = document.querySelector("#invoiceTable tbody");

    // Créer une nouvelle ligne
    const nouvelleLigne = document.createElement("tr");

    // Colonnes : Description, Quantité, Prix Unitaire, Total
    const colonnes = [
        '<input type="text" placeholder="Description">',
        '<input type="number" value="1" min="1" class="quantity">',
        '<input type="number" value="0" min="0" step="0.01" class="unit-price">',
        '<span class="line-total">0.00</span>'
    ];

    colonnes.forEach(html => {
        const cellule = document.createElement("td");
        cellule.innerHTML = html;
        nouvelleLigne.appendChild(cellule);
    });

    // Ajouter la ligne au tableau
    tableBody.appendChild(nouvelleLigne);

    // Mettre à jour les calculs en cas de modification des champs
    attacherEvenementsLigne(nouvelleLigne);
}

// Fonction pour remplir automatiquement des lignes d'exemple
// Fonction pour remplir automatiquement des lignes d'exemple
function remplirAutomatiquement() {
    const exemples = [
        { description: "Écran 17 pouces", quantite: 2, prixUnitaire: 150 },
        { description: "Souris sans fil", quantite: 3, prixUnitaire: 25 },
        { description: "Clé USB 32Go", quantite: 5, prixUnitaire: 10 }
        
    ];

    const tableBody = document.querySelector("#invoiceTable tbody");

    // Effacer toutes les lignes existantes avant de remplir automatiquement (si nécessaire)
    tableBody.innerHTML = "";

    // Ajouter chaque exemple comme une nouvelle ligne
    exemples.forEach(exemple => {
        const nouvelleLigne = document.createElement("tr");

        // Colonnes : Description, Quantité, Prix Unitaire, Total
        const colonnes = [
            `<input type="text" value="${exemple.description}" placeholder="Description">`,
            `<input type="number" value="${exemple.quantite}" min="1" class="quantity">`,
            `<input type="number" value="${exemple.prixUnitaire}" min="0" step="0.01" class="unit-price">`,
            `<span class="line-total">${(exemple.quantite * exemple.prixUnitaire).toFixed(2)}</span>`
        ];

        // Ajouter les colonnes à la ligne
        colonnes.forEach(html => {
            const cellule = document.createElement("td");
            cellule.innerHTML = html;
            nouvelleLigne.appendChild(cellule);
        });

        // Ajouter la ligne au tableau
        tableBody.appendChild(nouvelleLigne);

        // Attacher les événements pour les champs dynamiques
        attacherEvenementsLigne(nouvelleLigne);
    });

    // Recalculer les totaux après avoir rempli automatiquement
    calculer();
}


// Fonction pour recalculer les totaux
function calculer() {
    const lignes = document.querySelectorAll("#invoiceTable tbody tr");
    let sousTotal = 0;

    // Parcourir chaque ligne pour calculer le total
    lignes.forEach(ligne => {
        const quantite = parseFloat(ligne.querySelector(".quantity").value) || 0;
        const prixUnitaire = parseFloat(ligne.querySelector(".unit-price").value) || 0;

        const totalLigne = quantite * prixUnitaire;
        ligne.querySelector(".line-total").textContent = totalLigne.toFixed(2);

        sousTotal += totalLigne;
    });

    // Remise, taxes, et frais d'expédition
    const remise = 10; // Exemple : 10€
    const tauxImposition = 0.10; // 10%
    const fraisExpedition = 12; // Frais fixes

    const sousTotalApresRemise = sousTotal - remise;
    const taxeTotale = sousTotalApresRemise * tauxImposition;
    const totalFinal = sousTotalApresRemise + taxeTotale + fraisExpedition;

    // Mise à jour des valeurs affichées
    document.getElementById("sousTotal").textContent = sousTotal.toFixed(2);
    document.getElementById("remise").textContent = remise.toFixed(2);
    document.getElementById("sousTotalApresRemise").textContent = sousTotalApresRemise.toFixed(2);
    document.getElementById("taxeTotale").textContent = taxeTotale.toFixed(2);
    document.getElementById("fraisExpedition").textContent = fraisExpedition.toFixed(2);
    document.getElementById("totalFinal").textContent = totalFinal.toFixed(2);
}

// Fonction pour attacher les événements de mise à jour des champs
function attacherEvenementsLigne(ligne) {
    const champs = ligne.querySelectorAll(".quantity, .unit-price");
    champs.forEach(champ => {
        champ.addEventListener("input", calculer); // Recalculer à chaque modification
    });
}

// Initialisation : attacher les événements aux lignes existantes
document.querySelectorAll("#invoiceTable tbody tr").forEach(ligne => attacherEvenementsLigne(ligne));

// Fonction pour réinitialiser complètement la facture
function annulerFacture() {
    // Effacer toutes les lignes du tableau
    const tableBody = document.querySelector("#invoiceTable tbody");
    tableBody.innerHTML = ""; // Vide toutes les lignes du tableau

    // Ajouter une ligne vide initiale
    ajouterLigne();

    // Réinitialiser les champs des détails de la facture
    document.querySelectorAll(".details input").forEach(input => {
        input.value = ""; // Vide tous les champs
    });

    // Réinitialiser les champs de date et numéro de facture
    document.getElementById("invoiceDate").value = "";
    document.getElementById("invoiceNumber").value = "";

    // Réinitialiser les totaux
    document.getElementById("sousTotal").textContent = "0.00";
    document.getElementById("remise").textContent = "0.00";
    document.getElementById("sousTotalApresRemise").textContent = "0.00";
    document.getElementById("taxeTotale").textContent = "0.00";
    document.getElementById("fraisExpedition").textContent = "0.00";
    document.getElementById("totalFinal").textContent = "0.00";
}
