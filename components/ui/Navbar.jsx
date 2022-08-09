import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {

    const { theme } = useTheme();

    const router = useRouter();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme.colors.gray100,
        }}>
            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
                alt='Icono de Pokemon'
                width={80}
                height={80}
            />
            <Link href='/'>
                <Text
                    color="white" style={{
                        cursor: 'pointer',
                        display: 'flex',
                    }}
                    h2 >
                    Pokemon
                </Text>

            </Link>

            <Spacer css={{ flex: 1 }} />
            <Link href='/favorites'>
                <Text color="white" style={{ cursor: 'pointer' }} h3>Favoritos</Text>

            </Link>

        </div>
    )
}
