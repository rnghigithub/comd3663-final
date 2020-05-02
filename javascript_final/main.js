function draw() {
   const canvas = document.getElementById('canvas');
   let ctx = canvas.getContext('2d');

   if (canvas.getContext) {
      ctx = canvas.getContext('2d');
   } else {
      const para = document.querySelector('.unsupported');
      para.textContent = 'Browser does not support HTML5 Canvas';
   }

   var centerX = canvas.width / 2;
   var centerY = canvas.height / 2;

   ctx.fillStyle= "rgb(255, 101, 2)";

   ctx.fillRect(centerX - 50, centerY - 45, 100, 80, 50);
   ctx.clearRect(centerX- 15, centerY - 15, 30, 23, 89);
   ctx.strokeRect(centerX - 135, centerY - 80, 250, 150, 76 );
}   
   
draw ();
