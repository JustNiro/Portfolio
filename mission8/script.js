   const exercises = [
    {
        title: "Somme de deux nombres",
        description: "Écrire une fonction qui prend deux nombres en entrée et retourne leur somme.",
        code:  `function somme(num1, num2) {\n return num1 + num2;\n}\n\nconsole.log(somme(5, 7)); // Résultat attendu : 12`,
        interactive: true,
        handler: function () {
          // Fonction interactive pour calculer la factorielle d'un nombre
          const num1 = parseFloat(prompt("Entrez le premier nombre :"));
          const num2 = parseFloat(prompt("Entrez le second nombre :"));
        
          if (isNaN(num1) || isNaN(num2)) {
            alert("Veuillez entrer des nombres valides.");
            return;
          }
        
          const somme = num1 + num2;
          alert(`La somme de ${num1} et ${num2} est : ${somme}`);
        }
      },

    {
        title: "Affiche les nombres de 1 à 10",
        description: "Écrire une fonction qui affiche les nombres de 1 à 10.",
        code: `for (let i = 1; i <= 10; i++) {\n console.log(i)\n}`,
        interactive: true,
        handler: function () {
          // Fonction interactive pour calculer la somme des nombres de 1 à 10
          let result = "";
          for (let i = 1; i <= 10; i++) {
            result+= i + " ";
          }
          alert(`Les nombres de 1 à 10 sont : ${result}`);
        }
      },
      
      {
      title: "Trouver le plus grand entre deux nombres",
      description: "Cette fonction demande à l'utilisateur deux nombres et affiche lequel est le plus grand.",
      code: `function exercice3TrouverPlusGrand() {\nconst numA = parseFloat(prompt("Entrez le premier nombre :"));\nconst numB = parseFloat(prompt("Entrez le second nombre :"));\nif (isNaN(numA) || isNaN(numB)) {\nalert("Veuillez entrer des nombres valides.");\nreturn;}\nconst plusGrand = numA > numB ? numA : numB;\nalert(\`Le plus grand entre \${numA} et \${numB} est : \${plusGrand}\`);}`,
      interactive: true,
      handler: function () {
        const numA = parseFloat(prompt("Entrez le premier nombre :"));
        const numB = parseFloat(prompt("Entrez le second nombre :"));
      
        if (isNaN(numA) || isNaN(numB)) {
          alert("Veuillez entrer des nombres valides.");
          return;
        }
      
        const plusGrand = numA > numB ? numA : numB;
        alert(`Le plus grand entre ${numA} et ${numB} est : ${plusGrand}`);
      }

    },

          {
              title: "Factorielle d'un nombre",
              description: "Calculez la factorielle d'un nombre.",
              code: `function factorielle(n) {\n  if (n === 0) return 1;\n  return n * factorielle(n - 1);\n}\n\nconsole.log(factorielle(5)); // Résultat attendu : 120`,
              interactive: true,
              handler: function () {
                // Fonction interactive pour calculer la factorielle d'un nombre
                const n = Number(prompt("Entrez un nombre :"));
                let fact = 1;
                for (let i = 1; i <= n; i++) {
                  fact *= i;
                }
                alert(`La factorielle de ${n} est : ${fact}`);
              }
          },
    
          {
            title: "Calculer la moyenne d'un tableau",
            description: "Calculez la moyenne d'un tableau donné.",
            code: `function moyenneTableau(arr) {\n  const somme = arr.reduce((acc, curr) => acc + curr, 0);\n  return somme / arr.length;\n}\n\nconsole.log(moyenneTableau([10, 20, 30, 40])); // Résultat attendu : 25`,
            interactive: true,
            handler: function () {
              // Fonction qui calcule la moyenne des éléments d'un tableau
              const tableau = prompt("Entrez une liste de nombres séparés par des virgules :").split(',').map(Number);
              const somme = tableau.reduce((acc, curr) => acc + curr, 0); // Calcule la somme des éléments
              const moyenne = somme / tableau.length; // Divise la somme par le nombre d'éléments pour obtenir la moyenne
              alert(`La moyenne est : ${moyenne}`);
            }
          },

          {
            title: "Calculer le carré d'un nombre",
            description: "Cette fonction calcule le carré d’un nombre donné par l’utilisateur.",
            code: `
              function carre(nombre) {
                return nombre * nombre;
              }
              console.log(carre(5)); // Exemple : 25
            `,
            interactive: true,
            handler: function () {
              const nombre = prompt("Entrez un nombre pour calculer son carré:");
              const nombreFloat = parseFloat(nombre);
          
              if (isNaN(nombreFloat)) {
                alert("Veuillez entrer un nombre valide.");
                return;
              }
          
              const resultat = this.carre(nombreFloat);
              alert(`Le carré de ${nombreFloat} est ${resultat}.`);
            },
            carre: function (nombre) {
              return nombre * nombre;
            }
          },

          {
            title: "Vérifier si un nombre est pair",
            description: "Cette fonction vérifie si un nombre donné est pair. Elle retourne true si le nombre est pair, sinon false.",
            code: `
              function estPair(nombre) {
                return nombre % 2 === 0;
              }
              console.log(estPair(4)); // Exemple : true
              console.log(estPair(5)); // Exemple : false
            `,
            interactive: true,
            handler: function () {
              const nombre = prompt("Entrez un nombre pour vérifier s'il est pair:");
              const nombreFloat = parseFloat(nombre);
          
              if (isNaN(nombreFloat)) {
                alert("Veuillez entrer un nombre valide.");
                return;
              }
          
              const resultat = this.estPair(nombreFloat);
              alert(`Le nombre ${nombreFloat} est ${resultat ? "pair" : "impair"}.`);
            },
            estPair: function (nombre) {
              return nombre % 2 === 0;
            }
          },

          {
            title: "Inverser une chaîne de caractères",
            description: "Cette fonction prend une chaîne en entrée et retourne la chaîne inversée.",
            code: `function inverser(chaine) {\n  return chaine.split('').reverse().join('');\n}\n\nconsole.log(inverser("Bonjour")); // Résultat attendu : ruojnoB`,
            interactive: true,
            handler: function () {
              // Fonction interactive pour inverser une chaîne
              const chaine = prompt("Entrez une chaîne à inverser :");
              alert(`La chaîne inversée est : ${chaine.split('').reverse().join('')}`);
            }
          },

        {
  title: "Vérifier si un mot est un palindrome",
  description: "Cette fonction vérifie si un mot est un palindrome (se lit de la même manière dans les deux sens).",
  code: `function estPalindrome(chaine) {\n  const reverse = chaine.split('').reverse().join('');\n  return chaine === reverse;\n}\n\nconsole.log(estPalindrome("radar")); // Résultat attendu : true`,
      interactive: true,
      handler: function () {
        // Fonction interactive pour vérifier si une chaîne est un palindrome
        const chaine = prompt("Entrez une chaîne :");
        const estPalindrome = chaine === chaine.split('').reverse().join('');
        alert(`"${chaine}" est ${estPalindrome ? "" : "pas "}un palindrome.`);
      }
    },

{
  title: "Calculer la différence entre deux nombres",
description: "Cette fonction calcule la différence absolue entre deux nombres donnés.",
code: `
  function difference(a, b) {
    return Math.abs(a - b);
  }
  console.log(difference(10, 4)); // Exemple : 6
  console.log(difference(4, 10)); // Exemple : 6
`,
interactive: true,
handler: function () {
  const nombreA = prompt("Entrez le premier nombre :");
  const nombreB = prompt("Entrez le second nombre :");

  const numA = parseFloat(nombreA);
  const numB = parseFloat(nombreB);

  if (isNaN(numA) || isNaN(numB)) {
    alert("Veuillez entrer des nombres valides.");
    return;
  }

  const resultat = this.difference(numA, numB);
  alert(`La différence entre ${numA} et ${numB} est ${resultat}.`);
},
difference: function (a, b) {
  return Math.abs(a - b);
}
},
          
{
  title: "Calculer une puissance",
  description: "Cette fonction calcule un nombre élevé à une certaine puissance donnée.",
  code: `
    function puissance(base, exposant) {
      return Math.pow(base, exposant);
    }
    console.log(puissance(2, 3)); // Exemple : 8
    console.log(puissance(5, 2)); // Exemple : 25
  `,
  interactive: true,
  handler: function () {
    const base = prompt("Entrez la base :");
    const exposant = prompt("Entrez l'exposant :");
    const baseFloat = parseFloat(base);
    const exposantFloat = parseFloat(exposant);

    if (isNaN(baseFloat) || isNaN(exposantFloat)) {
      alert("Veuillez entrer des nombres valides.");
      return;
    }

    const resultat = this.puissance(baseFloat, exposantFloat);
    alert(`Le résultat de ${baseFloat} élevé à la puissance ${exposantFloat} est ${resultat}.`);
  },
  puissance: function (base, exposant) {
    return Math.pow(base, exposant);
  }
},

{
  title: "Calculer une augmentation de pourcentage",
  description: "Cette fonction calcule le nouveau montant après une augmentation en pourcentage donnée.",
  code: `
    function augmentation(montant, pourcentage) {
      return montant + (montant * pourcentage / 100);
    }
    console.log(augmentation(100, 10)); // Exemple : 110
    console.log(augmentation(200, 15)); // Exemple : 230
  `,
  interactive: true,
  handler: function () {
    const montantInput = prompt("Entrez le montant initial :");
    const pourcentageInput = prompt("Entrez le pourcentage d'augmentation :");

    const montant = parseFloat(montantInput);
    const pourcentage = parseFloat(pourcentageInput);

    if (isNaN(montant) || isNaN(pourcentage)) {
      alert("Veuillez entrer des valeurs numériques valides.");
      return;
    }

    const resultat = this.augmentation(montant, pourcentage);
    alert(`Le nouveau montant après une augmentation de ${pourcentage}% sur ${montant} est ${resultat}.`);
  },
  augmentation: function (montant, pourcentage) {
    return montant + (montant * pourcentage / 100);
  }
},

{
  title: "Éléments uniques dans un tableau",
  description: "Retirez les doublons d'un tableau.",
  code: `function uniqueElements(arr) {\n  return [...new Set(arr)];\n}\n\nconsole.log(uniqueElements([1, 2, 2, 3, 4, 4])); // Résultat attendu : [1, 2, 3, 4]`,
  interactive: true,
  handler: function () {
    // Fonction qui retourne les éléments uniques d'un tableau en utilisant un Set
    const tableau = prompt("Entrez une liste de nombres séparés par des virgules :").split(',').map(Number);
    const uniques = [...new Set(tableau)];
    alert(`Éléments uniques : ${uniques.join(', ')}`);
  }
},

{
  title: "Retourner les premiers caractères d'une chaîne",
  description: "Cette fonction retourne les n premiers caractères d'une chaîne donnée.",
  code: `
    function premiersCaracteres(chaine, n) {
      return chaine.substring(0, n);
    }
    console.log(premiersCaracteres("Bonjour tout le monde", 7)); // Exemple : "Bonjour"
  `,
  interactive: true,
  handler: function () {
    const chaine = prompt("Entrez une chaîne de caractères :");
    const n = parseInt(prompt("Entrez le nombre de caractères à retourner :"), 10);

    if (!chaine || isNaN(n) || n < 0) {
      alert("Veuillez entrer une chaîne valide et un nombre valide.");
      return;
    }

    const resultat = this.premiersCaracteres(chaine, n);
    alert(`Les ${n} premiers caractères de la chaîne sont : "${resultat}"`);
  },
  premiersCaracteres: function (chaine, n) {
    return chaine.substring(0, n);
  }
},

{
  title: "Retourner une chaîne en minuscules",
  description: "Cette fonction prend une chaîne en entrée et retourne sa version en minuscules.",
  code: `
    function mettreEnMinuscules(chaine) {
      return chaine.toLowerCase();
    }
    console.log(mettreEnMinuscules("BONJOUR")); // Exemple : "bonjour"
  `,
  interactive: true,
  handler: function () {
    const chaine = prompt("Entrez une chaîne de caractères pour la transformer en minuscules :");
    
    if (chaine === null || chaine.trim() === "") {
      alert("Veuillez entrer une chaîne de caractères valide.");
      return;
    }

    const resultat = this.mettreEnMinuscules(chaine);
    alert(`La chaîne en minuscules est : "${resultat}".`);
  },
  mettreEnMinuscules: function (chaine) {
    return chaine.toLowerCase();
  }
},

{
  title: "Compter les voyelles",
  description: "Cette fonction prend une chaîne de caractères et retourne le nombre de voyelles qu’elle contient.",
  code: `
    function countVowels(str) {
      const voyelles = "aeiouyAEIOUY";
      let count = 0;

      for (let char of str) {
        if (voyelles.includes(char)) {
          count++;
        }
      }
      return count;
    }

    console.log(countVowels("bonjour")); // 3 (o, o, u)
    console.log(countVowels("js")); // 0
  `,
  interactive: true,
  handler: function () {
    const input = prompt("Entrez une chaîne de caractères pour compter les voyelles :");
    if (!input || typeof input !== "string") {
      alert("Veuillez entrer une chaîne de caractères valide.");
      return;
    }

    const result = this.countVowels(input);
    alert(`La chaîne "${input}" contient ${result} voyelle(s).`);
  },
  countVowels: function (str) {
    const voyelles = "aeiouyAEIOUY";
    let count = 0;

    for (let char of str) {
      if (voyelles.includes(char)) {
        count++;
      }
    }
    return count;
  }
},



            ];

  // Fonction pour afficher les exercices sur la page
  function renderExercises() {
    // Sélectionner l'élément qui contiendra tous les exercices
    const container = document.getElementById("exercises");
    // Parcourir chaque exercice et créer une interface pour chacun
    exercises.forEach((exercise, index) => {
      const div = document.createElement("div");
      div.className = "exercise";
      
      div.innerHTML = `
        <h2>Exercice ${index + 1}: ${exercise.title}</h2>
        <p>${exercise.description}</p>
        <div class="buttons">
          <button onclick="runExercise(${index})">Tester</button>
          <button onclick="showCode(${index})">Afficher le code</button>
        </div>
        <div class="output" id="output-${index}"></div>
        <div class="code-display" id="code-${index}"></div>
      `;
      
      container.appendChild(div);
    });
  }

  // Fonction pour exécuter l'exercice lorsqu'on clique sur "Tester"
  function runExercise(index) {
    const exercise = exercises[index];
    if (exercise.interactive) {
      // Si l'exercice est interactif, on appelle la fonction handler
      exercise.handler();
    } else {
      // Si l'exercice est statique, on affiche le code dans la console
      alert("Code statique : Exécutez-le dans la console.");
      console.log(exercise.code);
    }
  }
  
  // Fonction pour afficher ou cacher le code source de l'exercice
  function showCode(index) {
    const codeDiv = document.getElementById(`code-${index}`);
    if (codeDiv.style.display === "block") {
      codeDiv.style.display = "none";
    } else {
      codeDiv.style.display = "block";
      codeDiv.textContent = exercises[index].code;
    }
  }
  
  // Attacher l'événement au chargement du DOM pour afficher les exercices
  document.addEventListener("DOMContentLoaded", renderExercises);
  
