'use client'
import Dash from "../../components/dash";
import Search from "../../components/search";

export default function Home() {

  return (
    <main className="bg-brown">

      <h1 className="text-center font-semibold text-4xl mb-6 margin-top-50">Pokedex!</h1>
      <Search/>
      <Dash></Dash>

      {/*<div className="max-w-7x1 mx-auto py-12 margin-50">
          <div className="relative grid grid-cols-2 bg-red-500">
          </div>
        </div> */}

    </main>
  );
}
