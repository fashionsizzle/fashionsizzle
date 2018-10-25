import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class YoutubeProvider {

    googleToken = "AIzaSyCUGb61BEVsrEq0FWLiRLD4rTBxISkrmvo";
    maxResults = 4;
    channelID: string = "UCLao70wQ8q2VrV1fx5k8LJQ";
    url = 'https://www.googleapis.com/youtube/v3/search?';
    constructor(public http: Http) { }

    queryString: any = "";
    eventString: any = "";
    pageTokenString: any = "";

    public getVideos(query: any, eventType: any, nextPageToken: any) {
        let _base = this;

        console.log(query);
        console.log(eventType);

        /** forming query string **/
        if (query == "") {
            _base.queryString = "";
        } else {
            _base.queryString = "&q=" + query;
        }

        /** forming event string **/
        if (eventType == "") {
            _base.eventString = "";
        } else {
            _base.eventString = "&eventType=" + eventType;
        }

        /** forming nextPageToken string **/
        if (nextPageToken == "") {
            _base.pageTokenString = "";
        } else {
            _base.pageTokenString = "&pageToken=" + nextPageToken;
        }


        /** forming url **/
        let url = _base.url + _base.queryString + '&part=id,snippet&channelId=' + _base.channelID + _base.eventString + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken+_base.pageTokenString;

        console.log(url);

        return this.http.get(url)
            .map(res => res.json());
    }

}