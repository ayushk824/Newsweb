import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,newsurl,author,date,source}= this.props;
    return (
      <div>
         <div className="card">
          <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/peregrine-lunar-lander-121939314-16x9_0.jpg?VersionId=FqtR6HV90RsxLND2KnssVvrqkEqd2L_v":imageUrl} className="card-img-top" alt="..."/>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"50%", zIndex:"1"}}> {source} </span>
          <div className="card-body">
              <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}.............</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {date} </small></p>
         <a href={newsurl} target="_blanks" className="btn btn-sm btn-info btn-primary">More...</a>
      </div>
      </div>
    
      </div>

    )
  }
}

export default NewsItem