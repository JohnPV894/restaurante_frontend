"use strict";

$(document).ready(function () {
      $("#submit").click(function (e) { 
            e.preventDefault();
           
           if ($("#email").val().trim()!="" && $("#contraseña").val().trim() !="") {
            console.log( $("#email").val().trim());
            $.ajax({
                  method: "POST",
                  url: "https://restaurante-backend-nine.vercel.app/api/validarLogin",
                 // url: "http://localhost:5000/api/validarLogin",
                  contentType: 'application/json',
                  data:JSON.stringify({
                        "usuario":$("#email").val().trim(),
                        "contraseña":$("#contraseña").val().trim()}),
                  success: async function (response) {
                        let respuesta = await response;
                        if (!respuesta.message.logeado) {
                              if ($("#error-mensaje").text()=="Error contraseña o Usuario incorrecto") {
                                    
                                    $("#error-mensaje").empty();
                                    $("#error-mensaje").append("Vuelvelo a intentar");
                                    
                              }else{
                                    $("#error-mensaje").empty();
                                    $("#error-mensaje").append("Error contraseña o Usuario incorrecto");
                              }
                              return;
                            
                        }
                        else {
                              location.assign("http://127.0.0.1:3000/frontend/paginas/index.html");
                        }

                  }
                 });
           }


      });
});