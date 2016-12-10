function sideN(){
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
}

function connexion(){
  $.cookie("connexion", "1");

  if(document.cookie.indexOf("a") >= 0) { 
    window.location.replace("./pay.html");
    $.removeCookie("achat_veux_co");
  }else{
    window.location.replace("./profile.html");
  }
  
}


function inscription(){
    $.cookie("connexion", "1");
  window.location.replace("./profile.html");

}

function deconnexion(){
    $.removeCookie("connexion");
    window.location.replace("./index.html");
}

function buttonachat(){
 if(document.cookie.indexOf("1") >= 0) { 
    window.location.replace("./pay.html");
  }
}

function achatconnexion(){
   $.cookie("achat_veux_co", "a");
   window.location.replace("./connexion.html");
}


function complete(){
 if(document.cookie.indexOf("1") >= 0) { 
  document.getElementById('nom').value        = "Bravo";
  document.getElementById("prenom").value     = "Johnny";
  document.getElementById("tel").value        = "05040202";
  document.getElementById("email").value      = "toto@tata.fr";
  document.getElementById("location1").value  = "118 Route de Narbonne";
  document.getElementById("location2").value  = "31062 Toulouse";
  document.getElementById("location3").value  = "";

  document.getElementById("card").value = "1115553216578530";
  document.getElementById("dateexp").value = "1012";
  document.getElementById("code").value = "555";
  }
}


function navbar(){
  //utiliasteur connecté
  var navbar_deco = document.getElementById("nav-deco");
  var navbar_co = document.getElementById("nav-co");

  var x =  $.cookie("connexion");
  if (document.cookie.indexOf("1") >= 0) {
  	navbar_deco.style.display = "none";
  	navbar_co.style.display = "block";
  }else{
  	navbar_deco.style.display = "block";
  	navbar_co.style.display = "none";
  }

}

function nonImplemente(){
	  Materialize.toast('Fonctionnalité non implémentée dans le prototype.', 4000); // 4000 is the duration of the toast

}