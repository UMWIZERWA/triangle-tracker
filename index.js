function mytrigon(){
    var flank  =[

        parseInt(document.getElementById("flank1").value),
        parseInt(document.getElementById("flank2").value),
        parseInt(document.getElementById("flank3").value)];

     if(flank[0]+flank[1]>flank[2]&&flank[0]+flank[2]>flank[1]&&flank[1]+flank[2]>flank[0])
     {
     if (flank[0]===flank[1]&& flank[1]===flank[2]&&flank[1]===flank[0])
{ 
    alert(" This trigon is Equilateral");
}
else if (flank[0]===flank[1]||flank[1]===flank[2]||flank[0]===flank[2])
{
    alert("This trigon is Isoceles ");
}
else
{
    alert("This trigon is Scalene");
}

}
else 
{
    alert("This is not a trigon");
}
}