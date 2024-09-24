import Image from "next/image";

export default function Card(props: any) {
    const images = [
        { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg", alt: "Imagen 1" },
        { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg", alt: "Imagen 2" },
        { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg", alt: "Imagen 3" },
        { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg", alt: "Imagen 4" },
        { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg", alt: "Imagen 5" },
        { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg", alt: "Imagen 6" },
      ];
    // const endpoint = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + {props.number} + ".svg"
    return (
        <div>
            <div className="max-w-7x1 mx-auto py-12 margin-50">
                <div className="relative grid grid-cols-2 bg-red-500">
                    {images.map((image, index) => (
                        <div className="relative">
                            <Image
                                key={index}
                                src={image.src}
                                layout="intrinsic"
                                alt="logo"
                                width="200"
                                height="200"
                                className="margin-auto"
                            />
                            <p className="max-w-prose py-12 px-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, commodi, molestiae repudiandae blanditiis, ipsam iusto amet cumque dolore delectus minus asperiores voluptate eveniet distinctio magnam corporis est impedit eius.
                            </p>
                        </div>
                                            
                    ))}
                </div>
            </div>
        </div>
    );
}