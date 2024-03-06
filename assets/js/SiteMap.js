$.ajax({
    url: '/assets/DataSources/Nav.json',
    dataType: 'json',
    success: function(data) {
        if(data.details.length > 0){
            jQuery.each( data.details, function( i, val ) {
               
                var HasChild = ''
                var ListContent = ''
                if(data.details[i].items.length > 0){
                    HasChild = 'droopmenu-parent'
                    ListContent += '<div class="row pr-xl-5 BodyMenu my-2">'
                    var Counter = 1
                    jQuery.each( data.details[i].items, function( j, val ) {
                        
                       
                        ListContent += `
                            <div class="col-12 d-table mb-1 mb-md-2 pr-xl-5">
                                <div class="bg-white `+Counter+` border-0  d-table-cell VAlignM w-100">
                                <a class="text-muted" href="`+data.details[i].items[j].url+`">
                                <div class="card-body py-2">
                                        <p class="mb-0">`+data.details[i].items[j].title+`</p>
                                    </div>
                                </a>
                                </div>
                            </div>
                        `
                        Counter++
                    })
                    ListContent += '</div>'
                }
                $('.SiteMap').append(`<div class="`+HasChild+` SiteMapMainNode position-relative"><h5 class="section-title-4 p-3 pb-4 bg-white text-right font-weight-800 text-uppercase mb-2"><a href="`+data.details[i].url+`" class="text-muted">`+data.details[i].title+`<i class="fas fa-sort-down"></i></a></h5>`+ListContent+`</div>`)

                
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