export const ApiKey = 'AIzaSyBKAbqCLb7EN_kt7idMSUcilvkpNGa1_fQ';
export const MaxResultCountVideos = '16';
let idsList: string = 'nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg';
export const BaseUrlItems = `https://www.googleapis.com/youtube/v3/search`;

export function ApiStatisticUrl(key: string, idsList:string):string {
    return `https://www.googleapis.com/youtube/v3/videos?key=${key}&id=${idsList}&part=snippet,statistics`
}
export const BaseUrlStatistic = `https://www.googleapis.com/youtube/v3/videos?key=${ApiKey}&id=${idsList}&part=snippet,statistics`;



