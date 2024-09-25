
'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Dash from "./dash";

interface PokeInfo {
  src: string,
  nombre: string,
  atk: string,
  def: string,
  mov1: string,
  mov2: string,
  ab1: string,
  ab2: string,
}

interface PokeTypes {
  name: string,
  url: string,
}

export default function Search() {
  const [text, setText] = useState('')
  const [errorText, setErrorText] = useState('')
  const [isVisible, setVisible] = useState<boolean>(false);
  const [types, setTypes] = useState<PokeTypes[]>([]);
  const [dataPokemonTypes, setPokeTypes] = useState<PokeInfo[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [pokeData, setPokeData] = useState<PokeInfo>({
    src: '',
    nombre: '',
    atk: '',
    def: '',
    mov1: '',
    mov2: '',
    ab1: '',
    ab2: '',
  })

  useEffect(() => {
    const getTypes = async () => {
      const query = await fetch('https://pokeapi.co/api/v2/type/?limit=10');
      const response = await query.json();
      setTypes([...response.results]);
    }
    getTypes();
  }, []);

  const getPokemon = async () => {
    setErrorText('Buscando...')
    const query = await fetch('https://pokeapi.co/api/v2/pokemon/' + text);
    if (!query.ok) {
      if (query.status === 404) {
        setErrorText('Pokemon no encontrado ): Intenta otro nombre o número de Pokemon');
        setVisible(false)
      }
      return;
    }
    const response = await query.json();
    getPokeInfo(response);
    setErrorText('');
    setVisible(true);
  }

  let pokeInfo = {
    src: '',
    nombre: '',
    atk: '',
    def: '',
    mov1: '',
    mov2: '',
    ab1: '',
    ab2: ''
  }

  function getPokeInfo(response: {
    id: number;
    abilities: any;
    moves: any; name: any; stats: any
  }) {
    //Obtener el numero
    pokeInfo.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + response.id + '.svg';

    //Obtener el nombre
    let nombre = response.name;
    let formatNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
    pokeInfo.nombre = formatNombre;

    //Obtener el atk
    let attackStat = response.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === "attack");
    pokeInfo.atk = attackStat.base_stat;

    //Obtener la def
    let defenseStat = response.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === "defense");
    pokeInfo.def = defenseStat.base_stat;

    //Obtener movimientos
    let mov = response.moves;
    let first = mov[0]?.move?.name;
    let sec = mov[1]?.move?.name;

    pokeInfo.mov1 = first;
    pokeInfo.mov2 = sec;

    //Obtener habilidades
    let abs = response.abilities;
    pokeInfo.ab1 = abs[0]?.ability?.name;
    pokeInfo.ab2 = abs[1]?.ability?.name;

    setPokeData(pokeInfo);
  }

  function searchPokemon() {
    getPokemon();
  }

  function handleSelectedOption(selected: any) {
    setSelectedOption(selected);
    let selectedData = types.find(type => type.name === selected);
    getPokemonTypes(selectedData.url);
  }

  let sixPokemonsData = [];
  const getPokemonTypes = async (url: string) => {
    setErrorText('Buscando por tipo...')
    const query = await fetch(url);
    if (!query.ok) {
      if (query.status === 404) {
        setErrorText('Tipos de pokemon no encontrados ): Intentalo de nuevo');
        setVisible(false)
      }
      return;
    }
    const response = await query.json();
    let firstSixPokemon = response.pokemon.slice(0, 6).map((p: { pokemon: { name: any; }; }) => p.pokemon.name);
    for (let i = 0; i < 6; i++) {
      const query = await fetch('https://pokeapi.co/api/v2/pokemon/' + firstSixPokemon[i]);
      const response = await query.json();
      let current = {
        src: '',
        nombre: '',
        atk: '',
        def: '',
        mov1: '',
        mov2: '',
        ab1: '',
        ab2: '',
      };
      //Obtener el numero
      current.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + response.id + '.svg';

      //Obtener el nombre
      let nombre = response.name;
      let formatNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
      current.nombre = formatNombre;

      //Obtener el atk
      let attackStat = response.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === "attack");
      current.atk = attackStat.base_stat;

      //Obtener la def
      let defenseStat = response.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === "defense");
      current.def = defenseStat.base_stat;

      //Obtener movimientos
      let mov = response.moves;
      let first = mov[0]?.move?.name;
      let sec = mov[1]?.move?.name;

      current.mov1 = first;
      current.mov2 = sec;

      //Obtener habilidades
      let abs = response.abilities;
      current.ab1 = abs[0]?.ability?.name;
      current.ab2 = abs[1]?.ability?.name;

      sixPokemonsData.push(current);
    }
    setPokeTypes(sixPokemonsData);
    setErrorText('');
  }

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
      <div className="margin-20">
        {errorText}
      </div>
      <div className="margin-50">
        <label htmlFor="pokemonTypes">Buscar por tipo:</label>
        <select id="pokemonTypes" name="pokemonTypes" className="margin-l-10" value={selectedOption} onChange={e => handleSelectedOption(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
        </select>
      </div>

      <div style={{ display: isVisible ? 'block' : 'none' }}>
        <Image
          src={pokeData.src}
          layout="intrinsic"
          alt="logo"
          width="200"
          height="200"
          className="margin-auto"
        />
        <div className="text-center">
          <ul>
            <li>Nombre: {pokeData.nombre}</li>
            <li className="font-800">ATK: {pokeData.atk}</li>
            <li className="font-800">DEF: {pokeData.def}</li>
            <li>Movimiento: {pokeData.mov1}</li>
            <li>Movimiento: {pokeData.mov2}</li>
            <li>Habilidades: {pokeData.ab1}</li>
            <li>Habilidades: {pokeData.ab2}</li>
          </ul>
        </div>
      </div>

      <Dash data={dataPokemonTypes}></Dash>

    </div>
  );
}