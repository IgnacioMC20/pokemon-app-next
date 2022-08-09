export const toggleFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export const existeInFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.includes(id);
}

export const getFavorites = () => {
    if(typeof window === "undefined"){
        return [];
    }
    return JSON.parse(localStorage.getItem("favorites") || "[]");
}