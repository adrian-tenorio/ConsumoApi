const API_KEY='84dc91a4d772477a6c2ca453c2b60ca9';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const moviesgridid=document.getElementById('movies-grid');

const obtenerPeliculas=async()=>{
    const url= `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
    const respuesta=await fetch(url);
    const datos=await respuesta.json();
    return datos.results;
}

const crearTarjeta=(pelicula)=>{
    const {title,release_date,vote_average,poster_path}= pelicula;
    const año=release_date?release_date.split('_')[0]:'N/A';
    const image=poster_path ? `${IMAGE_URL}${poster_path}`:'';
    const rating = vote_average ? vote_average.toFixed(1):'N/A'; 
    return `
        <article class = "movie-card">
            <div class = "move-card__poster">
                <img class = "movie-card__image" src="${image}" alt ="${title}
                ">
                <span class="movie-card__rating">${rating}</span> 
            </div>
            <div class="movie-card__content">
                <h3 class = "movie-card__title">${title}</h3>
                <p class="movie-card_year">${año}</p>
            </div>
        </article>
    `;
}

const iniciar = async()=>{
    console.log('Mostrar pelicula');
    const peliculas = await obtenerPeliculas();
    console.log(`${peliculas.length} peliculas obtenidas`);
    //const primera = peliculas[0];
    //console.log('Primera pelicula',primera);
    moviesgridid.innerHTML=peliculas.map(crearTarjeta).join('');
    console.log('Primera pelicula renderizada');
}

iniciar();

const loadingDiv = document.getElementById('loading');
const erroDiv = document.getElementById('error');
const errorMessage=document.getElementById('error-message');

const mostrarLoading=()=> {
    loadingDiv.style.display='flex';
    erroDiv.style.display='none';
    moviesgrid.innerHTML='';

}

const ocultarLoading=()=>{
    loadingDiv.style.display='none';
}

const mostrarError=()=>{
    ocultarLoading();
    errorMessage=mensaje;
    erroDiv.style.display='flex';
    moviesgrid.innerHTML='';
}
/* 
const probarApi=async()=>{
    const url= `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
    console.log('url de la peticion', url);
     
    const respuesta=await fetch(url);
    const datos=await respuesta.json();
    
    console.log('Respuesta completa',datos);
    console.log('Peliculas',datos.results);
    console.log('Ttoal de resultados',datos.total_results);
}

 

probarApi(); */
 
