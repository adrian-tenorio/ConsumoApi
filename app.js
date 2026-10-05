const API_KEY='84dc91a4d772477a6c2ca453c2b60ca9';
const BASE_URL = 'https://api.themoviedb.org/3';
const probarApi=async()=>{
    const url= `${BASE_URL}/movie/popularx?api_key=${API_KEY}&language=es-ES`;
    console.log('url de la peticion', url);
     
    const respuesta=await fetch(url);
    const datos=await respuesta.json();
    
    console.log('Respuesta completa',datos);
    console.log('Peliculas',datos.results);
    console.log('Ttoal de resultados',datos.total_results);
}

 

probarApi();
 
