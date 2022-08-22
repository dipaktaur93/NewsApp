import React, { Component } from 'react'

export class NewsItems extends Component {
    

  render() {
     let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>

<div className="card" >
  <img src={!imageUrl?"https://images.news18.com/ibnlive/uploads/2022/07/james-webb-jupiter-3-165814504116x9.jpg":imageUrl} className="card-img-top" alt='...'/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <a rel='noreferrer' target="_blank"className="btn btn-sn btn-dark">Read More</a>
  </div>
</div>
        
      </div> 
    )
  }
}

export default NewsItems
