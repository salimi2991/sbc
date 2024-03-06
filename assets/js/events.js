Events()
function Events(){
  $.ajax({
    url: '/assets/DataSources/Events.json',
    dataType: 'json',
    success: function(data) {
      if(data.details.length > 0){
        jQuery.each( data.details, function( i, val ) {
          console.log(val)
          
          $('.EventList').append(`
            <div class="InternalEventCard p-2">
                      <div class="CustomReduce pl-lg-4 p-3 ">
                      <a class="CustomCursor" href="EventDetails.html?EventID=`+data.details[i].id+`">
                        <div class="card-img-wrapper">
                          <img class="" src="`+data.details[i].cover+`" alt="Card image cap">
                        </div>
                        <div class="EventCard-body">
                          <div class="FixedCardHight">
                            <h5 class="pt-2 text-muted">`+data.details[i].title+`</h5>
                          </div>
                          <small class="color-3 font-weight-bold">`+data.details[i].date+`</small>
                          

                        
                        </div>
                      </a>
                    </div>
            </div>
          `)
        });
        
      }
      else{
      }
    },
    complete: function(){
      $('.Slider5').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
          },
          {
            breakpoint: 769,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
          }
        ]
        });	
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
}
// $.ajax({
//     url: '/assets/DataSources/Events.json',
//     dataType: 'json',
//     success: function(data) {
//         if(data.details.length > 0){
//             jQuery.each( data.details, function( i, val ) {
//                 $('.EventList').append(`
//                     <div class="col-lg-4 col-md-6 mb-4 d-table EventCard">
//                                   <div class="border border-white mb-4 mb-lg-0 d-table-cell">
//                                      <a href="EventDetails.html?EventID=`+data.details[i].id+`">
//                                      <div class="card-img-wrapper">
//                                      <img class="" src="`+data.details[i].cover+`" alt="Card image cap">
//                                    </div>
//                                    <div class="card-body">
//                                      <h5 class="card-title FontLight">`+data.details[i].title+`
//                                      </h5>
//                                    </div>
//                                    <div class="card-date border-0">
//                                      <small class="">`+data.details[i].date+`</small>
//                                    </div>
//                                      </a>
//                                     </div>
//                     </div>
//                 `)
//             });
            
//         }
//         else{
//         }
//     },
//     complete: function(){
        
//     },
//    statusCode: {
//       404: function() {
//         alert('There was a problem with the server.  Try again soon!');
//       },
//       204: function() {
//         alert('There was a problem with the server.  Try again soon!');
//       }
//     }
//  });