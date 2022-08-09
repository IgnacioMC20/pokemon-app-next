import { Grid } from '@nextui-org/react';
import { getPokemons } from '../api';
import { Layout } from '../components/layouts';
import { PokeCard } from '../components/pokemon/PokeCard';


export default function Home({ pokemons }) {

  return (
    <Layout title={'Listado de Pokemons'}>
       <Grid.Container gap={2} justify="center">
        {
          pokemons.results.map(pokemon => (
            <Grid xs={6} sm={2}  key={pokemon.name}>
              <PokeCard pokemon={pokemon} />
            </Grid>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}



// ? esta funcion solo se ejecuta del lado del servidor
export async function getStaticProps(context) {
  const pokemons = await getPokemons();




  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}