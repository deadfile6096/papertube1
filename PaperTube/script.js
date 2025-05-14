// Массив с путями к изображениям из папок imgpreview и images
const customThumbnails = [
    // Изображения из папки imgpreview
    'imgpreview/20250514_0244_Небрежный карандашный рисунок_remix_01jv60fqnaeh7vq3akw40pkre4.png',
    'imgpreview/Web_Photo_Editor (1).jpg',
    'imgpreview/Web_Photo_Editor (10).jpg',
    'imgpreview/Web_Photo_Editor (2).jpg',
    'imgpreview/Web_Photo_Editor (3).jpg',
    'imgpreview/Web_Photo_Editor (4).jpg',
    'imgpreview/Web_Photo_Editor (5).jpg',
    'imgpreview/Web_Photo_Editor (6).jpg',
    'imgpreview/Web_Photo_Editor (7).jpg',
    'imgpreview/Web_Photo_Editor (8).jpg',
    'imgpreview/Web_Photo_Editor (9).jpg',
    'imgpreview/Web_Photo_Editor.jpg',
    'imgpreview/ae8a65f5ccfa486cb1d3b7f59240c933-fotor-ai-art-effects-20250514024206.jpg',
    
    // Добавленные изображения из папки images
    'images/Web_Photo_Editor.jpg',
    'images/Web_Photo_Editor (1).jpg',
    'images/Web_Photo_Editor (2).jpg',
    'images/Web_Photo_Editor (3).jpg',
    'images/Web_Photo_Editor (4).jpg',
    'images/Web_Photo_Editor (5).jpg',
    'images/Web_Photo_Editor (6).jpg',
    'images/Web_Photo_Editor (7).jpg',
    'images/Web_Photo_Editor (8).jpg',
    'images/Web_Photo_Editor (9).jpg'
];

// Функция для получения случайного изображения из массива
function getRandomThumbnail() {
    const randomIndex = Math.floor(Math.random() * customThumbnails.length);
    return customThumbnails[randomIndex];
}

// Video data (in a real project, this could be loaded from JSON or API)
const videoData = {
    latest: [
        {
            id: 'Uos1Wpv2rcg',
            title: 'MEMCOIN CYCLE EXPLAINED | BEST MEME COINS FOR 2024',
            channel: 'Crypto Zeus',
            views: '1.2M views',
            date: '2 weeks ago',
            thumbnail: 'https://i.ytimg.com/vi/Uos1Wpv2rcg/hqdefault.jpg'
        },
        {
            id: 'Y_f3TMetT6k',
            title: 'Noodle Meme Coin Explained - $NOODLE',
            channel: 'Crypto Gains',
            views: '3.5M views',
            date: '3 days ago',
            thumbnail: 'https://i.ytimg.com/vi/Y_f3TMetT6k/hqdefault.jpg'
        },
        {
            id: 'Vq5AOFAwQQs',
            title: 'SOL WRAPPED EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Crypto Millionaire',
            views: '2.1M views',
            date: '1 week ago',
            thumbnail: 'https://i.ytimg.com/vi/Vq5AOFAwQQs/hqdefault.jpg'
        },
        {
            id: '2_I3gxl1I28',
            title: 'GOONCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Analysis',
            views: '4.8M views',
            date: '5 days ago',
            thumbnail: 'https://i.ytimg.com/vi/2_I3gxl1I28/hqdefault.jpg'
        },
        {
            id: 'l6desSwG6aU',
            title: 'SOLANA HOUSE EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Crypto Success',
            views: '1.5M views',
            date: '2 days ago',
            thumbnail: 'https://i.ytimg.com/vi/l6desSwG6aU/hqdefault.jpg'
        },
        {
            id: 'hBwUKANLrQw',
            title: 'FWOG SOLANA MEME COIN EXPLAINED | BEST SOLANA MEME COIN?',
            channel: 'Crypto Education',
            views: '3.8M views',
            date: '1 day ago',
            thumbnail: 'https://i.ytimg.com/vi/hBwUKANLrQw/hqdefault.jpg'
        },
        {
            id: '37ia25q_-WM',
            title: 'TITCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Community',
            views: '2.5M views',
            date: '4 days ago',
            thumbnail: 'https://i.ytimg.com/vi/37ia25q_-WM/hqdefault.jpg'
        },
        {
            id: 'd9DqanOmozs',
            title: 'GOGWIFHAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Charts',
            views: '1.9M views',
            date: '1 week ago',
            thumbnail: 'https://i.ytimg.com/vi/d9DqanOmozs/hqdefault.jpg'
        },
        {
            id: '2JaEVr_wrEw',
            title: 'TROLL SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Insider',
            views: '1.3M views',
            date: '6 hours ago',
            thumbnail: 'https://i.ytimg.com/vi/2JaEVr_wrEw/hqdefault.jpg'
        },
        {
            id: 'HLo0AdL_0_k',
            title: 'POPCAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Investment Pros',
            views: '2.2M views',
            date: '3 days ago',
            thumbnail: 'https://i.ytimg.com/vi/HLo0AdL_0_k/hqdefault.jpg'
        },
        {
            id: 'D5QPXixAeUk',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Academy',
            views: '3.1M views',
            date: '2 weeks ago',
            thumbnail: 'https://i.ytimg.com/vi/D5QPXixAeUk/hqdefault.jpg'
        },
        {
            id: 'iTea0yhmWz8',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Passive Crypto Income',
            views: '1.8M views',
            date: '5 days ago',
            thumbnail: 'https://i.ytimg.com/vi/iTea0yhmWz8/hqdefault.jpg'
        },
        {
            id: 'cGYb6AGEAQ4',
            title: 'MOONPIG SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Basics',
            views: '2.7M views',
            date: '1 week ago',
            thumbnail: 'https://i.ytimg.com/vi/cGYb6AGEAQ4/hqdefault.jpg'
        },
        {
            id: 'Uos1Wpv2rcg',
            title: 'MEMCOIN CYCLE EXPLAINED | BEST MEME COINS FOR 2024',
            channel: 'Crypto News',
            views: '4.2M views',
            date: '3 days ago',
            thumbnail: 'https://i.ytimg.com/vi/Uos1Wpv2rcg/hqdefault.jpg'
        },
        {
            id: 'Y_f3TMetT6k',
            title: 'Noodle Meme Coin Explained - $NOODLE',
            channel: 'Crypto History',
            views: '1.5M views',
            date: '2 days ago',
            thumbnail: 'https://i.ytimg.com/vi/Y_f3TMetT6k/hqdefault.jpg'
        }
    ],
    trending: [
        {
            id: 'Vq5AOFAwQQs',
            title: 'SOL WRAPPED EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Crypto Breaking News',
            views: '3.8M views',
            date: '5 hours ago',
            thumbnail: 'https://i.ytimg.com/vi/Vq5AOFAwQQs/hqdefault.jpg'
        },
        {
            id: '2_I3gxl1I28',
            title: 'GOONCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Whale',
            views: '5.2M views',
            date: '12 hours ago',
            thumbnail: 'https://i.ytimg.com/vi/2_I3gxl1I28/hqdefault.jpg'
        },
        {
            id: 'l6desSwG6aU',
            title: 'SOLANA HOUSE EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Matthew Perry Crypto',
            views: '1.2M views',
            date: '1 day ago',
            thumbnail: 'https://i.ytimg.com/vi/l6desSwG6aU/hqdefault.jpg'
        },
        {
            id: 'hBwUKANLrQw',
            title: 'FWOG SOLANA MEME COIN EXPLAINED | BEST SOLANA MEME COIN?',
            channel: 'Crypto Battles',
            views: '3.5M views',
            date: '2 days ago',
            thumbnail: 'https://i.ytimg.com/vi/hBwUKANLrQw/hqdefault.jpg'
        },
        {
            id: '37ia25q_-WM',
            title: 'TITCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Tips',
            views: '2.1M views',
            date: '1 day ago',
            thumbnail: 'https://i.ytimg.com/vi/37ia25q_-WM/hqdefault.jpg'
        },
        {
            id: 'd9DqanOmozs',
            title: 'GOGWIFHAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Millionaire',
            views: '4.8M views',
            date: '3 days ago',
            thumbnail: 'https://i.ytimg.com/vi/d9DqanOmozs/hqdefault.jpg'
        },
        {
            id: '2JaEVr_wrEw',
            title: 'TROLL SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'NFT Hunter',
            views: '1.5M views',
            date: '4 days ago',
            thumbnail: 'https://i.ytimg.com/vi/2JaEVr_wrEw/hqdefault.jpg'
        },
        {
            id: 'HLo0AdL_0_k',
            title: 'POPCAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Charts Daily',
            views: '3.8M views',
            date: '2 days ago',
            thumbnail: 'https://i.ytimg.com/vi/HLo0AdL_0_k/hqdefault.jpg'
        },
        {
            id: 'D5QPXixAeUk',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Metaverse Explorer',
            views: '2.5M views',
            date: '8 hours ago',
            thumbnail: 'https://i.ytimg.com/vi/D5QPXixAeUk/hqdefault.jpg'
        },
        {
            id: 'iTea0yhmWz8',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Airdrops',
            views: '1.9M views',
            date: '1 day ago',
            thumbnail: 'https://i.ytimg.com/vi/iTea0yhmWz8/hqdefault.jpg'
        },
        {
            id: '0VEqAILcK0E',
            title: 'The Secret GORK Roadmap Leaked (2025-2030 Plans)',
            channel: 'Crypto Leaks',
            views: '2.7M views',
            date: '1 month ago',
            thumbnail: 'https://i.ytimg.com/vi/0VEqAILcK0E/hqdefault.jpg'
        },
        {
            id: 'Y-kxXfdDZ58',
            title: 'GORK Founder Interview: "We Will Flip Bitcoin Market Cap"',
            channel: 'Crypto Interviews',
            views: '4.2M views',
            date: '2 months ago',
            thumbnail: 'https://i.ytimg.com/vi/Y-kxXfdDZ58/hqdefault.jpg'
        }
    ],
    watched: [
        {
            id: '2_I3gxl1I28',
            title: 'GOONCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Mining Pro',
            views: '2.5M views',
            date: '6 months ago',
            thumbnail: 'https://i.ytimg.com/vi/2_I3gxl1I28/hqdefault.jpg'
        },
        {
            id: 'l6desSwG6aU',
            title: 'SOLANA HOUSE EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Crypto Basics',
            views: '2.2M views',
            date: '3 months ago',
            thumbnail: 'https://i.ytimg.com/vi/l6desSwG6aU/hqdefault.jpg'
        },
        {
            id: 'hBwUKANLrQw',
            title: 'FWOG SOLANA MEME COIN EXPLAINED | BEST SOLANA MEME COIN?',
            channel: 'Crypto Analytics',
            views: '3.8M views',
            date: '1 month ago',
            thumbnail: 'https://i.ytimg.com/vi/hBwUKANLrQw/hqdefault.jpg'
        },
        {
            id: '37ia25q_-WM',
            title: 'TITCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Economics',
            views: '5.2M views',
            date: '2 months ago',
            thumbnail: 'https://i.ytimg.com/vi/37ia25q_-WM/hqdefault.jpg'
        },
        {
            id: 'd9DqanOmozs',
            title: 'GOGWIFHAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Matthew Perry Crypto',
            views: '1.2M views',
            date: '1 week ago',
            thumbnail: 'https://i.ytimg.com/vi/d9DqanOmozs/hqdefault.jpg'
        },
        {
            id: '2JaEVr_wrEw',
            title: 'TROLL SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Influencers',
            views: '3.5M views',
            date: '4 months ago',
            thumbnail: 'https://i.ytimg.com/vi/2JaEVr_wrEw/hqdefault.jpg'
        },
        {
            id: 'HLo0AdL_0_k',
            title: 'POPCAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Blockchain Developer',
            views: '2.1M views',
            date: '2 days ago',
            thumbnail: 'https://i.ytimg.com/vi/HLo0AdL_0_k/hqdefault.jpg'
        },
        {
            id: 'D5QPXixAeUk',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Price Predictions',
            views: '3.1M views',
            date: '3 weeks ago',
            thumbnail: 'https://i.ytimg.com/vi/D5QPXixAeUk/hqdefault.jpg'
        },
        {
            id: 'iTea0yhmWz8',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'DeFi Master',
            views: '1.8M views',
            date: '2 months ago',
            thumbnail: 'https://i.ytimg.com/vi/iTea0yhmWz8/hqdefault.jpg'
        },
        {
            id: 'cGYb6AGEAQ4',
            title: 'MOONPIG SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Trading Guru',
            views: '2.7M views',
            date: '1 week ago',
            thumbnail: 'https://i.ytimg.com/vi/cGYb6AGEAQ4/hqdefault.jpg'
        },
        {
            id: 'Uos1Wpv2rcg',
            title: 'MEMCOIN CYCLE EXPLAINED | BEST MEME COINS FOR 2024',
            channel: 'Crypto Whale Watcher',
            views: '4.2M views',
            date: '3 days ago',
            thumbnail: 'https://i.ytimg.com/vi/Uos1Wpv2rcg/hqdefault.jpg'
        },
        {
            id: 'Y_f3TMetT6k',
            title: 'Noodle Meme Coin Explained - $NOODLE',
            channel: 'Crypto Documentaries',
            views: '1.5M views',
            date: '5 days ago',
            thumbnail: 'https://i.ytimg.com/vi/Y_f3TMetT6k/hqdefault.jpg'
        }
    ],
    random: [
        {
            id: 'Vq5AOFAwQQs',
            title: 'SOL WRAPPED EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Crypto Partnerships',
            views: '1.8M views',
            date: '3 months ago',
            thumbnail: 'https://i.ytimg.com/vi/Vq5AOFAwQQs/hqdefault.jpg'
        },
        {
            id: '2_I3gxl1I28',
            title: 'GOONCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Moon',
            views: '3.1M views',
            date: '2 months ago',
            thumbnail: 'https://i.ytimg.com/vi/2_I3gxl1I28/hqdefault.jpg'
        },
        {
            id: 'l6desSwG6aU',
            title: 'SOLANA HOUSE EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Meme Coin Wars',
            views: '2.2M views',
            date: '1 month ago',
            thumbnail: 'https://i.ytimg.com/vi/l6desSwG6aU/hqdefault.jpg'
        },
        {
            id: 'hBwUKANLrQw',
            title: 'FWOG SOLANA MEME COIN EXPLAINED | BEST SOLANA MEME COIN?',
            channel: 'Crypto Success Stories',
            views: '1.3M views',
            date: '2 weeks ago',
            thumbnail: 'https://i.ytimg.com/vi/hBwUKANLrQw/hqdefault.jpg'
        },
        {
            id: '37ia25q_-WM',
            title: 'TITCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Interviews',
            views: '3.8M views',
            date: '1 month ago',
            thumbnail: 'https://i.ytimg.com/vi/37ia25q_-WM/hqdefault.jpg'
        },
        {
            id: 'd9DqanOmozs',
            title: 'GOGWIFHAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Explainer',
            views: '5.2M views',
            date: '2 months ago',
            thumbnail: 'https://i.ytimg.com/vi/d9DqanOmozs/hqdefault.jpg'
        },
        {
            id: '2JaEVr_wrEw',
            title: 'TROLL SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Charts',
            views: '2.1M views',
            date: '3 weeks ago',
            thumbnail: 'https://i.ytimg.com/vi/2JaEVr_wrEw/hqdefault.jpg'
        },
        {
            id: 'HLo0AdL_0_k',
            title: 'POPCAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Tutorials',
            views: '3.5M views',
            date: '1 month ago',
            thumbnail: 'https://i.ytimg.com/vi/HLo0AdL_0_k/hqdefault.jpg'
        },
        {
            id: 'D5QPXixAeUk',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Security',
            views: '4.8M views',
            date: '2 weeks ago',
            thumbnail: 'https://i.ytimg.com/vi/D5QPXixAeUk/hqdefault.jpg'
        },
        {
            id: 'iTea0yhmWz8',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Community',
            views: '1.5M views',
            date: '1 month ago',
            thumbnail: 'https://i.ytimg.com/vi/iTea0yhmWz8/hqdefault.jpg'
        },
        {
            id: 'cGYb6AGEAQ4',
            title: 'MOONPIG SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Passive Crypto Income',
            views: '3.8M views',
            date: '3 weeks ago',
            thumbnail: 'https://i.ytimg.com/vi/cGYb6AGEAQ4/hqdefault.jpg'
        },
        {
            id: 'Uos1Wpv2rcg',
            title: 'MEMCOIN CYCLE EXPLAINED | BEST MEME COINS FOR 2024',
            channel: 'Cartooning Club How to Draw',
            views: '2.2M views',
            date: '2 years ago',
            thumbnail: 'https://i.ytimg.com/vi/Uos1Wpv2rcg/hqdefault.jpg'
        },
        {
            id: 'Y_f3TMetT6k',
            title: 'Noodle Meme Coin Explained - $NOODLE',
            channel: 'Crypto Success Stories',
            views: '1.3M views',
            date: '2 weeks ago',
            thumbnail: 'https://i.ytimg.com/vi/Y_f3TMetT6k/hqdefault.jpg'
        },
        {
            id: 'Vq5AOFAwQQs',
            title: 'SOL WRAPPED EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Crypto Communities',
            views: '1.5M views',
            date: '1 week ago',
            thumbnail: 'https://i.ytimg.com/vi/Vq5AOFAwQQs/hqdefault.jpg'
        },
        {
            id: '2_I3gxl1I28',
            title: 'GOONCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Crypto Events Live',
            views: '4.8M views',
            date: '3 days ago',
            thumbnail: 'https://i.ytimg.com/vi/2_I3gxl1I28/hqdefault.jpg'
        },
        {
            id: 'l6desSwG6aU',
            title: 'SOLANA HOUSE EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Crypto Stories',
            views: '1.5M views',
            date: '2 days ago',
            thumbnail: 'https://i.ytimg.com/vi/l6desSwG6aU/hqdefault.jpg'
        },
        {
            id: 'hBwUKANLrQw',
            title: 'FWOG SOLANA MEME COIN EXPLAINED | BEST SOLANA MEME COIN?',
            channel: 'Crypto Hacks',
            views: '3.8M views',
            date: '1 day ago',
            thumbnail: 'https://i.ytimg.com/vi/hBwUKANLrQw/hqdefault.jpg'
        },
        {
            id: '37ia25q_-WM',
            title: 'TITCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Draw Like a Sir',
            views: '2.5M views',
            date: '2 years ago',
            thumbnail: 'https://i.ytimg.com/vi/37ia25q_-WM/hqdefault.jpg'
        },
        {
            id: 'd9DqanOmozs',
            title: 'GOGWIFHAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Aaron Blaise',
            views: '1.9M views',
            date: '1 year ago',
            thumbnail: 'https://i.ytimg.com/vi/d9DqanOmozs/hqdefault.jpg'
        },
        {
            id: '2JaEVr_wrEw',
            title: 'TROLL SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'The Happy Ever Crafter',
            views: '1.3M views',
            date: '10 years ago',
            thumbnail: 'https://i.ytimg.com/vi/2JaEVr_wrEw/hqdefault.jpg'
        },
        {
            id: 'HLo0AdL_0_k',
            title: 'POPCAT SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Cartooning Club How to Draw',
            views: '2.2M views',
            date: '2 years ago',
            thumbnail: 'https://i.ytimg.com/vi/HLo0AdL_0_k/hqdefault.jpg'
        },
        {
            id: 'D5QPXixAeUk',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Paint Coach',
            views: '3.8M views',
            date: '15 years ago',
            thumbnail: 'https://i.ytimg.com/vi/D5QPXixAeUk/hqdefault.jpg'
        },
        {
            id: 'iTea0yhmWz8',
            title: 'BARKCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Emmy Kalia',
            views: '5.2M views',
            date: '1 month ago',
            thumbnail: 'https://i.ytimg.com/vi/iTea0yhmWz8/hqdefault.jpg'
        },
        {
            id: 'cGYb6AGEAQ4',
            title: 'MOONPIG SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Art with Flo',
            views: '1.2M views',
            date: '5 years ago',
            thumbnail: 'https://i.ytimg.com/vi/cGYb6AGEAQ4/hqdefault.jpg'
        },
        {
            id: 'Uos1Wpv2rcg',
            title: 'MEMCOIN CYCLE EXPLAINED | BEST MEME COINS FOR 2024',
            channel: 'Andrew Tischler',
            views: '3.2M views',
            date: '3 years ago',
            thumbnail: 'https://i.ytimg.com/vi/Uos1Wpv2rcg/hqdefault.jpg'
        },
        {
            id: 'Y_f3TMetT6k',
            title: 'Noodle Meme Coin Explained - $NOODLE',
            channel: 'Will Kemp Art School',
            views: '1.7M views',
            date: '2 years ago',
            thumbnail: 'https://i.ytimg.com/vi/Y_f3TMetT6k/hqdefault.jpg'
        },
        {
            id: 'Vq5AOFAwQQs',
            title: 'SOL WRAPPED EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'BoroCG',
            views: '2.8M views',
            date: '1 year ago',
            thumbnail: 'https://i.ytimg.com/vi/Vq5AOFAwQQs/hqdefault.jpg'
        },
        {
            id: '2_I3gxl1I28',
            title: 'GOONCOIN SOLANA MEME COIN | BEST SOLANA MEME COIN?',
            channel: 'Makoccino',
            views: '1.5M views',
            date: '6 months ago',
            thumbnail: 'https://i.ytimg.com/vi/2_I3gxl1I28/hqdefault.jpg'
        },
        {
            id: 'l6desSwG6aU',
            title: 'SOLANA HOUSE EXPLAINED | SOLANA ECOSYSTEM',
            channel: 'Minnie Small',
            views: '3.1M views',
            date: '4 months ago',
            thumbnail: 'https://i.ytimg.com/vi/l6desSwG6aU/hqdefault.jpg'
        }
    ]
};

// Function to create a video card
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.videoId = video.id;
    
    // Добавляем случайный поворот для эффекта рисованности
    const randomRotation = (Math.random() * 2 - 1);
    card.style.transform = `rotate(${randomRotation}deg)`;
    
    card.innerHTML = `
        <div class="video-thumbnail drawn-border">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="play-button">▶</div>
        </div>
        <div class="video-info">
            <h3 class="video-title scribble">${video.title}</h3>
            <div class="video-meta">
                <span>${video.channel}</span>
                <span>${video.views} • ${video.date}</span>
            </div>
        </div>
    `;
    
    // Добавляем обработчик клика для открытия видео
    card.addEventListener('click', () => openVideoModal(video.id));
    
    return card;
}

// Function to create a chaotic video card
function createChaoticVideoCard(video, index) {
    const card = createVideoCard(video);
    
    // Make card position absolute for chaotic layout
    card.style.position = 'relative';
    
    // Apply random rotation and transformation
    const rotation = Math.floor(Math.random() * 360);
    const scaleX = Math.random() > 0.5 ? -1 : 1; // Randomly flip horizontally
    const scaleY = Math.random() > 0.7 ? -1 : 1; // Sometimes flip vertically
    
    card.style.transform = `rotate(${rotation}deg) scale(${scaleX}, ${scaleY})`;
    
    // Randomly adjust margins for more chaos
    card.style.margin = `${Math.floor(Math.random() * 40) - 20}px ${Math.floor(Math.random() * 40) - 20}px`;
    
    // Randomly change text direction
    const videoInfo = card.querySelector('.video-info');
    if (videoInfo) {
        const textDirections = ['ltr', 'rtl', 'vertical-lr', 'vertical-rl'];
        const randomDirection = textDirections[Math.floor(Math.random() * textDirections.length)];
        videoInfo.style.writingMode = randomDirection;
        
        // Random text color
        const videoTitle = videoInfo.querySelector('.video-title');
        if (videoTitle && Math.random() > 0.5) {
            const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
            videoTitle.style.color = randomColor;
        }
    }
    
    // Add random doodles to some cards
    if (Math.random() > 0.6) {
        const doodle = document.createElement('div');
        doodle.className = 'random-doodle';
        doodle.style.position = 'absolute';
        doodle.style.top = `${Math.random() * 100}%`;
        doodle.style.left = `${Math.random() * 100}%`;
        doodle.style.transform = `rotate(${Math.random() * 360}deg)`;
        doodle.style.zIndex = '10';
        
        // Create random SVG doodle
        const doodleTypes = ['star', 'scribble', 'face', 'arrow'];
        const randomType = doodleTypes[Math.floor(Math.random() * doodleTypes.length)];
        
        let svgContent = '';
        
        switch (randomType) {
            case 'star':
                svgContent = '<svg width="40" height="40" viewBox="0 0 40 40"><path d="M20,0 L25,15 L40,15 L28,25 L33,40 L20,30 L7,40 L12,25 L0,15 L15,15 Z" stroke="black" fill="none" stroke-width="2"></path></svg>';
                break;
            case 'scribble':
                svgContent = '<svg width="60" height="40" viewBox="0 0 60 40"><path d="M5,20 C10,10 20,30 30,15 S40,25 55,10" stroke="black" fill="none" stroke-width="2" stroke-linecap="round"></path></svg>';
                break;
            case 'face':
                svgContent = '<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" stroke="black" fill="none" stroke-width="2"></circle><circle cx="13" cy="15" r="2" fill="black"></circle><circle cx="27" cy="15" r="2" fill="black"></circle><path d="M15,25 C17,28 23,28 25,25" stroke="black" fill="none" stroke-width="2" stroke-linecap="round"></path></svg>';
                break;
            case 'arrow':
                svgContent = '<svg width="50" height="30" viewBox="0 0 50 30"><path d="M5,15 L40,15 M40,15 L30,5 M40,15 L30,25" stroke="black" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
                break;
        }
        
        doodle.innerHTML = svgContent;
        card.appendChild(doodle);
    }
    
    // Randomly apply filters to thumbnails
    const thumbnail = card.querySelector('.video-thumbnail img');
    if (thumbnail) {
        const filters = [
            'invert(100%)',
            'grayscale(100%) contrast(200%)',
            'hue-rotate(180deg)',
            'blur(2px) brightness(150%)',
            'sepia(100%) saturate(300%)',
            'contrast(200%) brightness(150%) hue-rotate(90deg)'
        ];
        
        const randomFilter = filters[Math.floor(Math.random() * filters.length)];
        thumbnail.style.filter = randomFilter;
    }
    
    return card;
}

// Function to create runaway video card that escapes from mouse cursor
function createRunawayVideoCard(video, index) {
    const card = createVideoCard(video);
    
    // Add special class for styling
    card.classList.add('runaway-card');
    
    // Set initial random position
    const randomX = Math.floor(Math.random() * 20 - 10);
    const randomY = Math.floor(Math.random() * 20 - 10);
    card.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Add mouse event listeners to make the card run away
    card.addEventListener('mousemove', handleRunawayMouseMove);
    card.addEventListener('mouseenter', handleRunawayMouseEnter);
    
    // Add random size change effect on hover
    card.addEventListener('mouseover', () => {
        const randomScale = 0.7 + Math.random() * 0.6; // Random scale from 0.7 to 1.3
        card.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease';
        card.style.opacity = '0.8';
        setTimeout(() => {
            card.style.opacity = '1';
        }, 150);
    });
    
    // Add random taunting text
    const taunts = [
        'Can\'t catch me!', 
        'Ha-ha!', 
        'Missed!', 
        'Try again, loser!',
        'Too slow!',
        'Wrong way!',
        'Oops!',
        'Almost!'
    ];
    
    const tauntElement = document.createElement('div');
    tauntElement.className = 'runaway-taunt';
    tauntElement.textContent = taunts[Math.floor(Math.random() * taunts.length)];
    card.appendChild(tauntElement);
    
    return card;
}

// Function to handle mouse movement over runaway cards
function handleRunawayMouseMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    // Calculate direction to move away (opposite of mouse position)
    const moveX = (cardCenterX - event.clientX) * 0.8;
    const moveY = (cardCenterY - event.clientY) * 0.8;
    
    // Apply movement with transition
    card.style.transition = 'transform 0.2s ease-out';
    card.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // Change taunt text randomly
    const taunt = card.querySelector('.runaway-taunt');
    if (taunt && Math.random() > 0.9) {
        const taunts = [
            'Can\'t catch me!', 
            'Ha-ha!', 
            'Missed!', 
            'Try again, loser!',
            'Too slow!',
            'Wrong way!',
            'Oops!',
            'Almost!'
        ];
        taunt.textContent = taunts[Math.floor(Math.random() * taunts.length)];
        taunt.style.opacity = '1';
        setTimeout(() => {
            taunt.style.opacity = '0.7';
        }, 500);
    }
    
    // Prevent default click behavior
    event.preventDefault();
    event.stopPropagation();
}

// Function to handle mouse entering runaway cards
function handleRunawayMouseEnter(event) {
    const card = event.currentTarget;
    const container = document.querySelector('#random .videos-grid');
    const containerRect = container.getBoundingClientRect();
    
    // Calculate a random position within the container to jump to
    const maxX = containerRect.width - 200; // Accounting for card width
    const maxY = containerRect.height - 200; // Accounting for card height
    
    const randomX = Math.floor(Math.random() * maxX - maxX/2);
    const randomY = Math.floor(Math.random() * maxY - maxY/2);
    
    // Apply sudden jump
    card.style.transition = 'transform 0.1s ease-out';
    card.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Add sound effect when trying to catch
    if (Math.random() > 0.5) {
        const sounds = ['boing', 'swoosh', 'pop', 'zing'];
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        // Here we could add actual sound playback, but for now just add text
        const taunt = card.querySelector('.runaway-taunt');
        if (taunt) {
            taunt.textContent += ` *${randomSound}*`;
            setTimeout(() => {
                taunt.textContent = taunt.textContent.replace(` *${randomSound}*`, '');
            }, 1000);
        }
    }
    
    // Prevent default click behavior
    event.preventDefault();
    event.stopPropagation();
}

// Function to load videos for a specific tab
function loadVideosForTab(tabId) {
    // Get the video container
    const videosContainer = document.querySelector(`#${tabId} .videos-grid`);
    
    // Clear the container
    videosContainer.innerHTML = '';
    
    // Special handling for favorites tab
    if (tabId === 'favorites') {
        createLazyMessage(videosContainer);
        return;
    }
    
    // If no data for this tab, exit
    if (!videoData[tabId]) return;
    
    // Special handling for trending tab
    if (tabId === 'trending') {
        // Create chaotic video cards
        videoData[tabId].forEach((video, index) => {
            const card = createChaoticVideoCard(video, index);
            videosContainer.appendChild(card);
        });
        return;
    }
    
    // Special handling for random tab - videos that run away from cursor
    if (tabId === 'random') {
        // Add special class to container for styling
        videosContainer.classList.add('runaway-container');
        
        // Create runaway video cards
        videoData[tabId].forEach((video, index) => {
            const card = createRunawayVideoCard(video, index);
            videosContainer.appendChild(card);
        });
        
        // Add instruction text
        const instruction = document.createElement('div');
        instruction.className = 'runaway-instruction';
        instruction.textContent = 'FAILURE';
        videosContainer.prepend(instruction);
        
        return;
    }
    
    // Regular handling for other tabs
    videoData[tabId].forEach(video => {
        const card = createVideoCard(video);
        videosContainer.appendChild(card);
    });
}

// Function to create lazy message for favorites tab
function createLazyMessage(container) {
    // Create main message container
    const messageContainer = document.createElement('div');
    messageContainer.className = 'lazy-message-container';
    
    // Create main message
    const mainMessage = document.createElement('div');
    mainMessage.className = 'lazy-main-message';
    
    // Create a heading that says "I was too lazy to finish this site..." in big text
    const heading = document.createElement('h1');
    heading.className = 'lazy-heading';
    heading.textContent = 'I was too lazy to finish this site...';
    mainMessage.appendChild(heading);
    
    // Add SVG drawing below the text
    mainMessage.innerHTML += '<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,100 C40,80 60,120 80,100 M100,100 L120,60 L140,140 L160,60 L180,100 M200,60 L200,140 M240,60 L240,140 L280,140 M320,60 L320,140 M340,60 L380,60 M340,100 L380,100 M340,140 L380,140 M420,60 C460,60 460,140 420,140 C380,140 380,60 420,60 M480,60 C520,60 520,140 480,140 C440,140 440,60 480,60 M540,60 L580,140 M560,100 L580,60 L620,140 M640,60 L640,140 L680,140 M720,60 L720,140 L760,140" stroke="black" fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    
    // Create random scribbles
    for (let i = 0; i < 15; i++) {
        const scribble = document.createElement('div');
        scribble.className = 'lazy-scribble';
        
        // Random position
        scribble.style.position = 'absolute';
        scribble.style.top = `${Math.random() * 80 + 10}%`;
        scribble.style.left = `${Math.random() * 80 + 10}%`;
        scribble.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Random size
        const size = Math.random() * 100 + 50;
        scribble.style.width = `${size}px`;
        scribble.style.height = `${size}px`;
        
        // Random scribble type
        const scribbleTypes = [
            '<svg viewBox="0 0 100 100"><path d="M10,50 C30,20 70,80 90,50" stroke="black" fill="none" stroke-width="3" stroke-linecap="round"/></svg>',
            '<svg viewBox="0 0 100 100"><path d="M20,20 L80,80 M20,80 L80,20" stroke="black" fill="none" stroke-width="3" stroke-linecap="round"/></svg>',
            '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" stroke="black" fill="none" stroke-width="3"/></svg>',
            '<svg viewBox="0 0 100 100"><path d="M30,30 L70,30 L70,70 L30,70 Z" stroke="black" fill="none" stroke-width="3" stroke-linecap="round"/></svg>',
            '<svg viewBox="0 0 100 100"><path d="M10,10 C30,30 70,30 90,10 C70,50 70,70 90,90 C50,70 30,70 10,90 C30,50 30,30 10,10 Z" stroke="black" fill="none" stroke-width="3" stroke-linecap="round"/></svg>',
            '<svg viewBox="0 0 100 100"><text x="10" y="50" font-family="Gloria Hallelujah, cursive" font-size="20">LOL</text></svg>',
            '<svg viewBox="0 0 100 100"><text x="10" y="50" font-family="Gloria Hallelujah, cursive" font-size="15">WHY?</text></svg>',
            '<svg viewBox="0 0 100 100"><text x="10" y="50" font-family="Gloria Hallelujah, cursive" font-size="15">NOPE!</text></svg>',
            '<svg viewBox="0 0 100 100"><path d="M50,20 L60,40 L80,45 L65,60 L70,80 L50,70 L30,80 L35,60 L20,45 L40,40 Z" stroke="black" fill="none" stroke-width="3" stroke-linecap="round"/></svg>'
        ];
        
        const randomScribble = scribbleTypes[Math.floor(Math.random() * scribbleTypes.length)];
        scribble.innerHTML = randomScribble;
        
        messageContainer.appendChild(scribble);
    }
    
    // Add some handwritten notes
    const notes = [
        'maybe tomorrow...', 
        'or not', 
        'who cares?', 
        'this is fine', 
        'whatever', 
        'sorry not sorry',
        'try again later',
        'error 404: motivation not found',
        'coffee break extended indefinitely',
        'blame the client'
    ];
    
    for (let i = 0; i < 5; i++) {
        const note = document.createElement('div');
        note.className = 'lazy-note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        
        // Random position and rotation
        note.style.position = 'absolute';
        note.style.top = `${Math.random() * 80 + 10}%`;
        note.style.left = `${Math.random() * 80 + 10}%`;
        note.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        
        messageContainer.appendChild(note);
    }
    
    // Add main message to container
    messageContainer.appendChild(mainMessage);
    
    // Add message container to page
    container.appendChild(messageContainer);
}

// Function to add decorative elements
function addDecorativeElements(container) {
    // Очищаем существующие элементы
    const existingDoodles = container.querySelectorAll('.doodle');
    existingDoodles.forEach(doodle => doodle.remove());
    
    // Добавляем новые элементы
    const doodle1 = document.createElement('div');
    doodle1.className = 'doodle doodle-1';
    doodle1.innerHTML = '✓';
    doodle1.style.fontSize = '40px';
    doodle1.style.top = `${Math.random() * 300}px`;
    doodle1.style.right = `${Math.random() * 200}px`;
    
    const doodle2 = document.createElement('div');
    doodle2.className = 'doodle doodle-2';
    doodle2.innerHTML = '★';
    doodle2.style.fontSize = '30px';
    doodle2.style.bottom = `${Math.random() * 300}px`;
    doodle2.style.left = `${Math.random() * 200}px`;
    
    container.appendChild(doodle1);
    container.appendChild(doodle2);
}

// Function to open modal window with video
function openVideoModal(videoId) {
    const modal = document.getElementById('video-modal');
    const videoContainer = document.getElementById('video-container');
    
    // Очищаем контейнер перед добавлением нового видео
    videoContainer.innerHTML = '';
    
    // Создаем iframe для видео
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    
    // Добавляем iframe в контейнер
    videoContainer.appendChild(iframe);
    
    // Показываем модальное окно
    modal.style.display = 'block';
    
    // Load comments for this video
    loadCommentsForVideo();
    
    // Добавляем класс для анимации открытия
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Function to close modal window
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const videoContainer = document.getElementById('video-container');
    const likeButton = document.querySelector('.like-button');
    
    // Удаляем класс анимации
    modal.classList.remove('show');
    
    // Сбрасываем состояние кнопки лайка
    likeButton.classList.remove('active');
    likeButton.style.transform = 'rotate(-5deg)';
    
    // Задержка перед скрытием, чтобы анимация закрытия отработала
    setTimeout(() => {
        // Очищаем контейнер видео
        videoContainer.innerHTML = '';
        
        // Скрываем модальное окно
        modal.style.display = 'none';
    }, 300);
}

// Tab click handler
function handleTabClick(event) {
    // Find the closest li element if clicked on a child element
    const listItem = event.target.closest('li');
    if (!listItem) return;
    
    // Get tab ID from the list item
    const tabId = listItem.dataset.tab;
    
    // If no ID, it's not a tab
    if (!tabId) return;
    
    // Update active tab in sidebar
    document.querySelectorAll('.sidebar-menu li').forEach(tab => {
        tab.classList.remove('active');
    });
    listItem.classList.add('active');
    
    // Update active content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    
    // Load videos for the tab
    loadVideosForTab(tabId);
}

// Function to add hand-drawn effect to elements
function addDrawnEffects() {
    // Add drawn-border class to some elements
    document.querySelectorAll('.search-container input, .modal-content, .video-thumbnail').forEach(el => {
        el.classList.add('drawn-border');
    });
    
    // Add scribble class to some elements
    document.querySelectorAll('.logo, .sidebar-menu li').forEach(el => {
        el.classList.add('scribble');
    });
    
    // Add random rotations to menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        const randomRotation = (Math.random() * 3 - 1.5);
        item.style.setProperty('--random-rotation', `${randomRotation}deg`);
    });
    
    // Add random rotations to video cards
    document.querySelectorAll('.video-card').forEach(card => {
        const randomRotation = (Math.random() * 4 - 2);
        card.style.setProperty('--random-rotation', `${randomRotation}deg`);
    });
}

// Function to toggle like button state
function toggleLike(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('active');
    
    // Добавляем небольшую анимацию при лайке
    if (likeButton.classList.contains('active')) {
        likeButton.style.transform = 'scale(1.2) rotate(-5deg)';
        setTimeout(() => {
            likeButton.style.transform = 'scale(1.1) rotate(-5deg)';
        }, 200);
    } else {
        likeButton.style.transform = 'scale(0.9) rotate(-5deg)';
        setTimeout(() => {
            likeButton.style.transform = 'rotate(-5deg)';
        }, 200);
    }
}

// Массив с всратыми комментариями
const crazyComments = [
    {
        user: 'xXx_G0RK_L0V3R_xXx',
        text: 'FIRST!!1! GORK TO THE MOON!!! 🚀🚀🚀',
        date: '2 minutes ago',
        avatar: '👽'
    },
    {
        user: 'CrYpT0_KiNg_2005',
        text: 'this is literally the worst video i ever seen lol who made this garbage',
        date: '15 minutes ago',
        avatar: '🤡'
    },
    {
        user: 'MoonBoi420',
        text: 'I SOLD MY HOUSE TO BUY GORK AND NOW IM RICH HAHAHAHA WIFE LEFT ME BUT WHO CARES',
        date: '1 hour ago',
        avatar: '🤑'
    },
    {
        user: 'definitely_not_a_bot',
        text: 'Check out my profile for free GORK tokens!!! 100% legit no scam click link in bio',
        date: '3 hours ago',
        avatar: '🤖'
    },
    {
        user: 'crypto_expert_69',
        text: 'I analyzed the charts and GORK will definitely hit $100 by next week trust me bro',
        date: '5 hours ago',
        avatar: '🧠'
    },
    {
        user: 'diamond_hands_4ever',
        text: 'HODL HODL HODL HODL HODL HODL HODL HODL HODL HODL HODL HODL HODL HODL HODL',
        date: '1 day ago',
        avatar: '💎'
    },
    {
        user: 'your_mom_42069',
        text: 'lol what even is this? my 5 year old cousin could make better videos',
        date: '2 days ago',
        avatar: '👵'
    },
    {
        user: 'gork_whale',
        text: 'I bought 1,000,000,000 GORK tokens yesterday and now I\'m down 99.9% HELP!!!',
        date: '3 days ago',
        avatar: '🐋'
    },
    {
        user: 'conspiracy_theorist_1337',
        text: 'GORK is actually controlled by the government to track our brains wake up sheeple!!!',
        date: '1 week ago',
        avatar: '👁️'
    },
    {
        user: 'random_guy123',
        text: 'I have no idea what GORK is but I\'m commenting anyway because I\'m bored',
        date: '2 weeks ago',
        avatar: '🥱'
    }
];

// Function to load comments when video modal is opened
function loadCommentsForVideo() {
    // Load comments
    loadComments();
    
    // Add event listener for comment submission
    document.querySelector('.comment-submit').addEventListener('click', addComment);
}

// Function to load comments
function loadComments() {
    const commentsList = document.querySelector('.comments-list');
    commentsList.innerHTML = '';
    
    // Shuffle comments to make them appear random
    const shuffledComments = [...crazyComments].sort(() => Math.random() - 0.5);
    
    // Display comments
    shuffledComments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
}

// Function to create a comment element
function createCommentElement(comment) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    
    // Apply random rotation
    const randomRotation = (Math.random() * 6 - 3).toFixed(1);
    commentElement.style.setProperty('--random-rotation', `${randomRotation}deg`);
    
    // Create comment content
    const commentContent = document.createElement('div');
    commentContent.className = 'comment-content';
    
    // Create avatar
    const avatarElement = document.createElement('div');
    avatarElement.className = 'comment-avatar';
    avatarElement.textContent = comment.avatar;
    
    // Create user name
    const userElement = document.createElement('div');
    userElement.className = 'comment-user';
    userElement.textContent = comment.user;
    
    // Create comment text
    const textElement = document.createElement('div');
    textElement.className = 'comment-text';
    textElement.textContent = comment.text;
    
    // Create comment date
    const dateElement = document.createElement('div');
    dateElement.className = 'comment-date';
    dateElement.textContent = comment.date;
    
    // Assemble comment
    commentContent.appendChild(userElement);
    commentContent.appendChild(textElement);
    commentContent.appendChild(dateElement);
    
    commentElement.appendChild(avatarElement);
    commentElement.appendChild(commentContent);
    
    return commentElement;
}

// Function to add a new comment
function addComment() {
    const commentInput = document.querySelector('.comment-input');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        // Create a new comment object
        const newComment = {
            user: 'YOU',
            text: commentText,
            date: 'Just now',
            avatar: '😎'
        };
        
        // Add comment to the list
        const commentElement = createCommentElement(newComment);
        document.querySelector('.comments-list').prepend(commentElement);
        
        // Clear input
        commentInput.value = '';
    }
}

// Функция для применения случайных изображений ко всем видео
function applyRandomThumbnails() {
    // Применяем уникальные случайные изображения для каждой категории
    for (const category in videoData) {
        if (videoData.hasOwnProperty(category)) {
            // Создаем копию массива изображений для этой категории
            const categoryThumbnails = [...customThumbnails];
            
            // Перемешиваем массив изображений для случайного порядка
            shuffleArray(categoryThumbnails);
            
            // Применяем уникальные изображения к каждому видео в категории
            videoData[category].forEach((video, index) => {
                // Если видео больше чем изображений, начинаем повторно использовать изображения
                const thumbnailIndex = index % categoryThumbnails.length;
                video.thumbnail = categoryThumbnails[thumbnailIndex];
            });
        }
    }
}

// Функция для перемешивания массива (алгоритм Фишера-Йейтса)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Функция для добавления случайного наклона элементам
function applyRandomRotations() {
    const elements = document.querySelectorAll('.video-card, .video-thumbnail, .video-info, .video-title, .menu-item, .sidebar-menu li');
    
    elements.forEach(el => {
        const randomRotation = (Math.random() * 6 - 3).toFixed(1); // От -3 до 3 градусов
        el.style.setProperty('--random-rotation', `${randomRotation}deg`);
    });
}

// Initialization when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Применяем случайные изображения ко всем видео
    applyRandomThumbnails();
    
    // Добавляем случайный наклон для элементов
    applyRandomRotations();
    
    // Load videos for the default tab
    loadVideosForTab('latest');
    
    // Add event handlers
    document.querySelector('.sidebar-menu').addEventListener('click', handleTabClick);
    document.querySelector('.close-modal').addEventListener('click', closeVideoModal);
    document.querySelector('.like-button').addEventListener('click', toggleLike);
    document.querySelector('.comments-button').addEventListener('click', showCommentsModal);
    
    // Закрытие модального окна при клике вне его содержимого
    document.getElementById('video-modal').addEventListener('click', (event) => {
        if (event.target === document.getElementById('video-modal')) {
            closeVideoModal();
        }
    });
    
    // Обработчик клавиши Escape для закрытия модального окна
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && document.getElementById('video-modal').style.display === 'block') {
            closeVideoModal();
        }
    });
    
    // Add hand-drawn effects
    addDrawnEffects();
    
    // Load videos for the first tab
    loadVideosForTab('latest');
});
