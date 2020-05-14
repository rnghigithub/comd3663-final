# comd3663-final


MTA WORK/SCHOOL COMMUNTE MAP MADE VIA CANVAS2D

Explination: 

Intro
So for my Java final i choose to create a MTA commute map on Canvas2d. Canvas2d allows us to draw in a browser with Javascript. In order to create this I had first implemented the canvas opening/closing tag in my index.html file to then set the width & height of the canvas that I will be drawing on. In this case i set it to 1024px by 720px. Without setting these dimensions; in any of the code files, nothing will show in the browser. 


Setting the Variables 
Now in the main.js file the first thing that needs to be done is to declare the function draw(). This will allow us to create or draw on the canvas we made in the index.html. Inside the constructors of function draw() {} I declare/initialize my variables of const canvas and let ctx. For const canvas, the variable cannot be reassigned and comes from the index.html id of canvas by the getElementById() method. The HTML DOM allows for this to occur. For let ctx (shorthand for context) I am declaring/initializes a variable that can be reassigned. Then i pass the value of the .getContext('2d') method with the canvas variable.
Once the element id of 'canvas' is retrieved, the drawing context is accessed with the HTML canvas built in .getContext() method.



Checking For Browser Support of Canvas2d
After declaring and initializing these variables for the function, I need to check for if canvas is supported in the browser. 
To do this I would create an if/else statement. To break it down we declare if (canvas.getContext) is allowed then the browser allows for canvas2d. The canvas.getContext comes from the passed value of let ctx.  
 If else than we declare/initialize a value of para with the value of document.querySelector('unsupported'). This means that the element is queried through the p tag, para variable with a class name of .unsupported. Next we set the .textContent property to the para variable passed with the variable of 'Browser unsupported for HTML5 Canvas' as a template literal aka a sting literal expression. The value passed will show on the browser if canvas2d is not supported. 



Explaining How the Illustration was Made 
General: 
Canvas 2D is drawn using a x, y coordinate graph system via Javascript. 
Overall the x values go from left to right on the horizontal plane while the y values go up and down along the vertical plane. 


The code syntax of:   
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

is used to draw paths on the canvas before we use the .fillRect() method. Here our variables are centerX and centerY. For the pass value of centerX we put canvas.width / 2; here canvas is the variable from prior and width is representing the x values with a division of 2. The same concept applies for canvas.height / 2, with the exception of height representing the y values.   

Lines/Paths:
to draw individual lines or paths on canvas 2D we would use the .lineTo() method. But in order to draw any line on the canvas we first need to start the path with the beginPath() method. In this case we would use the variable ctx so the syntax would be ctx.beginPath(). Now we can draw a path on the canvas via the syntax ctx.lineTo(x,y).  Then to finish up the path we would do add two things. First to close the path we would use the .closePath() method so it would be ctx.closePath(). Second we would use the .stroke() method so that the path that was created can be drawn. 
to determine the color and width of the lines/path we would use:
 .strokeStyle = 'color';  - for setting color to the paths/lines
 .lineWidth = '2'; - for setting how thick the line/path would be


rectangles:
the .fillStyle 'rgb(0, 0, 0) syntax is the syntax used to determine the fill color for the rectangles. For fillRect() it would be the solid fill color. For strokeRect() it would be the outline color.
The rectangles were made using the fillRect() and strokeRect() method. 

The syntax for fillRect (x, y, width , height). the x and y coordinate start on the upper left corner of the rectangles. the x being on the x-axis and the y being on the y-axis and sized by width (positive values are right, negative values are left) and height (positive values go down, negative values go up). The fillStyle property helps draw the rectangle. 
The syntax for strokeRect(x, y, width, height). Here is a stroked rectangle is drawn where the starting point is a an (x,y) coordinate and sized by width (positive values are right, negative values are left) and height (positive values go down, negative values go up).
When we use implemented centerX and centerY in our fillRect() method it comes from our passed values from the variables of centerX and CenterY


Circles:
the circles were made using the syntax ctx.arc(x, , radius, 0, Math.PI *2 ) and declaring the radius variable, then passing a numerical values for the circle size. Without declaring the radius of the circle first, the ctx.arc() method could not be used, as nothing will happen or show on the canvas. Next after passing the radius value, the .arc() method can be used. 
In this case ctx.arc(x, y, radius, 0,Math.PI * 2). 
Breaking the syntax down : The x value is the x coordinate for the center of the circle and the y value is the y coordinate for the center of the circle. Radius is the size of the circle declared from the passed value of the const variable 'radius', in this specific case. 0 is the start of the angle and Math.PI * 2 is the end angle.


Inputting Text:
the text was created using the syntax ctx.font =' family category font size sans/sans serif' and ctx.fillText ('text name', x, y).  
By doing this method it will allow us to implement text on the drawing area. 


End Point:
the draw () function - executes the function inside the block until stopped. 



NEW NOTE - 5/10/2020 
Adding PRE-FINAL CODE & txt files
