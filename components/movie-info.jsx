import { API_URL } from "../app/constants";
import style from "../styles/movie-info.module.css"

export async function  getMovie(id) {
    console.log(`Fetching movies: ${Date.now()}`)
    // await new Promise((resolve)=> setTimeout(resolve,5000))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}){
    const movie = await getMovie(id)
    return <div className={style.container}>
        <img src={movie.poster_path} className={style.poster} alt={movie.title} />
        <div className={style.info}>
            <h1 className={style.title}>{movie.title}</h1>
            <h3>⭐{movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
        </div>
    </div>
}