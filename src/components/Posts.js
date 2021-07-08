import React from "react";

export const Posts = ({ posts, loading }) => {
  console.log(posts, "posts");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <div style={{ border: "5px solid #C4C4C4", marginBottom: 20 }}>
          <li
            key={post.id}
            className="list-group-item"
            style={{ fontSize: 24, display: "flex", flexDirection: "row" }}
          >
            <h6 style={{ fontWeight: "bold", marginTop: 8, marginRight: 5 }}>
              Name:
            </h6>

            {post.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </li>
          <li
            key={post.title}
            className="list-group-item"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <h6 style={{ fontWeight: "bold", marginTop: 1, marginRight: 5 }}>
              Type:
            </h6>
            {post.type}
          </li>
          <li
            key={post.description}
            className="list-group-item"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <h6 style={{ fontWeight: "bold", marginTop: 1, marginRight: 5 }}>
              Description:
            </h6>
            {post.description}
          </li>
          <li
            key={post.street}
            className="list-group-item"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <h6 style={{ fontWeight: "bold", marginTop: 1, marginRight: 5 }}>
              Street:
            </h6>
            {post.street}
          </li>{" "}
          <li
            key={post.city}
            className="list-group-item"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <h6 style={{ fontWeight: "bold", marginTop: 1, marginRight: 5 }}>
              City:
            </h6>
            {post.city}
          </li>{" "}
          <li
            key={post.state}
            className="list-group-item"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <h6 style={{ fontWeight: "bold", marginTop: 1, marginRight: 5 }}>
              State:
            </h6>
            {post.state}
          </li>{" "}
          <li
            key={post.country}
            className="list-group-item"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <h6 style={{ fontWeight: "bold", marginTop: 1, marginRight: 5 }}>
              Country:
            </h6>
            {post.country}
          </li>
        </div>
      ))}
    </ul>
  );
};
