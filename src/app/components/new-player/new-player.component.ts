import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {
  public jugador: any;

  private subscription: Subscription = new Subscription();
  gameForm=this.fb.group({
    codPartida:['', Validators.required],
    nickname:['', Validators.required]
  });
  

  constructor(private fb: FormBuilder, private gameSvc: GameService, private router:Router) { }

  ngOnInit(): void {
  }




  onPlayer():void{
    if(this.gameForm.invalid){
      return;
    }

    const formValue= this.gameForm.value;
    this.subscription.add(
      this.gameSvc.startPlayer(formValue).subscribe((res)=>{
        if(res){

          this.jugador=res;
          let codPartida=this.jugador.jugador.partida.name;
          let nick= this.jugador.jugador.nickname;
          let cartas= this.jugador.jugador.cartas;
          console.log('el codigo es: ', codPartida);
          console.log('el jugador es: ', nick);
          console.log('las cartas son: ', cartas);
          let progrador= cartas[0].cartas;
          let error=cartas[1].cartas;
          let modulo=cartas[2].cartas 
          this.router.navigate(['/game', codPartida, nick, progrador , error, modulo ]);
        }
      })
    )

  };

}
