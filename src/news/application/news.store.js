import {reactive} from 'vue';
import {Source} from '../domain/model/source.entity.js';
import {SourceAssembler} from "../infrastructure/source.assembler.js";
import {NewsApi} from "../infrastructure/news-api.js";
import {ArticleAssembler} from "../infrastructure/article.assembler.js";

const newsApi = new NewsApi();
const sourceAssembler = new SourceAssembler();

export const newsStore = reactive(
    {
        sources: [],
        articles: [],
        errors:[],
        currentSource: null,

        setCurrentSource(source){
            this.currentSource = source;
            this.loadArticlesForCurrentSource();
        },
        loadSources(){
            this.errors=[];
            newsApi.getSources().then( response =>{
                 this.sources = sourceAssembler.toEntitiesFromResponse(response);
                 if (this.sources.length >0 && !this.currentSource)
                 this.setCurrentSource(this.sources[0]);
                }
            ).catch(message =>{
                this.errors.push(message);
                this.sources = [];}
            );
        },
        loadArticlesForCurrentSource(){
          if (this.currentSource === null) return;

          newsApi.getArticlesForSourceId(this.currentSource.id).then(response =>{
              const articleAssembler = new ArticleAssembler(this.currentSource);
              console.log(response.data);
              this.articles = articleAssembler.toEntitiesFromResponse(response);
              }
           ).catch(message =>{
               this.errors.push(message);
               this.articles = [];
          });
        }
    }
);