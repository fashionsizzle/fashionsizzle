import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { YtbPlayer } from "../../providers/ytb_player";
import { YoutubeProvider } from "../../providers/youtube_provider";
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';




@IonicPage()
@Component({
  selector: 'page-fashionsizzlertv',
  templateUrl: 'fashionsizzlertv.html',
  providers: [YtbPlayer, YoutubeProvider, YoutubeVideoPlayer]
})
export class FashionsizzlertvPage {
  vPlayer = true;
  videos = [];
  search = {
    params: ''
  };

  public nextPageToken = "";  // initial value

  livevideos = {};
  completedvideos = [];

  baseUrl: string = 'https://www.youtube.com/embed/';
  category: string = "Uploaded";
  isAndroid: boolean = false;

  constructor(private youtube: YoutubeVideoPlayer, public player: YtbPlayer, public ytbProvider: YoutubeProvider, public loadingCtrl: LoadingController) {
    this.getInitialVideos();
  }

  public eventType: string = "";

  segmentChanged(event) {
    let _base = this;
    this.search.params = "";
    _base.videos = [];
    _base.completedvideos = [];
    // switch case based on the current segment / category value
    switch (this.category) {
      case 'Uploaded':
        (<HTMLElement>document.getElementById('search-form')).style.display = "block";
        _base.nextPageToken = "";
        _base.eventType = "";
        _base.getInitialVideos();
        break;
      case 'Live':
        (<HTMLElement>document.getElementById('search-form')).style.display = "none";
        _base.eventType = "Live";
        _base.nextPageToken = "";
        _base.getLiveEvents();
        break;
      case 'Completed':
        (<HTMLElement>document.getElementById('search-form')).style.display = "block";
        _base.eventType = "Completed";
        _base.nextPageToken = "";
        _base.getCompletedEvents();
        break;
      default:
        console.log("Are you an alien ?");
    }
  }

  doInfinite(infiniteScroll) {
    let _base = this;
    if (_base.nextPageToken == "") {
      infiniteScroll.complete();
      return;
    }
    switch (this.category) {
      case 'Uploaded':
        _base.getInitialVideos()
          .then(function (success) {
            infiniteScroll.complete();
          }, function (error) {
            infiniteScroll.complete();
          });
        break;
      case 'Completed':
        _base.getCompletedEvents()
          .then(function (success) {
            infiniteScroll.complete();
          }, function (error) {
            infiniteScroll.complete();
          });
        break;
      default:
        console.log("Are you an alien ?");
    }
  }

  commingSoon() {
    let loading = this.loadingCtrl.create({
      content: 'Comming soon...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }


  getLiveEvents() {
    let _base = this;
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    this.ytbProvider.getVideos("", "Live", _base.nextPageToken).subscribe(
      videos => {
        if (videos.items.length != 0) {
          _base.youtube.openVideo(videos.items[0].id.videoId);
        }
        loading.dismiss();
      },
      err => {
        console.log(err);
      }
    );
  }

  getInitialVideos()
   {
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let _base = this;

    return new Promise(function (resolve, reject) {
      _base.ytbProvider.getVideos(_base.search.params, "", _base.nextPageToken).subscribe(
        videos => {
          if (videos.items.length == 0) {
            loading.dismiss();
            resolve(videos);
          }
          for (let i = 0; i < videos.items.length; i++) {
            _base.videos.push(videos.items[i]);

            if (i == videos.items.length - 1)
            {
              loading.dismiss();

              if ('nextPageToken' in videos)
              {
                _base.nextPageToken = videos.nextPageToken
              }
               else
              {
                _base.nextPageToken = "";
              }

              resolve(videos);
            }
          }
        },
        err =>
        {
          console.log(err);
          reject(err);
        }
      );
    });

  }

  findVideos($event) {
    let _base = this;
    _base.videos = [];
    _base.completedvideos = [];
    switch (this.category) {
      case 'Uploaded':
        _base.getInitialVideos();
        _base.eventType = "";
        break;
      case 'Live':
        _base.getLiveEvents();
        _base.eventType = "Live";
        break;
      case 'Completed':
        _base.getCompletedEvents();
        _base.eventType = "Completed";
        break;
      default:
        console.log("Are you an alien ?");

    }
  }

  playVideo(id) {
    this.youtube.openVideo(id);
  }

  ionViewDidLoad() {
  }


  getCompletedEvents() {
    let loading = this.loadingCtrl.create({
    });
    loading.present();
    let _base = this;
    return new Promise(function (resolve, reject) {
      _base.ytbProvider.getVideos(_base.search.params, "Completed", _base.nextPageToken).subscribe(
        videos => {
          if (videos.items.length == 0) {
            loading.dismiss();
            resolve(videos);
          }
          for (let i = 0; i < videos.items.length; i++) {
            _base.completedvideos.push(videos.items[i]);
            if (i == videos.items.length - 1) {
              if ('nextPageToken' in videos) {
                _base.nextPageToken = videos.nextPageToken
              } else {
                _base.nextPageToken = "";
              }
              loading.dismiss();
              resolve(videos);
            }
          }
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });

  }

}
