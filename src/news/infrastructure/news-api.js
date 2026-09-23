import axios from 'axios';

const newsApi= "https://newsapi.org/v2/";
const apiKey = "4c467a46578047c7a4d160b455ba4136";
const sourcesEndpoint="/top-headlines/sources/";
const topHeadlinesEndpoint="/top-headlines";

const http = axios.create({
    baseURL: newsApi,
    params: {
        apiKey: apiKey
    }
});

export class NewsApi{

    getSources = () => http.get(`${sourcesEndpoint}`);

    getArticlesForSourceId = sourceId => http.get(`${topHeadlinesEndpoint}`,
        {params: {sources: sourceId}});
}