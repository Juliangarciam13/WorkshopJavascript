const getValue = (id) => {
    return document.getElementById(id).value;
}

const mostrarMensaje = (mensaje) => {
    const mensajeDiv = document.getElementById('mensajeResultado');
    mensajeDiv.textContent = mensaje;
    document.getElementById('resultado').style.display = 'block';
}

const calcularCalorias = () => {
    const edad = getValue('edad');
    const peso = getValue('peso');
    const altura = getValue('altura');
    const actividad = getValue('actividad');
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const nombre = getValue('nombre');
    const tipoDocumento = getValue('tipoDocumento');
    const numeroDocumento = getValue('numeroDocumento');

    if (!nombre) {
        alert("Por favor, ingrese su nombre.");
        return;
    }

    if (!tipoDocumento) {
        alert("Por favor, seleccione un tipo de documento.");
        return;
    }

    if (!numeroDocumento || isNaN(numeroDocumento)) {
        alert("Por favor, ingrese un número de documento válido.");
        return;
    }

    if (isNaN(edad) || edad < 15 || edad > 80) {
        alert("Por favor, ingrese una edad válida entre 15 y 80 años.");
        return;
    }

    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, ingrese un peso válido.");
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        alert("Por favor, ingrese una altura válida.");
        return;
    }

    if (isNaN(actividad) || actividad <= 0) {
        alert("Por favor, seleccione su nivel de actividad física.");
        return;
    }

    if (!genero) {
        alert("Por favor, seleccione su género.");
        return;
    }

    let calorias;

    if (genero === 'M') {
        calorias = actividad * ((10 * peso) + (6.25 * altura) - (5 * edad) + 5);
    } else {
        calorias = actividad * ((10 * peso) + (6.25 * altura) - (5 * edad) - 161);
    }

    let grupoPoblacional = '';
    if (edad >= 15 && edad <= 29) {
        grupoPoblacional = 'Joven';
    } else if (edad >= 30 && edad <= 59) {
        grupoPoblacional = 'Adulto';
    } else if (edad >= 60) {
        grupoPoblacional = 'Adulto Mayor';
    }

    const mensaje = `El paciente ${nombre} identificado con ${tipoDocumento} NO.${numeroDocumento}, requiere un total de ${calorias.toFixed(2)} kcal para el sostenimiento de su TBM. El paciente pertenece al grupo poblacional: ${grupoPoblacional}`;

    mostrarMensaje(mensaje);
    document.getElementById('formulario-calculadora').reset();
}

document.getElementById('formulario-calculadora').addEventListener('submit', function (e) {
    e.preventDefault();
    calcularCalorias();
});