import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { Grid, Image, Text, Card, Button } from '@nextui-org/react';

import { getNames, getPokemon } from '../../api'
import { Layout } from '../../components/layouts'
import { capitalizedName, confettiFire, existeInFavorites, toggleFavorites } from '../../utils'


const PokemonByNamePage = ({pokemon}) => {

  const { name, sprites, image, id, index } = pokemon;

  const router = useRouter();
  const [isInFavorites, setIsInFavorites] = useState();

  const onToggleFavorite = () => {
      toggleFavorites(index);
      if(existeInFavorites(index)){
          setIsInFavorites(true);
          confettiFire();
      }else{
          setIsInFavorites(false);
      }

  }


  useEffect(() => {
      
      setIsInFavorites(existeInFavorites(id));
    
  }, [])
  

    return (
    <Layout title={`Pagina de ${capitalizedName(name)}`}>
        <Grid.Container gap={2} justify='center' css={{
                marginTop: '50px',
            }}>
                <Grid xs={6}>
                    <Card>
                        <Card.Body>
                            <Grid xs={12} justify='center'>
                                <Text h1
                                    size={45}
                                    css={{
                                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                    }}
                                    weight="bold">

                                    {capitalizedName(name)}
                                </Text>
                            </Grid>
                            <Grid xs={12}>
                                <Image
                                    src={image}
                                    alt={name}
                                    width={200}
                                    height={300}
                                />
                            </Grid>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={6}>
                    <Card>
                        <Card.Body>
                            <Grid xs={12}>
                                <Image
                                    src={sprites.front_shiny}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={sprites.front_default}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={sprites.back_shiny}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={sprites.back_default}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                            </Grid>
                            <Grid xs={12} css={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Button shadow color='gradient' ghost={ !isInFavorites} auto onPress={onToggleFavorite}>
                                    {isInFavorites ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
                                </Button>
                            </Grid>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
    </Layout>
  )
}

export default PokemonByNamePage

export const getStaticProps = async (context) => {

    // console.log(context.params.name);
    const pokemon = await getPokemon(context.params.name);
    // console.log(pokemon);

    return {
        props: {
        pokemon
        }
    }
}

export const getStaticPaths = async() => {

    const names = await getNames();
    const paths = names.map( name => ({ params: { name: name } }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}