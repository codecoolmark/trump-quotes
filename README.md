# Trump Quotes

The reason of this repository is to provide an illustration for the following workbook question:

"When adding an item to an array, why is it necessary to pass a new array to the useState hook?"

This repository contains two components `QuoteList1` and `QuoteList2` that are very similar except that the first one updates an array and passes it to the `setQuotes` setter. The `QuoteList2` component always passes a new array to `setQuote` setter.

If you try to open the site you will see that only the `QuoteList2` component works as expected. Try to find out why. The reason will be the answer to the workbook question in the beginning.

To open the site run `npm run dev` in the terminal (don't forget to run `npm install` after you cloned the repository).