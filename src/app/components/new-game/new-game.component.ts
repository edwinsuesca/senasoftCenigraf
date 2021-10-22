import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/player';


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  public game: any;

  
  private subscription: Subscription = new Subscription();
  gameForm=this.fb.group({
    codPartida:['', Validators.required],
    nickname:['', Validators.required]
  });
  

  constructor(private fb: FormBuilder, private gameSvc: GameService, private router:Router) { }

  ngOnInit(): void {
  }


  onGame():void{
    if(this.gameForm.invalid){
      return;
    }

    const formValue= this.gameForm.value;

    this.subscription.add(
      this.gameSvc.startGame(formValue).subscribe((res)=>{
        if(res){
          console.log(res);

          this.game=res;
          let codPartida=this.game.game.name;
          let jugador= this.game.game.jugador;
          let nick= jugador[0];
          let cartas= jugador[0];
          console.log('Cartas->', cartas.cartas);
          let progrador= cartas.cartas[0].cartas;
          
          let error=cartas.cartas[1].cartas;
          let modulo=cartas.cartas[2].cartas; 
          this.router.navigate(['/game', codPartida, nick.nickname, progrador , error, modulo ]);
        }
        
      })
    )

  }

  onPlayer():void{
    if(this.gameForm.invalid){
      return;
    }

    const formValue= this.gameForm.value;
    this.subscription.add(
      this.gameSvc.startPlayer(formValue).subscribe((res)=>{
        if(res){
          console.log(res);
          
          this.router.navigate(['/game']);

        }
      })
    )

  };

}
