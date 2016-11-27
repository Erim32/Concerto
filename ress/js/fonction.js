
$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

navbar();

    $("#dp").datepicker({
        onSelect: function(dateText, inst) {
            alert(dateText);
        },
        beforeShow: function (event, ui) {
            var $link = $("#datep");
            ui.dpDiv.offset({
                top: $link.offset().top + 10,
                left: $link.offset().left + 10
            });
        }
    });

    $("#datep").click(function() {
        $("#dp").datepicker("show");
    });

});

function connexion(){
  $.cookie("connexion", "1");
  window.location.replace("./profile");
}


function inscription(){
    $.cookie("connexion", "1");
  window.location.replace("./profile.html");

}

function deconnexion(){
    $.removeCookie("connexion");
    window.location.replace("./index.html");
  
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
	  Materialize.toast('Fonctionalite non implemenete dans le prototype.', 4000); // 4000 is the duration of the toast

}