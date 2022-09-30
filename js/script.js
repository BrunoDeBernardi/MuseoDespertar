$(document).ready(function() {

    //Abrir y cerrar menu desplegable

    let menuState = "closed"
    $("#btn-menu").on("click", function () {
        if(menuState === "closed"){
            $("#btn-menu").removeClass("fa-bars");
            $("#btn-menu").addClass("fa-xmark");
            $("#nav-desplegable").addClass("nav-opened");
            $(".lang-li").addClass("nav-opened");
            menuState = "open";
        } else {
            $("#btn-menu").removeClass("fa-xmark");
            $("#btn-menu").addClass("fa-bars");
            $("#nav-desplegable").removeClass("nav-opened");
            $(".lang-li").removeClass("nav-opened");
            menuState = "closed";
        }
    });

    //Abrir y cerrar desplegable de idiomas

    let langState = "closed"
    $(".actual-lang").on( "click", function () {
        if(langState === "closed"){
            $("#down-lang").removeClass("fa-caret-down");
            $("#down-lang").addClass("fa-caret-up");
            $(".lang-ul").addClass("lang-open");
            langState = "open";
        } else{
            $("#down-lang").removeClass("fa-caret-up");
            $("#down-lang").addClass("fa-caret-down");
            $(".lang-ul").removeClass("lang-open");
            langState = "closed"
        }
    });

    /* Validacion de Formulario */

    $("#visitas-form").submit(function (event) {
        event.preventDefault();
        let nombre = $("#name").val();
        let email = $("#email").val();
        let dni = $("#dni").val();
        let telefono = $("#numero").val();

        if (nombre.length < 8){
            alert("El nombre Ingresado es demasiado corto")
            return 0;
        }

        let validacionMail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validacionMail.test(email)){
            alert("Ingrese correctamente su e-Mail")
            return 0;
        }

        if (dni.length < 7){
            alert("El DNI ingresado es demasiado corto")
            return 0;
        }

        if (telefono.length < 10){
            alert("El numero ingresado es demasiado corto")
            return 0;
        }
        this.submit();
    });

    cambiarSelect();
    function cambiarSelect() {
        let urlOrQueryString = location.search;
        let i = urlOrQueryString.indexOf('=')
        const queryString = urlOrQueryString.substring(i+1);
        if (queryString === "antonioBerni" || queryString === "benitoQuinquela"){
            $("#" + queryString).attr("selected", "");
        }
    }
});

