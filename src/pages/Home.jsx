import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  return (
    <header>
      <div class="mainTitle">
        <p>
          Pisz o swoich pasjach jak tylko zechcesz!
        </p>
        <p>
          Stwórz własnego, pięknego bloga!
        </p>
        <button class="createBlog"><Link className="link" to={`/write`} >stwórz bloga</Link></button>
      </div>
    </header>
  );
}

export default Home;