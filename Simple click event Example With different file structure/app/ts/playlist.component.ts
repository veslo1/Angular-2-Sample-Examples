import {Component} from 'angular2/core';
import {video} from './video';

@Component({
    selector: 'playlist',
    templateUrl: 'ts/playlist.component.html',
    inputs: ['videosTag'] 
})

export class playlistcomponent
{
    ClickMethod(vid: video)
    {
        alert("Playing video : \n" + JSON.stringify(vid));
    }
}