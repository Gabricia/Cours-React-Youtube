import axios from "axios";

const KEY = "AIzaSyDQoXn8ryanYRd6eXnr0TOKrdElsGBzD_U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});