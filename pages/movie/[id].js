import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>pelicula con id: {id}</h1>
    </div>
  );
};

export default Index;
