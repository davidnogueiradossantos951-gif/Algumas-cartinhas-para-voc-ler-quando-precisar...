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

            <div class="carta bloqueada" id="carta2">
    <span>🔒</span>
    <h2>Abra quando sentir saudade de mim</h2>
    <button id="botaoCarta2">Desbloquear</button>
</div>

            <div class="carta bloqueada" id="carta3">
    <span>🔒</span>
    <h2>Abra quando estiver brava comigo</h2>
    <button id="botaoCarta3">Desbloquear</button>
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
    
    document.getElementById("botaoCarta2").addEventListener("click", function() {
    iniciarCarta2();
});
    document.getElementById("botaoCarta3").addEventListener("click", function() {
    iniciarCarta3();
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
function iniciarCarta2() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="missao senha-missao">
            <h1>Essa carta está protegida por uma senha... 🔒</h1>

            <p>
                Dica: é um apelido que você costuma me chamar 🤭💙
            </p>

            <input 
                type="text" 
                id="senhaCarta2" 
                placeholder="Digite a senha..."
            >

            <button id="botaoSenha2">
                Desbloquear 💌
            </button>

            <p id="mensagemSenha2"></p>
        </div>
    `;

    document.getElementById("botaoSenha2").addEventListener("click", function() {
        const senha = document.getElementById("senhaCarta2").value;
        const mensagem = document.getElementById("mensagemSenha2");

        if (senha.toLowerCase().trim() === "barbie") {
            mensagem.innerHTML = "Senha correta! 🤭💙<br>Eu sabia que você conseguiria...";

            setTimeout(function() {
                abrirCarta2();
            }, 1800);

        } else {
            mensagem.innerHTML = "Hmm... senha incorreta 🤨<br>Pensa em um apelido que você costuma me chamar 🤭";
        }
    });
}
function abrirCarta2() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="carta-aberta">
            <div class="envelope">
                💌
            </div>

            <div class="mensagem-carta">
                <h1>Para quando você estiver com saudade de mim 💙</h1>

                <p>
                    <p>
    Meu amor,<br><br>

    Se você está lendo essa carta, então provavelmente está sentindo saudade de mim... e eu espero que, de alguma forma, essas palavras façam você se sentir um pouquinho mais perto de mim. 💙<br><br>

    Eu também sinto saudade de você. Saudade das nossas conversas, das nossas brincadeiras, dos nossos momentos e até das coisas mais simples que a gente faz juntos.<br><br>

    Às vezes eu queria poder simplesmente aparecer aí do seu lado, te dar um abraço apertado e ficar juntinho de você sem precisar dizer nada. 🤍<br><br>

    Mas enquanto eu não posso fazer isso, espero que você lembre que, mesmo quando eu não estou fisicamente perto, meu coração continua pertinho do seu.<br><br>

    Então, quando sentir saudade de mim, lembra que provavelmente eu também estou pensando em você. 🤭❤️<br><br>

    E se a saudade apertar muito...<br><br>

    pode me chamar.<br><br>

    Sua Barbie está sempre aqui. 😌💙<br><br>

    Eu te amo muito.
</p>
                </p>

                <button id="voltarCartas2">
                    Voltar para as cartinhas 💙
                </button>
            </div>
        </div>
    `;

    document.getElementById("voltarCartas2").addEventListener("click", function() {
        location.reload();
    });
}
function iniciarCarta3() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="missao quiz-missao">
            <h1>Antes de abrir essa carta... 🤭</h1>

            <p id="perguntaQuiz"></p>

            <div id="opcoesQuiz"></div>

            <p id="resultadoQuiz"></p>
        </div>
    `;

    let perguntaAtual = 0;

    const perguntas = [
        {
            pergunta: "Qual apelido você costuma me chamar? 🤭",
            opcoes: ["Ken", "Barbie", "Príncipe", "Amor"],
            resposta: "Barbie"
        },
        {
            pergunta: "O que eu mais gosto de fazer com você? 💙",
            opcoes: ["Ficar longe", "Passar tempo com você", "Te ignorar", "Brigar"],
            resposta: "Passar tempo com você"
        },
        {
            pergunta: "O que acontece quando você fica brava comigo? 🤨",
            opcoes: ["Eu finjo que não ligo", "Eu tento fazer as pazes", "Eu desapareço", "Eu comemoro"],
            resposta: "Eu tento fazer as pazes"
        }
    ];

    mostrarPergunta();

    function mostrarPergunta() {
        const pergunta = perguntas[perguntaAtual];

        document.getElementById("perguntaQuiz").innerText = pergunta.pergunta;

        const opcoes = document.getElementById("opcoesQuiz");
        opcoes.innerHTML = "";

        pergunta.opcoes.forEach(function(opcao) {
            const botao = document.createElement("button");

            botao.innerText = opcao;

            botao.addEventListener("click", function() {
                if (opcao === pergunta.resposta) {
                    perguntaAtual++;

                    if (perguntaAtual < perguntas.length) {
                        mostrarPergunta();
                    } else {
                        abrirCarta3();
                    }
                } else {
                    document.getElementById("resultadoQuiz").innerText =
                        "Hmm... acho que você precisa pensar melhor 🤨😂";
                }
            });

            opcoes.appendChild(botao);
        });
    }
}
