import {Component} from 'angular2/core';
import {config} from './config.service';
import {playlistcomponent} from './playlist.component';
import {video} from './video';

@Component({
    selector: 'my-app',
    templateUrl: 'ts/app.component.html',
    directives: [playlistcomponent]
})

export class FirstComponent
{
    mainHeading = config.Main_Heading;
    videoList: Array<video>;

    constructor()
    {
        this.videoList = [
            new video(1,"Title 1", "V1", "Desc 1"),
            new video(2, "Title 2", "V2", "Desc 2")
        ];
    }
}