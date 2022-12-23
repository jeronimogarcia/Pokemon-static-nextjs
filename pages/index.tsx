import { NextPage } from "next";
import { Button } from "@nextui-org/react";
import { MainLayout } from "../components/layouts";

const HomePage: NextPage = () => {
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
export default HomePage;
