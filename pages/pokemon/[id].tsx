import React from "react";
import { NextPage, GetStaticProps } from 'next'
import { MainLayout } from "../../components/layouts";
import { useRouter } from "next/router";
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse} from "../../interfaces";

interface Props {
  pokemon: Pokemon,
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
  const router = useRouter();
  console.log(router.query);

  return (
    <MainLayout title="Pokemon">
      <h1>{pokemon.name}</h1>
    </MainLayout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = Array.from({length: 151}, (_, i) => i + 1)

  return {
    paths: pokemon151.map( id => ({
    params: {id: id.toString()}
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (paths) => {
  // console.log(paths.params)
  const {id} = paths.params as {id: string}

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    },
  };
};



export default PokemonPage;
