import { Injectable } from '@angular/core';
// const GIPHY_API_KEY = 'm1BQaK31rhGSnG2WWNcVF2QKfGuTv5mR';
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string='m1BQaK31rhGSnG2WWNcVF2QKfGuTv5mR';

  private _tagsHistory:string[]=[];

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string){
    tag=tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory=this._tagsHistory.filter((oldTag)=>oldTag !==tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory=this.tagsHistory.splice(0,10);
  }

  serachTag(tag:string){
    if(tag.length===0)return;

    this.organizeHistory(tag);

    console.log(this._tagsHistory)
  }

}
