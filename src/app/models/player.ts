export interface Player {
    nickname: string;
    codPartida: string;
    
    
    
}


export interface Game extends Player{
    id?: number;
    codPartida: string;
    nickname: string;
}