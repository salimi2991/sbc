var ServiceID = $('body').attr('TargetMenu')
$.ajax({
    url: '/assets/DataSources/Nav.json',
    dataType: 'json',
    success: function(data) {
        if(data.details.length > 0){
            jQuery.each( data.details, function( i, val ) {
                
                
                if(data.details[i].items.length > 0){
                    if(data.details[i].id == parseInt(ServiceID)){
                        var Counter = 1
                        jQuery.each( data.details[i].items, function( j, val ) {
                            $('.BodyMenu').append(`
                                 <div class="col-md-4 col-lg-3 d-table mb-4">
                                    <div class="card text-white CustomBG00`+Counter+` border-0 shadow d-table-cell VAlignM">
                                       <a class="text-white" href="`+data.details[i].items[j].url+`">
                                       <div class="card-body">
                                            <p class="card-text text-center py-3">`+data.details[i].items[j].title+`</p>
                                        </div>
                                       </a>
                                    </div>
                                </div>
                            `)
                            
                            Counter++
                        })
                    }
                    
                }
                

                
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