function initCanvas(){
   var ctx = document.getElementById('my canvas').getContext('2d');
   var backgroundImage = new Image();
   var naveImage = new Image();
   var enemiespic1 = new Image();
   var enemiespic2 = new Image();

   backgroundImage.src = "universo.jpg";
   naveImage.src = "spaceship-pic.png";

   enemiespic1.src = "enemigo1.png";
   enemiespic2.src = "enemigo2.png";

   var cW = ctx.canvas.width;
   var cH = ctx.canvas.height;

   var enemyTemplate = function(options){
       return {
           id: options.id || '',
           x: options.x || '',
           y: options.y || '',
           w: options.w || '',
           h: options.h || '',
           image : options.image || enemiespic1 
       }
   }

   var enemies = [
       new enemyTemplate({id: "enemy 3", x : 350, y : 50, w: 80, h: 30})
   ];

   var renderEnemies = function(enemyList){

       for(i = 0; i < enemyList.length; i++){
            var enemy = enemyList[i];
            ctx.drawImage(enemy.image, enemy.x, enemy.y += .5, enemy.w, enemy.h);
       }
   }

   function launcher(){
       this.y = 500,
       this.x = cW*.5 -25,
       this.w = 100,
       this.h = 100,
       this.direccion,
       this.bg = "white",
       this.misiles = [];

       this.render = function(){
           ctx.fillStyle = this.bg;
           ctx.drawImage(backgroundImage, 10, 10);
           ctx.drawImage(naveImage, this.x, this.y, 100, 90)
       }
   }

   var launcher = new launcher();
   function animate(){
       ctx.clearRect(0, 0, cW, cH);
       launcher.render();
       renderEnemies(enemies);
   }

   var animateInterval = setInterval(animate,6);
}

window.addEventListener('load',function(event){
    initCanvas();
});
