import React, { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import { Posts } from "./components/Posts";
import PostData from "./data/data.json";
import { Pagination } from "./components/Pagination";
import Search from "./components/Search";
import Filter from "./components/Filter";

const App = () => {
  // const [posts, setPosts] = useState([]);
  const [loading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerPage] = useState(5);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(false);
  //     const res = await axios.get('data.json');
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = PostData.slice(indexOfFirstPost, indexOfLastPost);

  //changepage

  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  return (
    <div className="container mt-5">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Search />
        <div>
          <Filter />
        </div>
      </div>

      <h1 className="text-primary mb-3" style={{ marginTop: 5 }}>
        Business List
      </h1>
      <a href="https://goo.gl/maps/ZX6ChvZB1xNYvQZA9">icon</a>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={PostData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
