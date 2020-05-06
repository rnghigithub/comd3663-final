function draw() {
   const canvas = document.getElementById('canvas');
   let ctx = canvas.getContext('2d');

   if (canvas.getContext) {
      ctx = canvas.getContext('2d');
   } else {
      const para = document.querySelector('.unsupported');
      para.textContent = 'Browser unsupported for HTML5 Canvas';
   }
// label text
   ctx.font = 'italic 15px sans-serif';
   ctx.fillText('Willamsburg Bridge', 270, 340); 


   ctx.beginPath();
   ctx.lineTo(870, 300);
   ctx.lineTo(800, 350);
   ctx.lineTo(555, 500);
   ctx.lineTo(700, 320);
   ctx.closePath();
   ctx.stroke();

   var centerX = canvas.width / 2;
   var centerY = canvas.height / 2;

//rectangle boroughs//   

   ctx.fillStyle = 'rgb(200, 101, 2)'; //orange//
   ctx.fillRect(centerX - 520, centerY - 360, 240, 600, 100);

   
   ctx.fillStyle = 'rgb(50, 100, 60)';
   ctx.fillRect(centerX - 30, centerY - 450, 550, 450, 76 );

   ctx.fillStyle = 'rgb(100, 100, 60)'; //brown//
   ctx.fillRect(centerX - 90, centerY - 60, 650, 550, 76 );

   ctx.fillStyle = 'rgb(0, 0, 0)';
   ctx.strokeRect(centerX - 280, centerY - 10, 190, 50, 76 );


//circle train line//
ctx.font = 'italic 13px sans-serif';

   ctx.fillText('Fresh Pond Road', 770, 150); 
   ctx.fillText('Forest Ave', 780, 200); 
   ctx.fillText('Seneca Ave', 760, 250);
   ctx.fillText('Mrytle-Wycoff Aves', 700, 295);
   ctx.fillText('Knickboker Ave', 765, 360); 
   ctx.fillText('Central Ave', 700, 380);
   ctx.fillText('Myrtle Broadway', 655, 330);

   ctx.fillText('Flushing Ave', 580, 335)
   ctx.fillText('Lorimer St', 540, 380);
   ctx.fillText('Hewes St', 500, 335);
   ctx.fillText('Marcy Ave', 430, 400);

   ctx.fillText('Essex St', 105, 370);
   ctx.fillText('Delancey St', 100, 425);

   ctx.fillText('High Street', 450, 450); 
   ctx.fillText('Jay St Metrotech', 500, 520);



const radius = 10; //starting from right top corner - orange line// 

   ctx.arc(890, 150, radius, 0, Math.PI * 2); 
   ctx.arc(870, 200, radius, 0, Math.PI * 2); 
   ctx.arc(850, 250, radius, 0, Math.PI * 2);
   ctx.arc(830, 300, radius, 0, Math.PI * 2); 
  
   ctx.arc(750, 350, radius, 0, Math.PI * 2); 
   ctx.arc(710, 350, radius, 0, Math.PI * 2);
   ctx.arc(670, 350, radius, 0, Math.PI * 2);
   ctx.arc(620, 350, radius, 0, Math.PI * 2);
   
   ctx.arc(570, 350, radius, 0, Math.PI * 2);
   ctx.arc(520, 350, radius, 0, Math.PI * 2);
   
   ctx.arc(450, 370, radius, 0, Math.PI * 2);
   ctx.arc(170, 370, radius, 0, Math.PI * 2);

   ctx.arc(165, 400, radius, 0, Math.PI * 2);
   
   ctx.arc(500, 470, radius, 0, Math.PI * 2);

   ctx.arc(550, 490, radius, 0, Math.PI * 2);
 

   ctx.strokeStyle = 'orange';
   ctx.lineWidth = '2';
   ctx.stroke();
   ctx.closePath();

   
}   


   
draw ();
