"use strict";

$(document).ready(function () {
      $("#submit").click(function (e) { 
            event.preventDefault();
           
           if ($("#email").val().trim()!="" && $("#contraseña").val().trim() !="") {
            console.log( $("#email").val().trim());
            $.ajax({
                  method: "POST",
                  url: "http://localhost:5000/api/validarLogin",
                  contentType: 'application/json',
                  data:JSON.stringify({
                        "usuario":$("#email").val().trim(),
                        "contraseña":$("#contraseña").val().trim()}),
                  success: async function (response) {
                        console.log(await response);
                        if (await response.message==true) {
                              console.log("BIEN");
                              
                             location.assign("http://127.0.0.1:3000/frontend/paginas/index.html");
                        }else{
                             location.assign("http://127.0.0.1:3000/frontend/paginas/login.html");
                             console.log("MAL");
                        }
                  }
                 });
           }


      });
});