// pages/index.tsx
import React from 'react';

type Props = {
  data: any;
};

const DataApi: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Datos de la API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// Solicitud a la API en el servidor
export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default DataApi;
