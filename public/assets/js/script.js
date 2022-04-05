const formLogin = document.querySelector(".local-login");

const formCad = document.querySelector(".local-cadastro");

const btnClose = document.querySelector(".close-form");

const btnCloseCad = document.querySelector(".close-form-cad");

const btnLogar = document.querySelector(".btn-logar");

const btnCad = document.querySelector(".btn-cad");

btnClose.addEventListener("click", (event) => {
    const evento = event.target;

    if (formLogin.id === "") {
        formLogin.id = "move-sair";
    }
});

btnCloseCad.addEventListener("click", (event) => {
    const evento = event.target;

    console.log(evento);

    if (formCad.id === "") {
        formCad.id = "move-sair";
    }
});

btnLogar.addEventListener("click", (event) => {
    const evento = event.target;

    if (formCad.id === "") {
        formCad.id = "move-sair";
        if (formLogin.id !== "") {
            formLogin.id = "";
        }
    } else {
        if (formLogin.id !== "") {
            formLogin.id = "";
        }
    }
});

btnCad.addEventListener("click", (event) => {
    const evento = event.target;

    if (formLogin.id === "") {
        formLogin.id = "move-sair";
        if (formCad.id !== "") {
            formCad.id = "";
        }
    } else {
        if (formCad.id !== "") {
            formCad.id = "";
        }
    }
});
