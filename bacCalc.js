function bacCalc(){

    var beerVal=$("#beerAmount").val();
    var wineVal=$("#wineAmount").val();
    var shotVal=$("#shotAmount").val();
    var beerAlc=beerVal*0.54;
    var wineAlc=wineVal*0.6;
    var shotAlc=shotVal*0.6;
    beerAlc=parseFloat(beerAlc);
    wineAlc=parseFloat(wineAlc);
    shotAlc=parseFloat(shotAlc);
    var body=(beerAlc+wineAlc+shotAlc)*7.5;
    var lbsVal=$("#lbsAmount").val();
    var bac=body/lbsVal;
    var hrVal=$("#hrAmount").val();
    var bacTotal=bac-(hrVal*0.015);
    bacTotal=parseFloat(bacTotal).toFixed(3);
    $("#output").text(bacTotal);
    return false;

}

function init(){

    $("#button").click(bacCalc);

}

$(init);