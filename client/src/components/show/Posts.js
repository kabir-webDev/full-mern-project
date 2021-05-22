import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/index";
import axios from "axios";

function Posts() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(info);

  const handleDelete = (id, e) => {
    console.log(id);
    axios.delete(`http://localhost:1111`).then((res) => {
      console.log(res);
      console.log(res.data);

      const posts = info.filter((item) => item.id !== id);
      setInfo([posts]);
    });
  };

  return (
    <>
      {info.map((k, index) => {
        return (
          <div key={index}>
            <h2>{k.title}</h2>
            <button onClick={(e) => handleDelete(k._id, e)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Posts;
