let canvas=document.getElementById("canvas");
 let ctx=canvas.getContext("2d");
 let start=()=>canvas.getBoundingClientRect();
 window.addEventListener("resize",makeGrid)
 let slider = document.getElementById("slopeRange");

 function makeGrid(){
     ctx.clearRect(0,0,canvas.width,canvas.height)
     for(let i=25;i<canvas.height;i=i+25){
         ctx.strokeStyle='black';
         ctx.lineWidth=0.5;
         if(i==250){
             ctx.lineWidth=2
             for(let j=25;j<500;j=j+25){
                 ctx.fillText((j/25)-10,j+2,i-2)
                 ctx.fillText(10-(j/25),i+2,j-2)
             }
         }
         ctx.beginPath();
         ctx.moveTo(0,i);
         ctx.lineTo(canvas.width,i);
         ctx.stroke();

         ctx.beginPath();
         ctx.moveTo(i,0);
         ctx.lineTo(i,canvas.height);
         ctx.stroke();

     }
 }