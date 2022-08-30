import React,{useEffect,useState} from "react";
import axios from "axios"

import { Image, NewsContainer } from "./NewsStyles";
import { NewsElem } from "./NewsElem";
import { LoadingElem } from "../../Providers/LoadingElem";
const FreeNewsoptions = {
    method:"get",
    url:"https://free-news.p.rapidapi.com/v1/search",
    params:{q:'Corona Virus',lang:"en"},
    headers: {
        'x-rapidapi-host': 'free-news.p.rapidapi.com', 
        'x-rapidapi-key': '4cd378e8b8mshf932f4b3207ccbcp13319ejsn0cfacbf77ca5'
    }
}
/* const CovidNewsOptions = {
    method:"get",
    url:"https://covid-19-news.p.rapidapi.com/v1/covid",
    params: {q: 'covid', lang: 'en', media: 'True'},
    headers: {
        'x-rapidapi-host': 'covid-19-news.p.rapidapi.com',
        'x-rapidapi-key': '4cd378e8b8mshf932f4b3207ccbcp13319ejsn0cfacbf77ca5'
      }
} */

/* const VaacovidOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',headers: {
    'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
    'x-rapidapi-key': '4cd378e8b8mshf932f4b3207ccbcp13319ejsn0cfacbf77ca5'
    }
} */

/* const vaccovidFunc = (datas) => {
    console.log(datas)
    const info = datas.map(data=>{
        const {link,pubDate,title,urlToImage,reference,news_id} =  data
        return {link,pubDate,title,urlToImage,reference,news_id}
    })
    const ids = info.map(i=>i.news_id)
    const filtered = info.filter(({news_id},index)=>!ids.includes(news_id,index+1))
    return filtered
}

const CovidNewsDataFunc = (datas) => {
    const info = datas.map(data=>{
        const {author,link,media,published_date,title,_id} = data
        return {author,link,media,published_date,title,_id}
    })
    const ids = info.map(i=>i._id)
    const filtered = info.filter(({_id},index)=>!ids.includes(_id,index+1))
    return filtered
}
 */
const FreeNewsFunc = (datas) => {
    const info = datas.map(data=>{
        const {author,link,media,published_date,title,_id} = data
        return {author,link,media,published_date,title,_id}
    })
    const ids = info.map(i=>i._id)
    const filtered = info.filter(({_id},index)=>!ids.includes(_id,index+1))
    return filtered
}

const functionFetch = async(setter)=>{

    /* let Vaccovid = false
    axios.request(VaacovidOptions).then(data=>{
        Vaccovid = data
    }).catch(e => {
        Vaccovid = false
    })
    let covidNewsData = false
    axios.request(CovidNewsOptions).then(data=>{
        covidNewsData = data
    }).catch(e=>{
        covidNewsData = false
    }) */
    try{
        const FreeNews = await axios.request(FreeNewsoptions)
        const FreeNewsData = [...FreeNews.data.articles]
        
        /* const CovidNewsData =  covidNewsData !== false &&  covidNewsData.data.articles
        const VaccovidData = Vaccovid  !== false && Vaccovid.data */
        const VaccovidDataSegregation = []
        const CovidNewsDataSegregation =  []
        const FreeNewsDataSegregation = FreeNewsFunc(FreeNewsData)
        setter(()=>{
            return {VaccovidDataSegregation,CovidNewsDataSegregation,FreeNewsDataSegregation}
        })
    }catch(e){
        console.log(e)
    }
}

const NewsApi = () => {
    const [newsData,newsDataFetch] = useState([])
    const {VaccovidDataSegregation=[],CovidNewsDataSegregation=[],FreeNewsDataSegregation=[]} = newsData
    useEffect(()=>{
        functionFetch(newsDataFetch)
    },[])
    return <>
    <Image src={"https://www.desktopbackground.org/p/2010/07/28/55376_earth-at-night-wallpapers_4080x2291_h.jpg"}/>
    <NewsContainer>
    {
        FreeNewsDataSegregation.length > 0 ? <NewsElem Data={FreeNewsDataSegregation} Link={"link"} ImgSrc={"media"} Author={"author"} Rdate={"published_date"} Title={"title"} UniqueId={'_id'}/> : <LoadingElem/>
    }
    {
        (CovidNewsDataSegregation !== undefined && Array.isArray(CovidNewsDataSegregation)) && <NewsElem Data={CovidNewsDataSegregation} Link={"link"} ImgSrc={"media"} Author={"author"} Rdate={"published_date"} Title={"title"} UniqueId={'_id'} />
    }
    { 
        (VaccovidDataSegregation && Array.isArray(VaccovidDataSegregation))  &&<NewsElem Data={VaccovidDataSegregation} Link={"link"} ImgSrc={"urlToImage"} Author={"reference"} Rdate={"pubDate"} Title={"title"} UniqueId={'news_id'}/>
    }
    </NewsContainer>
    </>
}

export default NewsApi



