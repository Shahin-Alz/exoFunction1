// EXO1

// function addition(a, b = 1) {
//     return a + b;
// }

// console.log(addition(5, 2));



//EXO2

// function soustraction(a, b = 1) {
//     return a - b;
// }

// console.log(soustraction(5, 2));


//EXO3

// function multi(a, b = 1) {
//     return a * b;
// }

// console.log(multi(5, 2));



//EXO4

// function divi(a, b = 1) {
//     return a / b;
// }

// console.log(divi(5, 2));


//EXO5

// function addition(a, b = 1) {
//     return a % b;
// }

// console.log(addition(5, 2));



//EXO6
// function addition(a, b = 1) {
//     return a ** b;
// }

// console.log(addition(5, 2));



//EXO7
// function addition(a = 1) {
//     return Math.sqrt(a);
// }

// console.log(addition(16));



//EXO8

// let uno = prompt("")

// function capitalize(uno){
//     return uno.charAt(0).toUpperCase()+uno.substr(1);
// }

// console.log(capitalize(uno));



//EXO9

//PAS ARRIVER

// let nbr1= +prompt("")
// let operator = prompt("")
// let nbr2= +prompt("")



// function calcul(nbr1, operator, nbr2) {

//     switch (operator) {
//             case "+":
//                 console.log(nbr1 + nbr2);
//                 break;
        
//             case "-":
//                 console.log(nbr1 - nbr2);
//                 break;
        
//             case "*":
//                  console.log(nbr1 * nbr2);
//                 break;
        
//             case "/":
//                 console.log(nbr1 / nbr2);
//             break;
        
        
// }

// }





//PARTIE2

//EXO 1 pas arrivé

// let nbr=+prompt()

// function reversenumber(params) {
    
// }

// function reverse()
// {
//     let tmp=0, x, nbr, y;

//     nbr = Number(document.getElementById("Myinput").value);

//     y = nbr;
//     while(nbr > 0)
//     {
//             x = nbr%10;
//             nbr = parseInt(nbr/10);
//             tmp = tmp*10+x;
//     }
//     alert(tmp);
// }


//EXO2 pas complet

// let valeur = prompt("nbre")

// function divpar2(valeur) {
    


// switch (valeur) {
//     case valeur % 2:
//     alert("votre nombre est multiple de 2")
//         break;

//     default:
//         alert("votre nombre multiple de 2")
//         break;
// }
// }


//Exo3

// let motdepass = prompt("Mot de pass")

// function login(motdepass) {

//     for (let index = 0; index < array.length; index++) {
        
        
//     }

// }



//Partie 3
//exo1

// function somme_n_premiers_nombres(n) {
    // On initialise la somme à 0
    // let somme = 0;
    // On parcourt les n premiers nombres naturels
    // for (let i = 1; i <= n; i++) {
      // On ajoute chaque nombre à la somme
    // somme += i;
    // }
    // On renvoie la somme
    // return somme;
// }
// On calcule la somme des 5 premiers nombres naturels
// let resultat = somme_n_premiers_nombres(3);
// console.log(resultat);
 // affiche 15


//exo2

// function est_premier(n) {
    // Si n est inférieur à 2, ce n'est pas un nombre premier
    // if (n < 2) {
    //   return false;
    // }
    // On teste si n est divisible par chaque nombre entier compris entre 2 et la racine carrée de n
    // for (let i = 2; i <= Math.sqrt(n); i++) {
      // Si n est divisible par i, ce n'est pas un nombre premier
    //   if (n % i === 0) {
        // return false;
    //   }
    // }
    // Si aucun nombre entier entre 2 et la racine carrée de n ne divise n, c'est un nombre premier
    // return true;
//   }
//   console.log(est_premier(2)); 
  // affiche true
//   console.log(est_premier(4));
//    // affiche false
    

//exo3

// function trier_par_ordre_alphabetique(strings) {
    // On utilise la méthode sort() de l'objet Array pour trier le tableau
    // return strings.sort();
//   }

// let strings = ["girafe", "chien", "chat", "oiseau"];
// console.log(trier_par_ordre_alphabetique(strings));
 // affiche ["chat", "chien", "girafe", "oiseau"]

//exo4

// function somme_chiffres(n) {
    // On convertit le nombre en chaîne de caractères
    // let str = n.toString();
    // On initialise la somme à 0
    // let somme = 0;
    // On parcourt chaque caractère de la chaîne
    // for (let i = 0; i < str.length; i++) {
      // On ajoute chaque chiffre à la somme
    //   somme += parseInt(str[i]);
    // }
    // On renvoie la somme
    // return somme;
//   }
