import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
      {
          title: 'Audio One Title',
          link: 'https://www.dropbox.com/s/2t968nilfzbxflv/Mechanical%20Sundariye.mp3?dl=1'
      },
      {
          title: 'Audio Two Title',
          link: 'https://song.link/album/i/1460451396'
      },
      {
          title: 'Audio Three Title',
          link: 'https://song.link/album/i/1460451396'
      }
  ];
}
