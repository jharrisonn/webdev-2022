const page_elements = {}

const themes = {
    normal: {
        main: "#E30022",
        sec: "#3C91E6",
        dark: "#1e1e1e",
        light: "#fafafa"
    }, bug: {
        main: "#568203",
        sec: "#4F7942",
        dark: "#2D332C",
        light: "#E8F0E5"
    }, dark: {
        main: "#002147",
        sec: "#342e37",
        dark: "#2C2F33",
        light: "#fafafa"
    }, dragon: {
        main: "#0063DC",
        sec: "#EDFFAB",
        dark: "#2C2F33",
        light: "#E5E6F0"
    }, electric: {
        main: "#FFD800",
        sec: "#090C9B",
        dark: "#2C2F33",
        light: "#F0ECE5"
    }, fairy: {
        main: "#E936A7",
        sec: "#D891EF",
        dark: "#332C2E",
        light: "#EAE5F0"
    }, fighting : {
        main: "#D14461",
        sec: "#D70040",
        dark: "#332C2E",
        light: "#fafafa"
    }, fire: {
        main: "#CE2029",
        sec: "#E86100",
        dark: "#332C2E",
        light: "#fafafa"
    }, flying: {
        main: "#87BCDE",
        sec: "#A2BCEA",
        dark: "#2C2F33",
        light: "#E5E6F0"
    }, ghost: {
        main: "#011638",
        sec: "#606FBA",
        dark: "#302C33",
        light: "#EAE5F0"
    }, grass: {
        main: "#32CD32",
        sec: "#03C03C",
        dark: "#2D332C",
        light: "#E8F0E5"
    }, ground: {
        main: "#88540B",
        sec: "#4B3621",
        dark: "#332F2C",
        light: "#fafafa"
    }, ice: {
        main: "#B2FFFF",
        sec: "#71A6D2",
        dark: "#2C2F33",
        light: "#E5E6F0"
    }, poison: {
        main: "#32174D",
        sec: "#138808",
        dark: "#302C33",
        light: "#EAE5F0"
    }, psychic: {
        main: "#F4A460",
        sec: "#987456",
        dark: "#332C2E",
        light: "#EAE5F0"
    }, rock: {
        main: "#98817B",
        sec: "#9F8170",
        dark: "#332F2C",
        light: "#fafafa"
    }, steel: {
        main: "#54626F",
        sec: "#2A3439",
        dark: "#2C2F33",
        light: "#E5E6F0"
    }, water: {
        main: "#246BCE",
        sec: "#1034A6",
        dark: "#2C2F33",
        light: "#E5E6F0"
    }
}

const pokemon = {
    id: 25,
    name: "pikachu",
    types: [
        "electric"
    ],
    abilities: [
        "static", "lighting-rod"
    ]
}


// Convertendo um identifier (texto separado por '-' e em minúsculas) para um texto
function identifier_to_text(identifier="", capitalizeAll=false) {
    let text = identifier;

    text = text.replaceAll("-", " ");
    
    text = text[0].toUpperCase() + text.slice(1);

    if (capitalizeAll) {
        text = capitalize(text);
    }

    return text;
}

function capitalize(nonCap="") {
    let text = nonCap;

    for (let i = 1; i < text.length; i++) {
        if (text[i] == " ") {
            text = text.slice(0, i+1) + text[i+1].toUpperCase() + text.slice(i+2);
        }
    }

    return text;
}

function update_theme() {
    let bg = "";
    let fg = "";

    page_elements.html.style = `--main-color: ${themes[pokemon.types[0].type.name].main}; --sec-color: ${themes[pokemon.types[0].type.name].sec}; --fg-color: ${themes[pokemon.types[0].type.name].light}; --bg-color: ${themes[pokemon.types[0].type.name].dark}`;
    page_elements.poke_name.innerText = identifier_to_text(pokemon.name, true);

    page_elements.poke_types.innerHTML = "";
    pokemon.types.forEach(t => page_elements.poke_types.innerHTML += `<li><h2>${identifier_to_text(t.type.name, true)}</h2></li>`);

    page_elements.poke_abs.innerHTML = "";
    pokemon.abilities.forEach(t => page_elements.poke_abs.innerHTML += `<li>${identifier_to_text(t.ability.name)}</li>`);

    page_elements.poke_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    page_elements.poke_icon.src = `logos/${pokemon.types[0].type.name}.svg`;
}

function setup() {
    page_elements.html          = document.getElementsByTagName("html")[0];
    page_elements.page_title    = document.getElementsByTagName("title")[0];
    page_elements.search_bar    = document.getElementById("search-bar");
    page_elements.poke_img      = document.getElementById("poke-img");
    page_elements.poke_name     = document.getElementById("poke-name");
    page_elements.poke_types    = document.getElementById("poke-types");
    page_elements.poke_abs      = document.getElementById("poke-abs");
    page_elements.poke_img      = document.getElementById("poke-img");
    page_elements.poke_icon     = document.getElementById("poke-icon");
}

async function search() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${page_elements.search_bar.value.toLowerCase()}`);

    if (response.ok) {
        let json = await response.json();

        pokemon.id = json.id;
        pokemon.name = json.name;
        pokemon.types = json.types;
        pokemon.abilities = json.abilities;
    } else {
        alert(response.statusText);
    }

    update_theme();
}

function set_shiny() {
    page_elements.poke_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`;
}

function unset_shiny() {
    page_elements.poke_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
}