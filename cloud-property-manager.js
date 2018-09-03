/* 
    Cloud Property Manager v1.0 2018
    Developed by Onflo (www.onflo.io)
*/

window.cpm = {
    init: function (properties, callback) {
        if (!firebase) {
            console.warn('CPM: You need to install Firebase...');
        } else if (!firebaseConfig.userUID) {
            console.warn('CPM: Config firebaseConfig.userUID');
        } else {
            new Promise(function (res, rej) {
                var refURL = 'users/' + firebaseConfig.userUID + '/';
                firebase.database().ref(refURL).once('value').then((snapshot) => {
                    res(snapshot.val());
                });
            }).then(function (firebaseUserData) {
                if (firebaseUserData === null) {
                    console.warn('CPM: No data for ' + firebaseConfig.userUID + '...');
                } else {
                    // banners
                    if (firebaseUserData.banners) {
                        (function () {
                            var ids = ['big-text', 'description', 'image', 'top-text'],
                                banners = firebaseUserData.banners;
                            for (var x = 0, max = banners.length; x < max; x++) {
                                var banner = banners[x];
                                for (var y = 0; y < ids.length; y++) {
                                    var id = ids[y],
                                        elem = document.getElementById('banner-' + (x + 1) + '-' + id);
                                    if (elem) {
                                        if (id === 'big-text') {
                                            elem.innerText = banner.bigText;
                                        } else if (id === 'description') {
                                            elem.innerText = banner.description;
                                        } else if (id === 'image') {
                                            elem.style.backgroundImage = 'url("' + banner.image + '")';
                                            elem.style.backgroundSize = 'cover';
                                        } else if (id === 'top-text') {
                                            elem.innerText = banner.topText;
                                        }
                                    }
                                }
                            }
                        })();
                    }
                    // blogs
                    if (firebaseUserData.blogs) {
                        (function () {
                            var blogs = firebaseUserData.blogs,
                                ids = ['blog-image', 'blog-description', 'blog-title', 'blog-link'];
                            for (var x = 0, max = blogs.length; x < max; x++) {
                                var blog = blogs[x];
                                for (var y = 0, max2 = ids.length; y < max2; y++) {
                                    var id = ids[y] + '-' + (x + 1),
                                        elem = document.getElementById(id);
                                    if (elem) {
                                        id = id.replace('blog-', '').replace('-' + (x + 1), '');
                                        if (id.indexOf('image') !== -1) {
                                            elem.style.backgroundImage = 'url(' + blog[id] + ')';
                                        } else if (id.indexOf('link') !== -1) {
                                            elem.setAttribute('href', blog[id]);
                                        } else {
                                            elem.innerText = blog[id];
                                        }
                                    }
                                }
                            }
                        })();
                    }
                    // links
                    if (firebaseUserData.links) {
                        (function () {
                            var links = firebaseUserData.links;
                            for (var x = 0, max = Object.keys(links).length; x < max; x++) {
                                var social = Object.keys(links)[x],
                                    link = links[social],
                                    elems = document.getElementsByClassName(social);
                                for (var y = 0, max2 = elems.length; y < max2; y++) {
                                    var elem = elems[y];
                                    if (elem.tagName === 'A') {
                                        elem.setAttribute('href', link);
                                    }
                                }
                            }
                        })();
                    }
                    // featured
                    if (firebaseUserData.featured && properties) {
                        (function () {
                            var featured = firebaseUserData.featured;
                            for (var x = 0, max = featured.length; x <= max; x++) {
                                var feature = featured[x],
                                    property = properties[feature.id];
                                if (!property) {
                                    feature.id = Object.keys(properties)[Object.keys(properties).length * Math.random() << 0];
                                    property = properties[feature.id];
                                }
                                for (var y = 0, max2 = Object.keys(property).length; y < max2; y++) {
                                    var key = Object.keys(property)[y],
                                        id = 'featured-property-' + key + '-' + (x + 1);
                                    if (key === 'photos') {
                                        var photo = property.photos[0],
                                            elem = document.getElementById('featured-property-photo-' + (x + 1));
                                        if (elem) {
                                            elem.setAttribute('src', photo);
                                        }
                                    } else {
                                        var elem = document.getElementById(id);
                                        if (elem) {
                                            elem.innerHTML += property[key];
                                        }
                                    }
                                }
                                var links = document.getElementsByClassName('featured-property-link-' + (x + 1));
                                for (var y = 0, max = links.length; y < max; y++) {
                                    var elem = links[y];
                                    elem.setAttribute('href', '/property/#/' + feature.id);
                                }
                            }
                        })();
                    } else if (!properties) {
                        console.warn('CPM: No properties passed...');
                    }
                }
                // complete
                callback();
            });
        }
    }
}