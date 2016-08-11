$(function(){
    // change welcome message based on time of day
    if($('.welcome span').length){
        var when = Math.floor((new Date(Date.now()).getHours() / 6 )),
            greets = ['morning','morning','afternoon','evening'];
        $('.welcome span').text(greets[when]);
    }
    // last login details from timestamp
    if($('.welcome li[data-ts]').length){
        var formatter = new Intl.DateTimeFormat("en-gb", { month: "long" })
        var stamp = new Date( $('.welcome li[data-ts]').data('ts') )
        var ts = stamp.getDate()+' '+formatter.format(stamp)+' '+ stamp.getFullYear()  +' '+ stamp.getHours()+':'+stamp.getMinutes()
        ts += (stamp.getHours <= 12 ? 'a' : 'p') + 'm'
        $('.welcome li[data-ts]').text($('.welcome li[data-ts]').text() + ts )
    }
});

$(function(){
    // folio views
    if($('.folio_view .pf_total').length){
        var total = 0
        $.each($('.pf_val'), function(i, el){
            total += parseFloat($(el).text())
            console.log(parseFloat($(el).text()))
        })
        $('.pf_total').text(total.toFixed(2))
    }
});
