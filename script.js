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
                <button onclick="iniciarCarta1()">Desbloquear</button>
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
});
