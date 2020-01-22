// Chapitre 1 - Exercice 1 
console.log("Bonjour Damien !");

// Chapitre 1 - Exercice 2
console.log("Bonjour en JavaScript !");
// Cette ligne est un commentaire : elle n'est pas exécutée
console.log("Faisons quelques calculs.");
console.log(4 + 7);
console.log(12 / 0);
console.log("Au revoir !");

// Chapitre 1 - Exercice 3
console.log("My name is Sina.");
console.log("I am 29 years old.");

// Chapitre 1 - Exercice 4
console.log(6+3);
console.log(6-3);
console.log(6*3);
console.log(6/3);

// Chapitre 1 - Exercice 5
console.log(4 + 5); //9
console.log("4 + 5"); //4+5
console.log("4" + "5"); //45

// Chapitre 2 - Exercice 1
let a;
a = 3.14;
console.log(a);

let a = 3.14;
console.log(a);

const a = 3.14; // Création d'une variable constante
a = 6.28;       // Impossible : a ne peut pas changer de valeur !

const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);

// Chapitre 2 - Exercice 2
//[°F] = [°C] x 9/5 + 32.
const tempCel = 37;
const tempFah = tempCel * 9/5 +32;
console.log(`${tempCel}°C = ${tempFah}°F`);

// Champitre 2 - Exercice 3
let nombre1 = 5;
let nombre2 = 3;

// Tapez votre code ici (sans rien modifier d'autre !)
nombre1 -= 2;
nombre2 += 2;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5

// Chapitre 3 - Examples
const meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
  console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
  console.log("Sortez en pull.");
} else if (meteo === "pluie") {
  console.log("Sortez en blouson.");
} else if (meteo === "neige") {
  console.log("Restez au chaud à la maison.");
} else {
  console.log("Je n'ai pas compris !");
}

const meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
  case "soleil":
    console.log("Sortez en t-shirt.");
    break;
  case "vent":
    console.log("Sortez en pull.");
    break;
  case "pluie":
    console.log("Sortez en blouson.");
    break;
  case "neige":
    console.log("Restez au chaud à la maison.");
    break;
  default:
    console.log("Je n'ai pas compris !");
}


// Chapitre 3 - Exercice 1
const jourActuel = "lundi";
let jourSuivant = "";

// Ajoutez votre code ici pour définir jourSuivant en fonction de jourActuel
if (jourActuel === "lundi") {
  jourSuivant = "mardi";
} else if (jourActuel === "mardi") {
  jourSuivant = "mercredi";
} else if (jourActuel === "mercredi") {
  jourSuivant = "jeudi";
} else if (jourActuel === "jeudi") {
  jourSuivant = "vendredi";
} else if (jourActuel === "vendredi") {
  jourSuivant = "samedi";
} else if (jourActuel === "samedi") {
  jourSuivant = "dimanche";
} else if (jourActuel === "dimanche") {
  jourSuivant = "lundi";
} else {
  console.log("Jour inconnu");
}

 if (jourSuivant !== "") {
  console.log(`Demain, nous serons ${jourSuivant}`);  
}


const jourActuel = "lundi";
let jourSuivant = "";

// Ajoutez votre code ici pour définir jourSuivant en fonction de jourActuel
switch (jourActuel) {
  case "lundi":
    jourSuivant = "mardi";
    break;
  case "mardi":
    jourSuivant = "mercredi";
    break;
  case "mercredi":
    jourSuivant = "jeudi";
    break;
  case "jeudi":
    jourSuivant = "vendredi";
    break;
  case "vendredi":
    jourSuivant = "samedi";
    break;
  case "samedi":
    jourSuivant = "dimanche";
    break;
  case "dimanche":
    jourSuivant = "lundi";
    break;
  default:
    console.log("Jour inconnu");
}

 if (jourSuivant !== "") {
  console.log(`Demain, nous serons ${jourSuivant}`);  
}



// Chapitre 3 - Exercice 2
const moyenne = 19;

// Ajoutez votre code ici
if (moyenne < 10) {
  console.log("recalé");
} else if (moyenne <12) {
  console.log("recu");
} else {
  console.log("recu avec mention");
}

// Chapitre 3 - Exercice 3