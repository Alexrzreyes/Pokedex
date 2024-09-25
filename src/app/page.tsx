'use client'
import Dash from "../../components/dash";
import Search from "../../components/search";

export default function Home() {

  const initial = [
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg", alt: "Pokemon 1", nombre: 'Bulbasaur', atk: '49', def: '49', mov1: 'swords-dance', mov2: 'razor-wind', ab1: 'overgrow', ab2: 'chlorophyll'},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg", alt: "Pokemon 1", nombre: 'Ivysaur', atk: '62', def: '63', mov1: 'swords-dance', ab1: 'overgrow', ab2: 'chlorophyll'},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg", alt: "Pokemon 1", nombre: 'Venusaur', atk: '82', def: '83', mov1: 'swords-dance', mov2: 'cut', ab1: 'overgrow', ab2: 'chlorophyll'},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg", alt: "Pokemon 1", nombre: 'Charmander', atk: '52', def: '43', mov1: 'mega-punch', mov2: 'fire-punch', ab1: 'blaze', ab2: 'solar-power'},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg", alt: "Pokemon 1", nombre: 'Charmeleon', atk: '64', def: '58', mov1: 'mega-punch', mov2: 'fire-punch', ab1: 'blaze', ab2: 'solar-power'},
    { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg", alt: "Pokemon 1", nombre: 'Charizard', atk: '84', def: '78', mov1: 'mega-punch', mov2: 'fire-punch', ab1: 'blaze', ab2: 'solar-power'},
  ]

  return (
    <main className="bg-brown">

      <h1 className="text-center font-semibold text-4xl mb-6 margin-top-50">Pokedex!</h1>
      <Search/>
      <Dash data={initial}></Dash>

      {/*<div className="max-w-7x1 mx-auto py-12 margin-50">
          <div className="relative grid grid-cols-2 bg-red-500">
          </div>
        </div> */}

    </main>
  );
}
