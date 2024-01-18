import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  articles=[
    // {
    //   "source": {
    //   "id": null,
    //   "name": "The Athletic"
    //   },
    //   "author": "Mike Sando",
    //   "title": "Bill Belichick is the NFL’s greatest coach … since Don Shula? A closer look at the GOAT debate - The Athletic",
    //   "description": "Belichick has six Super Bowls and is approaching Shula's wins record, but there's still a great case for Shula as the NFL's gold standard.",
    //   "url": "https://theathletic.com/5182515/2024/01/12/bill-belichick-don-shula-patriots-dolphins-colts/",
    //   "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/01/11211541/01-12-Shula-Belichick-2-1.jpg",
    //   "publishedAt": "2024-01-12T14:20:53Z",
    //   "content": "Bill Belichicks New England Patriots won three-fourths of their regular-season games during Tom Bradys 19-year tenure as starting quarterback, an incredible run of dominance. Winning seemed automatic… [+16572 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "espn",
    //   "name": "ESPN"
    //   },
    //   "author": "Mike Reiss",
    //   "title": "Sources - Jerod Mayo to replace Belichick as Patriots coach - ESPN",
    //   "description": "The Patriots have chosen Jerod Mayo as Bill Belichick's successor and the 15th head coach in franchise history, sources told ESPN.",
    //   "url": "https://www.espn.com/nfl/story/_/id/39293221/patriots-hire-jerod-mayo-replace-bill-belichick-sources-say",
    //   "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0112%2Fr1276492_1296x729_16%2D9.jpg",
    //   "publishedAt": "2024-01-12T13:36:00Z",
    //   "content": "FOXBOROUGH, Mass. -- Moving swiftly one day after parting ways with legendary coach Bill Belichick, the New England Patriots have chosen Jerod Mayo as his successor and the 15th head coach in franchi… [+3514 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "reuters",
    //   "name": "Reuters"
    //   },
    //   "author": "Amanda Cooper",
    //   "title": "Oil soars as US, UK strike on Houthis stirs up geopolitical worries - Reuters.com",
    //   "description": "The oil price surged on Friday, as the escalating conflict in the Red Sea region threatened to further disrupt global trade, while stocks rose in light of U.S. inflation data that reinforced investors' view that interest rates could soon fall.",
    //   "url": "https://www.reuters.com/markets/global-markets-wrapup-1-2024-01-12/",
    //   "urlToImage": "https://www.reuters.com/resizer/N2py2qcbFodMzlsK-tWN4fp4L60=/1920x1005/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZRYUUXRIMRMJJP3OXTZ732IK2M.jpg",
    //   "publishedAt": "2024-01-12T12:38:00Z",
    //   "content": "LONDON, Jan 12 (Reuters) - The oil price surged on Friday, as the escalating conflict in the Red Sea region threatened to further disrupt global trade, while stocks rose in light of U.S. inflation da… [+4270 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": null,
    //   "name": "New York Post"
    //   },
    //   "author": "Stephanie Webber",
    //   "title": "Emma Stone proudly applies to 'Jeopardy!' every June — refuses to do the celebrity version - New York Post ",
    //   "description": "“You can only take the test once a year with your email address, and I’ve never gotten on the show.” — Emma Stone",
    //   "url": "https://nypost.com/2024/01/12/entertainment/emma-stone-applies-to-jeopardy-every-june-i-watch-it-daily/",
    //   "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/01/us-actress-emma-stone-arrives-74756298.jpg?quality=75&strip=all&w=1024",
    //   "publishedAt": "2024-01-12T12:35:00Z",
    //   "content": "Who is the lead actress in ‘Poor Things’?\r\nEmma Stone is a really big “Jeopardy!” fan. So much so, that the Oscar winner applies to the game show every single year.\r\n“I apply every June,” she said du… [+2429 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "al-jazeera-english",
    //   "name": "Al Jazeera English"
    //   },
    //   "author": "Al Jazeera",
    //   "title": "UK to increase military funding for Ukraine as PM Sunak visits Kyiv - Al Jazeera English",
    //   "description": "British prime minister to announce new aid for Ukraine of 2.5 billion pounds ($3.2bn) for next financial year.",
    //   "url": "https://www.aljazeera.com/news/2024/1/12/uk-to-increase-military-funding-for-ukraine-as-pm-sunak-visits-kyiv",
    //   "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/2024-01-12T111320Z_1001701828_RC2AG5AB0JPD_RTRMADP_3_UKRAINE-CRISIS-BRITAIN-SUNAK-1705059111.jpg?resize=1920%2C1440",
    //   "publishedAt": "2024-01-12T12:10:09Z",
    //   "content": "British Prime Minister Rishi Sunak is visiting Kyiv to announce a new package of support for Ukraine, including an increase in military funding for its war against Russia.\r\nSunak is expected to revea… [+2918 chars]"
    //   }
  ]
   static defaultProps={
    country :'in',
    pageSize: 8,
    category: "General"
   }   
   static propTypes={
       country :PropTypes.string,
       pageSize :PropTypes.number,
       category: PropTypes.string
   }   



  constructor(){
    super();
    console.log("this is a news component");
    this.state={
      articles : this.articles ,
      loading :false,
      page :1
     
    }
  }
  async componentDidMount(){
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a2e75ada41f24443a74f127df5e1b4b9&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,totalResults : parsedData.totalResults})
  
}
handlePrevclick=async()=>{
 console.log("prev");

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a2e75ada41f24443a74f127df5e1b4b9&page=${this.state.page-1}&pageSize=${this.props.pageSize} `;
 let data = await fetch(url);
 let parsedData = await data.json();
 console.log(parsedData);
 this.setState({ 
  page: this.state.page-1 ,
  articles: parsedData.articles })}
 


handleNextclick=async()=>{
  console.log("next");
  if(this.state.page + 1 > Math.ceil( this.state.totalResults / this.props.pageSize)){
}
  else{
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a2e75ada41f24443a74f127df5e1b4b9&page=${this.state.page+1}&pageSize=${this.props.pageSize} `;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ 
   page: this.state.page + 1 ,
   articles: parsedData.articles })}
}

 render() {
    return (
    <div>
        <div className='container my-3'>
        <h1 className="text-center" style={ {margin:"40px 0px",color:"#154899"}}>The Real-Time  </h1>
      
          <div className="row">
            {  this.state.articles.map((element)=>{
              return(<div className='col-md-4'>
             <NewsItem  key={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""}
             newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>) 
            })}
          
           <div className="container d-flex justify-content-between">
             <button type="button"disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevclick}>Previous</button>
             <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextclick}>Next</button>
           </div>
        </div>
       </div>
    </div>
    )
  }
}

export default News