import Image from "next/image";

export default function Home() {
  return (
      <main>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="logo"
          className="h-[200px] w-[200px]"
          width="500"
          height="500"
        />
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
          alt="logo"
          className="h-[200px] w-[200px]"
          width="500"
          height="500"
        />
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt="logo"
          className="h-[200px] w-[200px]"
          width="500"
          height="500"
        />
      </main>
  );
}
