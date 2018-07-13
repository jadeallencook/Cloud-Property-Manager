// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  user: {
    banners: [{
      topText: 'Visit Northeast Michigan',
      bigText: 'Find Your Rental',
      description: 'Perfect Landing Rentals',
      image: 'images/trees.jpg'
    }, {
      topText: 'Welcome to the Sunrise Side!',
      bigText: 'Beautiful Beaches',
      description: 'Reserve Early! ',
      image: 'images/nCJaqgv.jpg'
    }, {
      topText: 'Family Friendly Properties',
      bigText: 'Waterfront Homes ',
      description: 'Riverfront, Lakefront, Inland Lakes or Residential',
      image: 'images/waterfall.jpg'
    }],
    blogs: [{
      title: '2018 Review to Win contest!',
      description: "We reached out and 175 of you gave us a review for your experience at our vacation rentals for the 2017 season. This also gave you an entry for a chance to win prizes including 2 free nights on us towards the 2018 season! We're happy to announce the winners of our 2018 review to win contest! Congratulations to the following who have been selected at random from our wheel of gratitude!",
      link: 'http://perfectlandingrentals.com/browse/',
      image: 'https://farm5.staticflickr.com/4747/40012331832_bf22f3cbf9_o.png'
    }, {
      title: 'Now accepting Reservations for 2018',
      description: 'Choose from our large inventory',
      link: 'http://perfectlandingrentals.com/property/#/1452/Penny-Crossings/512-W-Bay-St/East-Tawas',
      image: 'https://perfectlandingrentals.com/vrp/prop1452_img_0265_1920w.jpg'
    }, {
      title: 'Fully furnished Monthly rentals until May 2018!',
      description: 'Check these out! Need a 3 month rental off season rates!',
      link: 'http://perfectlandingrentals.com/property/#/1128/Sunrise-Cottage/2010-Lakeview/East-Tawas',
      image: 'https://perfectlandingrentals.com/vrp/prop1036_2481_640w.jpg'
    }],
    featured: [{
      label: 'Double 07',
      id: '1457',
      url: 'default'
    }, {
      label: 'Seas the Day',
      id: '1461',
      url: 'default'
    }, {
      label: 'Naples north',
      id: '1459',
      url: 'default'
    }],
    urls: ['oscodaproperties.com', 'tawasproperties.com'],
    links: {
      facebook: 'https://www.facebook.com/perfectlanding.biz.125/',
      twitter: 'https://www.twitter.com',
      pinterest: 'https://www.pinterest.com/rentals4you/',
      instagram: 'https://www.instagram.com/perfectlandingrentals/'
    }
  }
};
