
'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

interface PokeInfo {
  imagenSrc: string,
  nombre: string,
  atk: string,
  def: string,
  mov1: string,
  mov2: string,
  ab1: string,
  ab2: string,
}

export default function Search() {
  const [text, setText] = useState('')
  const [errorText, setErrorText] = useState('')
  const [isVisible, setVisible] = useState<boolean>(false);
  const [pokeData, setPokeData] = useState<PokeInfo>({
    imagenSrc: '',
    nombre: '',
    atk: '',
    def: '',
    mov1: '',
    mov2: '',
    ab1: '',
    ab2: '',
  })

  useEffect(() => {
    console.log('input text: ', text);
  }, [text]);

  const getPokemon = async () => {
    console.log('llamando getPokemon: ');
    setErrorText('Buscando...') 
    const query = await fetch('https://pokeapi.co/api/v2/pokemon/'+text);
    if (!query.ok) {
      if (query.status === 404) {
        console.log('Intenta otro nombre o número de Pokemon');
        setErrorText('Pokemon no encontrado ): Intenta otro nombre o número de Pokemon');
        setVisible(false)
      }
      return;
    }
    const response = await query.json();
    console.log('response: ', response);
    console.log('response de la API: ', response);
    getPokeInfo(response);
    setErrorText('');
    setVisible(true);
  }

  let pokeInfo = {
    imagenSrc: '',
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
    pokeInfo.imagenSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+response.id+'.svg';

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

    pokeInfo.mov1 = first;
    pokeInfo.mov2 = sec;

    //Obtener habilidades
    let abs = response.abilities;
    pokeInfo.ab1 = abs[0]?.ability?.name;
    pokeInfo.ab2 = abs[1]?.ability?.name;

    console.log('pokeInfo: ', pokeInfo);
    setPokeData(pokeInfo);
  }

  function searchPokemon() {
    console.log('el texto es: ', text);
    getPokemon();
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
        <label htmlFor="fruits">Filtrar por tipo:</label>
        <select id="fruits" name="fruits" className="margin-l-10">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </div>

      <div style={{ display: isVisible ? 'block' : 'none' }}>
        <Image
          src={pokeData.imagenSrc}
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

    </div>
  );
}