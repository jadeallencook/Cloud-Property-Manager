// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  userUID: null,
  user: {
    banners: [{
      topText: "Your Banner's Top Text",
      bigText: "Main Banner Text",
      description: "A little description...",
      image: "https://www.publicdomainpictures.net/pictures/100000/velka/new-home-construction-1410089870FZ2.jpg"
    }],
    blogs: [{
      title: "My AWESOME Blog Title!",
      description: "This is all about my blog...",
      link: "https://www.facebook.com/onflo.io/",
      image: "https://www.publicdomainpictures.net/pictures/100000/velka/new-home-construction-1410089870FZ2.jpg"
    }],
    featured: [{
      label: "Property Name",
      id: "123456",
      url: "default"
    }],
    urls: [],
    links: {
      facebook: '',
      twitter: '',
      pinterest: '',
      instagram: ''
    }
  }
};
