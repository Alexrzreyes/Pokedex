import Image from "next/image";
import { useEffect } from "react";

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

  let info = props.data;

  return (
    <div>
      <div className="max-w-7x1 mx-auto py-12 margin-50">
        <div className="relative grid grid-cols-2 bg-red-500">
          {info.map((element: any, index: any) => (
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