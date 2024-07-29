import Animelist from "@/app/components/Animelist"
import Header from "./components/Animelist/Header"
import { getAnimeResponse} from "./libs/api-libs"

const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()
  
  const topAnime = await getAnimeResponse ("top/anime","limit=12")



  return (
<>
{/* anime populer */}
      <section>
      <Header title="Rekomendasi" linkTitle="Lihat Semua" linkHref="/populer"/>
      <Animelist api ={topAnime}/>
      </section>
      
</>
  )
}

export default Page