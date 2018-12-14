function mytrigon(){
    var flank  =[

        parseInt(document.getElementById("flank1").value),
        parseInt(document.getElementById("flank2").value),
        parseInt(document.getElementById("flank3").value)];

     var flanksum=parseInt(flankt[0])+parseInt(flank[1]);
     if (flank[0]==flank[1]&& flank[1]==flank[2])
{ 
    console.log(" this trigon is equilateral");
}
else if (flank[0]==flank[1]||flank[1]==flank[2]||flank[0]==flank[2])
{
    console.log("this trigon is isoceles ");
}
else if (flanksum>flank[2]) 
{
    console.log("this trigon is Scalene");
}
}