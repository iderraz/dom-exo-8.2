// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, sert toi des class du fichier style.css et rien d'autre !
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id
let monh1 = document.querySelector("h1");
monh1.innerText = "Les attributs class et id";

// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
let h2 = document.querySelector("h2");
h2.innerText = "Exercice 2 partie A";
console.log(h2);
// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
let h22 = document.querySelectorAll("h2")[1];
h22.innerText = "Exercice 2 partie B";
// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 
let p = document.querySelector("p");
p.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> "
// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide
let p2 = document.querySelectorAll("p")[1];
p2.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
let h1 = document.querySelector("h1");
h1.setAttribute('id',"bigTitle");
console.log(h1);
// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
let div =  document.querySelector("div");
div.setAttribute('class',"container");
// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
let h2All = Array.from(document.querySelectorAll("h2"));
h2All.forEach(element => {
    element.setAttribute('class',"title");
});

// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"
let pAll = Array.from(document.querySelectorAll("p"));
pAll.forEach(element => {
    element.setAttribute('class',"text");
});
// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
let section1 = document.querySelector("section");
section1.setAttribute('class', "margin-bottom border-black padding")
// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding
let section2 = document.querySelectorAll("section")[1];
section2.setAttribute('class', "margin-top border-black padding")
// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px
let divkid = section2.lastElementChild;
divkid.style.backgroundColor = "blue";
divkid.style.border = "black 2px solid";
divkid.style.height = "20px";
divkid.style.width = "20px";









































