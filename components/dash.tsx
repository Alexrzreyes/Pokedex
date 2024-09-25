import Image from "next/image";
import { useEffect } from "react";

export default function Dash(props: any) {

  let pokeInfo = {
    nombre: '',
    atk: '',
    def: '',
    mov1: '',
    mov2: '',
    mov3: '',
    hab1: '',
    hab2: ''
  }

  function getPokeInfo(response: {
    abilities: any;
    moves: any; name: any; stats: any
  }) {
    //Obtener el nombre
    let nombre = response.name;
    let formatNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
    pokeInfo.nombre = formatNombre;

    //Obtener el atk
    let attackStat = response.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === "attack");
    console.log('attackStat: ', attackStat);
    pokeInfo.atk = attackStat.base_stat;

    //Obtener la def
    let defenseStat = response.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === "defense");
    console.log('defenseStat: ', defenseStat);
    pokeInfo.def = defenseStat.base_stat;

    //Obtener movimientos
    let mov = response.moves;
    let first = mov[0]?.move?.name;
    let sec = mov[1]?.move?.name;
    let third = mov[2]?.move?.name;

    pokeInfo.mov1 = first;
    pokeInfo.mov2 = sec;
    pokeInfo.mov3 = third;

    //Obtener habilidades
    let abs = response.abilities;
    pokeInfo.hab1 = abs[0]?.ability?.name;
    pokeInfo.hab2 = abs[1]?.ability?.name;

  }

  function obtenerNombre() {

  }

  const info = [
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg", alt: "Pokemon 1", nombre: 'Bulbasaur', atk: '49', def: '49', mov1: 'swords-dance', mov2: '', ab1: '', ab2: ''},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg", alt: "Pokemon 1", nombre: 'Ivysaur', atk: '62', def: '63', mov1: 'swords-dance', ab1: 'overgrow', ab2: 'chlorophyll'},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg", alt: "Pokemon 1", nombre: 'Venusaur', atk: '49', def: '49', mov1: '', mov2: '', ab1: 'overgrow', ab2: 'chlorophyll'},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg", alt: "Pokemon 1", nombre: 'Charmander', atk: '49', def: '49', mov1: '', mov2: '', ab1: '', ab2: ''},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg", alt: "Pokemon 1", nombre: 'Charmeleon', atk: '49', def: '49', mov1: '', mov2: '', ab1: '', ab2: ''},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg", alt: "Pokemon 1", nombre: 'Charizard', atk: '49', def: '49', mov1: '', mov2: '', ab1: '', ab2: ''},
  ]

  return (
    <div>
      <div className="max-w-7x1 mx-auto py-12 margin-50">
        <div className="relative grid grid-cols-2 bg-red-500">
          {info.map((element, index) => (
            <div className="relative">
              <Image
                key={index}
                src={element.src}
                layout="intrinsic"
                alt="logo"
                width="200"
                height="200"
                className="margin-auto"
              />
              <div className="text-center">
                <ul>
                  <li>Nombre: {element.nombre}</li>
                  <li className="font-800">ATK: {element.atk}</li>
                  <li className="font-800">DEF: {element.def}</li>
                  <li>Movimiento: {element.mov1}</li>
                  <li>Movimiento: {element.mov2}</li>
                  <li>Habilidades: {element.ab1}</li>
                  <li>Habilidades: {element.ab2}</li>
                </ul>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}