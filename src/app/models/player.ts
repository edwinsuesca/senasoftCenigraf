export interface Player {
    nickname: string;
    codPartida: string;
    
    
    
}


export interface Game extends Player{
    codPartida: string;
    nickname: string;
}