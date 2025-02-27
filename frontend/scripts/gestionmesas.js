$(document).ready(function () {
    //ocultar la tabla al inicio si no tiene filas
    if ($("#listaReservas tr").length === 0) {
        $(".lista-mesas table").hide();
    }

    $("#formNuevaMesa").on("submit", function (event) {
        event.preventDefault();

        const numeroMesa = $("#numeroMesa").val();
        const cantidadComensales = $("#cantidadComensales").val();

        if (numeroMesa.trim() === "" || cantidadComensales.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        //mostrar la tabla
        $(".lista-mesas table").fadeIn();

        //crear nueva fila
        const nuevaFila = `
            <tr style="display: none;">
                <td>${numeroMesa}</td>
                <td>${cantidadComensales}</td>
                <td>Pendiente</td>
                <td>
                    <button class="btn-aceptar">✔</button>
                    <button class="btn-rechazar">✘</button>
                </td>
            </tr>
        `;

        $("#listaReservas").append(nuevaFila);
        $("#listaReservas tr:last-child").fadeIn();

        $("#numeroMesa").val("");
        $("#cantidadComensales").val("");
    });
    $(".btn-cancelar").on("click", function (event) {
        event.preventDefault();
        $("#numeroMesa").val("");
        $("#cantidadComensales").val("");
    });
});
