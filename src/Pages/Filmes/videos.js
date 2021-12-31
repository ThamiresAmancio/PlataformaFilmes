import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "../Menu";
import { api } from "../service/api";
import ReactPlayer from "react-player";

function Videos() {
  const [videos, setVideos] = useState([]);
  const query = new URLSearchParams(useLocation().search);
  const api_key = "23ef43567db026524d99518cb6f8a479";
  const languagePtBr = "pt-BR";
  const id = query.get("id");

  useEffect(() => {
    try {
      api
        .get(`/movie/${id}/videos?api_key=${api_key}&language=${languagePtBr}`)
        .then(({ data }) => {
          setVideos(data?.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(videos);

  function getVideos(listVideos) {
    const videosMovies = [];
    for (let i = 0; i < 1; i++) {
      videosMovies.push(listVideos[i]);
    }
    return videosMovies;
  }
  return (
    <>
      <div>
        {videos.length > 0 ? (
          getVideos(videos).map((item) => {
            return (
              <ReactPlayer
                width={"100%"}
                height={"100vh"}
                url={`https://www.youtube.com/watch?v=${item.key}`}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Videos;
