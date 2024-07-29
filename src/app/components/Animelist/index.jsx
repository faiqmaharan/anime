import Image from "next/image";
import Link from "next/link";

const Animelist = ({ api}) => {
  return (
    <div className="animecak grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 px-10 pb-5">
        {api.data?.map((anime,index)=>{
            return(
                <Link href={`/anime/ ${anime.mal_id}`} className="cursor-pointer text-color-dark hover:text-color-cyan transition-all" target="blank"
                key={index}
                >
                  <div className="bg-color-primary hover:rotate-1 transition-all rounded-lg shadow-xl">
                    <Image 
                    src={anime.images.webp.image_url} 
                    alt="...." 
                    width={350} 
                    height={350}
                    className="w-full max-h-64 object-cover rounded-lg" />
                    <p className=" text-md p-4 ">{anime.rank}</p>
                    <p className="font-bold md:text-xl text-md p-4 ">{anime.title}</p>
                    <p className=" text-md p-4 ">Eps {anime.episodes}</p>
                    </div>
              </Link>
              
            )
        })}
    
    </div>
    
  );
};

export default Animelist;

