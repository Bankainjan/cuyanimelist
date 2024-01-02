
import { getAnimeResponse } from "../../../libs/api-libs";
import AnimeList from "../../../components/AnimeList";
import Header from "../../../components/AnimeList/Header";

export default async function Page({ params }) {
    const { keyword } = params
    const deCodedKeyword = decodeURI(keyword)
  
    const searchAnime = await getAnimeResponse('anime', `q=${deCodedKeyword}`)

    return (
        <>
            <section>
                <Header title={`Pencarian untuk ${deCodedKeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}
