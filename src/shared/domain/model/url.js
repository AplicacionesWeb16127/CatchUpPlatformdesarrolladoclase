export class Url {
    #value;

    static isValidUrl(url){
        if (typeof url !== 'string' && !(url instanceof String))
            return false;
        if (URL.canParse){
            return URL.canParse(url);
        }
        try{
            new URL(url);
            return true;
        }
        catch(e){
            return false;
        }

    }
    constructor(value){
        this.#value = Url.isValidUrl(value) ? value : '';
        Object.freeze(this);
    }
    toString(){
        return this.#value;
    }
    isEmpty(){
        return this.#value === '';
    }
    valueOf(){
        return this.#value;
    }
    equals(other){
        return other instanceof Url && other.toString() === this.toString();
    }
}