const topStories = [
    {
        "title": "Sweden has invented a word to encourage people not to fly",
        "url": "https://www.weforum.org/agenda/2019/06/sweden-has-invented-a-word-to-encourage-people-not-to-fly-and-it-s-working",
        "score": 50,
        "descendants": 33,
        "time": 1560849023,
        "type": "story",
        "by": {
            "id": "marce",
            "about": null
        }
    },
    {
        "title": "Mezzano, an operating system written in Common Lisp",
        "url": "https://github.com/froggey/Mezzano/",
        "score": 89,
        "descendants": 20,
        "time": 1560839506,
        "type": "story",
        "by": {
            "id": "pjmlp",
            "about": "Random developer on Internet with focus on distributed computing, OS architectures, programming languages, safe systems and graphics stuff.<p>Nowadays working with .NET and Web stacks, with some occasional Java or C++ every now and then."
        }
    },
    {
        "title": "Calibra – Digital Wallet for Facebook's Libra Cryptocurrency",
        "url": "https://calibra.com/",
        "score": 39,
        "descendants": 18,
        "time": 1560846208,
        "type": "story",
        "by": {
            "id": "alcio",
            "about": "[ my public key: https:&#x2F;&#x2F;keybase.io&#x2F;alc; my proof: https:&#x2F;&#x2F;keybase.io&#x2F;alc&#x2F;sigs&#x2F;VUaEAq3bStXfC20woCU6TEWk5g3KmgG45K4uHDQQHzo ]"
        }
    },
    {
        "title": "Lockheed has an opening for engineers with VAX experience for the F22",
        "url": "https://www.lockheedmartinjobs.com/job/california/f-22-avionics-systems-engineer-senior/694/8842471",
        "score": 93,
        "descendants": 69,
        "time": 1560833208,
        "type": "story",
        "by": {
            "id": "killjoywashere",
            "about": "human dot embryology at gmail"
        }
    },
    {
        "title": "Dogs’ Eyes Have Changed Since Humans Befriended Them",
        "url": "https://www.theatlantic.com/article/591868/",
        "score": 110,
        "descendants": 41,
        "time": 1560828923,
        "type": "story",
        "by": {
            "id": "gilad",
            "about": null
        }
    },
    {
        "title": "The Haarp Project Explained Simply",
        "url": "https://www.rtl-sdr.com/the-haarp-project-explained-simply/",
        "score": 18,
        "descendants": 1,
        "time": 1560841232,
        "type": "story",
        "by": {
            "id": "wolframio",
            "about": null
        }
    },
    {
        "title": "Adventure Games and Eigenvalues (2017)",
        "url": "http://www.evanmiller.org/adventure-games-and-eigenvalues.html",
        "score": 65,
        "descendants": 6,
        "time": 1560832449,
        "type": "story",
        "by": {
            "id": "rayvega",
            "about": "http:&#x2F;&#x2F;lexicalclosures.blogspot.com&#x2F;"
        }
    },
    {
        "title": "Facebook Libra Whitepaper",
        "url": "https://libra.org/en-US/white-paper/",
        "score": 8,
        "descendants": 0,
        "time": 1560848369,
        "type": "story",
        "by": {
            "id": "hulahoof",
            "about": "Consultant"
        }
    },
    {
        "title": "Ireland to ban new petrol and diesel vehicles from 2030",
        "url": "https://www.bbc.com/news/world-europe-48668791",
        "score": 100,
        "descendants": 90,
        "time": 1560844876,
        "type": "story",
        "by": {
            "id": "clouddrover",
            "about": null
        }
    },
    {
        "title": "Facebook reveals its cryptocurrency Libra to the world",
        "url": "https://decrypt.co/7502/facebook-libra-coin-cryptocurrency-launch-calibra",
        "score": 66,
        "descendants": 58,
        "time": 1560848412,
        "type": "story",
        "by": {
            "id": "timcc50",
            "about": null
        }
    },
    {
        "title": "Observations on Wikipedia Behavior (2008)",
        "url": "https://en.wikipedia.org/wiki/User:Antandrus/observations_on_Wikipedia_behavior",
        "score": 48,
        "descendants": 25,
        "time": 1560829370,
        "type": "story",
        "by": {
            "id": "salutonmundo",
            "about": null
        }
    },
    {
        "title": "Levittown",
        "url": "https://granolashotgun.com/2019/06/03/levittown/",
        "score": 120,
        "descendants": 77,
        "time": 1560818398,
        "type": "story",
        "by": {
            "id": "burlesona",
            "about": null
        }
    },
    {
        "title": "Level Design and Shaping a Roguelike Experience",
        "url": "https://www.gridsagegames.com/blog/2019/02/level-design-shaping-cogmind-experience/",
        "score": 108,
        "descendants": 14,
        "time": 1560632218,
        "type": "story",
        "by": {
            "id": "tiniuclx",
            "about": null
        }
    },
    {
        "title": "DPAPI security flaw in Windows 10",
        "url": "https://www.passcape.com/index.php?setLang=2&section=blog&cmd=details&id=38",
        "score": 127,
        "descendants": 46,
        "time": 1560837358,
        "type": "story",
        "by": {
            "id": "iohn",
            "about": null
        }
    },
    {
        "title": "An artificially intelligent, open-source bionic leg",
        "url": "https://qz.com/1636413/an-open-source-ai-bionic-leg-is-the-future-of-prosthetics/",
        "score": 37,
        "descendants": 7,
        "time": 1560746039,
        "type": "story",
        "by": {
            "id": "akeck",
            "about": null
        }
    },
    {
        "title": "The Invention of the Beach Read",
        "url": "https://www.newyorker.com/books/page-turner/the-invention-of-the-beach-read",
        "score": 4,
        "descendants": 0,
        "time": 1560723663,
        "type": "story",
        "by": {
            "id": "lermontov",
            "about": "Traveling post from Tiflis."
        }
    },
    {
        "title": "People care more about privacy than they think",
        "url": "https://www.nytimes.com/2019/06/11/opinion/privacy-facebook-sexting.html",
        "score": 98,
        "descendants": 38,
        "time": 1560805294,
        "type": "story",
        "by": {
            "id": "jakelazaroff",
            "about": null
        }
    },
    {
        "title": "The Rascal Metaprogramming Language",
        "url": "http://www.rascal-mpl.org/",
        "score": 131,
        "descendants": 28,
        "time": 1560805283,
        "type": "story",
        "by": {
            "id": "nerdponx",
            "about": null
        }
    },
    {
        "title": "Mazda is purging touchscreens from its vehicles",
        "url": "https://www.motorauthority.com/news/1121372_why-mazda-is-purging-touchscreens-from-its-vehicles",
        "score": 2039,
        "descendants": 853,
        "time": 1560751903,
        "type": "story",
        "by": {
            "id": "meteor333",
            "about": null
        }
    },
    {
        "title": "Kid Door",
        "url": "https://www.jefftk.com/p/kid-door",
        "score": 18,
        "descendants": 1,
        "time": 1560704871,
        "type": "story",
        "by": {
            "id": "luu",
            "about": "danluu.com &#x2F; twitter.com&#x2F;danluu"
        }
    },
    {
        "title": "Interview with the creators of levels.fyi",
        "url": "https://www.cnbc.com/2019/06/14/how-much-google-facebook-other-tech-giants-pay-software-engineers.html",
        "score": 150,
        "descendants": 141,
        "time": 1560791455,
        "type": "story",
        "by": {
            "id": "zalzal",
            "about": "Startup engineering&#x2F;devops&#x2F;leadership"
        }
    },
    {
        "title": "Head Wounds and Steel Helmets",
        "url": "https://www.historicalfirearms.info/post/185622315174/historicalfirearms-head-wounds-steel-helmets",
        "score": 14,
        "descendants": 8,
        "time": 1560656886,
        "type": "story",
        "by": {
            "id": "smacktoward",
            "about": "This is me: https:&#x2F;&#x2F;jasonlefkowitz.net<p>Email: jason@jasonlefkowitz.net<p>[ my public key: https:&#x2F;&#x2F;keybase.io&#x2F;jalefkowit; my proof: https:&#x2F;&#x2F;keybase.io&#x2F;jalefkowit&#x2F;sigs&#x2F;BS2jcE2Fl1t9sVVVcjTDvb57UNspCr_8h7RilZdYd_w ]"
        }
    },
    {
        "title": "SACK Panic – Multiple TCP-based remote denial-of-service issues",
        "url": "https://access.redhat.com/security/vulnerabilities/tcpsack",
        "score": 356,
        "descendants": 106,
        "time": 1560793832,
        "type": "story",
        "by": {
            "id": "cdingo",
            "about": null
        }
    },
    {
        "title": "Show HN: A curated library of venture capital investment pitch decks",
        "url": "https://www.chagency.co.uk/getstartupfunding/",
        "score": 85,
        "descendants": 11,
        "time": 1560803902,
        "type": "story",
        "by": {
            "id": "chdaniel",
            "about": "Founded an app that went from 0 to 200k users in its first year (chdaniel.com&#x2F;app). Writing daily.<p>I run Chagency_, an experiences design agency that specialises on helping SaaS CEOs reduce user churn.<p>daniel@chagency.co.uk<p>@chddaniel on Twitter"
        }
    },
    {
        "title": "Asian countries take a stand against the rich world’s plastic waste",
        "url": "https://www.latimes.com/world/la-fg-asia-plastic-waste-20190617-story.html",
        "score": 360,
        "descendants": 198,
        "time": 1560782786,
        "type": "story",
        "by": {
            "id": "ilamont",
            "about": "HN denizen since 2007. Managing editor of <i>The Industry Standard</i> (2008-2010). Boston-area founder of media venture i30 Media Corp. (2013-present).<p>At various points of my career I have also worked as a higher education webmaster, business consultant, broadcast news producer, mobile software startup co-founder, and label assistant for The KLF.<p>++++LEAN MEDIA++++<p>Lean Media is a production framework for creating media content that emphasizes small teams and low-cost production, careful observation&#x2F;measurement of both qualitative and quantitative audience feedback, and fast iteration.<p>Info, blog, and book: http:&#x2F;&#x2F;leanmedia.org&#x2F;<p>++++CONTACT++++<p><i>Twitter:</i><p>http:&#x2F;&#x2F;twitter.com&#x2F;ilamont"
        }
    },
    {
        "title": "Robocalls are overwhelming hospitals and patients",
        "url": "https://www.washingtonpost.com/technology/2019/06/17/robocalls-are-overwhelming-hospitals-patients-threatening-new-kind-health-crisis/",
        "score": 172,
        "descendants": 153,
        "time": 1560800853,
        "type": "story",
        "by": {
            "id": "jmsflknr",
            "about": null
        }
    },
    {
        "title": "The CIA Spied on People Through Their Smart TVs, Leaked Documents Reveal (2017)",
        "url": "https://www.vice.com/en_us/article/8qbq5x/the-cia-spied-on-people-through-their-smart-tvs-leaked-documents-reveal",
        "score": 337,
        "descendants": 138,
        "time": 1560800221,
        "type": "story",
        "by": {
            "id": "sky_nox",
            "about": null
        }
    },
    {
        "title": "Presenting the Eshell",
        "url": "http://www.howardism.org/Technical/Emacs/eshell-present.html",
        "score": 85,
        "descendants": 9,
        "time": 1560791546,
        "type": "story",
        "by": {
            "id": "signa11",
            "about": null
        }
    },
    {
        "title": "Google Is Taking Charge of the RCS Rollout",
        "url": "https://www.theverge.com/2019/6/17/18681573/google-rcs-chat-android-texting-carriers-imessage-encryption",
        "score": 52,
        "descendants": 68,
        "time": 1560799299,
        "type": "story",
        "by": {
            "id": "iwasakabukiman",
            "about": null
        }
    },
    {
        "title": "Classes vs. Data Structures",
        "url": "http://blog.cleancoder.com/uncle-bob/2019/06/16/ObjectsAndDataStructures.html",
        "score": 267,
        "descendants": 160,
        "time": 1560794504,
        "type": "story",
        "by": {
            "id": "Anchor",
            "about": null
        }
    }
];

export default topStories;