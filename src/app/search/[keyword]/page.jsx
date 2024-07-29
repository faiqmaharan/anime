import Animelist from "@/app/components/Animelist"
import Header from "@/app/components/Animelist/Header"
import { getAnimeResponse } from "@/app/libs/api-libs"
import Link from "next/link";
 

const Page = async ({params}) => {
  const {keyword} = params

  // buat hilangin 20% ketika spasi misal one20%piece.pakai decodekeyword
    
  const decodedKeyword = decodeURI(keyword)

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  // const searchAnime = await response.json()       jadi gini ---> 

  const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)
 

  return (
<>
      <section>
        <div className="flex justify-between items-center py-4 px-4">
      <Header title={`Pencarian Untuk ${decodedKeyword}...`}  />
      <Link href="/" className=" text-color-primary underline hover:text-color-accent text-sm text-center">kembali?</Link>
        </div>

      <Animelist api ={searchAnime}/>
      
      </section>
      
</>
  )
}

export default Page