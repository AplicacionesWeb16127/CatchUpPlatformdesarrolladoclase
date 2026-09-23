import {Article} from "../domain/model/article.entity.js";
import {SourceAssembler} from "./source.assembler.js";
export class ArticleAssembler {
    #source;
    #sourceAssembler;
    constructor(source = null){
        this.#source = source;
    }

    toEntityFromResource(resource){
        console.log("El articulo se va crear");
        let article =new Article(
            {
            ...resource, source: resource.source || {name : "unknow source"}
        }

        );
        console.log("El articulo se creo");
        article.source = this.#source && (this.#source.id === resource.source?.id
            || this.#source.name===resource.source?.name)
            ? this.#source
            : this.#sourceAssembler.toEntityFromResource(resource.source || {id:"unknow" , name: "unknow source"})  ;
        return article;
    }
    toEntitiesFromResponse(response){
      if (response.data.status !== "ok") {
          console.error(response.data.message);
          return [];
      }
      const articlesResponse = response.data;

      return articlesResponse["articles"].map((article) => {
          try {
              console.log(article);
              return this.toEntityFromResource(article);
          }
          catch (error) {
              console.error(error.message);
              return null;
          }
      }).filter(article => article !== null);
    }


}