$.ajax({
    url: '/assets/DataSources/Services.json',
    dataType: 'json',
    success: function(data) {
        if(data.details.length > 0){
            jQuery.each( data.details, function( i, val ) {
                $('.ServiceRow').append(`
                    <div class="col-lg-4 col-md-6 mb-4 ">
										<div class="icon-info-4 text-center px-3 pt-5 pb-3 CustomReduce Custom-Btn h-100 ">
											<div class="icon-element mb-2 text-secondary">
												<img src="`+data.details[i].icon+`" alt="">
											</div>
											<div class="icon-info-text py-2 ">
												<h3 class="mb-2">
													`+data.details[i].title+`
												</h3>
											</div>
                                           <div class="Custom-Btn-Links">
                                           `+(data.details[i].showServiceLink != false?`<a class="btn btn-Custom d-inline-block" href="`+data.details[i].url+`">ابدأ الخدمة <i class="far fa-long-arrow-alt-left"></i></a>`:``)+`
                                           <a class="btn btn-Custom-bg d-inline-block" href="ServicesDetails.html?ServiceID=`+data.details[i].id+`">تفاصيل </a>
                                           </div>
										</div>
					</div>
                   
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