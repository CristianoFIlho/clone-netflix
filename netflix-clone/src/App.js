import React, { useEffect } from "react";
import tmdb from "./tmdb";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      console.log(list);
    };
    loadAll();
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
