function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


// Validación del nombre
if (name === "") {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo de nombre no puede estar vacío.'
    });
    return;
}

// Validación del correo
if (email === "") {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo de correo electrónico no puede estar vacío.'
    });
    return;
} else if (!/^\S+@\S+\.\S+$/.test(email)) {
    Swal.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'Por favor, introduce un correo electrónico válido.'
    });
    return;
}

//Validación de contraseña 
if (password === "" ) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo contraseña no puede estar vacío.'
    });
    return;
} else if (password.length < 6) {
    Swal.fire({
        icon: 'error',
        title: 'Contraseña demasiado corta',
        text: 'La contraseña debe tener al menos 6 caracteres.'
    });
    return;
}

// Si todas las validaciones son correctas
Swal.fire({
    icon: 'success',
    title: 'Formulario enviado',
    text: 'El formulario ha sido enviado correctamente.'
});
}

// Enviar el formulario
//document.getElementById("myForm").submit()

/* /.../ son los delimitadores
^ inicio de la cadena
\S+ cualquier carácter que no sea un espacio 
en blanco y debe aparecer una o más veces
@ símbolo arroba
\. representa el punto
\S+ (esta última parte representa la extensión del dominio)
$ final de la cadena */