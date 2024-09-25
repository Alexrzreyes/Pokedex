'use client'
import Image from "next/image";
import { useEffect } from "react";
import Dash from "../../components/dash";
import Search from "../../components/search";
import DataApi from "../../components/data"

type Props = {
  data: any;
};

// Solicitud a la API en el servidor
// export const getServerSideProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await res.json();
//   console.log('data es: ', data);

//   return {
//     props: {
//       data,
//     },
//   };
// };

export default function Home() {

  return (
      <main className="bg-brown">
        
        <h1 className="text-center font-semibold text-4xl mb-6 margin-top-50">Pokedex!</h1>
        <Search/>
        <Dash></Dash>


        {/* <div className="max-w-7x1 mx-auto py-12 margin-50">
          <div className="relative grid grid-cols-2 bg-red-500">
            <div className="relative">
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                layout="intrinsic"
                alt="logo"
                width="200"
                height="200"
              />
            </div>
            <p className="max-w-prose py-12 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, commodi, molestiae repudiandae blanditiis, ipsam iusto amet cumque dolore delectus minus asperiores voluptate eveniet distinctio magnam corporis est impedit eius.
            </p>
          </div>
        </div> */}


        <div>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="logo"
          width="200"
          height="200"
        />
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
          alt="logo"
          width="200"
          height="200"
        />
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt="logo"
          className="h-[200px] w-[200px]"
          width="500"
          height="500"
        />

        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          layout="intrinsic"
          alt="logo"
          width="200"
          height="200"
        />




        </div>
        {/* <Card>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
        </Card> */}


        {/* <Card maxW='-moz-max-content'>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              width="500"
              height="500"
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card> */}

        {/* <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              width="500"
              height="500"
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card> */}

        {/* <div style={{
          display: 'grid',
          gridGap: '8px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px auto))'
        }}>
          <div style={{ position: 'relative', height: '400px' }}>
          <Image
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
              alt='Green double couch with wooden legs'
              fill
              sizes='100vw'
              style={{ objectFit:'cover'}}
            />
          </div>
        </div> */}
      </main>
  );
}
