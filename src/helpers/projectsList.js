import project01 from "./../img/projects/recipe.png";
import project01Big from "./../img/projects/recipe.png"

import project02 from "./../img/projects/inforce.png";
import project02Big from "./../img/projects/inforce.png";

import project03 from "./../img/projects/events.png";
import project03Big from "./../img/projects/events.png";

import project04 from "./../img/projects/military.png";
import project04Big from "./../img/projects/military.png";

import project05 from "./../img/projects/sniffer.png";
import project05Big from "./../img/projects/sniffer.png";

import project06 from "./../img/projects/netflix.png";
import project06Big from "./../img/projects/netflix.png";

import food_picture from './../img/projects/food2.png'

import chat from "./../img/projects/chat2.png";

const projects = [
    {
        title: 'Django Rest Recipe API',
        skills: 'Django RF, Postgresql, Python, Docker',
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://github.com/axlrose023/DRF-API',
    },
    {
        title: 'Military Shop',
        img: project04,
        imgBig: project04Big,
        skills: 'Python, Django, Docker, Postgresql, Bootstrap',
        gitHubLink: 'https://github.com/axlrose023/military_shop'
    },
    {
        title: 'Food Menu App',
        img: food_picture,
        imgBig: food_picture,
        skills: 'Python, Django, Postgresql, Docker, AJAX',
        gitHubLink: 'https://github.com/axlrose023/djangoFood'
    },

    {
        title: 'Event Reader',
        img: project03,
        imgBig: project03Big,
        skills: 'Python, Django, Docker, Postgresql',
        gitHubLink: 'https://github.com/axlrose023/Event-Reader',
    },

    {
        title: 'Network Sniffer',
        img: project05,
        imgBig: project05Big,
        skills: 'Python, Django, Docker, Postgresql',
        gitHubLink: 'https://github.com/axlrose023/sniffer_sockets'
    },
    {
        title: 'Netflix Base Service',
        img: project06,
        imgBig: project06Big,
        skills: 'Python, Django, Postgresql, Docker',
        gitHubLink: 'https://github.com/axlrose023/djangoFlix'
    },
    {
        title: 'RSSI Checker',
        img: project06,
        imgBig: project06Big,
        skills: 'Python, Django, Postgresql, Docker',
        gitHubLink: 'https://github.com/axlrose023/RSSI_checker'
    },
    {
        title: 'Restaurant Django Rest API',
        img: project02,
        imgBig: project02Big,
        skills: 'Django RF, Postgresql, Python',
        gitHubLink: 'https://github.com/axlrose023/Inforce-django-api',
    },
    {
        title: 'Django Websockets Chat',
        img: chat,
        imgBig: chat,
        skills: 'Python, Django, Django-Channels',
        gitHubLink: 'https://github.com/axlrose023/djangoChannels'
    },
]

export {projects}