function draw() {
   const canvas = document.getElementById('canvas');
   let ctx = canvas.getContext('2d');

   if (canvas.getContext) {
      ctx = canvas.getContext('2d');
   } else {
      const para = document.querySelector('.unsupported');
      para.textContent = 'Browser unsupported for HTML5 Canvas';
   }

//Q54 line//
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

   ctx.fillStyle = 'rgb(232, 220, 187)'; //beige//
   ctx.fillRect(centerX - 520, centerY - 360, 240, 600, 100);
 
   ctx.fillStyle = 'rgb(238, 232, 170)'; //yello //
   ctx.fillRect(centerX - 30, centerY - 450, 550, 450, 76 );

   ctx.fillStyle = 'rgb(172, 225, 175)'; //green//
   ctx.fillRect(centerX - 90, centerY - 60, 650, 550, 76 );

   ctx.fillStyle = 'rgb(0, 0, 0)'; //the bridge//
   ctx.strokeRect(centerX - 280, centerY - 10, 190, 50, 76 );
    
     
  


//circle train line//
ctx.font = '13px sans-serif';

   ctx.fillText(' <- B38 Bus Line', 890, 190)
   ctx.fillText('Fresh Pond Road', 770, 150); 
   ctx.fillText('Forest Ave', 780, 200); 
   ctx.fillText('Seneca Ave', 760, 250);
   ctx.fillText('Mrytle-Wycoff Aves', 700, 295);
   ctx.fillText('Knickboker Ave', 765, 360); 
   ctx.fillText('Central Ave', 700, 380);
   ctx.fillText('Myrtle Broadway', 660, 330);
   ctx.fillText('<- B54 Bus Line' , 875, 305);

   
   ctx.fillText('Flushing Ave', 580, 335)
   ctx.fillText('Lorimer St', 540, 380);
   ctx.fillText('Hewes St', 500, 335);
   ctx.fillText('Marcy Ave', 430, 400);
 

   ctx.fillText('Essex/Delancy St', 55, 370);
   ctx.fillText('East Broadway', 60, 410);   
   
   ctx.fillText('Bowery St', 75, 450);
   ctx.fillText('Chambers St', 40, 490);
   ctx.fillText('Fulton St', 45, 530);
   ctx.fillText('Broad St', 35, 560);


   ctx.fillText('High Street', 450, 450); 
   ctx.fillText('Jay St Metrotech', 500, 520);

   ctx.font = '11px sans-serif';
   ctx.fillText('To Brooklyn -->', 300, 460);
   ctx.fillText(' <-- To Manhattan', 300, 390);
   ctx.fillText('Williamsburg Bridge', 300, 340); 
   
   ctx.fillText('Rwgd Terminal/Jay St Metro Commons' , 830, 325);
   ctx.fillText('Seneca Ave/Dwtn Brklyn' , 900, 210);



const radius = 10; //starting from right top corner - orange line// 

   //Fresh Pond Rd & After
   ctx.arc(890, 150, radius, 0, Math.PI * 2); 
   ctx.arc(870, 200, radius, 0, Math.PI * 2); 
   ctx.arc(850, 250, radius, 0, Math.PI * 2);
   ctx.arc(830, 300, radius, 0, Math.PI * 2); 
   ctx.arc(750, 350, radius, 0, Math.PI * 2); 
   ctx.arc(710, 350, radius, 0, Math.PI * 2);
   
   //Myrtle-Broadway After
   ctx.arc(670, 350, radius, 0, Math.PI * 2);
   ctx.arc(620, 350, radius, 0, Math.PI * 2);
   ctx.arc(570, 350, radius, 0, Math.PI * 2);
   ctx.arc(520, 350, radius, 0, Math.PI * 2);
   ctx.arc(450, 370, radius, 0, Math.PI * 2);
  
  //Manahttan Stations
   ctx.arc(170, 370, radius, 0, Math.PI * 2);
   ctx.arc(160, 410, radius, 0, Math.PI * 2);
   

   
   //Downtown Manhattan Stations
   ctx.arc(150, 450, radius, 0, Math.PI * 2);
   ctx.arc(130, 490, radius, 0, Math.PI * 2);
   ctx.arc(110, 530, radius, 0, Math.PI * 2);
   ctx.arc(100, 560, radius, 0, Math.PI * 2);

   ctx.lineTo(90, 560);
   ctx.lineTo(170, 550);
   ctx.lineTo(170, 410);
   
   
   //Brooklyn Stations
   ctx.arc(500, 470, radius, 0, Math.PI * 2);
   ctx.arc(550, 490, radius, 0, Math.PI * 2);
 

   ctx.strokeStyle = 'grey';
   ctx.lineWidth = '2';
   ctx.stroke();
   ctx.closePath();
}   


   
draw ();
