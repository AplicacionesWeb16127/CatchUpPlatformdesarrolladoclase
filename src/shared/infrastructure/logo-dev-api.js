const logoApiUrl = 'https://img.logo.dev';
const apiKey = "pk_IdGrHo4cQCyE1YsLIsDQnQ";

export class LogoDevApi {

    getUrlToLogo = source => {

        return `${logoApiUrl}/${
            new URL(source.url.toString()).host}?token=${apiKey}`;
    }
}