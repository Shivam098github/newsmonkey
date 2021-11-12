import React, { Component } from 'react'

export default class NewsItem extends Component {
    
    render() {
        let {title,imageUrl,newsUrl}=this.props
        return (
            <div className="mx-3 my-3 ">
                <div className="card" style={{maxheight: "18rem"}}>
                    <img src={imageUrl || "https://images.moneycontrol.com/static-mcnews/2019/04/bitcoin-blockchain-1-770x433.jpg"}  className="card-img-top" alt='...'/>
                    <div className="card-body">
                    <p className="card-title">{title}</p>
                   
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-warning">Read More{'>>'}</a>
                    </div>
                </div>
            </div>
        )
    }
}
