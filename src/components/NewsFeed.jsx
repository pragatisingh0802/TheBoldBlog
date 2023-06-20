import React from 'react';
import './NewsFeed.css';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItems: [
        {
          id: 1,
          title: 'Breaking News 1',
          description: 'This is the first breaking news item.',
        },
        {
          id: 2,
          title: 'Breaking News 2',
          description: 'This is the second breaking news item.',
        },
        {
          id: 3,
          title: 'Breaking News 3',
          description: 'This is the third breaking news item.',
        },
        {
          id: 4,
          title: 'Breaking News 4',
          description: 'This is the second breaking news item.',
        },
          {
            id: 5,
            title: 'Breaking News 5',
            description: 'This is the second breaking news item.',
          },
          {
            id: 6,
            title: 'Breaking News 6',
            description: 'This is the second breaking news item.',
          },
      ],
    };
  }

  render() {
    const { newsItems } = this.state;

    return (
    <>
      <span className='heading-news'><h1> <center>News Feed </center></h1> </span>
        <div className='newsfeed-div'>
          
          <ul> 
          
            {newsItems.map(item => (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </li>
            ))}
        
          </ul>
        </div>
      </>
    );
  }
}

export default NewsFeed;
