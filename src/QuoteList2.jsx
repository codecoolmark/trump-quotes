import { useEffect, useState } from "react";
import { randomTrumpQuote } from "./trumpQuotes";

export default function QuoteList2() {
    const [quotes, setQuotes] = useState([]);

    console.log("QuoteList2:", quotes);


    useEffect(function() {
        const id = setTimeout(function() {
            const randomQuote = randomTrumpQuote();
            setQuotes([...quotes, randomQuote]);
        }, 1000);

        return function() {
            clearTimeout(id);
        }
    });

    return <div className="quote-list-2">
        <ul>
            {quotes.map((quote, index) => <li key={index}>{quote.quote}</li>)}
        </ul>
    </div>
}