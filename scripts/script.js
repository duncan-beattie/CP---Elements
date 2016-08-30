$(function(){
    $('.nav-toggle').click(function() {
        $("#overlay").toggleClass('is-open' );
    })
    /*
    setTimeout(function(){ 
        $('.site-header .nav-toggle').trigger('click')
    },1000);
    */
});



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
        })
        $('.pf_total').text(total.toFixed(2))
    }
    if($('.block.has_link').length){
        $.each($('.block.has_link'), function(i, el){
            $(el).one('click', function(e){
                $(el).find('a').trigger("click")
            })
        })
    }
});


// Accordions
$(function(){
    $.each($('.accordion .details'), function(i, el){
        $(el).data('hgt', $(el).height())
        $(el).css('height', $(el).data('hgt'))
        $(el).toggleClass('is-closed')
    })
    $('.accordion').find('.toggle').click(function(){
        $(this).find('i').toggleClass('fa-caret-down');
        $(this).find('i').toggleClass('fa-caret-up');
        $(this).parent().find('.details').toggleClass('is-closed')
    })
});



$(function(){
    var path = document.location.pathname.split('/')[1]

    function setActive(key){
        $('.navbar a[rel*="'+key+'"]').toggleClass('is-active')
    }

    switch (path){
        case "home":
        case "folio":
            setActive('home')
        break;
        case "analysis":
            setActive('analysis')
        break;
        case "transactions":
            setActive('transactions')
        break;
        case "document":
        case "document_search":
            setActive('documents')
        break;

       default: 
    } 
});



$(function(){
    // select on change
    $('select.controller').on('change', function(e){
        $.each($('select.controller option'), function(i, el){
          if($(el).prop('selected')){
              $('.fake-form').addClass('is-active').attr('href', $(el).text().split(' ').join('_').toLowerCase())  
          }
        })
    })
});



// editable pref pane
$(function(){
    if($('.deets .pref_editable').length){
        $.each($('.deets .pref_editable'), function(i, el){
            $(el).on('click', function(e){
                console.log($(el).find('a').text())
                var mod = $(el).find('a').attr('href')
                $(mod).find('input').attr('value', $(el).find('a').text())
                $(mod).find('.save-state').on('click', function(e){
                    console.log($(mod).find('input').prop('value'))
                   $(el).find('a span').text($(mod).find('input').prop('value'))
                })
            });
        })
    }
});

