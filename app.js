$(function() {

    $.validator.addMethod("latinos", function(value, element) 
    {
    return  this.optional (element) || /^[ a-z0-9áéíóúüñ]*$/i.test(value);
});
    $("#btn").on("click", function() {
        $("#formulario").validate
        ({
            rules:
            {
            email: {required: true, email: true, minlength: 8,maxlength: 80},
            digitos: {required: true, digitos: true, minlength: 2, maxlength: 10},
            latinos: {required: true,latinos: true, minlength: 3, maxlength: 50},
            },
            messages:
            {
            email: {required: 'El campo es requerido', email: 'El formato de email es incorrecto', minlength: 'El minimo permitido son 8 caracteres', maxlength: 'El maximo permitido son 80 caracteres'}, 
            digitos: {requerido: 'El campo es requerido', digitos: 'Solo se aceptan digitos', minlength: 'El minimo permitido son 2 caracteres', maxlength: 'El maximo permitido son 10 caracteres'},
            latinos: {required: 'El campo es requerido', latinos: 'Solo se aceptan letras', minlength: 'El minimo permitido son 3 caracteres', maxlength: 'El maximo permitido son 50 caracteres'},
            },
        });
    });
});