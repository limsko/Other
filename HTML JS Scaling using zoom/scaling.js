$( document ).ready(function() {
    var $el = $(".box-wrapper");
    rescale($el);
    $( window ).resize(function() {
        rescale($el);
    });

});

function rescale($el) {
    var elHeight = $('.box-wrapper').height();
    var elWidth = $('.box-wrapper').width();
    var scale = 1;
    var winsize = window.innerHeight;

    //Jeśli wysokość okna jest większa niż wysokość SCORM_Playera on sam pozostaje w swojej naturalnej rozdzielczości
    if (elHeight > winsize ) {
        console.log("Windows oversized!");
        scale = Math.min(
            window.innerWidth / elWidth,
            window.innerHeight / elHeight
        );
        scale = Round(scale, 4);
        scale = scale - 0.01;
    }
    else
    {
        scale = 1;
    }

    $el.css({
        transform: "translate(-50%, 0%) ", zoom: scale, "-moz-transform": "translate3d(-50%,0px,0px) scale(" + scale + ")"
    });

}

function Round(n, k)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}

