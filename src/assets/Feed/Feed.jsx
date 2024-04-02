import "@feed/Feed.css";
import data from "@/data.json";
//import FetchVideo from '../FetchVideo/Fetchvideo'
import PropTypes from 'prop-types';

function Feed({ selectedCategory, searchQuery}) {

  let filteredVideos = [...data];


  if (selectedCategory !== 'all') {
    filteredVideos = filteredVideos.filter(video => video.category === selectedCategory);
  }


  let searchFilteredVideos = [...data];
  

  if (searchQuery) {
    searchFilteredVideos = searchFilteredVideos.filter(video =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }


  let videosToDisplay = searchQuery ? searchFilteredVideos : filteredVideos;



  return (
    <div className="feed">
      {videosToDisplay.map((video, index) => (
        <div className="card" key={index}>
          <div className="image">
            <img src={video.thumbnail} alt="thumbnail" />
          </div>
          <div className="descp jost">
            <h2>{video.title}</h2>
            <h3>{video.channelName}</h3>
            <p>{`${video.views} views • ${video.uploadedDateTime}`}</p>
          </div>
        </div>
      ))}
    </div>
    
  );
}

Feed.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default Feed;
