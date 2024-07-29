"use client"

import React, { useEffect, useState } from "react";
import Pagination from "../components/utilities/Pagination";
import HeaderMenu from "../components/utilities/HeaderMenu";
import Animelist from "../components/Animelist";
import { getAnimeResponse } from "../libs/api-libs";
import Link from "next/link";

const Page = async () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        // const data = await response.json() 
        const populerAnime = await getAnimeResponse ("top/anime", `page=${page}`)
         setTopAnime(populerAnime)     
        //  kalau dibaca kita mau cari data poopuleranime dari library getanimeresponse yang kita bikin, dg resouce top/anime, dan option data page yang mana page itu berdasarkan state yang kita punya 
    }

    useEffect(() => {
        fetchData()
    },[page])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            
            <HeaderMenu tittle={(
            <div> <span style={{color:'white'}}>ANIME</span> <span style={{ color: 'orange' }}>TERPOPULER</span> <span style={{color:'white'}}>#{page}</span> 
                <div className="items-center justify-center">
                <Link href="/" className=" text-color-primary underline hover:text-color-accent text-sm text-center">kembali?</Link>
                </div>
            </div>           
)} />
            <Pagination 
            page={page} 
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}/>
            <Animelist api={topAnime}/>
            <div className=" mr-5 text-2xl flex justify-center items-center py-4 px-4 text-color-primary mb-8">
                <a onClick={handleScrollToTop} className="text-base font-semibold text-white bg-color-accent py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out cursor-pointer">UP</a>
            </div>


        </div>
    )
}

export default Page