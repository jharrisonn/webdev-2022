function sabores_load() {
    let eBases = document.getElementById("base");
    let eRecheios = document.getElementById("recheio");
    let eMolhos = document.getElementById("molho");
    let eAdicionais = document.getElementById("adicionais");
    let eOpcionais = document.getElementById("opcionais");

    sabores.bases.forEach(base => {
        eBases.innerHTML += '<option value="' + base + '">' + base + ' - R$ ' + precos.bases[base.replace(' ', '')] + '</option>';
    });

    sabores.recheios.forEach(recheio => {
        eRecheios.innerHTML += '<option value="' + recheio + '">' + recheio + ' - R$ ' + precos.recheios[recheio.replace(' ', '').replace(' ', '')] + '</option>';
    });

    sabores.molhos.forEach(molho => {
        eMolhos.innerHTML += '<option value="' + molho + '">' + molho + ' - R$ ' + precos.molhos[molho.replace(' ', '')] + '</option>';
    });

    sabores.adicionais.forEach(adc => {
        eAdicionais.innerHTML += '<input type="checkbox" id="' + adc + '" name="' + adc + '" value="' + adc +'"><label for=' + adc + '> ' + adc + ' - R$ ' + precos.adicionais[adc.replace(' ', '').replace(' ', '')] + '</label><br>'
    });

    listaopcoes.forEach(op => {
        eOpcionais.innerHTML += '<input type="checkbox" id="' + op + '" name="' + op + '" value="' + op +'"><label for=' + op + '> ' + opcoes[op][0] + ' - R$ ' + opcoes[op][1] + '</label><br>';
    });
}