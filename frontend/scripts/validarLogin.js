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
                        //console.log(await response);
                        if (await response.message.logeado==true) {
                              
                             location.assign("http://127.0.0.1:3000/frontend/paginas/index.html");
                        }else{
                              
                              if ($("#error-mensaje").text()=="Error contraseña o Usuario incorrecto") {
                                    
                                    $("#error-mensaje").empty();
                                    $("#error-mensaje").append("Vuelvelo a intentar");
                                    
                              }else{
                                    $("#error-mensaje").empty();
                                    $("#error-mensaje").append("Error contraseña o Usuario incorrecto");
                              }
                              

                             
                        }
                  }
                 });
           }


      });
});