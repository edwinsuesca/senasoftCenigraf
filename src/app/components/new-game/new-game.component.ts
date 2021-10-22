import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})

export class NewGameComponent implements OnInit {
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
          this.router.navigate(['/game']);
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


