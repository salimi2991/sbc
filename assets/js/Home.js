Events()
MainVideoBox()
function MainVideoBox(){
	var VideoURL = ''
	if($(window).width() <= 767){
		VideoURL = '/assets/Videos/BgVideoSmarphone.mp4'
	}
	else{
		VideoURL = '/assets/Videos/BgVideo.mp4'
	}
	$('.SliderVideoBox').append(`
			<video id="vid" class="CustomSliderVideo" autoplay="true" loop muted playsinline>
				<source src="`+VideoURL+`" type="video/mp4">
			</video>
	`)
}


$('.Slider1').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: true,
	infinite: false,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true
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

	$('.Slider2').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
	dots: true,
	infinite: false,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true
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

	$('.Slider3').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
	dots: true,
	infinite: false,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true
		  }
		},
		{
		  breakpoint: 769,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		}
	]
	});

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
							<div class="CustomReduce mb-lg-0  HomeCustomReduce ">
							<a class="CustomCursor" href="/MediaCenter/EventDetails.html?EventID=`+data.details[i].id+`">
							  <div class="card-img-wrapper">
								<img class="" src="`+data.details[i].cover+`" alt="Card image cap">
							  </div>
							  <div class="EventCard-body">
								<div class="FixedCardHight">
								  <h5 class="pt-2 text-muted font-weight-normal">`+data.details[i].title+`</h5>
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
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  dots: true,
			  infinite: false,
			  responsive: [
				{
				  breakpoint: 1024,
				  settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,
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
	
		// function Events(){
		// 	$.ajax({
		// 		url: '/assets/DataSources/Events.json',
		// 		dataType: 'json',
		// 		success: function(data) {
		// 			if(data.details.length > 0){
		// 				jQuery.each( data.details, function( i, val ) {
		// 					console.log(val)
		// 					$('.EventList').append(`
		// 						<div class="EventCard p-4">
		// 									  	<div class="hoverToTop CustomReduce mb-lg-0">
		// 											<a href="/MediaCenter/EventDetails.html?EventID=`+data.details[i].id+`">
		// 												<div class="card-img-wrapper">
		// 													<img class="" src="`+data.details[i].cover+`" alt="Card image cap">
		// 												</div>
		// 												<div class="EventCard-body">
		// 													<h5 class="pt-2">`+data.details[i].title+`</h5>
		// 													<small class="color-3 font-weight-bold">`+data.details[i].date+`</small>
		// 													<div><i class="fal fa-long-arrow-left font-weight-bold color-3"></i></div>

														
		// 												</div>
		// 											</a>
		// 										</div>
		// 						</div>
		// 					`)
		// 				});
						
		// 			}
		// 			else{
		// 			}
		// 		},
		// 		complete: function(){
		// 			$('.Slider5').slick({
		// 				slidesToShow: 4,
		// 				slidesToScroll: 4,
		// 				dots: true,
		// 				infinite: false,
		// 				responsive: [
		// 					{
		// 					  breakpoint: 1024,
		// 					  settings: {
		// 						slidesToShow: 3,
		// 						slidesToScroll: 3,
		// 					  }
		// 					},
		// 					{
		// 					  breakpoint: 769,
		// 					  settings: {
		// 						slidesToShow: 2,
		// 						slidesToScroll: 2
		// 					  }
		// 					},
		// 					{
		// 					  breakpoint: 480,
		// 					  settings: {
		// 						slidesToShow: 1,
		// 						slidesToScroll: 1
		// 					  }
		// 					}
		// 				]
		// 				});	
		// 		},
		// 	   statusCode: {
		// 		  404: function() {
		// 			alert('There was a problem with the server.  Try again soon!');
		// 		  },
		// 		  204: function() {
		// 			alert('There was a problem with the server.  Try again soon!');
		// 		  }
		// 		}
		// 	  });
		// }