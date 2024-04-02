//import { fetchDataAndStore } from "./apiService.js";
import data from "@/data.json";

const FetchVideo = () => {

  return (
    <div>
      <h2>Video List</h2>
 
      {data.map((video, index) => (
        <div key={index}>
          <h3>{video.title}</h3>
          <img src={video.thumbnail} alt={video.title} />
      
        </div>
      ))}
    </div>
  );
};

export default FetchVideo;
