alert("O JavaScript está funcionando!");

const botaoComecar = document.getElementById("comecar");

botaoComecar.addEventListener("click", function() {
    document.querySelector(".inicio").style.display = "none";

    const telaCartas = document.createElement("div");
    telaCartas.className = "tela-cartas";

    telaCartas.innerHTML = `
        <h1>Suas cartinhas 💌</h1>
        <p>Algumas estão esperando por você...</p>

        <div class="cartas">
            <div class="carta bloqueada" id="carta1">
                <span>🔒</span>
                <h2>Abra quando estiver triste</h2>
                <button id="botaoCarta1">Desbloquear</button>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Abra quando sentir saudade de mim</h2>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Abra quando estiver brava comigo</h2>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Abra quando precisar sorrir</h2>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Abra quando precisar de um abraço</h2>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Abra quando estiver insegura</h2>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Abra quando estiver feliz</h2>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Abra quando quiser lembrar de nós</h2>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Abra quando quiser saber o quanto eu te amo</h2>
            </div>

            <div class="carta bloqueada">
                <span>🔒</span>
                <h2>Uma carta secreta...</h2>
            </div>
        </div>
    `;

    document.body.appendChild(telaCartas);

    document.getElementById("botaoCarta1").addEventListener("click", function() {
        iniciarCarta1();
    });
});


function iniciarCarta1() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="missao">
            <h1>Antes de abrir essa carta... 🤭</h1>

            <p>
                Existe um coração escondido por aqui ❤️<br>
                Encontre ele para desbloquear sua cartinha.
            </p>

            <div id="coracao-escondido">❤️</div>
        </div>
    `;

    document.getElementById("coracao-escondido").addEventListener("click", function() {
        abrirCarta1();
    });
}

function abrirCarta1() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="carta-aberta">
            <div class="envelope">
                💌
            </div>

            <div class="mensagem-carta">
                <h1>Para quando você estiver triste 💌</h1>

                <p>
                    Meu amor,<br><br>

                    Se você está lendo isso, provavelmente não está tendo um dos seus melhores dias... então, antes de qualquer coisa, queria que você lembrasse de uma coisa: você não precisa passar por tudo sozinha. ❤️<br><br>

                    Mesmo que eu não esteja aí do seu lado nesse exato momento, queria poder te dar um abraço bem apertado e ficar com você até tudo ficar um pouquinho melhor.<br><br>

                    Eu sei que nem sempre consigo resolver tudo o que você sente, mas quero que saiba que pode contar comigo. Nos dias bons, nos dias ruins, quando estiver feliz, triste, brava ou simplesmente sem vontade de falar com ninguém.<br><br>

                    Você é muito importante para mim, e eu espero que nunca se esqueça disso.<br><br>

                    Então respira fundo, meu amor. Essa tristeza vai passar. E quando ela passar, eu ainda vou estar aqui. 💙<br><br>

                    Agora seca essas lágrimas, minha Barbie 🤭❤️<br><br>

                    Eu te amo.
                </p>

                <button id="voltarCartas">
                    Voltar para as cartinhas 💙
                </button>
            </div>
        </div>
    `;

    document.getElementById("voltarCartas").addEventListener("click", function() {
        location.reload();
    });
}
