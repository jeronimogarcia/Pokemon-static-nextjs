import { GetStaticProps, NextPage } from "next";
import { Button } from "@nextui-org/react";
import { MainLayout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = (props) => {

  console.log(props)
  return (
    <>
      <MainLayout title="Listado de Pokemones">
        <Button color="gradient">
          <h1>Hello World</h1>
        </Button>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log(data)
  return{
    props:{
      pokemons: data.results
    }
  }
}


export default HomePage;
