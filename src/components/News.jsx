import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Individual from './Individual'
import SimpleBackdrop from './SimpleBackdrop'
import Pagination from '@mui/material/Pagination';

const News = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const {page} = useParams()
    const [pages, setPages] = useState("")
    const [newPage, setNewPage] = useState(1)

    useEffect(()=>{
        getNews()
    },[page])

    const getNews = async()=>{
        setLoading(true)
        const res = await axios.get(`https://my-news101.herokuapp.com/${page}?page=${newPage}`)
        setNews(res.data.stories)
        setPages(res.data.pages)
        setLoading(false)
        console.log(res.data)
    }
 
    const pageChange = (e, page)=>{
        setNewPage(page)
        getNews()
        window.scrollTo(0, 0)
    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'center', gap:"30px", marginBottom:"30px"}}>
        <SimpleBackdrop open = {loading}></SimpleBackdrop>
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px", alignItems:"center"}}>
            {news.map((el)=>{
                return(
                    <Individual {...el} key={el.id}></Individual>
                )
            })}
        </div>
        <Pagination onChange={pageChange} variant="outlined" shape="rounded" count={pages} />
    </div>

  )
}

export default News