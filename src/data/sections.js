import theme from '../theme';
import {
    a_and_e_articles,
    sports_articles,
    opinion_articles,
    uni_news_articles,
    city_news_articles,
    audio_articles,
  } from "../data/articles";

export const sections = [
    {
        title: "A&C",
    },
    {
        title: "SPORTS",
    },
    {
        title: "UNI NEWS",
    },
    {
        title: "OPINION",
    },
    {
        title: "CITY NEWS",
    },
    {
        title: "AUDIO",
    },
];

export const stripes = [
    {
        "index": 1,
        "title": "A&C",
        "color": theme.colors.lightRed,
        "saturated": theme.colors.saturatedRed,
        "articles": a_and_e_articles,
    },
    {
        "index": 2,
        "title": "Sports",
        "color": theme.colors.lightOrange,
        "saturated": theme.colors.saturatedOrange,
        "articles": sports_articles,
    },
    {
        "index": 3,
        "title": "University News",
        "color": theme.colors.lightYellow,
        "saturated": theme.colors.saturatedYellow,
        "articles": uni_news_articles,
    },
    {
        "index": 4,
        "title": "Opinion",
        "color": theme.colors.lightGreen,
        "saturated": theme.colors.saturatedGreen,
        "articles": opinion_articles,
    },
    {
        "index": 5,
        "title": "City News",
        "color": theme.colors.lightBlue,
        "saturated": theme.colors.saturatedBlue,
        "articles": city_news_articles,
    },
    {
        "index": 6,
        "title": "Audio",
        "color": theme.colors.lightIndigo,
        "saturated": theme.colors.saturatedIndigo,
        "articles": audio_articles,
    },
];