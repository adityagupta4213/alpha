var links = [
    {
        "link": {
            'name': 'Example',
            'url': 'http://www.example.com',
            'color': 'blue',
            'facebook': 'http://www.facebook.com/example',
            'twitter': 'http://www.twitter.com/example',
            'instagram': 'http://www.instagram.com/example'
        }
    },
    {
        "link": {
            'name': 'Example',
            'url': 'http://www.example.com',
            'color': 'blue',
            'facebook': 'http://www.facebook.com/example',
            'twitter': 'http://www.twitter.com/example',
            'instagram': 'http://www.instagram.com/example'
        }
    },
    {
        "link": {
            'name': 'Example',
            'url': 'http://www.example.com',
            'color': 'blue',
            'facebook': 'http://www.facebook.com/example',
            'twitter': 'http://www.twitter.com/example',
            'instagram': 'http://www.instagram.com/example'
        }
    },
    {
        "link": {
            'name': 'Example',
            'url': 'http://www.example.com',
            'color': 'blue',
            'facebook': 'http://www.facebook.com/example',
            'twitter': 'http://www.twitter.com/example',
            'instagram': 'http://www.instagram.com/example'
        }
    },
    {
        "link": {
            'name': 'Example',
            'url': 'http://www.example.com',
            'color': 'blue',
            'facebook': 'http://www.facebook.com/example',
            'twitter': 'http://www.twitter.com/example',
            'instagram': 'http://www.instagram.com/example'
        }
    },
    {
        "link": {
            'name': 'Example',
            'url': 'http://www.example.com',
            'color': 'blue',
            'facebook': 'http://www.facebook.com/example',
            'twitter': 'http://www.twitter.com/example',
            'instagram': 'http://www.instagram.com/example'
        }
    },
    {
        "link": {
            'name': 'Example',
            'url': 'http://www.example.com',
            'color': 'blue',
            'facebook': 'http://www.facebook.com/example',
            'twitter': 'http://www.twitter.com/example',
            'instagram': 'http://www.instagram.com/example'
        }
    },
    {
        "link": {
            'name': 'Example',
            'url': 'http://www.example.com',
            'color': 'blue',
            'facebook': 'http://www.facebook.com/example',
            'twitter': 'http://www.twitter.com/example',
            'instagram': 'http://www.instagram.com/example'
        }
    }
];
var link_html;
for (var i = 0; i < links.length; i++) {
    link_html = '<a href="' + links[i].link.url + '" class="link" data-color="' + links[i].link.color + '">' + links[i].link.name + '</a>';
    $('.link-container').append(link_html);
}
