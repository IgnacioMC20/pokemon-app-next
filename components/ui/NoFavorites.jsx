import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: 'calc(100vh - 100px)',
      }}>
        <Text h1>
          No hay favoritos
        </Text>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          width={350}
          height={350}
          css={{
            opacity: 0.3,
          }}
          alt="No hay favoritos"
        />
      </Container>
  )
}
