//programacion asincrona
const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase(); 
    const url =  `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=> {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./PokemonNoEncontrado.png");
        }
        else{
            return res.json();
        }
        //console.log(res) 
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;

        console.log(pokeImg);
        pokeImage(pokeImg);
        //Stats
        Healtpoints = document.getElementById('HealtPoints').innerHTML = data.stats[0].stat.name +": \t"+data.stats[0].base_stat;
        Attack = document.getElementById('Attack').innerHTML = data.stats[1].stat.name +": \t"+data.stats[1].base_stat;
        Defence = document.getElementById('Defence').innerHTML = data.stats[2].stat.name +": \t"+data.stats[2].base_stat;
        SpecialAttack = document.getElementById('SpecialAttack').innerHTML = data.stats[3].stat.name +": \t"+data.stats[3].base_stat;
        SpecialDefence = document.getElementById('SpecialDefence').innerHTML = data.stats[4].stat.name +": \t"+data.stats[4].base_stat;
        Speed = document.getElementById('Speed').innerHTML = data.stats[5].stat.name +": \t"+data.stats[5].base_stat;
        //types
        Type0 = document.getElementById('Types').innerHTML = "Type: " + data.types[0].type.name;
        //number in the pokedex
        NumOfPokemon=document.getElementById('NumOfPokemon').innerHTML = "Num: " + data.order;

    })
}

//fetchPokemon();
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
//pokeImagen("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"); 

/*const imprimir = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeimput = pokeName.value
    console.log("hola " + pokeimput);
}*/

