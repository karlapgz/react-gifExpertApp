export const getGifs = async ( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fA2ZG0xc79d8k0S7Xoi7AbuBKDpiCPiB&q=${ encodeURI(category) }&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}