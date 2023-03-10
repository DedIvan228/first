function range(){
    var
    val = $('.range').val();
    val = (val*100)/200;
    $('.range').css({'background' : '-webkit-linear-gradient(left, #FEC338 0%, #FEC338 '+ val +'%, #c4c4c4a4 '+ val +'%, #c4c4c4a4 100% )'});
}