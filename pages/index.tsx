import { GetStaticProps, NextPage } from "next";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { MainLayout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Listado de Pokemones">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map(({ id, name, img }) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image src={img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize">{name}</Text>
                    <Text>#{id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  console.log(data);

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default HomePage;
