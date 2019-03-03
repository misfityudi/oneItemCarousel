import React from 'react';
import Slider from "react-slick";
import VideoContainer from './videoContainer.jsx';


const YoutubeVideos = [
    'https://www.youtube.com/watch?v=hzqUBzDDSpw',
    'https://www.youtube.com/watch?v=MfTbHITdhEI',
    'https://www.youtube.com/watch?v=vUTI4bPdlgE&list=RDEMLnYgIZdQ3hhjQv-gdzK5Jw&index=9',
    'https://www.youtube.com/watch?v=2LegcNVM_nM&list=RDEMLnYgIZdQ3hhjQv-gdzK5Jw&index=16',
    'https://www.youtube.com/watch?v=ZGDGdRIxvd0&list=RDEMLnYgIZdQ3hhjQv-gdzK5Jw&index=22',
]

export default class OneItemCarousel extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
          videos : []
      }
  }  

  componentWillMount(){
    const VideoItem = YoutubeVideos.map(function(item, index){
        return <VideoContainer key={item.index} src={item.snippet.thumbnails.medium.url} videoTitle={item.snippet.title} loungeName={item.snippet.channelId}/>
    })
    this.setState=({
        videos : VideoItem
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {this.state.videos}
        </Slider>
      </div>
    );
  }
}