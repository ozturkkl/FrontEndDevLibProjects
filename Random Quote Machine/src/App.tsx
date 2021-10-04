import { useState } from 'react';
import './App.css';
import Button from './comps/Button/Button';
import Quote from './comps/Quote/Quote';
import { cssAnimate } from './utils';

function App() {
  const [quoteData, setQuote] = useState({
    quote: "Hayat bir cay, mutluluk seker... Bizim gibi garipler cayi sekersiz icer!",
    author: "Furkan Emirce"
  })
  return (
    <div className="App">
      <div id="quote-box">
        {/* TODO: QUOTE COMP AND FETCH QUOTE */}
        <Quote quoteData={quoteData} />
        <Button link={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quoteData.quote}" -${quoteData.author}`} text="Tweet" id="tweet-quote" />
        <Button id="new-quote" text="Next Quote" click={changeAppColor} />
      </div>
    </div>
  );
}

function changeAppColor() {
  const randomColor = (Math.floor(Math.random() * 360) + 1).toString()
  cssAnimate(500)
  document.documentElement.style.setProperty("--main-color", `${randomColor}, 50%`)
}

export default App;
