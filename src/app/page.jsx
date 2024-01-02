
import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

export default async function Page() {
  
  const topAnime = await getAnimeResponse('top/anime', 'limit=8')
  let recomendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry')
  recomendedAnime = reproduce(recomendedAnime, 4)
  

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  )
}
