import React from "react";
  import PostCreate from "./postCreate";
  import PostRender from "./postRender";
  
  const App = () => {
    return (
      <div className="container">
        <h1>Write your name</h1>
        <PostCreate />
        <hr />
        <h1>Responce</h1>
        <PostRender />
      </div>
    );
  };
  export default App;