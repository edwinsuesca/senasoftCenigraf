import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
 //No borrar
  juego!:{codigo:string, nickname: string, programador:string, error:string, modulo:string}
  
  cartaModulo = "";
  cartaProgramador = "";
  cartaError = "";

  routeDev = "";

  //No borrar el constructor
  constructor( private route: ActivatedRoute, private gameSvc: GameService) {}

  woff = new Audio();
  ping = new Audio();
  @ViewChild('notes') public notes!:ElementRef;
  @ViewChild('arrowContainer') public button!:ElementRef;
  @ViewChild('arrow') public arrow!:ElementRef;
  @ViewChild('generateQuestion') public generateQuestion!:ElementRef;

  @ViewChild('cartaModulo') public cardMod!:ElementRef;
  @ViewChild('cartaProgramador') public cardDev!:ElementRef;
  @ViewChild('cartaError') public cardErr!:ElementRef;

  switchNotes = false; //Establece el estado del panel de notas en falso (oculto).
  panelTitle = "Hoja de Notas";
  actionTurn = "";
  mode = "";
  prueba: any = "";

  ngOnInit(): void {
    this.woff.volume = 0.1;
    this.ping.volume = 0.1;
    this.woff.src = "../../assets/music/uoff.mpeg";
    this.ping.src = "../../assets/music/ping.mpeg";


    //No borrar
    this.juego={
      codigo: this.route.snapshot.params.codPartida,
      nickname: this.route.snapshot.params.nickname,
      programador:this.route.snapshot.params.programador,
      error:this.route.snapshot.params.error,
      modulo: this.route.snapshot.params.modulo
    }

    console.log('Programador->', this.juego.programador);
    console.log('Error->', this.juego.error);
    //


    this.cartaProgramador=this.juego.programador;
    this.cartaModulo=this.juego.codigo;
    this.cartaError=this.juego.error
     
    

 


    
  }

  ngAfterViewInit(): void{
    this.woff.volume = 0.1;
    this.ping.volume = 0.1;
    this.woff.src = "../../assets/music/uoff.mpeg";
    this.ping.src = "../../assets/music/ping.mpeg";
  }
  modePanel(mode:String){
    
    if(mode == "question"){
      this.panelTitle = "Preguntar";
      this.switchPanel();
      this.generateQuestion.nativeElement.style.opacity = "1";
      this.actionTurn = "Preguntar Ahora"
    }

    else{
      if(mode == "accusation"){
        this.panelTitle = "Acusar";
        this.switchPanel();
        this.generateQuestion.nativeElement.style.opacity = "1";
        this.actionTurn = "Acusar Ahora"
      }

      else{
        this.panelTitle = "Hoja de Notas";
        this.switchPanel();
        this.actionTurn = ""
      }
    }
    this.mode = mode.toString();
  }
  //arranca la música en bucle
  playAudio(){
    let ping = new Audio();
    ping.src = "../../assets/music/ping.mpeg";
    ping.play();
    ping.volume = 0.05;
  }

  public checkCard(card:any){

    if(this.panelTitle == "Hoja de Notas"){
      card.style.backgroundColor = "#fff";
      card.style.color = "#1b1b33";
    }

    var status = [
      {nombre: card.id, disableStatus: true}
    ]
    return  status; //Retorna estado de carta en hoja de notas.
    this.prueba = status;
    console.log(this.prueba[0]);
  }
  
  switchPanel(){
    this.checkCard;
    //Oculta el panel de notas cuando se da clic en la flecha.
    switch(this.switchNotes){
      case false:
        this.notes.nativeElement.style.top = "0"; //Muestra el panel de notas.
        this.button.nativeElement.style.transform = "rotateX(180deg)"; //Rota flecha.
        this.arrow.nativeElement.style.top = "-10px"; //centra en eje Y flecha.
        this.switchNotes = true;
        this.woff.play();
      break;

      case true:
        this.notes.nativeElement.style.top = "-320px"; //Oculta el panel de notas.
        this.button.nativeElement.style.transform = "rotateX(0deg)"; //reinicia rotación de la flecha.
        this.arrow.nativeElement.style.top = "0"; //centra en eje Y flecha.
        this.switchNotes = false;
        this.woff.play();
      break;
    }
  }

  /*const cartasProgramador=["Pedro", "Juan", "Carlos", "Juanita", "Antonio", "Carolina", "Manuel"];
const cartasModulo=["Nomina", "Facturación", "Recibos", "Comprobantes", "Usuarios", "Contabilidad"];
const cartasError=["404", "Stack Overflow", "Memory Out of Range", "Null pointer", "Syntax error", "Encoding error"];*/
  // cardsDinamics(){
  //   if(this.cartaModulo == "Pedro"){
  //     this.routeDev = "../../../assets/img/programadores/juan.svg";
  //   }
  // }
}