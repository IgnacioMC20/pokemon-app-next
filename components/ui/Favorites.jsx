import { Card, Grid } from '@nextui-org/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

export const Favorites = ({ favorites }) => {
    const router = useRouter();

    const onClick = (id) => {
      router.push(`/pokemon/${id}`);
    }
  
    return (
        <Grid.Container gap={2} justify="center" css={{ 
            marginTop: '50px',
         }}>
            {
                favorites.map(id => (
                    <Grid xs={2} key={id}>
                        <Card isHoverable variant="bordered" css={{ mw: "400px", cursor: 'pointer' }}>
                            <Card.Body onClick={() => onClick(id)}>
                                <Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                                    width={500}
                                    height={500}
                                />
                            </Card.Body>
                        </Card>
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}
