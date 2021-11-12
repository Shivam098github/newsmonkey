import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[]
    
    constructor(){
        super();
        console.log('this is constructor from news component')
        this.state={
            articles: this.articles,
            page: 1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=ca18ec9824464fe0894f61d47fb7f88f&page=${this.state.page}`
        let data=await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState(
        {articles: parsedData.articles}
        )
    }
    handlePreClick=async ()=>{  
        this.setState({
            page: this.state.page-1
        })
        let url=`https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=ca18ec9824464fe0894f61d47fb7f88f&page=${this.state.page}`
        let data=await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState(
        {articles: parsedData.articles,
            page: this.state.page-1
        }
        )
        
    }
    
    handleNextClick=async ()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=ca18ec9824464fe0894f61d47fb7f88f&page=${this.state.page+1}`
        let data=await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState(
        {articles: parsedData.articles,
            page: this.state.page+1
        }
        )
    }

    render() {
        return (
            <div className="container my-3">
                <h2>News Monkey</h2>
            <div className="row">
                {this.state.articles.map((element)=>{
                    // console.log(element)
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
        )
    }
}
