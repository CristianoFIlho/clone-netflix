

import React, { useEffect, useState } from "react";

import tmdb from "./tmdb";


const [movieList, setMovieList] = useState({});



export default () => {
  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map(( item, key ) => (
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
};
