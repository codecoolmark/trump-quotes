import { useEffect, useState } from "react";
import { randomTrumpQuote } from "./trumpQuotes";

export default function QuoteList1() {
    const [quotes, setQuotes] = useState([]);

    console.log("QuoteList1:", quotes);

    useEffect(function() {
        const id = setTimeout(function() {
            const randomQuote = randomTrumpQuote();
            quotes.push(randomQuote);
            setQuotes(quotes);
        }, 1000);

        return function() {
            clearTimeout(id);
        }
    });

    return <div className="quote-list-1">
        <ul>
            {quotes.map((quote, index) => <li key={index}>{quote}</li>)}
        </ul>
    </div>
}