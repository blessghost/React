import styles from "./MovieCard.module.css"

export function MovieCard({movie}) {
    console.log(styles);
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <li className={styles.movieCard}>
        <img width={240} height={350} className={styles.movieImage} src={imageUrl} alt={movie.tittle}/>
        <div>{movie.title}</div>
        </li>;
}