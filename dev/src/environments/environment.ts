// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  user: {
    banners: [{
      topText: '',
      bigText: '',
      description: '',
      image: ''
    }, {
      topText: '',
      bigText: '',
      description: '',
      image: ''
    }, {
      topText: '',
      bigText: '',
      description: '',
      image: ''
    }],
    blogs: [{
      title: '',
      description: '',
      link: '',
      image: ''
    }, {
      title: '',
      description: '',
      link: '',
      image: ''
    }, {
      title: '',
      description: '',
      link: '',
      image: ''
    }],
    featured: [{
      label: '',
      id: '',
      url: ''
    }, {
      label: '',
      id: '',
      url: ''
    }, {
      label: '',
      id: '',
      url: ''
    }],
    urls: [''],
    customLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      instagram: ''
    }
  }
};
