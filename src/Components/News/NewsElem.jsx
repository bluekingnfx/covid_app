import React from "react"
import { ImgLoad } from "../../Providers/LoadingElem";
import { NewsParent, NewsImgStyle, ReferenceOfNews,NewsProviderInfo,PubDate, NewsTitleDiv } from "./NewsStyles";
const DeImgUrl = "https://wexnermedical.osu.edu/-/media/images/wexnermedical/blog/2020-stories/04/fake-news-about-covid-19/coronavirus-news_small.jpg?la=en&hash=548FEFB83E6BD46F821389B6170DAF69EC80BD95?width=320"

const DefaultImg = e => {
    e.target.src = DeImgUrl
}

export const NewsElem = ({Data,Link,ImgSrc,Author,Rdate,Title,UniqueId})=>{
    return <>
        {Data.map(i=>{
        return <a href={i[Link]} target="_blank" rel='noreferrer' style={{textDecoration:"none"}} key={`${i[UniqueId]}+${Math.floor(Math.random()*10)}`}>
            <NewsParent>
                <ImgLoad />
                {<NewsImgStyle src={i[ImgSrc] ? i[ImgSrc] : DeImgUrl} /* onLoad={(e)=>functionResize()} */
                onError={(e)=>DefaultImg(e)}/>}
                <NewsProviderInfo>
                    <ReferenceOfNews>
                        {i[Author] ? i[Author].length > 12 ? `${i[Author].slice(0,12)}...` : i[Author] : "N/A" }
                    </ReferenceOfNews>
                    <PubDate>
                        {i[Rdate] && new Date(i[Rdate]).toDateString().slice(4)}
                    </PubDate>
                </NewsProviderInfo>
                    <NewsTitleDiv>
                        {i[Title] && i[Title].length > 100 ? (`${i[Title].slice(0,100)}...`): i[Title]}
                    </NewsTitleDiv>
            </NewsParent>
        </a>
    })}
    
    </>
}

