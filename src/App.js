import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const musicByGenre = {
    Pop: [
      ["Rolling in the Deep", "~Adele"],
      ["That's what I Like", "~Brunoo Mars"],
      ["Closer", "~The Chainsmokers"],
      ["Uptown Funk", "~Mark Ronson"]
    ],
    hipHop: [
      ["Lose Yourself", "~Eminem"],
      ["Old Town Road", "~Lil Nas X"],
      ["In da Club", "~50 Cent"]
    ],
    dance: [
      ["Billie Jean", "~Michael Jackson"],
      ["Beat It", "~Michael Jackson"],
      ["Titanium", "~David Guetta"]
    ],
    rock: [
      ["Smoke on the water", "~Deep Purple"],
      ["Zombie", "The Cranberries"],
      ["We Will Rock You", "~Queen"],
      ["High Hopes", "~Panic! At The Disco"]
    ]
  };
  const [card, updateCard] = useState(musicByGenre["rock"]);
  function updateContent(t) {
    updateCard(musicByGenre[t]);
  }
  return (
    <div className="App">
      <div>
        <h1>
          <span role="img">♫</span> good music
        </h1>
        <p>Checkout my favorite music. Hope you like them 🎵🎵</p>
        <div>
          <button onClick={() => updateContent("Pop")}>Pop</button>
          <button onClick={() => updateContent("hipHop")}>hipHop</button>
          <button onClick={() => updateContent("dance")}>dance</button>
          <button onClick={() => updateContent("rock")}>rock</button>
          <hr></hr>
        </div>
        <div className={"itemHolder"}>
          {card.map(function (item) {
            return (
              <div className={"innerDiv"} key={item[0]}>
                <h4>{item[0]} 🎧</h4>
                <p>{item[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
