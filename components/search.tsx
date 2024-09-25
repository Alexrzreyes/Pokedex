
'use client'
import { useEffect, useState } from "react";

export default function Search() {
  const [text, setText] = useState('')
  const [errorText, setErrorText] = useState('')

  // useEffect(() => {
  //   const getPokemon = async () => {
  //     const query = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  //     const response = await query.json();
  //     console.log('response de la API: ', response);
  //     //getPokeInfo(response);
  //     //console.log('pokeInfo: ', pokeInfo);
  //   }
  //   getPokemon();
  // }, []);

  useEffect(() => {
    console.log('input text: ', text);
  }, [text]);

  function obtenerNombre() {

  }

  function getPokeInfo() {

  }

  const getPokemon = async () => {
    console.log('llamando getPokemon: ');
    const query = await fetch('https://pokeapi.co/api/v2/pokemon/'+text);
    if (!query.ok) {
      // Handle different status codes (like 404) here
      if (query.status === 404) {
        console.log('Intenta otro nombre o número de Pokemon');
        setErrorText('Pokemon no encontrado ): Intenta otro nombre o número de Pokemon');
      }
      return;
    }
    const response = await query.json();
    console.log('response: ', response);
    console.log('response de la API: ', response);
    setErrorText('');
    //getPokeInfo(response);
    //console.log('pokeInfo: ', pokeInfo);
  }

  function searchPokemon() {
    console.log('el texto es: ', text);
    getPokemon();
  }

  const info = [
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg", alt: "Pokemon 1", nombre: 'Bulbasaur', atk: '49', def: '49', mov1: 'swords-dance', mov2: '', ab1: '', ab2: '' },
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg", alt: "Pokemon 1", nombre: 'Ivysaur', atk: '62', def: '63', mov1: 'swords-dance', ab1: 'overgrow', ab2: 'chlorophyll' },
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg", alt: "Pokemon 1", nombre: 'Venusaur', atk: '49', def: '49', mov1: '', mov2: '', ab1: 'overgrow', ab2: 'chlorophyll' },
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg", alt: "Pokemon 1", nombre: 'Charmander', atk: '49', def: '49', mov1: '', mov2: '', ab1: '', ab2: '' },
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg", alt: "Pokemon 1", nombre: 'Charmeleon', atk: '49', def: '49', mov1: '', mov2: '', ab1: '', ab2: '' },
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg", alt: "Pokemon 1", nombre: 'Charizard', atk: '49', def: '49', mov1: '', mov2: '', ab1: '', ab2: '' },
  ]

  return (
    <div className="relative rounded-md shadow-sm text-center">
      <input
        value={text}
        placeholder="Buscar pokemon..."
        onChange={e => setText(e.target.value)}
        className="block w-full rounded-md"
      >
      </input>
      <button
        className="bg-salmon margin-l-10"
        type="button"
        onClick={getPokemon}
      > Buscar Pokemon</button>
      <div>
        {errorText}
      </div>
      <div className="margin-50">
        <label htmlFor="fruits">Filtrar por tipo:</label>
        <select id="fruits" name="fruits">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </div>

    </div>
  );
}