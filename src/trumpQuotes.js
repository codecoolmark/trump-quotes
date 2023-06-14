const quotes = [
    {
        "quote": "Make America Great Again!",
        "source": "2016 presidential campaign"
    },
    {
        "quote": "I'm really rich.",
        "source": "Presidential announcement speech, 2015"
    },
    {
        "quote": "You're fired!",
        "source": "The Apprentice TV show"
    },
    {
        "quote": "I think I am actually humble. I think I'm much more humble than you would understand.",
        "source": "Interview with TIME magazine, 2015"
    },
    {
        "quote": "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
        "source": "Twitter, 2012"
    },
    {
        "quote": "I have a great relationship with the blacks. I've always had a great relationship with the blacks.",
        "source": "Interview with Albany's Talk Radio 1300, 2011"
    },
    {
        "quote": "I will build a great wall - and nobody builds walls better than me, believe me - and I'll build them very inexpensively.",
        "source": "2015 presidential campaign"
    },
    {
        "quote": "I love the poorly educated!",
        "source": "Nevada victory speech, 2016"
    },
    {
        "quote": "I have the best words.",
        "source": "Interview with NBC News, 2015"
    },
    {
        "quote": "I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn't lose any voters.",
        "source": "Campaign rally, 2016"
    },
    {
        "quote": "I don't settle. I like winning better.",
        "source": "The Art of the Deal, 1987"
    },
    {
        "quote": "I will be the greatest jobs president that God ever created.",
        "source": "Campaign rally, 2015"
    },
    {
        "quote": "Nobody respects women more than I do.",
        "source": "Presidential debate, 2016"
    },
    {
        "quote": "Our country needs a truly great leader, and we need a truly great leader now.",
        "source": "Campaign rally, 2015"
    },
    {
        "quote": "The American Dream is dead.",
        "source": "Campaign rally, 2015"
    },
    {
        "quote": "The media is the most dishonest group of people I've ever met.",
        "source": "Campaign rally, 2016"
    },
    {
        "quote": "The point is, you can never be too greedy.",
        "source": "The Art of the Deal, 1987"
    },
    {
        "quote": "My Twitter has become so powerful that I can actually make my enemies tell the truth.",
        "source": "Twitter, 2012"
    },
    {
        "quote": "I have so many fabulous friends who happen to be gay, but I am a traditionalist.",
        "source": "Campaign rally, 2016"
    },
    {
        "quote": "The beauty of me is that I'm very rich.",
        "source": "ABC News interview, 2011"
    },
    {
        "quote": "Sorry losers and haters, but my I.Q. is one of the highest - and you all know it! Please don't feel so stupid or insecure, it's not your fault.",
        "source": "Twitter, 2013"
    }
];

export function randomTrumpQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
} 