import {Source} from "./source.entity";
import {StringValidator} from "../../../shared/domain/model/string-validator.js";
import {Url} from "../../../shared/domain/model/url.js";
import {DateTime} from "../../../shared/domain/model/date-time.js";

export class Article{

    constructor({author="", title="", description="", url="",
                urlToImage="", source=null, publishedAt=""}){

        if(!StringValidator.isNotEmptyString(title)) throw new Error("Invalid Article title");
        if(!source) throw new Error("Invalid Source");

        let dateTime;

        try{
            dateTime = publishedAt instanceof DateTime ? publishedAt : new DateTime(publishedAt);
        }
        catch(e){
            throw new Error("Article has Invalid DateTime");
        }
        if (dateTime.isFuture()) throw new Error("Article has a future DateTime");

        this.author = author;
        this.title = title;
        this.description = description;
        this.url =url instanceof Url ? url : new Url(url);
        this.urlToImage = urlToImage instanceof Url ? urlToImage : new Url(urlToImage);
        if (this.urlToImage.isEmpty()){
            this.urlToImage = new Url("https://placehold.co/600x400?text=Np+Image");

        }
        this.source = source instanceof Source ? source : new Source(source);
        this.publishedAt = dateTime;

    }
    getFormatedPublishedAt()
    {
        return this.publishedAt.format();
    }
}