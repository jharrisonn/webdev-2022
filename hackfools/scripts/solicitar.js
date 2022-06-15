var PRECO, BASE, RECHEIO, MOLHO, ADICIONAIS;

function obter() {
    let preco = 0.0;
    let eBases = document.getElementById("base");
    let eRecheios = document.getElementById("recheio");
    let eMolhos = document.getElementById("molho");
    let hValor = document.getElementById("valor");

    let base = eBases.value;
    let recheio = eRecheios.value;
    let molho = eMolhos.value;
    let listaAdcs = [];

    preco += precos.bases[base.replace(' ', '')] + precos.recheios[recheio.replace(' ', '')] + precos.molhos[molho.replace(' ', '')];

    sabores.adicionais.forEach(adc => {
        let chkBox = document.getElementById(adc);
        if (chkBox.checked) {
            if (adc == "sim") {
                listaAdcs = [
                    "milho", 
                    "oregano",
                    "ovo",
                    "batata frita", 
                    "ralo", 
                    "abacaxi",
                    "clipe de papel"]
                preço = precos.adicionais.sim
            } else {
                listaAdcs.push(adc);
                preco += precos.adicionais[adc.replace(' ', '')];
            }
        }
    });

    console.log(base, recheio, molho, listaAdcs, preco);

    hValor.innerText = "Tudo para piorar seu dia a dia. Preço: R$ " + preco;
    PRECO = preco;
    BASE = base;
    RECHEIO = recheio;
    MOLHO = molho;
    ADICIONAIS = listaAdcs;
}

function visualizar() {
    obter();
    let preview = document.getElementById("preview");

    preview.innerHTML = '';
    preview.innerHTML += '<img id="base" src="pizzas/bases/' + BASE + '.PNG" width="400px" height="400px">';
    preview.innerHTML += '<img id="recheio" src="pizzas/recheios/' + RECHEIO + '.PNG" width="400px" height="400px">';
    preview.innerHTML += '<img id="molho" src="pizzas/molho/' + MOLHO + '.PNG" width="400px" height="400px">';
    ADICIONAIS.forEach(adc => {
        preview.innerHTML += '<img id="recheio" src="pizzas/adicionais/' + adc + '.PNG" width="400px" height="400px">';
    });
}

function confirmar() {
    visualizar()

    window.location.href="finalizar.html"
}