export class Quiz {
  constructor(){
    this.score = 0;
    this.stop = false;
  }
   playerScore(output) {
     if (this.stop === true) {
       return
     }
     if (output) {
       this.score++;
     } else {
       this.score--;
     }
   }
   stopTimer(){
     this.stop = true;
   }

}
