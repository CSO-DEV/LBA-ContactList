/**
 * Script/script.js - Contact list script
 */

/* Construction d'une class - class builder */
class Contact {
  constructor(nom, prenom, email, tel, statut) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.tel = tel;
  }
}

/*Récupération de l'élément dans le document -Get items from the document*/
let boutRecherche = $("#boutRecherche");
let labelAffiche = $("#affiche");
let listeContacts = $("#listeContacts");
let nomInput = $("#nom");

/*Enregistrement des données par index email - Data recording by email index*/
$("#boutAjout").click((e) => {
  let form = $("#formulaire"); // Résulte un tableau
  let data = new FormData(form[0]);
  let carnetAdresse = new Contact(
    data.get("nom"),
    data.get("prenom"),
    data.get("email"),
    data.get("tel")
  );
  if (
    !data.get("nom") ||
    !data.get("prenom") ||
    !data.get("email") ||
    !data.get("tel")
  ) {
    let requiredColor = "red";
    if (!data.get("nom")) {
      $("#nom").css("borderColor", requiredColor);
    } else if (!data.get("prenom")) {
      $("#prenom").css("borderColor", requiredColor);
    } else if (!data.get("email")) {
      $("#email").css("borderColor", requiredColor);
    } else if (!data.get("tel")) {
      $("#tel").css("borderColor", requiredColor);
    }
  } else {
    contactEmail = {};
    contactEmail[carnetAdresse.email] = carnetAdresse;
    cumulContacts(contactEmail);
    ajoutOptionContact(carnetAdresse.email);
    event.preventDefault();
    $("#formulaire input").val("");
    $("#formulaire input").css("borderColor", "black");
  }
});

/*Sauvegarde des données - data save*/
function cumulContacts(contactEmail) {
  let adresse = contactEmail;
  listeParEmail.push(adresse);
}

/*Affiche les données enregistrées dans la liste de contact et affichage des détailles sur évenement dans la liste détail -
Displays the data saved in the contact list and display of event details in the detail list*/
let listeParEmail = [];
function ajoutOptionContact(index) {
  $("#listeContact").append("<option class='mail'>" + index + "</option>");
  $(".mail").off("click");
  $(".mail").click(function (e) {
    let mem = $(this).text();
    let affiche;
    listeParEmail.forEach((element) => {
      if (Object.keys(element) == mem) {
        for (property in element) {
          affiche =
            "<strong>Nom</strong> : " +
            element[property].nom +
            "<br><strong>Prénom</strong> : " +
            element[property].prenom +
            "<br><strong>Email</strong> : " +
            element[property].email +
            "<br><strong>Tel</strong> : " +
            element[property].tel;
        }
      }
    });
    $("#texte3").html("");
    $("#texte3").html(affiche);
  });
}

/**
 *
 */
var cube = document.querySelector(".cube");
var radioGroup = document.querySelector(".radio-group");
var currentClass = "";

function changeSide() {
  var checkedRadio = radioGroup.querySelector(":checked");
  var showClass = "show-" + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener("change", changeSide);
