import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
// const GIPHY_API_KEY = 'm1BQaK31rhGSnG2WWNcVF2QKfGuTv5mR';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList:Gif[]=[];


  private apiKey:string='m1BQaK31rhGSnG2WWNcVF2QKfGuTv5mR';
  private serviceUrl:string='https://api.giphy.com/v1/gifs'

  private _tagsHistory:string[]=[];

  constructor(private http:HttpClient) { }

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

  // async serachTag(tag:string):Promise<void>{
    serachTag(tag:string){
    if(tag.length===0)return;

    this.organizeHistory(tag);

    const params= new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params })
    .subscribe(resp=>{
      this.gifList=resp.data;

      // console.log({gifs:this.gifList})
    })

    // fetch('https://api.giphy.com/v1/gifs/search?q=valorant&limit=10&api_key=m1BQaK31rhGSnG2WWNcVF2QKfGuTv5mR')
    // .then(resp=>resp.json())
    // .then(data=>console.log(data));

    //OR

    // const resp=await fetch('https://api.giphy.com/v1/gifs/search?q=valorant&limit=10&api_key=m1BQaK31rhGSnG2WWNcVF2QKfGuTv5mR')
    // const data=await resp.json();
    // console.log(data);
  }

}
