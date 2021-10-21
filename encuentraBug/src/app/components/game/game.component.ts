import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {

  player1 = [
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'}
  ]

  player2 = [
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'}
  ]

  player3 = [
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'}
  ]

  player4 = [
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'},
    {cardType: 'programadores', name: 'Luis'}
  ]

  constructor() {}

  woff = new Audio();
  ping = new Audio();
  @ViewChild('notes') public notes!:ElementRef;
  @ViewChild('arrow') public arrow!:ElementRef;
  switchNotes = false; //Establece el estado del panel de notas en falso (oculto).
  panelTitle = "Hoja de Notas";
  ngOnInit(): void {
    this.woff.volume = 0.1;
    this.ping.volume = 0.1;
    this.woff.src = "../../assets/music/uoff.mpeg";
    this.ping.src = "../../assets/music/ping.mpeg";
  }

  ngAfterViewInit(): void{
  }

  //arranca la música en bucle
  playAudio(){
    let ping = new Audio();
    ping.src = "../../assets/music/ping.mpeg";
    ping.play();
    ping.volume = 0.05;
  }

  modePanel(mode:String){
    
    if(mode == "question"){
      this.panelTitle = "Preguntar"
      this.switchPanel();
    }

    else{
      if(mode == "accusation"){
        this.panelTitle = "Acusar"
        this.switchPanel();
      }

      else{
        this.panelTitle = "Hoja de Notas"
        this.switchPanel();
      }
    }
  }

  switchPanel(){
    //Oculta el panel de notas cuando se da clic en la flecha.
    switch(this.switchNotes){
      case false:
        this.notes.nativeElement.style.top = "0"; //Muestra el panel de notas.
        this.arrow.nativeElement.style.transform = "rotateX(180deg)"; //Rota flecha.
        this.switchNotes = true;
        this.woff.play();
      break;

      case true:
        this.notes.nativeElement.style.top = "-440px"; //Oculta el panel de notas.
        this.arrow.nativeElement.style.transform = "rotateX(0deg)"; //reinicia rotación de la flecha.
        this.switchNotes = false;
        this.woff.play();
      break;
    }
  }

  checkCard(card: String){
    console.log(card);
  }
}