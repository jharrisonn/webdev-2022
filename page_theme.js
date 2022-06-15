themesObj = {
    dark_mode: ["light_mode", "Tema Escuro"],
    light_mode: ["dark_mode", "Tema Claro"]
}

function themeSwitch() {
    let html = document.getElementsByTagName("html")[0];
    let btn = document.getElementById("thmSwitcher");
    let clss = html.className;

    html.className = themesObj[clss][0];
    btn.innerText = themesObj[clss][1];
}