import { useState, useEffect } from 'react';
import './App.css';

import { changeAppColor, twitterSvg } from './utils';
import fetchQuote from './comps/Quote/fetchQuote';

import Button from './comps/Button/Button';
import Quote from './comps/Quote/Quote';


function App() {
  const [quoteData, setQuote] = useState({
    quote: "",
    author: ""
  })
  useEffect(() => {
    nextQuote()
  }, [])
  async function nextQuote() {
    changeAppColor()
    setQuote(await fetchQuote())
  }
  return (
    <div className="App">
      <div id="quote-box">
        {/* TODO: QUOTE COMP AND FETCH QUOTE */}
        <Quote quoteData={quoteData} />
        <Button link={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quoteData.quote}" -${quoteData.author}`} text={twitterSvg} id="tweet-quote" />
        <Button id="new-quote" text="Next Quote" click={nextQuote} />
      </div>
    </div>
  );
}



export default App;
