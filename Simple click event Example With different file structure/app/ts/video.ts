export class video
{
    Id: number;
    Title: string;
    VideoCode: string;
    Description: string;

    constructor(id: number, title: string, videocode: string, desc: string)
    {
        this.Id = id;
        this.Description = desc;
        this.Title = title;
        this.VideoCode = videocode;
    }
}