/*Formulario de Consulta*/
const formulariocont = document.getElementById('formulariocont');
const userNameContac = document.getElementById("userNameContac");
const userEmailContac = document.getElementById("userEmailContac");
const userComentContac = document.querySelector("textarea[name=comentarios]");

const alertSuccessContac = document.getElementById('alertSuccessContac');
const alertNameContac = document.getElementById('alertNameContac');
const alertEmailContac= document.getElementById('alertEmailContac');
const alertComentContac = document.getElementById('alertComentContac');

const regUserNameContac = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmailContac = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;



const pintarMensajeExitoContac = () => {
    alertSuccessContac.classList.remove("d-none");
    alertSuccessContac.textContent = "Consulta enviada con éxito verifique su casilla de correo para más información";
};

const pintarMensajeErrorContac = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulariocont.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccessContac.classList.add("d-none");
    const errores = [];

       // validar nombre y apellido
    if (!regUserNameContac.test(userNameContac.value) || !userNameContac.value.trim()) {
        userNameContac.classList.add("is-invalid");

        errores.push({
            tipo: alertNameContac,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userNameContac.classList.remove("is-invalid");
        userNameContac.classList.add("is-valid");
        alertNameContac.classList.add("d-none");
    }

    // validar email
    if (!regUserEmailContac.test(userEmailContac.value) || !userEmailContac.value.trim()) {
        userEmailContac.classList.add("is-invalid");

        errores.push({
            tipo: alertEmailContac,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmailContac.classList.remove("is-invalid");
        userEmailContac.classList.add("is-valid");
        alertEmailContac.classList.add("d-none");
    }

    
// validar Comentario
if (!userComentContac.value.trim()) {
    userComentContac.classList.add("is-invalid");

    errores.push({
        tipo: alertComentContac,
        msg: "Escriba su consulta.",
    });

} else {
    userComentContac.classList.remove("is-invalid");
    userComentContac.classList.add("is-valid");
    alertComentContac.classList.add("d-none");
}

    if (errores.length !== 0) {
        pintarMensajeErrorContac(errores);
        return;
    }

    console.log("Reserva enviada con éxito, verifique su casilla de correo para más información");
    pintarMensajeExitoContac();
});

