import { Component, Output } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { SearchResponse } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}


  searchGif(tag:string){
    this.gifsService.serachTag(tag)
  }

  get tags(){
    return this.gifsService.tagsHistory;
  }

}
