import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Favorites, NoFavorites } from "../../components/ui";
import { getFavorites } from "../../utils/localFavorites";

const FavoritesPage = () => {


  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = getFavorites();
    setFavorites(favorites);
  }, []);
  

  return (
    <Layout title={'Listado de Favoritos'}>
      {
        favorites.length > 0 ? (<Favorites favorites={favorites} />) : <NoFavorites />
      }
    </Layout>
  )
}

export default FavoritesPage;

