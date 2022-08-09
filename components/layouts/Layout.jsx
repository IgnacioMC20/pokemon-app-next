import Head from "next/head"
import { Navbar } from "../ui"

export const Layout = ({ children, title }) => {

    const origin = (typeof window !== "undefined") ? window.location.origin : "";
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Ignacio Martínez" />
                <meta name="description" content="Información sobre el pokemón xxxxx" />
                <meta name="keywords" content="xxxxx, pokemon, pokedex" />

                <meta property="og:title" content={`Informacion sobre el pokemon ${ title }`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            {/* Navbar */}
            <Navbar />

            <main style={{
                padding: '5px 20px',
            }}>
                {children}
            </main>
        </>
    )
}
