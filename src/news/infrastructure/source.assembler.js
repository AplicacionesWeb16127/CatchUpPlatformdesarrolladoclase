import {Source} from "../domain/model/source.entity.js";
import {LogoDevApi} from "../../shared/infrastructure/logo-dev-api.js";

export class SourceAssembler {

    #logoApi;

    constructor(){
        this.#logoApi = new LogoDevApi();
    }

    toEntityFromResource(resource){

        let source = new Source(
            {...resource});

        source.urlToLogo = this.#logoApi.getUrlToLogo(source);
        return source;
    }
    toEntitiesFromResponse(response){
        if (response.data.status !== "ok") {
            console.error(response.data.message);
        }
        const sourcesResponse = response.data;

        return sourcesResponse.sources.map(
            (source) => {
                try {
                    return this.toEntityFromResource(source);

                }
                catch (error) {
                    console.error(error.message);
                    return null;
                }
            }
        ).filter(source => source !== null);

    }
}
