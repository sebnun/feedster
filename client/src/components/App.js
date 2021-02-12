import React, { useEffect, useState } from "react";
import { fetchNewsItems } from "./endpoints_v1";
import Error from "./Error";
import Loading from "./Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetchNewsItems
      .then((items) => setNewsItems(items))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <Error />;
  }

  return (
    <main>
      <header className="App-header">
        <h1>Feedster</h1>
      </header>

      <nav>
        <ol>
          {newsItems.map((item) => (
            <li key={item.guid}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ol>
      </nav>
    </main>
  );
};

export default App;
