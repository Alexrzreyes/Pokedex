import Image from "next/image";

export default function Card() {
    return (
        <div>
            <h1>Hello World</h1>
            <div className="max-w-7x1 mx-auto py-12 margin-50">
                <div className="relative grid grid-cols-2 bg-red-500">
                    <div className="relative">
                        <Image
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                            layout="intrinsic"
                            alt="logo"
                            width="200"
                            height="200" />
                    </div>
                    <p className="max-w-prose py-12 px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, commodi, molestiae repudiandae blanditiis, ipsam iusto amet cumque dolore delectus minus asperiores voluptate eveniet distinctio magnam corporis est impedit eius.
                    </p>
                </div>
            </div>
        </div>
    );
}