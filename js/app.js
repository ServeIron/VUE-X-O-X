const app = new Vue({
    el : '#app',    
    data : {    
      tac : [
        ['','',''],
        ['','',''],
        ['','','']
      ],
      gameOwer : false,
      sira : true,
      counter : 1,
      gameBraing : false,
      winners : '',
          
    },
    methods: {
     to(indis,val){           
        let columnX;
        let columnY;       
        if (this.counter == 4) {
            this.gameOwer = true;
            this.gameBraing = null;
        }
  
        if(this.sira && !this.gameOwer){
            this.tac[indis][val] = 'X';
            this.sira = false;      
            this.gameBraing = true;   
        } 
        for(let i = 0; i <= 2; i++){         
        //    x koordinat kontrolü        
            if(this.tac[i][0] == 'X' && this.tac[i][1] == 'X' && this.tac[i][2] == 'X'){
                if(this.counter == 4){
                this.gameOwer = true;
            }
                this.winners = 'X';           
            }
        if(this.tac[i][0] == 'O' && this.tac[i][1] == 'O' && this.tac[i][2] == 'O'){
                if(this.counter == 4){
                this.gameOwer = true;
            }
                this.winners = 'O';           
            }        
         //  y koordinat kontrolü
            if(this.tac[0][i] == 'X' && this.tac[1][i] == 'X' && this.tac[2][i] == 'X'){
                if(this.counter == 4){
                this.gameOwer = true;
            }
                this.winners = 'X';           
            }
          if(this.tac[0][i] == 'O' && this.tac[1][i] == 'O' && this.tac[2][i] == 'O'){
                if(this.counter == 4){
                this.gameOwer = true;
            }
                this.winners = 'O';           
            }
         
          
        }        
       // X*Y koordinat kontrolü, bunuda elimizle yapalım :D           
       if(this.tac[0][0] == 'X' && this.tac[1][1] == 'X' && this.tac[2][2] == 'X'){
        if(this.counter == 4){
            this.gameOwer = true;
        }
            this.winners = 'X';          
       }
        if(this.tac[0][2] == 'X' && this.tac[1][1] == 'X' && this.tac[2][0] == 'X'){
        if(this.counter == 4){
            this.gameOwer = true;
        }
            this.winners = 'X';          
       }
    
        if(this.tac[0][0] == 'O' && this.tac[1][1] == 'O' && this.tac[2][2] == 'O'){
        if(this.counter == 4){
            this.gameOwer = true;
        }
            this.winners = 'O';          
       }
        if(this.tac[0][2] == 'O' && this.tac[1][1] == 'O' && this.tac[2][0] == 'O'){
        if(this.counter == 4){
            this.gameOwer = true;
        }
            this.winners = 'O';          
       }

       if(this.winners != 'O' && this.winners != 'X'){
           this.winners = 'DOSTLUK';
       }
    
       
 // Bilgisyara rastgele bir kutu seçtiriyoruz, iki şarta bakıyor 1.si girilen kutuyla aynı mı, veya boş mu eğer bu şartlar varsa tekrar kontrol edip uygun kutuyu buluyor, 
 // daha zeki yapmak için girilen kutuların indislerini alıp ona göre şartlar belirlenebilir                                 
            setTimeout(()=> {
                do {
                     columnX = Math.floor(Math.random() * 3);
                     columnY = Math.floor(Math.random() * 3);          
                  } while (this.tac[columnX][columnY] != '' );      
        
                  this.tac[columnX][columnY] = 'O';
                  this.sira = true;
                  this.gameBraing = false;               
            },2000);                
        this.$forceUpdate();      
     },
     renk(e){
        return { 'red': e == 'O'}
     },
    }, 
});