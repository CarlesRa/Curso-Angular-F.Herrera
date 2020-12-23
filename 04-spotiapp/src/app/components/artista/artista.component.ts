import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;
  loadingTopTracks: boolean;

  constructor(
    private aRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loadingArtist = true;
    this.loadingTopTracks = true;
    aRoute.params.subscribe( param => {
      this.getArtista(param['id']);
      this.getTopTracks(param['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.loadingTopTracks = true;
    this.spotify.getArtist(id)
      .subscribe( resp => {
        this.artist = resp;
        this.loadingArtist = false;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe((resp: any) => {
        console.log(resp);
        this.topTracks = resp;
        this.loadingTopTracks = false;
    });
  }
}
