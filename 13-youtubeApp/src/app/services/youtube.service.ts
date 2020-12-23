import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.model';
import { map }  from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  /* https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyAofUYlcn36x6SsPiGmWcqMXCyH7wAD3cU&playlistId=UUuaPTYj15JSkETGnEseaFFg&maxResults=10 */

  private baseUrl: string = 'https://www.googleapis.com/youtube/v3';
  private apiKey: string = 'AIzaSyAofUYlcn36x6SsPiGmWcqMXCyH7wAD3cU';
  private playlistId: string = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken: string;

  constructor(
    private http: HttpClient
  ) {}


  getVideos() {
    const url = `${this.baseUrl}/playlistItems`
    const params: HttpParams = new HttpParams()
      .set('part', 'snippet')
      .set('key', this.apiKey)
      .set('playlistId', this.playlistId)
      if (this.nextPageToken) {
        params.set('nextPageToken', this.nextPageToken);
      }
    return this.http.get<YoutubeResponse>(url, { params })
      .pipe(
        map( resp => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        map( items => {
          return items.map( video => video.snippet);
        })
    );
  }
}
