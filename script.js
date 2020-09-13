$(document).ready(function(){
    let mode = false;
    let counter;
    let epoch = 0;
    let lapped = 0;
    let lapNo = 0;

    showhide('#start','#lap');
    $('#start').click(function(){
        mode = true;
        showhide('#pause','#lap');
        action();
    });

    $('#pause').click(function(){
        clearInterval(counter);
        showhide('#resume','#reset');
    });

    $('#resume').click(function(){
        showhide('#pause','#lap');
        action();
    });

    $('#lap').click(function(){
        addlap();
        lapped = 0;
    });

    $('#reset').click(function(){
        location.reload();
    });

    function showhide(x,y){
        $('.control').hide();
        $(x).show();
        $(y).show();
    }

    function action(){
        counter = setInterval(function(){
            epoch++;
            $('#msec').text(epoch%100);
            $('#sec').text(Math.floor((epoch%6000)/100));
            $('#min').text(Math.floor(epoch/6000));

            lapped++;
            $('#lmsec').text(lapped%100);
            $('#lsec').text(Math.floor((lapped%6000)/100));
            $('#lmin').text(Math.floor(lapped/6000));
        },10);
    }

    function addlap(){
        lapNo++;
        let lapdetails = `
        <div class="lapsadded">
            <div class="laptimetitle">Lap`+ lapNo +`<div>
            <div class="laptime"><span>`+Math.floor(lapped/6000)+`</span>:
            <span>`+Math.floor((lapped%6000)/100)+`</span>:
            <span>`+lapped%100+`</div>
            </div>`;
        $(lapdetails).prependTo('#laps');

    }
});