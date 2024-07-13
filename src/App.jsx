import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import CreateCard from "./components/CreateCard";
import "./App.css";
import PostListProvider from "./store/Post-list";

// export const PostList = createContext(defaultContext);
function App() {
  const [item, setItem] = useState("Home");
  // const [item, setItem] = useState("Create Card");
  return (
    <PostListProvider>
      <div>
        <div className="handf">
          <Header item={item} setItem={setItem} />
          {item == "Home" ? <Cards /> : <CreateCard setItem={setItem} />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
