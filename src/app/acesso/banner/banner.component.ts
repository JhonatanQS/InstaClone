import { Component, OnInit} from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

import { Imagem } from './image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    trigger('banner',[
      state('escondido',style({
        opacity:0
      })),
      state('visivel',style({
        opacity:1
      })),
      transition('escondido<=>visivel',animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string ='visivel'

  public imagens: Imagem[] = [
    {estado:'visivel',url:'/assets/banner-acesso/img_1.png'},
    {estado:'escondido',url:'/assets/banner-acesso/img_2.png'},
    {estado:'escondido',url:'/assets/banner-acesso/img_3.png'},
    {estado:'escondido',url:'/assets/banner-acesso/img_4.png'},
    {estado:'escondido',url:'/assets/banner-acesso/img_5.png'}
  ]

  constructor() { }

  ngOnInit() {

    setTimeout(()=>this.logicRotacao(),3000)
  }
  public logicRotacao():void{
    console.log(this.imagens)

    let idx:number

    //ocultar imagem
    for(let i:number=0; i <= 4; i++)
    {
      if(this.imagens[i].estado ==='visivel')
      {
      this.imagens[i].estado ='escondido'
      idx = i === 4 ? 0 : i+1
      break
      }
    }

    //exibir a proxima
    this.imagens[idx].estado ='visivel'
    setTimeout(()=>this.logicRotacao(),3000)
  }

}
