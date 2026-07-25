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

            <div class="carta bloqueada" id="carta4">
    <span>🔒</span>
    <h2>Abra quando precisar sorrir</h2>
    <button id="botaoCarta4">Desbloquear</button>
</div>

            <div class="carta bloqueada" id="carta5">
    <span>🔒</span>
    <h2>Abra quando precisar de um abraço</h2>
    <button id="botaoCarta5">Desbloquear</button>
</div>

            <div class="carta bloqueada" id="carta6">
    <span>🔒</span>
    <h2>Abra quando estiver insegura</h2>
    <button id="botaoCarta6">Desbloquear</button>
</div>

            <div class="carta bloqueada" id="carta7">
    <span>🔒</span>
    <h2>Abra quando estiver feliz</h2>
    <button id="botaoCarta7">Desbloquear</button>
</div>

            <div class="carta bloqueada" id="carta8">
    <span>🔒</span>
    <h2>Abra quando quiser lembrar de nós</h2>
    <button id="botaoCarta8">Desbloquear</button>
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
    document.getElementById("botaoCarta4").addEventListener("click", function() {
    iniciarCarta4();
});
   document.getElementById("botaoCarta5").addEventListener("click", function() {
    iniciarCarta5();
});
   document.getElementById("botaoCarta6").addEventListener("click", function() {
    iniciarCarta6();
});
    document.getElementById("botaoCarta7").addEventListener("click", function() {
    iniciarCarta7();
});
   document.getElementById("botaoCarta8").addEventListener("click", function() {
    iniciarCarta8();
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
function abrirCarta3() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="carta-aberta">
            <div class="envelope">
                💌
            </div>

            <div class="mensagem-carta">
                <h1>Para quando você estiver brava comigo 🤭💙</h1>
                
                    <p>
    Meu amor,<br><br>

    Se você está lendo essa carta, provavelmente está brava comigo... então, antes de qualquer coisa: respira 😭🤭<br><br>

    Eu sei que às vezes eu posso fazer alguma coisa que te irrita, falar alguma besteira ou simplesmente ser um completo idiota. E, mesmo que eu nem sempre perceba na hora, eu nunca quero que você fique mal por minha causa. ❤️<br><br>

    Se eu fiz alguma coisa que te magoou, me desculpa. De verdade.<br><br>

    Eu posso ser teimoso, posso errar e às vezes posso não saber exatamente o que falar... mas uma coisa eu sei: eu nunca quero perder você por causa de uma briga.<br><br>

    Então, quando você terminar de ler isso, talvez você ainda esteja brava comigo. E tudo bem 🤭<br><br>

    Mas, quando você estiver pronta...<br><br>

    vem falar comigo.<br><br>

    Porque, mesmo quando a gente briga, eu ainda amo você. E, sinceramente, você sabe que não consegue ficar brava comigo para sempre 😌💙<br><br>

    Agora pode parar de fazer essa carinha brava, minha Barbie 🤭❤️<br><br>

    Eu te amo.
                </p>

                <button id="voltarCartas3">
                    Voltar para as cartinhas 💙
                </button>
            </div>
        </div>
    `;

    document.getElementById("voltarCartas3").addEventListener("click", function() {
        location.reload();
    });
}
function iniciarCarta4() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="missao botao-fujao">
            <h1>Antes de abrir essa carta... 🤭</h1>

            <p>
                Clique no botão para desbloquear sua cartinha 😌💙
            </p>

            <button id="botaoFujao">
                Clique aqui 💌
            </button>

            <p id="mensagemVitoria"></p>
        </div>
    `;

    const botao = document.getElementById("botaoFujao");
    let tentativas = 0;

    function fugir() {
        tentativas++;

        if (tentativas >= 5) {
            botao.removeEventListener("mouseover", fugir);

            document.getElementById("mensagemVitoria").innerHTML =
                "Tá bom, tá bom 😭😂 você venceu!<br>Eu só queria te fazer sorrir 🤭💙";

            botao.innerText = "Abrir cartinha 💌";

            botao.style.position = "static";

            
            botao.removeEventListener("touchstart", fugir);

botao.innerText = "Abrir cartinha 💌";

botao.onclick = function() {
    abrirCarta4();
};;

            return;
        }

        const largura = window.innerWidth - botao.offsetWidth - 40;
        const altura = window.innerHeight - botao.offsetHeight - 40;

        botao.style.position = "fixed";
        botao.style.left = Math.random() * largura + "px";
        botao.style.top = Math.random() * altura + "px";
    }

    botao.addEventListener("mouseover", fugir);

    botao.addEventListener("touchstart", function() {
    fugir();
});
    function abrirCarta4() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="carta-aberta">
            <div class="envelope">💌</div>

            <div class="mensagem-carta">
                <h1>Para quando você precisar sorrir 😄💙</h1>

                <p>
                    Meu amor,<br><br>

                    Se você está lendo essa carta, então provavelmente está precisando sorrir um pouquinho... então vamos ver se eu consigo cumprir essa missão 😌💙<br><br>

                    Primeiro: você sabia que é oficialmente proibido ficar triste por muito tempo quando existe alguém tão lindo quanto eu pensando em você? 🤨😂<br><br>

                    Tá bom, talvez essa regra não exista... mas deveria existir 🤭<br><br>

                    Eu queria poder estar aí agora fazendo alguma coisa completamente idiota só para ver você rindo. Provavelmente eu faria alguma besteira, falaria alguma coisa sem sentido ou tentaria te irritar até você não conseguir mais ficar séria 😂❤️<br><br>

                    Mas, caso isso não seja suficiente...<br><br>

                    Lembre-se de que você tem um namorado que te ama muito, que pensa em você mais do que deveria e que provavelmente está sorrindo enquanto escreve essa carta. 🤭💙<br><br>

                    Então sorria, minha Barbie.<br><br>

                    Mesmo que seja só um pouquinho.<br><br>

                    <strong>SORRIA AGORA 😡😂❤️</strong><br><br>

                    Pronto. Agora eu espero que você esteja sorrindo, porque eu fiz essa carta especialmente para isso. 😌💙<br><br>

                    Eu te amo muito.
                </p>

                <button onclick="location.reload()">
                    Voltar para as cartinhas 💙
                </button>
            </div>
        </div>
    `;
    }
}
function iniciarCarta5() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="missao quebra-cabeca">
            <h1>Antes de abrir essa carta... 🤭</h1>

            <p>
                Existe uma mensagem escondida aqui... 🧩💙<br>
                Monte a frase correta para desbloquear sua cartinha.
            </p>

            <div id="palavras"></div>

            <p id="resultadoQuebraCabeca"></p>
        </div>
    `;

    let fraseCorreta = [
        "Se",
        "eu",
        "pudesse,",
        "te",
        "daria",
        "um",
        "abraço",
        "agora"
    ];

    let palavras = [...fraseCorreta];

    palavras.sort(() => Math.random() - 0.5);

    const container = document.getElementById("palavras");
    let resposta = [];

    palavras.forEach(function(palavra) {
        const botao = document.createElement("button");

        botao.innerText = palavra;

        botao.addEventListener("click", function() {
            resposta.push(palavra);
            botao.style.display = "none";

            const proximaPalavra = fraseCorreta[resposta.length - 1];

            if (palavra !== proximaPalavra) {
                document.getElementById("resultadoQuebraCabeca").innerText =
                    "Errado 😭😂 As palavras voltaram a se esconder!";

                setTimeout(function() {
                    iniciarCarta5();
                }, 1500);

                return;
            }

            if (resposta.length === fraseCorreta.length) {
                document.getElementById("resultadoQuebraCabeca").innerHTML =
                    "Você conseguiu 😭💙<br>Agora pode abrir sua cartinha! 🤗💌";

                setTimeout(function() {
                    abrirCarta5();
                }, 1500);
            }
        });

        container.appendChild(botao);
    });
}
function abrirCarta5() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="carta-aberta">
            <div class="envelope">
                💌
            </div>

            <div class="mensagem-carta">
                <h1>Para quando você precisar de um abraço 🤗💙</h1>

                <p>
                    Meu amor,<br><br>

                    Se você está lendo essa carta, então provavelmente está precisando de um abraço... então imagine que eu estou aí agora, bem pertinho de você, te dando aquele abraço apertado que faz a gente esquecer um pouquinho de tudo. 🤗💙<br><br>

                    Eu queria poder aparecer do seu lado sempre que você precisasse. Poder te abraçar quando você estivesse triste, quando estivesse cansada ou simplesmente quando quisesse ficar juntinha de mim. ❤️<br><br>

                    Mas, como eu não posso estar aí nesse exato momento, espero que essas palavras consigam te dar pelo menos um pouquinho da sensação de que eu estou pertinho. 💙<br><br>

                    Então fecha os olhos por alguns segundos e imagina eu te abraçando bem forte...<br><br>

                    Pronto. Agora você acabou de ganhar um abraço meu, mesmo que de longe. 🤗❤️<br><br>

                    E quando eu estiver aí com você, pode ter certeza que eu vou compensar todos os abraços que você precisou e eu não pude te dar. 😌💙<br><br>

                    Eu te amo muito, minha Barbie. 🤭❤️
                </p>

                <button onclick="location.reload()">
                    Voltar para as cartinhas 💙
                </button>
            </div>
        </div>
    `;
}
function iniciarCarta6() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="missao">
            <h1>Missão 6 🔐</h1>

            <p>
                Algumas frases estão escondendo uma mensagem... 🤫💙<br>
                Escolha as frases certas para descobrir o que eu quero te dizer.
            </p>

            <h2 id="etapaCarta6"></h2>

            <div id="opcoesCarta6"></div>

            <p id="mensagemEscondida6"></p>

            <p id="resultadoCarta6"></p>
        </div>
    `;

    let etapaAtual = 0;

    const etapas = [
        {
            opcoes: [
                "Você é perfeita e nunca deveria se sentir insegura. ❤️",
                "Você é alguém que eu escolhi para fazer parte da minha vida. 💙",
                "Você não precisa de ninguém para ser feliz. 🤍"
            ],
            correta: 1,
            mensagem: "Você é alguém que eu escolhi..."
        },

        {
            opcoes: [
                "Eu gosto de você apenas nos seus melhores dias. 😊",
                "Eu gosto de você quando você concorda comigo. 🤭",
                "Eu gosto de você exatamente como você é. ❤️"
            ],
            correta: 2,
            mensagem: "para fazer parte da minha vida, "
        },

        {
            opcoes: [
                "e eu não mudaria quem você é para agradar ninguém. 💙",
                "e espero que você mude algumas coisas em você. 😅",
                "e acho que você deveria ser igual a outras pessoas. 🤨"
            ],
            correta: 0,
            mensagem: "porque eu gosto de você exatamente como você é. "
        },

        {
            opcoes: [
                "Mas ainda existem pessoas melhores por aí. 🤨",
                "E, mesmo quando você não consegue enxergar o seu próprio valor, eu espero que nunca se esqueça do quanto é especial para mim. ❤️",
                "Então você precisa tentar ser mais parecida com outras pessoas. 😭"
            ],
            correta: 1,
            mensagem: "Você é muito especial para mim. ❤️"
        }
    ];

    let mensagemCompleta = "";

    mostrarEtapa();

    function mostrarEtapa() {
        const etapa = etapas[etapaAtual];

        document.getElementById("etapaCarta6").innerText =
            "Parte " + (etapaAtual + 1) + " de " + etapas.length + " 🔐";

        const container = document.getElementById("opcoesCarta6");
        container.innerHTML = "";

        etapa.opcoes.forEach(function(frase, indice) {
            const botao = document.createElement("button");
            
            botao.className = "opcao-bonita";
            
            botao.innerText = frase;
            
            botao.addEventListener("click", function() {

                if (indice === etapa.correta) {
                    mensagemCompleta += etapa.mensagem;
                    
                    document.getElementById("mensagemEscondida6").innerText =
                        mensagemCompleta;

                    etapaAtual++;

                    if (etapaAtual < etapas.length) {
                        setTimeout(function() {
                            mostrarEtapa();
                        }, 1200);

                    } else {
                        document.getElementById("resultadoCarta6").innerHTML =
                            "Você descobriu a mensagem escondida! 😭💙<br><br>" +
                            "Agora sua cartinha está desbloqueada 💌";

                        setTimeout(function() {
                            abrirCarta6();
                        }, 2000);
                    }

                } else {
                    document.getElementById("resultadoCarta6").innerText =
                        "Hmm... essa não parece ser a frase certa 🤨😂 Tenta de novo!";
                }
            });

            container.appendChild(botao);
        });
    }
}
function abrirCarta6() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="carta-aberta">
            <div class="envelope">
                💌
            </div>

            <div class="mensagem-carta">
                <h1>Para quando você estiver insegura 💙</h1>

                <p>
                    Meu amor,<br><br>

                    Se você está lendo essa carta, provavelmente está se sentindo insegura... então eu queria que você parasse por alguns minutos e lembrasse de uma coisa. ❤️<br><br>

                    Você não precisa ser perfeita para ser amada. Não precisa se comparar com ninguém. Não precisa mudar quem você é para ser suficiente para mim. 💙<br><br>

                    Eu gosto de você exatamente do jeito que você é. Com suas qualidades, seus defeitos, suas manias, seus momentos de insegurança e tudo aquilo que faz você ser você. ❤️<br><br>

                    Talvez existam coisas em você que você não goste muito... mas isso não significa que eu veja essas coisas da mesma forma.<br><br>

                    Às vezes, você pode olhar para si mesma e enxergar apenas aquilo que gostaria de mudar. Mas eu espero que, nesses momentos, você consiga lembrar que eu vejo muito mais do que isso. 🥺💙<br><br>

                    Eu vejo a garota que eu escolhi. A garota que eu gosto. A garota que me faz sorrir e que se tornou tão importante para mim. ❤️<br><br>

                    Então, quando se sentir insegura, lembra disso:<br><br>

                    <strong>Você não precisa ser outra pessoa para ser amada por mim.</strong> 💙<br><br>

                    Eu escolho você exatamente como você é. Hoje, amanhã e todos os dias. 🤍<br><br>

                    Eu te amo muito, minha Barbie. 🤭❤️
                </p>

                <button onclick="location.reload()">
                    Voltar para as cartinhas 💙
                </button>
            </div>
        </div>
    `;
}
function iniciarCarta7() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="missao jogo-felicidade">

            <h1>Missão 7 🎉</h1>

            <p>
                Clique nos emojis certos e encha sua barra da felicidade! 😄💙
            </p>

            <div class="barra-container">
                <div id="barraFelicidade"></div>
            </div>

            <p id="contadorFelicidade">
                0 / 15 emojis certos
            </p>

            <div id="areaEmojis"></div>

            <p id="resultadoFelicidade"></p>

        </div>
    `;

    const emojisCertos = ["😊", "🎉", "💙", "✨", "❤️", "😄", "🥳", "🤗"];
    const emojisErrados = ["😭", "😴", "😡", "😐", "😢", "🙄", "🤔", "😪"];

    const todosEmojis = [...emojisCertos, ...emojisErrados];

    let acertos = 0;
    let felicidade = 0;
    let jogoAtivo = true;

    function criarEmoji() {

        if (!jogoAtivo) return;

        const emoji = document.createElement("div");

        const emojiEscolhido =
            todosEmojis[Math.floor(Math.random() * todosEmojis.length)];

        emoji.innerText = emojiEscolhido;
        emoji.className = "emoji-caindo";
        
        emoji.style.left = Math.random() * 90 + "%";
        
        emoji.dataset.certo =
            emojisCertos.includes(emojiEscolhido) ? "true" : "false";

        emoji.style.left = Math.random() * 90 + "%";

        document.getElementById("areaEmojis").appendChild(emoji);

        emoji.addEventListener("click", function() {

            if (!jogoAtivo) return;

            if (emoji.dataset.certo === "true") {

                acertos++;
                felicidade += 100 / 15;

                if (felicidade > 100) {
                    felicidade = 100;
                }

                document.getElementById("barraFelicidade").style.width =
                    felicidade + "%";

                document.getElementById("contadorFelicidade").innerText =
                    acertos + " / 15 emojis certos";

                emoji.remove();

                if (acertos >= 15) {

    jogoAtivo = false;

    document.getElementById("resultadoFelicidade").innerHTML =
        "Você encheu a barra da felicidade! 🎉💙✨<br><br>" +
        "Sua cartinha está desbloqueada! 💌";

    setTimeout(function() {
        abrirCarta7();
    }, 2000);
                }

            } else {

                felicidade -= 5;

                if (felicidade < 0) {
                    felicidade = 0;
                }

                document.getElementById("barraFelicidade").style.width =
                    felicidade + "%";

                document.getElementById("resultadoFelicidade").innerText =
                    "Ops! Esse emoji era errado 😂";

                emoji.remove();
            }
        });

        setTimeout(function() {
            if (emoji.parentElement) {
                emoji.remove();
            }
        }, 5000);
    }

    const intervaloEmojis = setInterval(function() {
        if (jogoAtivo) {
            criarEmoji();
        } else {
            clearInterval(intervaloEmojis);
        }
    }, 700);
}
function abrirCarta7() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="carta-aberta">
            <div class="envelope">
                💌
            </div>

            <div class="mensagem-carta">
                <h1>Para quando você estiver feliz 🎉💙</h1>

                <p>
                    Meu amor,<br><br>

                    Se você está lendo essa carta, então provavelmente está feliz... e eu espero que essa felicidade esteja sendo tão grande quanto o sorriso que eu estou imaginando no seu rosto agora. 😄💙<br><br>

                    Eu queria poder estar aí do seu lado nesse momento, vendo você sorrir e comemorando junto com você. Porque, mesmo que a sua felicidade não tenha nada a ver comigo, eu ainda quero fazer parte dos seus momentos felizes. ❤️<br><br>

                    Sabe, uma das coisas que eu mais gosto é imaginar você feliz. Gosto de pensar que, em algum momento do seu dia, eu consegui arrancar um sorriso seu, mesmo que tenha sido fazendo alguma besteira ou falando alguma coisa completamente sem sentido. 🤭😂<br><br>

                    E eu quero que você saiba que a sua felicidade também é importante para mim. Quando você está feliz, eu fico feliz junto. 🥺💙<br><br>

                    Então aproveita esse momento. Sorria, comemore e guarde essa felicidade com carinho. ✨<br><br>

                    E quando você estiver feliz, lembra que existe alguém aqui que quer continuar fazendo parte dos seus momentos bons, dos seus momentos ruins e de todos os momentos que ainda vamos viver juntos. ❤️<br><br>

                    Ah, e parabéns por ter conseguido completar a missão! 😂🎉<br><br>

                    Eu fiz você ficar caçando emojis pela tela inteira só para chegar até essa cartinha. 🤭💙<br><br>

                    Espero que essa missão tenha deixado você ainda mais feliz.<br><br>

                    Eu te amo muito, minha Barbie. 💙❤️
                </p>

                <button onclick="location.reload()">
                    Voltar para as cartinhas 💙
                </button>
            </div>
        </div>
    `;
}
function iniciarCarta8() {
    const telaCartas = document.querySelector(".tela-cartas");

    telaCartas.innerHTML = `
        <div class="missao minecraft-missao">

            <h1>Missão 8 ⛏️💙</h1>

            <p>
                Bem-vinda ao mundo das nossas memórias... 🗺️<br>
                Explore o mapa e descubra o que está escondido por aqui.
            </p>

            <div id="mapaMinecraft">

                <div id="jogadorMinecraft">🧍‍♀️</div>

                <div class="bloco grama"></div>
                <div class="bloco grama"></div>
                <div class="bloco terra"></div>
                <div class="bloco grama"></div>
                <div class="bloco pedra"></div>

                <div class="bloco grama"></div>
                <div class="bloco terra"></div>
                <div class="bloco grama"></div>
                <div class="bloco pedra"></div>
                <div class="bloco grama"></div>

                <div class="bloco pedra"></div>
                <div class="bloco grama"></div>
                <div class="bloco terra"></div>
                <div class="bloco grama"></div>
                <div class="bloco grama"></div>

                <div class="bloco grama"></div>
                <div class="bloco pedra"></div>
                <div class="bloco grama"></div>
                <div class="bloco terra"></div>
                <div class="bloco grama"></div>

            </div>

            <div class="controles-minecraft">

                <button id="cima">⬆️</button>

                <div>
                    <button id="esquerda">⬅️</button>
                    <button id="baixo">⬇️</button>
                    <button id="direita">➡️</button>
                </div>

            </div>

            <p id="mensagemMinecraft"></p>

        </div>
    `;


    // PERSONAGEM E POSIÇÃO INICIAL

    const jogador = document.getElementById("jogadorMinecraft");

    let posicaoX = 0;
    let posicaoY = 0;

    const tamanhoBloco = 60;


    // FUNÇÃO PARA MOVIMENTAR O PERSONAGEM

    function moverJogador(direcao) {

        if (direcao === "cima" && posicaoY > 0) {
            posicaoY--;
        }

        if (direcao === "baixo" && posicaoY < 3) {
            posicaoY++;
        }

        if (direcao === "esquerda" && posicaoX > 0) {
            posicaoX--;
        }

        if (direcao === "direita" && posicaoX < 4) {
            posicaoX++;
        }

        jogador.style.left = (posicaoX * tamanhoBloco) + "px";
        jogador.style.top = (posicaoY * tamanhoBloco) + "px";

        jogador.style.transform = "scale(1.15)";

        setTimeout(function() {
            jogador.style.transform = "scale(1)";
        }, 150);
    }


    // BOTÃO PARA CIMA

    document.getElementById("cima").addEventListener("click", function() {
        moverJogador("cima");
    });


    // BOTÃO PARA BAIXO

    document.getElementById("baixo").addEventListener("click", function() {
        moverJogador("baixo");
    });


    // BOTÃO PARA ESQUERDA

    document.getElementById("esquerda").addEventListener("click", function() {
        moverJogador("esquerda");
    });


    // BOTÃO PARA DIREITA

    document.getElementById("direita").addEventListener("click", function() {
        moverJogador("direita");
    });


    // MOVIMENTAÇÃO PELO TECLADO TAMBÉM

    document.addEventListener("keydown", function(event) {

        if (event.key === "ArrowUp") {
            moverJogador("cima");
        }

        if (event.key === "ArrowDown") {
            moverJogador("baixo");
        }

        if (event.key === "ArrowLeft") {
            moverJogador("esquerda");
        }

        if (event.key === "ArrowRight") {
            moverJogador("direita");
        }

    });

}
