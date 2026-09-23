import {StringValidator} from "../../../shared/domain/model/string-validator.js";
import {Url} from "../../../shared/domain/model/url.js";

export class Source{
    constructor({id="", name ="", description="", url="",
                    category="", language="", country=""}) {

        if (!StringValidator.isNotEmptyString(id) ) throw new Error("Invalid Source id");
        if (!StringValidator.isNotEmptyString(name) ) throw new Error("Invalid Source name");

        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url instanceof Url ? url : new Url(url);
        this.category = category;
        this.language = language;
        this.country = country;
        this.urlToLogo="";
    }
}