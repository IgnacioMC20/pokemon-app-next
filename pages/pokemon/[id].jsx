import { Grid, Image, Text, Card, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { getPokemon } from '../../api';
import { Layout } from '../../components/layouts';
import { capitalizedName, confettiFire, existeInFavorites, toggleFavorites } from '../../utils';

const PokemonPage = ({ pokemon }) => {

    const router = useRouter();
    const [isInFavorites, setIsInFavorites] = useState();

    const onToggleFavorite = () => {
        toggleFavorites(router.query.id);
        if(existeInFavorites(router.query.id)){
            setIsInFavorites(true);
            confettiFire();
        }else{
            setIsInFavorites(false);
        }

    }


    useEffect(() => {
        
        setIsInFavorites(existeInFavorites(router.query.id));
      
    }, [])
    



    return (
        <Layout title={`Pagina de ${capitalizedName(pokemon.name)}`}>
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

                                    {capitalizedName(pokemon.name)}
                                </Text>
                            </Grid>
                            <Grid xs={12}>
                                <Image
                                    src={pokemon.image}
                                    alt={pokemon.name}
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
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
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

export default PokemonPage;

export async function getStaticPaths() {

    let paths = [];
    for (let i = 1; i <= 151; i++) {
        paths = [...paths, { params: { id: i.toString() } }];
    }

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export const getStaticProps = async (context) => {

    const pokemon = await getPokemon(context.params.id);

    return {
        props: {
            pokemon
        }, // will be passed to the page component as props
    }
}

