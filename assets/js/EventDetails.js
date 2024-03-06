var EventID = getUrlParameter('EventID');
$.ajax({
    url: '/assets/DataSources/Events/'+EventID+'.json',
    dataType: 'json',
    success: function(data) {
        if(data.details.length > 0){
            jQuery.each( data.details, function( i, val ) {
                var Imgs = ''
                if(data.details[i].images.length > 0){
                    console.log(data.details[i])
                    
                    Imgs = `
                    <div class="EventImages"><div class="row">
                    `
                    jQuery.each( data.details[i].images, function( k, val ) {
                        Imgs += '<div class="col-lg-6 mb-4"><img src="'+data.details[i].images[k].img+'" alt=""></div>'
                    });
                    Imgs += '</div></div>'
                }
                $('.EventDetailsCol').append(`<h3 class="section-title-4 text-right FontBold  text-uppercase mb-4 tit-color-custom">`+data.details[i].title+`</h3>`)
                $('.EventDetails').append(`
                    <span class="tit-color-custom"><b>`+data.details[i].location+`</b> - `+data.details[i].date+`</span>
                    <p class="mt-4">
                    `+data.details[i].desc+`
                    </p>
                    `+Imgs+`
                `)
            });
            
        }
        else{
        }
    },
    complete: function(){
        
    },
   statusCode: {
      404: function() {
        alert('There was a problem with the server.  Try again soon!');
      },
      204: function() {
        alert('There was a problem with the server.  Try again soon!');
      }
    }
 });
 $('.LastEventsCol').append(`<h5 class="section-title-4 text-right FontBold  text-uppercase mb-3 tit-color-custom">آخر الفعاليات</h5>`)

 $.ajax({
    url: '/assets/DataSources/LastEvents.json',
    dataType: 'json',
    success: function(data) {
        if(data.details.length > 0){
            jQuery.each( data.details, function( i, val ) {
                $('.LastEvents').append(`
                    <a href="EventDetails.html?EventID=`+data.details[i].id+`" class="list-group-item list-group-item-action"><b>`+data.details[i].title+`</b></a>
                `)
            });
            
        }
        else{
        }
    },
    complete: function(){
        
    },
   statusCode: {
      404: function() {
        alert('There was a problem with the server.  Try again soon!');
      },
      204: function() {
        alert('There was a problem with the server.  Try again soon!');
      }
    }
 });