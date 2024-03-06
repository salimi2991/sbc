

NumberCOunter()
MainVideoBox()
Events()
SaudiMap()
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
function Events(){
	$.ajax({
		url: '/assets/DataSources/Events.json',
		dataType: 'json',
		success: function(data) {
			if(data.details.length > 0){
				jQuery.each( data.details, function( i, val ) {
					$('.EventList').append(`
						<div class="col-lg-4 mb-4 d-table EventCard">
									  <div class="card border-0 shadow hoverToTop CustomReduce mb-4 mb-lg-0 d-table-cell">
										 <a href="/MediaCenter/EventDetails.html?EventID=`+data.details[i].id+`">
										 <div class="card-img-wrapper">
										 <img class="card-img-top" src="`+data.details[i].cover+`" alt="Card image cap">
									   </div>
									   <div class="card-body">
										 <div class="tit-h5">`+data.details[i].title+`
										 </div>
									   </div>
									   <div class="card-date border-0">
										 <small class="">`+data.details[i].date+`</small>
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
function NumberCOunter(){
	$('.CountUp').each(function () {
		var $this = $(this);
		jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
		  duration: 1000,
		  easing: 'swing',
		  step: function (now) {
			$this.text(Math.ceil(now));
		  }
		});
	  });
}
function SaudiMap(){
	if($(window).width() <= 767){
		
	}
	else{
		Map()
		$('.st1').click(function(){
		var ID = $(this).attr('targetid')
		$.ajax({
			url: '/assets/DataSources/Locations.json',
			dataType: 'json',
			success: function(data) {
				if(data.details.length > 0){
				
					jQuery.each( data.details, function( i, val ) {
					if(data.details[i].id == ID){
						console.log(data.details[i].id)
						$('.gMaps .ItemsList').html(`
						<div class="card p-4 pb-2  mb-3 border-0 shadow">
						<div class="">
						<div class="media mt-0">
							<div class="media">
								<div class="media">
									<div class="media-body"> <span class="tx-18">`+data.details[i].desc+`</span>
								</div>
								</div>
							</div>
						</div>
						<div class="row mt-4">
							<div class="col-12 col-md-6 col-lg">
							<div class="main-profile-contact-list">
								<div class="media">
								<div class="media-icon  text-warning"> <img src="/assets/imgs/icons/191.svg" alt=""> </div>
								<div class="media-body"> <span>الفرع</span>
									<div> `+data.details[i].city+` </div>
								</div>
								</div>
							</div>
							</div>
							<div class="col-12 col-md-6 col-lg">
							<div class="main-profile-contact-list">
								<div class="media">
								<div class="media-icon  text-warning"> <img src="/assets/imgs/icons/417.svg" alt=""> </div>
								<div class="media-body"> <span>النوع</span>
									<div> `+data.details[i].type+`   </div>
								</div>
								</div>
							</div>
							</div>
							<div class="col-12 col-md-6 col-lg">
							<div class="main-profile-contact-list">
								<div class="media">
								<div class="media-icon  text-primary"> <img src="/assets/imgs/icons/250.svg" alt=""> </div>
								<div class="media-body"> <span>ايام العمل</span>
									<div>`+data.details[i].workdays+`</div>
								</div>
								</div>
							</div>
							</div>
							<div class="col-12 col-md-6 col-lg">
							<div class="main-profile-contact-list">
								<div class="media">
								<div class="media-icon  text-danger"> <img src="/assets/imgs/icons/379.svg" alt=""> </div>
								<div class="media-body"> <span>اوقات العمل</span>
									<div>`+data.details[i].worktime+` </div>
								</div>
								</div>
							</div>
							</div>
						</div>
						<hr>
						<div class="row justify-content-center mt-4">
							<div class="col-lg-8">
							<div class="google-maps">
								<iframe src="`+data.details[i].location+`" width="600" height="450" frameborder="0" style="width: 100%; height: 100%; border: 0" allowfullscreen></iframe>
							</div>
							</div>
						</div>
						</div>
					</div>
						`)
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
		})
		$('.gMaps').SlickModals({
		popup_reopenClass: 'st1',
		popup_animation: 'pulse',
		popup_position: 'center',
		page_animate: true,
		page_animation: 'blur',
		popup_css: {
			'width': '50%',
			'padding': '10px',
			'margin' : 'auto'
		},
		mobile_breakpoint: '520px',
		mobile_position: 'center',
		mobile_css: {
			'width': '90%',
			'padding': '0 20px',
			'margin' : 'auto'
		}
		});
	}
}
function Map(){
	$('.SaudiMap').append(`
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	   viewBox="0 0 1705.7 912" style="enable-background:new 0 0 1705.7 912;" xml:space="preserve">
  
  <desc>JavaScript chart by amCharts 3.21.12</desc>
  <desc>
	  This map was created using Pixel Map Generator by amCharts and is licensed under the Creative Commons Attribution 4.0 International License. You may use this map the way you see fit as long as proper attribution to the name of amCharts is given in the form of link to http://pixelmap.amcharts.com/ To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/ If you would like to use this map without any attribution, you can acquire a commercial license for the JavaScript Maps - a tool that was used to produce this map. To do so, visit amCharts Online Store: http://www.amcharts.com/online-store/
	  </desc>
  <g id="_x31__19_">
  </g>
  <g id="_x31__18_">
  </g>
  <g id="_x31__17_">
  </g>
  <g id="_x31__16_">
  </g>
  <g id="_x31__15_">
  </g>
  <g id="_x31__14_">
  </g>
  <g id="_x31__13_">
  </g>
  <g id="_x31__12_">
  </g>
  <g id="_x31__11_">
  </g>
  <g id="_x31__10_">
  </g>
  <g id="_x31__9_">
  </g>
  <g id="_x31__8_">
  </g>
  <g id="_x31__7_">
  </g>
  <g id="_x31__6_">
  </g>
  <g id="_x31__5_">
  </g>
  <g id="_x31__4_">
  </g>
  <g id="_x31__3_">
  </g>
  <g id="_x31__2_">
  </g>
  <g id="_x31__1_">
  </g>
  <g id="_x31_">
  </g>
  <g>
	  <g transform="translate(325.27330530472733,62.353847909983) scale(1)">
		  <g>
			  <g transform="translate(154.72495926154807,-49.943859647551285)">
				  <g>
					  <g>
						  <path class="st0" d="M-76.4,25.4h14.6l4.7-5.1h-14.5L-76.4,25.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,-49.943859647551285)">
				  <g>
					  <g>
						  <path class="st0" d="M-68.9,25.4h14.6l4.5-5.1l-14.5,0L-68.9,25.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,-49.943859647551285)">
				  <g>
					  <g>
						  <path class="st0" d="M-61.4,25.4l14.6,0l4.3-5.1h-14.5L-61.4,25.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,-49.943859647551285)">
				  <g>
					  <g>
						  <path class="st0" d="M-53.8,25.4h14.6l4.1-5.1h-14.5L-53.8,25.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-114.2,20.3h14.8l5.6-5.2h-14.7L-114.2,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-106.4,20.3h14.8l5.4-5.2h-14.7L-106.4,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-98.6,20.3h14.8l5.2-5.2h-14.7L-98.6,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-90.8,20.3l14.9,0l5-5.2h-14.7L-90.8,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-83,20.3h14.8l4.8-5.2h-14.7L-83,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-75.2,20.3h14.8l4.6-5.2h-14.7L-75.2,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-67.4,20.3l14.8,0l4.4-5.2h-14.7L-67.4,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-59.6,20.3h14.8l4.2-5.2h-14.7L-59.6,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,-37.950664998237485)">
				  <g>
					  <g>
						  <path class="st0" d="M-51.8,20.3H-37l4-5.2l-14.7,0L-51.8,20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-130.1,15.4h15.1l6-5.4H-124L-130.1,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-122.1,15.4l15.1,0l5.8-5.4h-14.9L-122.1,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-114,15.4h15l5.5-5.4h-14.9L-114,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-105.9,15.4h15l5.3-5.4h-14.9L-105.9,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-97.8,15.4h15.1l5.1-5.4h-14.9L-97.8,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-89.8,15.4h15.1l4.9-5.4h-14.9L-89.8,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-81.7,15.4h15.1l4.7-5.4h-14.9L-81.7,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-73.6,15.4h15.1L-54,10l-14.9,0L-73.6,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-65.5,15.4h15l4.3-5.4h-14.9L-65.5,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-57.5,15.4h15.1l4.1-5.4h-14.9L-57.5,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,-25.947663975539115)">
				  <g>
					  <g>
						  <path class="st0" d="M-49.4,15.4h15.1l3.9-5.4l-14.9,0L-49.4,15.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-130.1,10.7h15.3l5.9-5.5h-15.1L-130.1,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-121.8,10.7h15.3l5.7-5.5l-15.1,0L-121.8,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-113.4,10.7h15.3l5.5-5.5h-15.1L-113.4,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-105.1,10.7h15.3l5.3-5.5h-15.1L-105.1,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-96.7,10.7h15.3l5.1-5.5l-15.1,0L-96.7,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-88.3,10.7l15.3,0l4.9-5.5h-15.1L-88.3,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-80,10.7h15.3l4.6-5.5h-15.1L-80,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-71.6,10.7h15.3l4.4-5.5l-15.1,0L-71.6,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-63.3,10.7l15.3,0l4.2-5.5h-15.1L-63.3,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-54.9,10.7h15.3l4-5.5h-15.1L-54.9,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-46.6,10.7h15.3l3.8-5.5l-15.1,0L-46.6,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,-13.94466295284075)">
				  <g>
					  <g>
						  <path class="st0" d="M-38.2,10.7l15.3,0l3.6-5.5h-15.1L-38.2,10.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-129.8,6.3h15.5l5.9-5.7h-15.3L-129.8,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-121.1,6.3h15.5l5.6-5.7h-15.3L-121.1,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-112.5,6.3H-97l5.4-5.7l-15.3,0L-112.5,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-103.8,6.3h15.5l5.2-5.7h-15.3L-103.8,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-95.2,6.3h15.5l5-5.7H-90L-95.2,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-86.5,6.3h15.5l4.8-5.7l-15.3,0L-86.5,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-77.9,6.3h15.5l4.6-5.7h-15.3L-77.9,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-69.2,6.3h15.5l4.3-5.7h-15.3L-69.2,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-60.6,6.3h15.5l4.1-5.7l-15.3,0L-60.6,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-52,6.3h15.5l3.9-5.7h-15.3L-52,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-43.3,6.3h15.5l3.7-5.7h-15.3L-43.3,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,-1.9514683035269402)">
				  <g>
					  <g>
						  <path class="st0" d="M-34.7,6.3h15.5l3.5-5.7l-15.3,0L-34.7,6.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-138,2h15.7l6-5.8h-15.5L-138,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-129.1,2l15.7,0l5.8-5.8h-15.5L-129.1,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-120.1,2h15.7l5.6-5.8l-15.6,0L-120.1,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-111.2,2h15.7l5.4-5.8h-15.5L-111.2,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-102.2,2l15.7,0l5.1-5.8h-15.5L-102.2,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-93.3,2h15.7l4.9-5.8l-15.5,0L-93.3,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-84.3,2h15.7l4.7-5.8h-15.5L-84.3,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-75.4,2l15.7,0l4.5-5.8h-15.5L-75.4,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-66.5,2h15.7l4.2-5.8l-15.5,0L-66.5,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-57.5,2h15.7l4-5.8h-15.5L-57.5,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-48.6,2l15.7,0l3.8-5.8h-15.5L-48.6,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-39.6,2h15.7l3.6-5.8l-15.5,0L-39.6,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-30.7,2H-15l3.3-5.8h-15.5L-30.7,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,10.051532719171426)">
				  <g>
					  <g>
						  <path class="st0" d="M-21.7,2L-6,2l3.1-5.8h-15.5L-21.7,2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-155.8-2l15.9,0l6.4-6h-15.8L-155.8-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-146.5-2h15.9l6.2-6h-15.8L-146.5-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-137.2-2h15.9l6-6l-15.8,0L-137.2-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-128-2l16,0l5.7-6h-15.8L-128-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-118.7-2h15.9l5.5-6h-15.8L-118.7-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-109.5-2h15.9l5.3-6L-104-8L-109.5-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-100.2-2l15.9,0l5.1-6H-95L-100.2-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-91-2h15.9l4.8-6H-86L-91-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-81.7-2h15.9l4.6-6L-77-8L-81.7-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-72.5-2l15.9,0l4.4-6H-68L-72.5-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-63.2-2h15.9l4.1-6h-15.8L-63.2-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-54-2H-38l3.9-6l-15.8,0L-54-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-44.7-2l15.9,0l3.7-6h-15.8L-44.7-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-35.5-2h15.9l3.4-6h-15.8L-35.5-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-26.2-2h15.9l3.2-6l-15.8,0L-26.2-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,22.05453374186979)">
				  <g>
					  <g>
						  <path class="st0" d="M-17-2l16,0l3-6h-15.8L-17-2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-183.9-5.8l16.2,0l7.1-6.2h-16L-183.9-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-174.4-5.8l16.2,0l6.9-6.2h-16L-174.4-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-164.8-5.8l16.2,0l6.6-6.2h-16L-164.8-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-155.2-5.8l16.2,0l6.4-6.2h-16L-155.2-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-145.7-5.8l16.2,0l6.2-6.2h-16L-145.7-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-136.1-5.8l16.2,0l5.9-6.2h-16L-136.1-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-126.5-5.8l16.2,0l5.7-6.2l-16,0L-126.5-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-117-5.8l16.2,0l5.4-6.2h-16L-117-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-107.4-5.8l16.2,0L-86-12h-16L-107.4-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-97.8-5.8l16.2,0l5-6.2l-16,0L-97.8-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-88.3-5.8l16.2,0l4.7-6.2h-16L-88.3-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-78.7-5.8l16.2,0L-58-12h-16L-78.7-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-69.1-5.8l16.2,0l4.3-6.2l-16,0L-69.1-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-59.6-5.8l16.2,0l4-6.2h-16L-59.6-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-50-5.8l16.2,0L-30-12h-16L-50-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-40.4-5.8l16.2,0l3.5-6.2l-16,0L-40.4-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-30.9-5.8l16.2,0l3.3-6.2h-16L-30.9-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-21.3-5.8l16.2,0L-2-12h-16L-21.3-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-11.7-5.8l16.2,0L7.3-12l-16,0L-11.7-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,34.0477283911836)">
				  <g>
					  <g>
						  <path class="st0" d="M-2.2-5.8l16.2,0l2.6-6.2h-16L-2.2-5.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-203.8-9.3l16.4,0l7.6-6.4l-16.2,0L-203.8-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-193.9-9.3l16.4,0l7.3-6.4l-16.2,0L-193.9-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-184-9.3l16.4,0l7.1-6.4l-16.2,0L-184-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-174.1-9.3l16.4,0l6.8-6.4l-16.2,0L-174.1-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-164.2-9.3l16.4,0l6.6-6.4l-16.2,0L-164.2-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-154.3-9.3l16.4,0l6.3-6.4l-16.2,0L-154.3-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-144.4-9.3l16.4,0l6.1-6.4l-16.2,0L-144.4-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-134.5-9.3l16.4,0l5.9-6.4l-16.2,0L-134.5-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-124.6-9.3l16.4,0l5.6-6.4l-16.2,0L-124.6-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-114.8-9.3l16.4,0l5.4-6.4l-16.2,0L-114.8-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-104.9-9.3l16.4,0l5.1-6.4l-16.2,0L-104.9-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-95-9.3l16.4,0l4.9-6.4l-16.2,0L-95-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-85.1-9.3l16.4,0l4.6-6.4l-16.2,0L-85.1-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-75.2-9.3l16.4,0l4.4-6.4l-16.2,0L-75.2-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-65.3-9.3l16.4,0l4.1-6.4l-16.2,0L-65.3-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-55.4-9.3l16.4,0l3.9-6.4l-16.2,0L-55.4-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-45.5-9.3l16.4,0l3.7-6.4l-16.2,0L-45.5-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-35.6-9.3l16.4,0l3.4-6.4l-16.2,0L-35.6-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-25.7-9.3l16.4,0l3.2-6.4l-16.2,0L-25.7-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-15.9-9.3l16.4,0l2.9-6.4l-16.2,0L-15.9-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M-6-9.3l16.4,0l2.7-6.4l-16.2,0L-6-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,46.05072941388197)">
				  <g>
					  <g>
						  <path class="st0" d="M3.9-9.3l16.4,0l2.4-6.4l-16.2,0L3.9-9.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(22.731173505404257,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-255.3-12.6h16.7l8.8-6.6l-16.5,0L-255.3-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(34.724368154718064,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-245.1-12.6h16.7l8.6-6.6l-16.5,0L-245.1-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(46.727369177416435,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-234.9-12.6h16.7l8.3-6.6l-16.5,0L-234.9-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-224.6-12.6l16.7,0l8.1-6.6l-16.5,0L-224.6-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-214.4-12.6h16.7l7.8-6.6l-16.5,0L-214.4-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-204.2-12.6h16.7l7.5-6.6l-16.5,0L-204.2-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-193.9-12.6l16.7,0l7.3-6.6l-16.5,0L-193.9-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-183.7-12.6h16.7l7-6.6l-16.5,0L-183.7-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-173.5-12.6h16.7l6.8-6.6l-16.5,0L-173.5-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-163.3-12.6l16.7,0l6.5-6.6l-16.5,0L-163.3-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-153-12.6h16.7l6.3-6.6l-16.5,0L-153-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-142.8-12.6h16.7l6-6.6l-16.5,0L-142.8-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-132.6-12.6h16.7l5.8-6.6l-16.5,0L-132.6-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-122.4-12.6h16.7l5.5-6.6l-16.5,0L-122.4-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-112.1-12.6l16.7,0l5.3-6.6l-16.5,0L-112.1-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-101.9-12.6h16.7l5-6.6l-16.5,0L-101.9-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-91.7-12.6H-75l4.8-6.6l-16.5,0L-91.7-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-81.4-12.6l16.7,0l4.5-6.6l-16.5,0L-81.4-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-71.2-12.6h16.7l4.3-6.6l-16.5,0L-71.2-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-61-12.6h16.7l4-6.6l-16.5,0L-61-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-50.8-12.6h16.7l3.8-6.6l-16.5,0L-50.8-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-40.5-12.6h16.7l3.5-6.6l-16.5,0L-40.5-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-30.3-12.6l16.7,0l3.3-6.6l-16.5,0L-30.3-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-20.1-12.6h16.7l3-6.6l-16.5,0L-20.1-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M-9.9-12.6H6.8l2.8-6.6l-16.5,0L-9.9-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M0.4-12.6l16.7,0l2.5-6.6L3-19.2L0.4-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M10.6-12.6h16.7l2.2-6.6l-16.5,0L10.6-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,58.05373043658034)">
				  <g>
					  <g>
						  <path class="st0" d="M20.8-12.6h16.7l2-6.6l-16.5,0L20.8-12.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(22.731173505404257,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-267.6-15.6l16.9,0l9.1-6.8h-16.7L-267.6-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(34.724368154718064,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-257.1-15.6h16.9l8.8-6.8h-16.7L-257.1-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(46.727369177416435,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-246.5-15.6h16.9l8.6-6.8h-16.7L-246.5-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-235.9-15.6l16.9,0l8.3-6.8l-16.7,0L-235.9-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-225.4-15.6h16.9l8-6.8h-16.7L-225.4-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-214.8-15.6l16.9,0l7.8-6.8h-16.7L-214.8-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-204.2-15.6h16.9l7.5-6.8l-16.7,0L-204.2-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-193.6-15.6h16.9l7.3-6.8h-16.7L-193.6-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-183.1-15.6l16.9,0l7-6.8h-16.7L-183.1-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-172.5-15.6h16.9l6.7-6.8l-16.7,0L-172.5-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-161.9-15.6h16.9l6.5-6.8h-16.7L-161.9-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-151.3-15.6l16.9,0l6.2-6.8l-16.7,0L-151.3-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-140.8-15.6h16.9l6-6.8h-16.7L-140.8-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-130.2-15.6l16.9,0l5.7-6.8h-16.7L-130.2-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-119.6-15.6h16.9l5.4-6.8l-16.7,0L-119.6-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-109-15.6h16.9l5.2-6.8h-16.7L-109-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-98.5-15.6l16.9,0l4.9-6.8h-16.7L-98.5-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-87.9-15.6H-71l4.7-6.8l-16.7,0L-87.9-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-77.3-15.6h16.9l4.4-6.8h-16.7L-77.3-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-66.8-15.6l16.9,0l4.1-6.8h-16.7L-66.8-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-56.2-15.6h16.9l3.9-6.8h-16.7L-56.2-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-45.6-15.6l16.9,0l3.6-6.8h-16.7L-45.6-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-35-15.6h16.9l3.4-6.8l-16.7,0L-35-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-24.5-15.6h16.9l3.1-6.8h-16.7L-24.5-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-13.9-15.6l16.9,0l2.8-6.8h-16.7L-13.9-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M-3.3-15.6h16.9l2.6-6.8l-16.7,0L-3.3-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M7.2-15.6h16.9l2.3-6.8H9.8L7.2-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M17.8-15.6l16.9,0l2.1-6.8H20.1L17.8-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M28.4-15.6h16.9l1.8-6.8H30.4L28.4-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M39-15.6l16.9,0l1.5-6.8H40.7L39-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M49.6-15.6h16.9l1.3-6.8l-16.7,0L49.6-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M60.1-15.6h16.9l1-6.8H61.3L60.1-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M70.7-15.6l16.9,0l0.8-6.8H71.6L70.7-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M81.3-15.6h17l0.5-6.8l-16.8,0L81.3-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,70.0567314592787)">
				  <g>
					  <g>
						  <path class="st0" d="M91.8-15.6h16.9l0.2-6.8H92.3L91.8-15.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(10.728172482705892,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-291.3-18.4h17.2l9.6-7l-17,0L-291.3-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(22.731173505404257,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-280.3-18.4h17.2l9.4-7h-17L-280.3-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(34.724368154718064,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-269.4-18.4h17.2l9.1-7h-17L-269.4-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(46.727369177416435,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-258.5-18.4l17.2,0l8.8-7l-17,0L-258.5-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-247.6-18.4h17.2l8.6-7h-17L-247.6-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-236.6-18.4h17.2l8.3-7h-17L-236.6-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-225.7-18.4l17.2,0l8-7l-17,0L-225.7-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-214.8-18.4h17.2l7.8-7h-17L-214.8-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-203.8-18.4l17.2,0l7.5-7l-17,0L-203.8-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-192.9-18.4h17.2l7.2-7h-17L-192.9-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-182-18.4h17.2l7-7h-17L-182-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-171.1-18.4l17.2,0l6.7-7l-17,0L-171.1-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-160.1-18.4h17.2l6.4-7h-17L-160.1-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-149.2-18.4h17.2l6.1-7h-17L-149.2-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-138.3-18.4h17.2l5.9-7h-17L-138.3-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-127.3-18.4h17.2l5.6-7h-17L-127.3-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-116.4-18.4l17.2,0l5.3-7l-17,0L-116.4-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-105.5-18.4h17.2l5.1-7h-17L-105.5-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-94.5-18.4h17.2l4.8-7h-17L-94.5-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-83.6-18.4l17.2,0l4.5-7l-17,0L-83.6-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-72.7-18.4h17.2l4.3-7h-17L-72.7-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-61.8-18.4l17.2,0l4-7h-17L-61.8-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-50.8-18.4h17.2l3.7-7h-17L-50.8-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-39.9-18.4h17.2l3.5-7h-17L-39.9-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-29-18.4l17.2,0l3.2-7l-17,0L-29-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-18-18.4h17.2l2.9-7h-17L-18-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M-7.1-18.4h17.2l2.7-7h-17L-7.1-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M3.8-18.4H21l2.4-7l-17,0L3.8-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M14.7-18.4h17.2l2.1-7h-17L14.7-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M25.7-18.4l17.2,0l1.9-7h-17L25.7-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M36.6-18.4h17.2l1.6-7h-17L36.6-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M47.5-18.4h17.2l1.3-7h-17L47.5-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M58.5-18.4l17.2,0l1-7l-17,0L58.5-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M69.4-18.4h17.2l0.8-7h-17L69.4-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M80.3-18.4h17.2l0.5-7H81L80.3-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M91.2-18.4h17.2l0.2-7l-17,0L91.2-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,82.0499261085925)">
				  <g>
					  <g>
						  <path class="st0" d="M102.2-18.4h17.2l0-7h-17L102.2-18.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(10.728172482705892,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-304.7-20.8h17.5l9.9-7.2h-17.3L-304.7-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(22.731173505404257,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-293.4-20.8l17.5,0l9.7-7.2h-17.3L-293.4-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(34.724368154718064,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-282.2-20.8h17.5l9.4-7.2h-17.3L-282.2-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(46.727369177416435,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-270.9-20.8h17.5l9.1-7.2l-17.3,0L-270.9-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-259.6-20.8l17.5,0l8.8-7.2h-17.3L-259.6-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-248.3-20.8h17.5l8.6-7.2h-17.3L-248.3-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-237-20.8h17.5l8.3-7.2l-17.3,0L-237-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-225.7-20.8h17.5l8-7.2h-17.3L-225.7-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-214.4-20.8h17.5l7.7-7.2l-17.3,0L-214.4-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-203.1-20.8l17.5,0l7.5-7.2h-17.3L-203.1-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-191.8-20.8h17.5l7.2-7.2h-17.3L-191.8-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-180.5-20.8h17.5l6.9-7.2l-17.3,0L-180.5-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-169.2-20.8h17.5l6.6-7.2h-17.3L-169.2-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-157.9-20.8h17.5l6.3-7.2h-17.3L-157.9-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-146.6-20.8l17.5,0l6.1-7.2h-17.3L-146.6-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-135.3-20.8h17.5l5.8-7.2h-17.3L-135.3-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-124-20.8h17.5l5.5-7.2l-17.3,0L-124-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-112.7-20.8l17.5,0L-90-28h-17.3L-112.7-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-101.4-20.8h17.5l5-7.2h-17.3L-101.4-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-90.1-20.8l17.5,0L-68-28l-17.3,0L-90.1-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-78.8-20.8h17.5l4.4-7.2h-17.3L-78.8-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-67.5-20.8h17.5l4.1-7.2l-17.3,0L-67.5-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-56.2-20.8l17.5,0l3.9-7.2h-17.3L-56.2-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-44.9-20.8h17.5l3.6-7.2h-17.3L-44.9-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-33.6-20.8h17.5l3.3-7.2l-17.3,0L-33.6-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-22.3-20.8h17.5l3-7.2h-17.3L-22.3-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M-11-20.8H6.4L9.2-28H-8.1L-11-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M0.3-20.8l17.5,0l2.5-7.2H2.9L0.3-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M11.6-20.8H29l2.2-7.2H14L11.6-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M22.8-20.8h17.5l1.9-7.2L25-28L22.8-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M34.1-20.8h17.5l1.6-7.2H36L34.1-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M45.5-20.8h17.5l1.4-7.2H47L45.5-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M56.7-20.8l17.5,0l1.1-7.2L58-28L56.7-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M68-20.8h17.5l0.8-7.2H69.1L68-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M79.3-20.8h17.5l0.5-7.2l-17.3,0L79.3-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M90.6-20.8l17.5,0l0.3-7.2H91.1L90.6-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M101.9-20.8h17.5l0-7.2h-17.3L101.9-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M113.2-20.8l17.5,0l-0.3-7.2l-17.3,0L113.2-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,94.05292713129087)">
				  <g>
					  <g>
						  <path class="st0" d="M124.5-20.8H142l-0.6-7.2h-17.3L124.5-20.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(34.724368154718064,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-295.3-22.9l17.8,0l9.7-7.4h-17.5L-295.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(46.727369177416435,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-283.7-22.9h17.8l9.4-7.4H-274L-283.7-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-272-22.9l17.8,0l9.1-7.4h-17.6L-272-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-260.3-22.9h17.8l8.8-7.4h-17.6L-260.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-248.6-22.9h17.8l8.6-7.4l-17.5,0L-248.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-236.9-22.9l17.8,0l8.3-7.4h-17.5L-236.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-225.3-22.9h17.7l8-7.4h-17.5L-225.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-213.6-22.9l17.7,0l7.7-7.4h-17.5L-213.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-201.9-22.9h17.7l7.4-7.4h-17.5L-201.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-190.2-22.9h17.8l7.1-7.4l-17.6,0L-190.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-178.6-22.9l17.7,0l6.8-7.4h-17.5L-178.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-166.9-22.9h17.7l6.6-7.4h-17.5L-166.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-155.2-22.9h17.7l6.3-7.4l-17.5,0L-155.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-143.5-22.9h17.7l6-7.4h-17.5L-143.5-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-131.9-22.9h17.7l5.7-7.4l-17.5,0L-131.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-120.2-22.9l17.8,0l5.4-7.4h-17.5L-120.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-108.5-22.9h17.7l5.1-7.4h-17.5L-108.5-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-96.8-22.9h17.7l4.8-7.4l-17.5,0L-96.8-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-85.1-22.9h17.8l4.6-7.4h-17.5L-85.1-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-73.5-22.9h17.8l4.3-7.4l-17.5,0L-73.5-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-61.8-22.9l17.8,0l4-7.4h-17.5L-61.8-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-50.1-22.9h17.8l3.7-7.4h-17.6L-50.1-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-38.5-22.9h17.8l3.4-7.4l-17.5,0L-38.5-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-26.8-22.9H-9l3.1-7.4h-17.5L-26.8-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-15.1-22.9H2.7l2.8-7.4H-12L-15.1-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M-3.4-22.9l17.8,0l2.5-7.4H-0.7L-3.4-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M8.3-22.9H26l2.3-7.4H10.7L8.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M19.9-22.9h17.8l2-7.4l-17.6,0L19.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M31.6-22.9h17.8l1.7-7.4H33.5L31.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M43.3-22.9H61l1.4-7.4H44.9L43.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M55-22.9l17.8,0l1.1-7.4H56.3L55-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M66.6-22.9h17.8l0.8-7.4H67.7L66.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M78.3-22.9h17.8l0.5-7.4l-17.6,0L78.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M90-22.9h17.8l0.3-7.4H90.5L90-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M101.7-22.9h17.8l0-7.4h-17.5L101.7-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M113.4-22.9l17.8,0l-0.3-7.4l-17.5,0L113.4-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M125-22.9h17.8l-0.6-7.4h-17.5L125-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,106.05592815398924)">
				  <g>
					  <g>
						  <path class="st0" d="M136.7-22.9h17.8l-0.9-7.4l-17.5,0L136.7-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(34.724368154718064,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-308.9-24.7h18.1l10-7.7l-17.8,0L-308.9-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(46.727369177416435,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-296.9-24.7h18.1l9.7-7.7h-17.8L-296.9-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-284.8-24.7l18.1,0l9.4-7.7h-17.8L-284.8-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-272.7-24.7h18.1l9.1-7.7l-17.8,0L-272.7-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-260.7-24.7l18.1,0l8.8-7.7h-17.8L-260.7-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-248.6-24.7h18.1l8.5-7.7l-17.8,0L-248.6-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-236.5-24.7h18l8.3-7.7H-228L-236.5-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-224.4-24.7l18,0l8-7.7h-17.8L-224.4-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-212.4-24.7h18l7.7-7.7l-17.8,0L-212.4-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-200.3-24.7l18.1,0l7.4-7.7h-17.8L-200.3-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-188.2-24.7h18l7.1-7.7l-17.8,0L-188.2-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-176.2-24.7h18l6.8-7.7h-17.8L-176.2-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-164.1-24.7l18,0l6.5-7.7h-17.8L-164.1-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-152-24.7h18l6.2-7.7l-17.8,0L-152-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-140-24.7l18,0l5.9-7.7h-17.8L-140-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-127.9-24.7h18.1l5.6-7.7l-17.8,0L-127.9-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-115.8-24.7h18l5.3-7.7h-17.8L-115.8-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-103.7-24.7h18l5-7.7h-17.8L-103.7-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-91.7-24.7h18.1l4.7-7.7l-17.8,0L-91.7-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-79.6-24.7l18.1,0l4.4-7.7H-75L-79.6-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-67.6-24.7h18.1l4.1-7.7l-17.8,0L-67.6-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-55.5-24.7h18.1l3.8-7.7h-17.8L-55.5-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-43.4-24.7h18.1l3.5-7.7h-17.8L-43.4-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-31.3-24.7h18.1l3.2-7.7l-17.8,0L-31.3-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-19.3-24.7l18.1,0l2.9-7.7h-17.8L-19.3-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M-7.2-24.7h18.1l2.6-7.7l-17.8,0L-7.2-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M4.9-24.7l18.1,0l2.3-7.7H7.4L4.9-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M16.9-24.7H35l2-7.7H19.2L16.9-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M29-24.7h18.1l1.7-7.7l-17.8,0L29-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M41.1-24.7l18,0l1.5-7.7H42.8L41.1-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M53.1-24.7h18.1l1.2-7.7l-17.8,0L53.1-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M65.2-24.7l18.1,0l0.9-7.7H66.3L65.2-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M77.3-24.7h18.1l0.6-7.7H78.1L77.3-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M89.3-24.7h18.1l0.3-7.7l-17.8,0L89.3-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M101.4-24.7l18.1,0l0-7.7h-17.8L101.4-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M113.5-24.7h18.1l-0.3-7.7l-17.8,0L113.5-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M125.6-24.7l18.1,0l-0.6-7.7h-17.8L125.6-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,118.04912280330305)">
				  <g>
					  <g>
						  <path class="st0" d="M137.6-24.7h18.1l-0.9-7.7h-17.8L137.6-24.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(46.727369177416435,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-310.5-26.1l18.4,0l10.1-8l-18.1,0L-310.5-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-298.1-26.1h18.4l9.8-8h-18.1L-298.1-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-285.6-26.1h18.4l9.4-8l-18.1,0L-285.6-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-273.1-26.1l18.4,0l9.1-8h-18.1L-273.1-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-260.6-26.1h18.4l8.8-8h-18.1L-260.6-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-248.2-26.1l18.3,0l8.5-8l-18.1,0L-248.2-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-235.7-26.1h18.3l8.2-8h-18.1L-235.7-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-223.2-26.1h18.3l7.9-8l-18.1,0L-223.2-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-210.7-26.1h18.4l7.6-8h-18.1L-210.7-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-198.3-26.1h18.3l7.3-8h-18.1L-198.3-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-185.8-26.1l18.3,0l7-8l-18.1,0L-185.8-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-173.3-26.1h18.3l6.7-8h-18.1L-173.3-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-160.8-26.1l18.3,0l6.4-8l-18.1,0L-160.8-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-148.3-26.1h18.3l6.1-8H-142L-148.3-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-135.9-26.1h18.4l5.8-8h-18.1L-135.9-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-123.4-26.1l18.3,0l5.5-8h-18.1L-123.4-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-110.9-26.1h18.3l5.2-8h-18.1L-110.9-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-98.4-26.1l18.4,0l4.9-8l-18.1,0L-98.4-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-86-26.1h18.4l4.6-8h-18.1L-86-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-73.5-26.1h18.4l4.3-8H-69L-73.5-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-61-26.1h18.4l3.9-8h-18.1L-61-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-48.6-26.1h18.4l3.6-8h-18.1L-48.6-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-36.1-26.1l18.4,0l3.3-8l-18.1,0L-36.1-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-23.6-26.1h18.4l3-8h-18.1L-23.6-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M-11.1-26.1l18.4,0l2.7-8l-18.1,0L-11.1-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M1.3-26.1h18.4l2.4-8H4L1.3-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M13.8-26.1h18.4l2.1-8H16.2L13.8-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M26.3-26.1l18.4,0l1.8-8l-18.1,0L26.3-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M38.8-26.1h18.3l1.5-8H40.5L38.8-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M51.3-26.1l18.4,0l1.2-8l-18.1,0L51.3-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M63.7-26.1h18.4l0.9-8H64.8L63.7-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M76.2-26.1h18.4l0.6-8H77L76.2-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M88.7-26.1H107l0.3-8l-18.1,0L88.7-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M101.2-26.1h18.4l0-8h-18.1L101.2-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M113.6-26.1l18.4,0l-0.3-8l-18.1,0L113.6-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M126.1-26.1h18.4l-0.6-8h-18.1L126.1-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M138.6-26.1l18.4,0l-0.9-8h-18.1L138.6-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,130.0521238260014)">
				  <g>
					  <g>
						  <path class="st0" d="M151-26.1h18.4l-1.3-8H150L151-26.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-311.8-27.2h18.7l10.1-8.2h-18.4L-311.8-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-298.9-27.2h18.7l9.8-8.2h-18.4L-298.9-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-286-27.2h18.7l9.5-8.2h-18.4L-286-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-273.1-27.2l18.7,0l9.1-8.2l-18.4,0L-273.1-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-260.2-27.2h18.7l8.8-8.2h-18.4L-260.2-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-247.3-27.2l18.7,0l8.5-8.2l-18.4,0L-247.3-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-234.4-27.2h18.7l8.2-8.2H-226L-234.4-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-221.5-27.2h18.7l7.9-8.2h-18.4L-221.5-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-208.6-27.2l18.7,0l7.6-8.2h-18.4L-208.6-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-195.7-27.2h18.7l7.2-8.2h-18.4L-195.7-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-182.8-27.2l18.7,0l6.9-8.2l-18.4,0L-182.8-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-169.9-27.2h18.7l6.6-8.2h-18.4L-169.9-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-157-27.2l18.7,0l6.3-8.2l-18.4,0L-157-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-144.1-27.2h18.7l6-8.2h-18.4L-144.1-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-131.2-27.2h18.7l5.7-8.2h-18.4L-131.2-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-118.3-27.2l18.7,0l5.3-8.2l-18.4,0L-118.3-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-105.4-27.2h18.7l5-8.2h-18.4L-105.4-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-92.6-27.2l18.7,0l4.7-8.2l-18.4,0L-92.6-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-79.7-27.2H-61l4.4-8.2H-75L-79.7-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-66.8-27.2h18.7l4.1-8.2h-18.4L-66.8-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-53.9-27.2h18.7l3.8-8.2h-18.4L-53.9-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-41-27.2h18.7l3.4-8.2h-18.4L-41-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-28.1-27.2l18.7,0l3.1-8.2l-18.4,0L-28.1-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-15.2-27.2H3.5l2.8-8.2h-18.4L-15.2-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M-2.3-27.2l18.7,0l2.5-8.2l-18.4,0L-2.3-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M10.6-27.2h18.7l2.2-8.2H13L10.6-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M23.5-27.2h18.7l1.9-8.2H25.6L23.5-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M36.4-27.2h18.6l1.6-8.2l-18.4,0L36.4-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M49.3-27.2H68l1.2-8.2H50.8L49.3-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M62.2-27.2l18.7,0l0.9-8.2l-18.4,0L62.2-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M75.1-27.2h18.7l0.6-8.2H75.9L75.1-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M88-27.2l18.7,0l0.3-8.2H88.5L88-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M100.9-27.2h18.7l0-8.2h-18.4L100.9-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M113.8-27.2h18.7l-0.3-8.2h-18.4L113.8-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M126.7-27.2h18.7l-0.7-8.2l-18.4,0L126.7-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M139.6-27.2h18.7l-1-8.2h-18.4L139.6-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M152.4-27.2l18.7,0l-1.3-8.2l-18.5,0L152.4-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,142.0551248486998)">
				  <g>
					  <g>
						  <path class="st0" d="M165.3-27.2H184l-1.6-8.2H164L165.3-27.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(58.72056382673024,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-325.9-27.9l19,0l10.4-8.5h-18.8L-325.9-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-312.6-27.9h19l10.1-8.5h-18.8L-312.6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-299.3-27.9l19,0l9.8-8.5l-18.8,0L-299.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-285.9-27.9h19l9.5-8.5h-18.8L-285.9-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-272.6-27.9h19l9.1-8.5l-18.7,0L-272.6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-259.3-27.9h19l8.8-8.5h-18.7L-259.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-246-27.9h19l8.5-8.5h-18.7L-246-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-232.6-27.9l19,0l8.1-8.5h-18.8L-232.6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-219.3-27.9h19l7.8-8.5h-18.7L-219.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-206-27.9l19,0l7.5-8.5l-18.7,0L-206-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-192.6-27.9h19l7.2-8.5h-18.7L-192.6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-179.3-27.9h19l6.8-8.5l-18.7,0L-179.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-166-27.9h19l6.5-8.5h-18.7L-166-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-152.7-27.9h19l6.2-8.5h-18.8L-152.7-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-139.3-27.9l19,0l5.9-8.5h-18.7L-139.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-126-27.9h19l5.5-8.5h-18.7L-126-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-112.7-27.9l19,0l5.2-8.5l-18.8,0L-112.7-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-99.3-27.9h19l4.9-8.5h-18.8L-99.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-86-27.9l19,0l4.5-8.5l-18.8,0L-86-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-72.7-27.9h19l4.2-8.5h-18.8L-72.7-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-59.4-27.9h19l3.9-8.5h-18.8L-59.4-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-46-27.9h19l3.6-8.5h-18.8L-46-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-32.7-27.9h19l3.2-8.5h-18.8L-32.7-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-19.4-27.9l19,0l2.9-8.5l-18.8,0L-19.4-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M-6-27.9h19l2.6-8.5H-3.2L-6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M7.3-27.9l19,0l2.3-8.5l-18.8,0L7.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M20.6-27.9h19l1.9-8.5H22.8L20.6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M34-27.9h19l1.6-8.5H35.8L34-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M47.3-27.9h19l1.3-8.5H48.8L47.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M60.6-27.9h19l1-8.5H61.8L60.6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M73.9-27.9l19,0l0.6-8.5l-18.8,0L73.9-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M87.3-27.9h19l0.3-8.5H87.8L87.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M100.6-27.9l19,0l0-8.5l-18.8,0L100.6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M113.9-27.9h19l-0.4-8.5h-18.8L113.9-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M127.3-27.9h19l-0.7-8.5h-18.8L127.3-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M140.6-27.9h19l-1-8.5h-18.8L140.6-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M153.9-27.9h19l-1.3-8.5h-18.8L153.9-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M167.2-27.9l19,0l-1.7-8.5l-18.7,0L167.2-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M180.5-27.9h19l-2-8.5h-18.8L180.5-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,154.0483194980136)">
				  <g>
					  <g>
						  <path class="st0" d="M193.9-27.9l19,0l-2.3-8.5l-18.8,0L193.9-27.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-326.9-28.2h19.4L-297-37l-19.1,0L-326.9-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-313.1-28.2h19.3l10.1-8.8h-19.1L-313.1-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-299.3-28.2h19.3l9.8-8.8l-19.1,0L-299.3-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-285.5-28.2h19.3l9.5-8.8h-19.1L-285.5-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-271.7-28.2l19.3,0l9.1-8.8l-19.1,0L-271.7-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-257.9-28.2h19.3l8.8-8.8h-19.1L-257.9-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-244.2-28.2l19.4,0l8.4-8.8h-19.1L-244.2-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-230.4-28.2h19.3l8.1-8.8H-222L-230.4-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-216.6-28.2l19.3,0l7.8-8.8h-19.1L-216.6-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-202.8-28.2h19.3l7.4-8.8l-19.1,0L-202.8-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-189.1-28.2h19.3l7.1-8.8h-19.1L-189.1-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-175.3-28.2h19.3l6.7-8.8l-19.1,0L-175.3-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-161.5-28.2h19.3l6.4-8.8h-19.1L-161.5-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-147.7-28.2l19.3,0l6.1-8.8l-19.1,0L-147.7-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-133.9-28.2h19.3l5.7-8.8H-128L-133.9-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-120.2-28.2l19.3,0l5.4-8.8h-19.1L-120.2-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-106.4-28.2h19.3l5-8.8h-19.1L-106.4-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-92.6-28.2l19.3,0l4.7-8.8h-19.1L-92.6-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-78.8-28.2h19.4l4.4-8.8l-19.1,0L-78.8-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-65.1-28.2h19.3l4-8.8h-19.1L-65.1-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-51.3-28.2h19.3l3.7-8.8l-19.1,0L-51.3-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-37.5-28.2h19.4l3.4-8.8h-19.1L-37.5-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-23.7-28.2l19.3,0l3-8.8h-19.1L-23.7-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M-9.9-28.2H9.4l2.7-8.8H-7L-9.9-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M3.8-28.2l19.4,0l2.3-8.8H6.4L3.8-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M17.6-28.2H37l2-8.8l-19.1,0L17.6-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M31.4-28.2l19.3,0l1.7-8.8H33.3L31.4-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M45.2-28.2h19.3l1.3-8.8l-19.1,0L45.2-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M59-28.2h19.3l1-8.8H60.2L59-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M72.7-28.2h19.4l0.6-8.8l-19.1,0L72.7-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M86.5-28.2h19.3l0.3-8.8H87.1L86.5-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M100.3-28.2l19.3,0l0-8.8h-19.1L100.3-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M114.1-28.2h19.3L133-37H114L114.1-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M127.9-28.2l19.3,0l-0.7-8.8h-19.1L127.9-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M141.6-28.2H161l-1-8.8l-19.1,0L141.6-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M155.4-28.2l19.4,0l-1.4-8.8h-19.1L155.4-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M169.2-28.2h19.3l-1.7-8.8l-19.1,0L169.2-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M183-28.2h19.4l-2.1-8.8h-19.1L183-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,166.05132052071195)">
				  <g>
					  <g>
						  <path class="st0" d="M196.7-28.2h19.3l-2.4-8.8h-19.1L196.7-28.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-327.4-28.1l19.7,0l10.5-9.1h-19.4L-327.4-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-313.1-28.1h19.7l10.1-9.1l-19.4,0L-313.1-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-298.9-28.1h19.7l9.8-9.1h-19.4L-298.9-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-284.6-28.1h19.7l9.4-9.1l-19.4,0L-284.6-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-270.4-28.1h19.7l9.1-9.1H-261L-270.4-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-256.1-28.1l19.7,0l8.7-9.1l-19.4,0L-256.1-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-241.9-28.1h19.7l8.4-9.1h-19.4L-241.9-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-227.6-28.1l19.7,0l8-9.1h-19.4L-227.6-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-213.4-28.1h19.7l7.7-9.1h-19.4L-213.4-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-199.2-28.1l19.7,0l7.3-9.1h-19.4L-199.2-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-184.9-28.1h19.7l7-9.1l-19.4,0L-184.9-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-170.7-28.1l19.7,0l6.6-9.1h-19.4L-170.7-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-156.4-28.1h19.7l6.3-9.1l-19.4,0L-156.4-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-142.2-28.1h19.7l5.9-9.1H-136L-142.2-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-127.9-28.1h19.7l5.6-9.1l-19.4,0L-127.9-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-113.7-28.1H-94l5.2-9.1h-19.4L-113.7-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-99.4-28.1h19.7l4.9-9.1h-19.4L-99.4-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-85.2-28.1h19.7l4.5-9.1h-19.4L-85.2-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-71-28.1l19.7,0l4.2-9.1h-19.4L-71-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-56.7-28.1H-37l3.8-9.1l-19.4,0L-56.7-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-42.5-28.1l19.7,0l3.5-9.1h-19.4L-42.5-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-28.2-28.1h19.7l3.1-9.1l-19.4,0L-28.2-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M-14-28.1l19.7,0l2.8-9.1h-19.4L-14-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M0.3-28.1H20l2.4-9.1L3-37.2L0.3-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M14.5-28.1l19.7,0l2.1-9.1H16.9L14.5-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M28.8-28.1h19.7l1.7-9.1H30.8L28.8-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M43-28.1h19.7l1.4-9.1H44.6L43-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M57.2-28.1h19.7l1-9.1H58.5L57.2-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M71.5-28.1h19.7l0.7-9.1l-19.5,0L71.5-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M85.7-28.1l19.7,0l0.3-9.1H86.3L85.7-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M100-28.1h19.7l0-9.1l-19.4,0L100-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M114.2-28.1l19.7,0l-0.4-9.1h-19.4L114.2-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M128.5-28.1h19.7l-0.7-9.1l-19.4,0L128.5-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M142.7-28.1l19.7,0l-1.1-9.1h-19.4L142.7-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M157-28.1h19.7l-1.4-9.1l-19.5,0L157-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M171.2-28.1l19.7,0l-1.8-9.1h-19.4L171.2-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,178.0543215434103)">
				  <g>
					  <g>
						  <path class="st0" d="M185.4-28.1h19.7l-2.1-9.1h-19.5L185.4-28.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(70.72356484942861,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-356.9-27.5h20.1l11.2-9.5h-19.8L-356.9-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(82.72656587212697,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-342.2-27.5l20,0l10.9-9.5l-19.8,0L-342.2-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-327.4-27.5h20.1l10.5-9.5h-19.8L-327.4-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-312.7-27.5l20,0l10.2-9.5l-19.8,0L-312.7-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-298-27.5h20l9.8-9.5h-19.8L-298-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-283.2-27.5l20,0l9.4-9.5l-19.8,0L-283.2-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-268.5-27.5h20.1l9.1-9.5h-19.8L-268.5-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-253.8-27.5h20l8.7-9.5h-19.8L-253.8-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-239.1-27.5h20l8.3-9.5h-19.8L-239.1-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-224.3-27.5h20l8-9.5h-19.8L-224.3-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-209.6-27.5h20l7.6-9.5l-19.8,0L-209.6-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-194.9-27.5h20l7.2-9.5h-19.8L-194.9-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-180.2-27.5l20.1,0l6.9-9.5l-19.8,0L-180.2-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-165.4-27.5h20l6.5-9.5h-19.8L-165.4-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-150.7-27.5l20,0l6.2-9.5l-19.8,0L-150.7-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-136-27.5h20l5.8-9.5h-19.8L-136-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-121.3-27.5l20,0l5.4-9.5l-19.8,0L-121.3-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-106.5-27.5h20.1l5.1-9.5h-19.8L-106.5-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-91.8-27.5l20.1,0L-67-37h-19.8L-91.8-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-77.1-27.5h20l4.3-9.5h-19.8L-77.1-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-62.3-27.5l20,0l4-9.5h-19.8L-62.3-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-47.6-27.5h20.1L-24-37h-19.8L-47.6-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-32.9-27.5h20.1l3.2-9.5h-19.8L-32.9-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-18.2-27.5h20L4.8-37L-15-37L-18.2-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M-3.4-27.5h20.1l2.5-9.5H-0.6L-3.4-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M11.3-27.5h20l2.2-9.5l-19.8,0L11.3-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M26-27.5h20l1.8-9.5H28.1L26-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M40.8-27.5l20,0l1.4-9.5l-19.8,0L40.8-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M55.5-27.5h20l1.1-9.5H56.8L55.5-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M70.2-27.5l20.1,0L91-37l-19.8,0L70.2-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M84.9-27.5h20l0.3-9.5H85.5L84.9-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M99.7-27.5l20.1,0l0-9.5H99.9L99.7-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M114.4-27.5h20L134-37h-19.8L114.4-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M129.1-27.5l20,0l-0.8-9.5h-19.8L129.1-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M143.8-27.5h20l-1.1-9.5L143-37L143.8-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M158.6-27.5l20.1,0l-1.5-9.5h-19.8L158.6-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M173.3-27.5h20l-1.9-9.5l-19.8,0L173.3-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M188-27.5l20.1,0l-2.2-9.5h-19.8L188-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,190.04751619272415)">
				  <g>
					  <g>
						  <path class="st0" d="M202.8-27.5h20l-2.6-9.5l-19.8,0L202.8-27.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-342.3-26.5h20.4l10.9-9.8l-20.1,0L-342.3-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-327.1-26.5l20.4,0l10.5-9.8h-20.1L-327.1-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-311.9-26.5h20.4l10.2-9.8l-20.1,0L-311.9-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-296.6-26.5l20.4,0l9.8-9.8h-20.1L-296.6-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-281.4-26.5h20.4l9.4-9.8l-20.2,0L-281.4-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-266.2-26.5h20.4l9-9.8h-20.1L-266.2-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-250.9-26.5h20.4l8.6-9.8l-20.1,0L-250.9-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-235.7-26.5h20.4l8.3-9.8h-20.1L-235.7-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-220.5-26.5h20.4l7.9-9.8l-20.1,0L-220.5-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-205.2-26.5h20.4l7.5-9.8h-20.1L-205.2-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-190-26.5h20.4l7.1-9.8h-20.1L-190-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-174.8-26.5h20.4l6.8-9.8h-20.1L-174.8-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-159.6-26.5l20.4,0l6.4-9.8h-20.1L-159.6-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-144.3-26.5h20.4l6-9.8H-138L-144.3-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-129.1-26.5l20.4,0l5.6-9.8h-20.1L-129.1-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-113.9-26.5h20.4l5.3-9.8l-20.1,0L-113.9-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-98.7-26.5l20.4,0l4.9-9.8h-20.2L-98.7-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-83.4-26.5H-63l4.5-9.8l-20.1,0L-83.4-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-68.2-26.5l20.4,0l4.1-9.8h-20.1L-68.2-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-53-26.5h20.4l3.7-9.8l-20.2,0L-53-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-37.7-26.5l20.4,0l3.4-9.8h-20.1L-37.7-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-22.5-26.5h20.4l3-9.8l-20.1,0L-22.5-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M-7.3-26.5l20.4,0l2.6-9.8H-4.4L-7.3-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M8-26.5h20.4l2.2-9.8l-20.1,0L8-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M23.2-26.5l20.4,0l1.9-9.8H25.3L23.2-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M38.4-26.5h20.4l1.5-9.8l-20.1,0L38.4-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M53.6-26.5l20.4,0l1.1-9.8H55L53.6-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M68.9-26.5h20.5l0.7-9.8H69.9L68.9-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M84.1-26.5h20.4l0.3-9.8H84.7L84.1-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M99.3-26.5h20.4l0-9.8H99.6L99.3-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M114.6-26.5H135l-0.4-9.8h-20.1L114.6-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M129.8-26.5h20.4l-0.8-9.8h-20.1L129.8-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M145-26.5h20.4l-1.2-9.8l-20.1,0L145-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M160.2-26.5h20.5l-1.5-9.8H159L160.2-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M175.5-26.5h20.4l-1.9-9.8l-20.1,0L175.5-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M190.7-26.5l20.5,0l-2.3-9.8h-20.2L190.7-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M205.9-26.5h20.4l-2.7-9.8l-20.1,0L205.9-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,202.05051721542247)">
				  <g>
					  <g>
						  <path class="st0" d="M221.2-26.5l20.4,0l-3.1-9.8h-20.1L221.2-26.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-357.7-25h20.8l11.3-10.2h-20.5L-357.7-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-342-25l20.8,0l10.9-10.2h-20.5L-342-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-326.2-25h20.8l10.6-10.2h-20.5L-326.2-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-310.5-25l20.8,0l10.2-10.2H-300L-310.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-294.7-25h20.8l9.8-10.2h-20.5L-294.7-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-279-25l20.8,0l9.4-10.2h-20.5L-279-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-263.2-25h20.8l9-10.2H-254L-263.2-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-247.5-25l20.8,0l8.6-10.2h-20.5L-247.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-231.7-25h20.8l8.2-10.2l-20.5,0L-231.7-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-216-25l20.8,0l7.8-10.2h-20.5L-216-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-200.3-25h20.8l7.4-10.2l-20.5,0L-200.3-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-184.5-25h20.8l7-10.2h-20.5L-184.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-168.7-25h20.8l6.6-10.2l-20.5,0L-168.7-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-153-25h20.8l6.2-10.2h-20.5L-153-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-137.3-25h20.8l5.8-10.2l-20.5,0L-137.3-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-121.5-25h20.8l5.5-10.2h-20.5L-121.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-105.8-25h20.8l5.1-10.2l-20.5,0L-105.8-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-90-25h20.8l4.7-10.2H-85L-90-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-74.3-25h20.8l4.3-10.2l-20.5,0L-74.3-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-58.5-25h20.8l3.9-10.2h-20.5L-58.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-42.8-25h20.8l3.5-10.2l-20.5,0L-42.8-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-27-25h20.8l3.1-10.2h-20.5L-27-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M-11.3-25H9.6l2.7-10.2l-20.5,0L-11.3-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M4.5-25h20.8l2.3-10.2H7.1L4.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M20.3-25H41L43-35.2l-20.5,0L20.3-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M36-25h20.8l1.5-10.2H37.8L36-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M51.7-25l20.8,0l1.1-10.2l-20.5,0L51.7-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M67.5-25h20.8l0.7-10.2H68.5L67.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M83.2-25l20.8,0l0.4-10.2H83.9L83.2-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M99-25h20.8l0-10.2H99.3L99-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M114.7-25l20.8,0l-0.4-10.2h-20.5L114.7-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M130.5-25h20.8l-0.8-10.2H130L130.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M146.2-25l20.8,0l-1.2-10.2h-20.5L146.2-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M162-25h20.8l-1.6-10.2h-20.5L162-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M177.7-25l20.8,0l-2-10.2H176L177.7-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M193.5-25h20.8l-2.4-10.2l-20.5,0L193.5-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M209.2-25l20.8,0l-2.8-10.2h-20.5L209.2-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,214.05351823812086)">
				  <g>
					  <g>
						  <path class="st0" d="M225-25h20.8l-3.2-10.2l-20.5,0L225-25z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(94.72956689482534,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-373.8-22.9h21.2l11.8-10.6h-20.9L-373.8-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-357.5-22.9h21.2l11.4-10.6h-20.9L-357.5-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-341.2-22.9h21.2l11-10.6h-20.9L-341.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-324.9-22.9h21.2l10.6-10.6H-314L-324.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-308.6-22.9h21.2l10.2-10.6h-20.9L-308.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-292.3-22.9h21.2l9.7-10.6h-20.9L-292.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-276-22.9h21.2l9.3-10.6h-20.9L-276-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-259.8-22.9h21.2l8.9-10.6h-20.9L-259.8-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-243.5-22.9h21.2l8.5-10.6l-20.9,0L-243.5-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-227.2-22.9h21.2l8.1-10.6h-20.9L-227.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-210.9-22.9h21.2l7.7-10.6l-20.9,0L-210.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-194.6-22.9h21.2l7.3-10.6H-187L-194.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-178.3-22.9h21.2l6.9-10.6l-20.9,0L-178.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-162-22.9l21.2,0l6.5-10.6h-20.9L-162-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-145.7-22.9h21.2l6.1-10.6l-20.9,0L-145.7-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-129.4-22.9l21.2,0l5.7-10.6h-20.9L-129.4-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-113.2-22.9h21.2l5.3-10.6l-20.9,0L-113.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-96.9-22.9l21.2,0l4.9-10.6h-20.9L-96.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-80.6-22.9h21.2l4.4-10.6l-20.9,0L-80.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-64.3-22.9l21.2,0l4-10.6h-20.9L-64.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-48-22.9h21.2l3.6-10.6l-20.9,0L-48-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-31.7-22.9l21.2,0l3.2-10.6h-20.9L-31.7-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M-15.4-22.9H5.8l2.8-10.6l-20.9,0L-15.4-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M0.9-22.9l21.2,0l2.4-10.6H3.6L0.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M17.2-22.9h21.2l2-10.6l-20.9,0L17.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M33.5-22.9l21.2,0l1.6-10.6H35.4L33.5-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M49.8-22.9H71l1.2-10.6l-20.9,0L49.8-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M66-22.9l21.3,0l0.8-10.6H67.1L66-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M82.3-22.9h21.2l0.4-10.6l-20.9,0L82.3-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M98.6-22.9l21.2,0l0-10.6H98.9L98.6-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M114.9-22.9h21.2l-0.4-10.6l-20.9,0L114.9-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M131.2-22.9l21.2,0l-0.9-10.6h-20.9L131.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M147.5-22.9h21.2l-1.3-10.6l-20.9,0L147.5-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M163.8-22.9l21.3,0l-1.7-10.6h-20.9L163.8-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M180.1-22.9h21.2l-2.1-10.6l-20.9,0L180.1-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M196.4-22.9l21.3,0l-2.5-10.6h-20.9L196.4-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M212.7-22.9h21.2L231-33.5l-20.9,0L212.7-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M229-22.9l21.2,0l-3.3-10.6H226L229-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,226.05651926081924)">
				  <g>
					  <g>
						  <path class="st0" d="M245.2-22.9h21.2l-3.7-10.6l-20.9,0L245.2-22.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(106.72276154413915,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-373.6-20.3h21.6l11.8-11l-21.3,0L-373.6-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-356.7-20.3h21.6l11.4-11H-345L-356.7-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-339.9-20.3l21.6,0l11-11l-21.3,0L-339.9-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-323-20.3h21.7l10.6-11h-21.3L-323-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-306.2-20.3l21.6,0l10.1-11l-21.3,0L-306.2-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-289.3-20.3h21.6l9.7-11h-21.3L-289.3-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-272.5-20.3l21.6,0l9.3-11h-21.3L-272.5-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-255.6-20.3h21.6l8.9-11h-21.3L-255.6-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-238.8-20.3l21.6,0l8.4-11H-230L-238.8-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-221.9-20.3h21.6l8-11h-21.3L-221.9-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-205.1-20.3l21.6,0l7.6-11h-21.3L-205.1-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-188.2-20.3h21.6l7.2-11h-21.3L-188.2-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-171.4-20.3l21.6,0l6.7-11h-21.3L-171.4-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-154.5-20.3h21.6l6.3-11h-21.3L-154.5-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-137.7-20.3l21.6,0l5.9-11h-21.3L-137.7-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-120.8-20.3h21.7l5.5-11H-115L-120.8-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-104-20.3l21.6,0l5-11h-21.3L-104-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-87.1-20.3h21.6l4.6-11h-21.3L-87.1-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-70.3-20.3l21.7,0l4.2-11h-21.3L-70.3-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-53.4-20.3h21.6l3.8-11h-21.3L-53.4-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-36.6-20.3l21.6,0l3.4-11h-21.3L-36.6-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-19.7-20.3H1.9l2.9-11l-21.3,0L-19.7-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M-2.9-20.3l21.6,0l2.5-11H0L-2.9-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M14-20.3h21.6l2.1-11l-21.3,0L14-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M30.9-20.3h21.6l1.7-11H32.8L30.9-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M47.7-20.3h21.6l1.2-11l-21.3,0L47.7-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M64.5-20.3h21.7l0.8-11H65.7L64.5-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M81.4-20.3H103l0.4-11l-21.3,0L81.4-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M98.3-20.3h21.6l0-11H98.6L98.3-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M115.1-20.3l21.6,0l-0.5-11l-21.3,0L115.1-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M132-20.3h21.6l-0.9-11h-21.3L132-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M148.8-20.3l21.6,0l-1.3-11l-21.3,0L148.8-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M165.7-20.3h21.7l-1.7-11h-21.4L165.7-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M182.5-20.3l21.6,0l-2.2-11l-21.3,0L182.5-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M199.4-20.3H221l-2.6-11h-21.4L199.4-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M216.2-20.3l21.6,0l-3-11l-21.3,0L216.2-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M233.1-20.3h21.6l-3.4-11H230L233.1-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M249.9-20.3l21.6,0l-3.9-11l-21.3,0L249.9-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,238.04971391013302)">
				  <g>
					  <g>
						  <path class="st0" d="M266.8-20.3h21.7l-4.3-11h-21.4L266.8-20.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(118.7257625668375,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-372.9-17h22.1l11.9-11.5h-21.7L-372.9-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(130.72876358953587,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-355.5-17l22.1,0l11.4-11.5l-21.7,0L-355.5-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-338.1-17h22.1l11-11.5h-21.8L-338.1-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-320.6-17l22.1,0l10.5-11.5l-21.7,0L-320.6-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-303.2-17h22.1l10.1-11.5h-21.7L-303.2-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-285.8-17l22.1,0l9.7-11.5l-21.7,0L-285.8-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-268.3-17h22.1l9.2-11.5h-21.7L-268.3-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-250.9-17h22.1l8.8-11.5l-21.7,0L-250.9-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-233.4-17h22.1l8.3-11.5h-21.8L-233.4-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-216-17h22.1l7.9-11.5l-21.7,0L-216-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-198.6-17l22.1,0l7.5-11.5h-21.7L-198.6-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-181.1-17h22.1l7-11.5l-21.8,0L-181.1-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-163.7-17l22.1,0l6.6-11.5h-21.8L-163.7-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-146.3-17h22.1l6.1-11.5l-21.8,0L-146.3-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-128.8-17l22.1,0l5.7-11.5h-21.8L-128.8-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-111.4-17h22.1l5.3-11.5h-21.8L-111.4-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-93.9-17l22.1,0l4.8-11.5h-21.8L-93.9-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-76.5-17h22.1l4.4-11.5h-21.8L-76.5-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-59.1-17l22.1,0l3.9-11.5h-21.8L-59.1-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-41.6-17h22.1l3.5-11.5h-21.8L-41.6-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-24.2-17l22.1,0l3-11.5l-21.8,0L-24.2-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M-6.8-17h22.1l2.6-11.5H-3.8L-6.8-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M10.7-17h22.1l2.2-11.5l-21.7,0L10.7-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M28.1-17h22.1l1.7-11.5H30.2L28.1-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M45.6-17h22.1l1.3-11.5l-21.8,0L45.6-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M63-17l22.1,0l0.8-11.5H64.2L63-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M80.4-17h22.1l0.4-11.5l-21.8,0L80.4-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M97.9-17l22.1,0l0-11.5H98.2L97.9-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M115.3-17h22.1l-0.5-11.5l-21.8,0L115.3-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M132.8-17l22.1,0l-0.9-11.5h-21.8L132.8-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M150.2-17h22.1l-1.4-11.5l-21.8,0L150.2-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M167.6-17l22.1,0l-1.8-11.5h-21.8L167.6-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M185.1-17h22.1l-2.2-11.5l-21.7,0L185.1-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M202.5-17l22.1,0l-2.7-11.5h-21.8L202.5-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M219.9-17H242l-3.1-11.5l-21.8,0L219.9-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M237.4-17l22,0l-3.6-11.5h-21.7L237.4-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M254.8-17h22.1l-4-11.5l-21.7,0L254.8-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M272.2-17h22.1l-4.5-11.5h-21.8L272.2-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,250.0527149328314)">
				  <g>
					  <g>
						  <path class="st0" d="M289.7-17h22.1l-4.9-11.5h-21.7L289.7-17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-353.7-13.2h22.6l11.4-11.9l-22.2,0L-353.7-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-335.7-13.2l22.5,0l11-11.9h-22.2L-335.7-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-317.6-13.2h22.5l10.5-11.9h-22.2L-317.6-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-299.6-13.2l22.5,0l10.1-11.9h-22.2L-299.6-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-281.5-13.2h22.5l9.6-11.9h-22.2L-281.5-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-263.5-13.2l22.5,0l9.1-11.9l-22.2,0L-263.5-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-245.4-13.2h22.5l8.7-11.9h-22.2L-245.4-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-227.4-13.2h22.5l8.2-11.9l-22.2,0L-227.4-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-209.3-13.2h22.5l7.8-11.9h-22.2L-209.3-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-191.3-13.2h22.5l7.3-11.9l-22.2,0L-191.3-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-173.2-13.2l22.5,0l6.8-11.9h-22.2L-173.2-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-155.2-13.2h22.5l6.4-11.9l-22.2,0L-155.2-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-137.1-13.2l22.6,0l5.9-11.9h-22.2L-137.1-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-119.1-13.2h22.5l5.5-11.9l-22.2,0L-119.1-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-101-13.2l22.5,0l5-11.9h-22.2L-101-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-83-13.2h22.6l4.5-11.9l-22.2,0L-83-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-65-13.2l22.5,0l4.1-11.9h-22.2L-65-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-46.9-13.2h22.5l3.6-11.9h-22.2L-46.9-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-28.9-13.2h22.6l3.2-11.9l-22.2,0L-28.9-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M-10.8-13.2l22.5,0l2.7-11.9H-7.8L-10.8-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M7.3-13.2h22.5L32-25.1l-22.2,0L7.3-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M25.3-13.2l22.5,0l1.8-11.9H27.4L25.3-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M43.3-13.2h22.5l1.3-11.9l-22.2,0L43.3-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M61.4-13.2l22.6,0l0.9-11.9H62.6L61.4-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M79.4-13.2H102l0.4-11.9l-22.2,0L79.4-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M97.5-13.2l22.5,0l0-11.9H97.8L97.5-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M115.5-13.2h22.5l-0.5-11.9l-22.2,0L115.5-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M133.6-13.2l22.5,0l-1-11.9H133L133.6-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M151.6-13.2h22.5l-1.4-11.9l-22.2,0L151.6-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M169.7-13.2h22.6l-1.9-11.9h-22.2L169.7-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M187.7-13.2l22.5,0l-2.3-11.9h-22.2L187.7-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M205.7-13.2h22.6l-2.8-11.9h-22.2L205.7-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M223.8-13.2l22.5,0l-3.3-11.9h-22.2L223.8-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M241.8-13.2h22.5l-3.7-11.9l-22.2,0L241.8-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M259.9-13.2l22.5,0l-4.2-11.9h-22.2L259.9-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M277.9-13.2h22.6l-4.6-11.9l-22.2,0L277.9-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M296-13.2l22.5,0l-5.1-11.9h-22.2L296-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,262.05571595552976)">
				  <g>
					  <g>
						  <path class="st0" d="M314-13.2h22.5L331-25.1l-22.2,0L314-13.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(142.73176461223426,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-370-8.7h23l11.9-12.4l-22.7,0L-370-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-351.3-8.7l23,0l11.4-12.4h-22.6L-351.3-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-332.6-8.7h23l11-12.4l-22.6,0L-332.6-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-313.9-8.7h23l10.5-12.4h-22.6L-313.9-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-295.3-8.7l23,0l10-12.4l-22.6,0L-295.3-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-276.6-8.7h23l9.5-12.4h-22.6L-276.6-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-257.9-8.7l23,0l9-12.4h-22.7L-257.9-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-239.2-8.7h23l8.6-12.4l-22.6,0L-239.2-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-220.5-8.7l23,0l8.1-12.4h-22.6L-220.5-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-201.9-8.7h23l7.6-12.4l-22.7,0L-201.9-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-183.2-8.7h23l7.1-12.4h-22.7L-183.2-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-164.5-8.7l23,0l6.7-12.4l-22.7,0L-164.5-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-145.8-8.7h23l6.2-12.4h-22.7L-145.8-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-127.1-8.7l23,0l5.7-12.4l-22.7,0L-127.1-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-108.4-8.7h23l5.2-12.4h-22.7L-108.4-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-89.8-8.7l23,0l4.7-12.4h-22.7L-89.8-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-71.1-8.7h23l4.3-12.4h-22.7L-71.1-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-52.4-8.7l23,0l3.8-12.4h-22.7L-52.4-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-33.7-8.7h23l3.3-12.4l-22.7,0L-33.7-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M-15-8.7H8l2.8-12.4h-22.7L-15-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M3.7-8.7l23,0L29-21.1l-22.6,0L3.7-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M22.3-8.7h23l1.9-12.4H24.6L22.3-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M41-8.7l23,0l1.4-12.4l-22.7,0L41-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M59.7-8.7h23l0.9-12.4H61L59.7-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M78.4-8.7l23,0l0.4-12.4l-22.7,0L78.4-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M97.1-8.7h23l0-12.4H97.4L97.1-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M115.7-8.7h23l-0.5-12.4h-22.7L115.7-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M134.4-8.7l23,0l-1-12.4l-22.7,0L134.4-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M153.1-8.7h23l-1.5-12.4H152L153.1-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M171.8-8.7l23,0l-2-12.4l-22.7,0L171.8-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M190.5-8.7h23L211-21.1h-22.6L190.5-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M209.1-8.7l23,0l-2.9-12.4l-22.7,0L209.1-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M227.8-8.7h23l-3.4-12.4h-22.7L227.8-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M246.5-8.7l23,0l-3.9-12.4l-22.6,0L246.5-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M265.2-8.7h23l-4.3-12.4h-22.6L265.2-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M283.9-8.7h23l-4.8-12.4h-22.7L283.9-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M302.5-8.7l23,0l-5.3-12.4l-22.6,0L302.5-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,274.0587169782282)">
				  <g>
					  <g>
						  <path class="st0" d="M321.2-8.7h23l-5.8-12.4h-22.7L321.2-8.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-367.6-3.5h23.5l11.9-13h-23.1L-367.6-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-348.3-3.5l23.5,0l11.4-13l-23.1,0L-348.3-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-328.9-3.5h23.5l10.9-13h-23.1L-328.9-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-309.6-3.5h23.5l10.4-13l-23.1,0L-309.6-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-290.2-3.5l23.5,0l9.9-13h-23.1L-290.2-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-270.9-3.5h23.5l9.4-13l-23.1,0L-270.9-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-251.6-3.5l23.5,0l8.9-13h-23.1L-251.6-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-232.2-3.5h23.5l8.4-13h-23.1L-232.2-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-212.9-3.5h23.5l7.9-13h-23.1L-212.9-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-193.5-3.5l23.5,0l7.4-13h-23.1L-193.5-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-174.2-3.5h23.5l7-13l-23.1,0L-174.2-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-154.9-3.5l23.5,0l6.5-13H-148L-154.9-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-135.5-3.5h23.5l6-13l-23.1,0L-135.5-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-116.2-3.5l23.5,0l5.5-13h-23.1L-116.2-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-96.8-3.5h23.5l5-13l-23.2,0L-96.8-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-77.5-3.5H-54l4.5-13h-23.1L-77.5-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-58.1-3.5l23.5,0l4-13h-23.1L-58.1-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-38.8-3.5h23.5l3.5-13l-23.2,0L-38.8-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-19.4-3.5l23.5,0l3-13h-23.1L-19.4-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M-0.1-3.5h23.5l2.5-13l-23.1,0L-0.1-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M19.2-3.5l23.5,0l2-13H21.6L19.2-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M38.6-3.5h23.5l1.5-13l-23.1,0L38.6-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M57.9-3.5h23.5l1-13H59.2L57.9-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M77.3-3.5l23.5,0l0.5-13H78.1L77.3-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M96.6-3.5h23.5l0-13l-23.1,0L96.6-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M116-3.5l23.5,0l-0.5-13h-23.1L116-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M135.3-3.5h23.5l-1-13l-23.1,0L135.3-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M154.6-3.5h23.5l-1.5-13h-23.1L154.6-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M174-3.5l23.5,0l-2-13l-23.2,0L174-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M193.3-3.5h23.5l-2.5-13h-23.1L193.3-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M212.7-3.5l23.5,0l-3-13H210L212.7-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M232-3.5h23.5l-3.5-13l-23.1,0L232-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M251.4-3.5l23.5,0l-4-13h-23.1L251.4-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M270.7-3.5h23.5l-4.5-13l-23.1,0L270.7-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M290-3.5h23.5l-5-13h-23.2L290-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M309.4-3.5l23.5,0l-5.5-13l-23.1,0L309.4-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M328.7-3.5h23.5l-6-13h-23.1L328.7-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,286.0519116275419)">
				  <g>
					  <g>
						  <path class="st0" d="M348.1-3.5l23.5,0l-6.5-13h-23.1L348.1-3.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-384.7,2.6h24l12.5-13.6h-23.6L-384.7,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-364.7,2.6l24,0l12-13.6l-23.6,0L-364.7,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-344.6,2.6l24,0l11.4-13.6h-23.6L-344.6,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-324.6,2.6h24l10.9-13.6h-23.6L-324.6,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-304.5,2.6l24,0l10.4-13.6l-23.6,0L-304.5,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-284.5,2.6h24l9.9-13.6h-23.6L-284.5,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-264.5,2.6l24,0l9.3-13.6l-23.6,0L-264.5,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-244.4,2.6l24,0l8.8-13.6h-23.6L-244.4,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-224.4,2.6h24l8.3-13.6h-23.6L-224.4,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-204.4,2.6l24,0l7.8-13.6l-23.6,0L-204.4,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-184.3,2.6h24l7.3-13.6h-23.6L-184.3,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-164.3,2.6l24,0l6.7-13.6l-23.7,0L-164.3,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-144.3,2.6l24,0L-114-11h-23.6L-144.3,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-124.2,2.6h24l5.7-13.6l-23.6,0L-124.2,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-104.2,2.6l24,0L-75-11h-23.7L-104.2,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-84.2,2.6h24l4.6-13.6h-23.6L-84.2,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-64.1,2.6l24,0L-36-11l-23.6,0L-64.1,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-44.1,2.6h24l3.6-13.6h-23.7L-44.1,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-24.1,2.6H0L3.1-11l-23.6,0L-24.1,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M-4,2.6l24,0L22.6-11H-1.1L-4,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M16,2.6h24l2-13.6H18.5L16,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M36,2.6l24,0L61.6-11L38-11L36,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M56.1,2.6h24.1l1-13.6H57.5L56.1,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M76.1,2.6h24l0.5-13.6L77-11L76.1,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M96.2,2.6l24,0l0-13.6H96.5L96.2,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M116.2,2.6h24L139.7-11L116-11L116.2,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M136.2,2.6l24,0L159.2-11h-23.6L136.2,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M156.3,2.6h24L178.7-11H155L156.3,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M176.3,2.6h24.1L198.2-11l-23.7,0L176.3,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M196.3,2.6l24,0L217.7-11h-23.6L196.3,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M216.4,2.6h24.1L237.2-11l-23.7,0L216.4,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M236.4,2.6l24,0L256.7-11h-23.6L236.4,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M256.4,2.6h24L276.2-11h-23.6L256.4,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M276.5,2.6h24L295.7-11l-23.6,0L276.5,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M296.5,2.6l24.1,0L315.3-11h-23.7L296.5,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M316.5,2.6h24L334.8-11l-23.6,0L316.5,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M336.6,2.6l24,0L354.3-11h-23.6L336.6,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M356.6,2.6h24L373.8-11l-23.6,0L356.6,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M376.7,2.6h24L393.3-11h-23.6L376.7,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M396.7,2.6l24,0L412.8-11h-23.6L396.7,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M416.7,2.6h24.1L432.4-11l-23.7,0L416.7,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,298.0549126502403)">
				  <g>
					  <g>
						  <path class="st0" d="M436.8,2.6l24,0L451.9-11h-23.6L436.8,2.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-402.5,9.4h24.6l13-14.2l-24.1,0L-402.5,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-381.8,9.4h24.6l12.5-14.2h-24.1L-381.8,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-361,9.4l24.6,0l11.9-14.2l-24.1,0L-361,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-340.2,9.4h24.6l11.4-14.2h-24.1L-340.2,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-319.5,9.4l24.6,0l10.9-14.2l-24.1,0L-319.5,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-298.7,9.4h24.6l10.3-14.2l-24.2,0L-298.7,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-278,9.4h24.6l9.8-14.2h-24.1L-278,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-257.2,9.4l24.6,0l9.2-14.2l-24.1,0L-257.2,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-236.5,9.4h24.6l8.7-14.2h-24.2L-236.5,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-215.7,9.4l24.6,0l8.1-14.2l-24.2,0L-215.7,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-194.9,9.4l24.6,0l7.6-14.2l-24.2,0L-194.9,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-174.2,9.4h24.6l7-14.2h-24.2L-174.2,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-153.4,9.4l24.6,0l6.5-14.2l-24.2,0L-153.4,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-132.7,9.4h24.6l5.9-14.2h-24.2L-132.7,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-111.9,9.4h24.6l5.4-14.2l-24.2,0L-111.9,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-91.2,9.4l24.6,0l4.9-14.2l-24.2,0L-91.2,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-70.4,9.4h24.6l4.3-14.2h-24.2L-70.4,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-49.6,9.4l24.6,0l3.8-14.2l-24.2,0L-49.6,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-28.9,9.4h24.6l3.2-14.2h-24.2L-28.9,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M-8.1,9.4h24.5l2.7-14.2L-5-4.8L-8.1,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M12.7,9.4l24.6,0l2.1-14.2l-24.2,0L12.7,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M33.4,9.4H58l1.6-14.2H35.4L33.4,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M54.2,9.4l24.6,0l1-14.2l-24.2,0L54.2,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M74.9,9.4l24.6,0L100-4.8H75.8L74.9,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M95.7,9.4h24.6l0-14.2l-24.2,0L95.7,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M116.4,9.4l24.6,0l-0.6-14.2l-24.2,0L116.4,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M137.2,9.4h24.6l-1.1-14.2h-24.2L137.2,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M158,9.4h24.6l-1.7-14.2l-24.2,0L158,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M178.7,9.4l24.6,0l-2.2-14.2h-24.2L178.7,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M199.5,9.4H224l-2.8-14.2h-24.1L199.5,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M220.2,9.4l24.6,0l-3.3-14.2l-24.2,0L220.2,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M241,9.4h24.6l-3.9-14.2h-24.2L241,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M261.8,9.4h24.5l-4.4-14.2l-24.1,0L261.8,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M282.5,9.4l24.5,0l-5-14.2H278L282.5,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M303.3,9.4h24.6l-5.5-14.2h-24.2L303.3,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M324,9.4l24.5,0l-6-14.2l-24.1,0L324,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M344.8,9.4l24.6,0l-6.6-14.2h-24.2L344.8,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M365.6,9.4h24.5L383-4.8l-24.1,0L365.6,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M386.3,9.4l24.5,0l-7.7-14.2H379L386.3,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M407.1,9.4h24.5l-8.2-14.2h-24.1L407.1,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M427.8,9.4h24.6l-8.8-14.2l-24.2,0L427.8,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M448.6,9.4l24.5,0l-9.3-14.2h-24.1L448.6,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M469.3,9.4h24.6L484-4.8l-24.2,0L469.3,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M490.1,9.4l24.5,0L504.2-4.8h-24.1L490.1,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(682.729521406277,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M510.8,9.4h24.6l-11-14.2h-24.2L510.8,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(694.7227160555908,310.0579136729387)">
				  <g>
					  <g>
						  <path class="st0" d="M531.6,9.4h24.6L544.7-4.8l-24.2,0L531.6,9.4z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-421.2,17h25.1l13.6-14.8h-24.7L-421.2,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-399.6,17h25.1l13.1-14.8h-24.7L-399.6,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-378.1,17l25.1,0l12.5-14.8l-24.7,0L-378.1,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-356.6,17h25.1l11.9-14.8h-24.7L-356.6,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-335.1,17h25.1l11.4-14.8l-24.7,0L-335.1,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-313.6,17l25.1,0l10.8-14.8h-24.7L-313.6,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-292.1,17h25.1l10.2-14.8h-24.7L-292.1,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-270.5,17l25.1,0l9.6-14.8l-24.7,0L-270.5,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-249,17l25.1,0l9.1-14.8h-24.7L-249,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-227.5,17h25.1l8.5-14.8l-24.7,0L-227.5,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-206,17l25.1,0l7.9-14.8l-24.7,0L-206,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-184.5,17h25.2l7.4-14.8h-24.7L-184.5,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-163,17h25.1l6.8-14.8l-24.7,0L-163,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-141.5,17l25.1,0l6.2-14.8h-24.7L-141.5,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-120,17h25.2l5.7-14.8h-24.7L-120,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-98.4,17l25.1,0l5.1-14.8l-24.7,0L-98.4,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-76.9,17l25.1,0l4.5-14.8H-72L-76.9,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-55.4,17h25.2l3.9-14.8l-24.7,0L-55.4,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-33.9,17l25.1,0l3.4-14.8l-24.7,0L-33.9,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M-12.4,17l25.1,0l2.8-14.8H-9.1L-12.4,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M9.1,17h25.1l2.2-14.8l-24.7,0L9.1,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M30.6,17l25.1,0l1.7-14.8H32.7L30.6,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M52.1,17h25.2l1.1-14.8H53.7L52.1,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M73.7,17h25.1l0.5-14.8l-24.7,0L73.7,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M95.2,17l25.1,0l-0.1-14.8H95.6L95.2,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M116.7,17h25.1l-0.6-14.8l-24.7,0L116.7,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M138.2,17l25.1,0l-1.2-14.8h-24.7L138.2,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M159.7,17l25.1,0l-1.8-14.8h-24.7L159.7,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M181.2,17h25.2l-2.3-14.8l-24.7,0L181.2,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M202.7,17l25.1,0l-2.9-14.8h-24.7L202.7,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M224.2,17h25.2l-3.5-14.8l-24.7,0L224.2,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M245.8,17h25.1l-4-14.8l-24.7,0L245.8,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M267.3,17l25.1,0l-4.6-14.8h-24.7L267.3,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M288.8,17h25.1l-5.2-14.8l-24.7,0L288.8,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M310.3,17h25.2l-5.8-14.8H305L310.3,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M331.8,17l25.1,0l-6.3-14.8h-24.7L331.8,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M353.3,17h25.1l-6.9-14.8l-24.7,0L353.3,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M374.9,17l25.1,0l-7.5-14.8h-24.7L374.9,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M396.4,17l25.1,0l-8-14.8l-24.7,0L396.4,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M417.9,17H443l-8.6-14.8l-24.7,0L417.9,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M439.4,17l25.2,0l-9.2-14.8h-24.7L439.4,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M460.9,17H486l-9.7-14.8l-24.7,0L460.9,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M482.4,17h25.2L497.2,2.2h-24.7L482.4,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M504,17l25.1,0L518.2,2.2h-24.7L504,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(682.729521406277,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M525.4,17h25.1L539.1,2.2l-24.7,0L525.4,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(694.7227160555908,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M546.9,17h25.1l-12-14.8h-24.7L546.9,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(706.725717078289,322.0511083222525)">
				  <g>
					  <g>
						  <path class="st0" d="M568.5,17l25.2,0L581,2.2l-24.7,0L568.5,17z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(154.72495926154807,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-440.7,25.6l25.7,0l14.3-15.6l-25.3,0L-440.7,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-418.4,25.6h25.7l13.7-15.6l-25.3,0L-418.4,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-396.1,25.6h25.7l13.1-15.6h-25.3L-396.1,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-373.8,25.6l25.7,0l12.5-15.6l-25.3,0L-373.8,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-351.5,25.6h25.7l11.9-15.6h-25.3L-351.5,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-329.2,25.6l25.7,0l11.3-15.6h-25.3L-329.2,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-306.9,25.6l25.7,0l10.7-15.6l-25.3,0L-306.9,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-284.5,25.6h25.7l10.1-15.6H-274L-284.5,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-262.2,25.6l25.7,0l9.5-15.6h-25.3L-262.2,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-240,25.6l25.7,0l8.9-15.6l-25.3,0L-240,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-217.6,25.6h25.7l8.3-15.6h-25.3L-217.6,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-195.3,25.6l25.8,0l7.7-15.6l-25.3,0L-195.3,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-173,25.6l25.7,0l7.1-15.6l-25.3,0L-173,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-150.7,25.6h25.7l6.5-15.6h-25.3L-150.7,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-128.4,25.6l25.8,0l5.9-15.6l-25.3,0L-128.4,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-106.1,25.6l25.7,0l5.3-15.6l-25.3,0L-106.1,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-83.8,25.6h25.7l4.7-15.6h-25.3L-83.8,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-61.5,25.6l25.8,0l4.1-15.6l-25.3,0L-61.5,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-39.2,25.6h25.7l3.5-15.6h-25.3L-39.2,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M-16.9,25.6H8.8l2.9-15.6h-25.3L-16.9,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M5.4,25.6l25.7,0l2.3-15.6l-25.3,0L5.4,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M27.7,25.6h25.7l1.7-15.6H29.9L27.7,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M50,25.6h25.8l1.1-15.6H51.6L50,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M72.3,25.6l25.7,0l0.5-15.6l-25.3,0L72.3,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M94.7,25.6h25.7l-0.1-15.6H95.1L94.7,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M117,25.6h25.7l-0.7-15.6l-25.3,0L117,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M139.3,25.6l25.7,0l-1.3-15.6l-25.3,0L139.3,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M161.6,25.6h25.7l-1.8-15.6h-25.3L161.6,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M183.9,25.6h25.8l-2.4-15.6l-25.3,0L183.9,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M206.2,25.6l25.7,0l-3-15.6h-25.3L206.2,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M228.5,25.6h25.8l-3.6-15.6h-25.3L228.5,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M250.8,25.6h25.7l-4.2-15.6l-25.3,0L250.8,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M273.1,25.6l25.7,0L294,10.1h-25.2L273.1,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M295.4,25.6h25.7l-5.4-15.6h-25.3L295.4,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M317.7,25.6l25.8,0l-6-15.6l-25.3,0L317.7,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M340,25.6l25.7,0l-6.6-15.6h-25.3L340,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M362.3,25.6h25.7l-7.2-15.6l-25.3,0L362.3,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M384.7,25.6l25.7,0l-7.8-15.6l-25.2,0L384.7,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M407,25.6l25.7,0l-8.4-15.6H399L407,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M429.3,25.6H455l-9-15.6l-25.3,0L429.3,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M451.5,25.6l25.8,0l-9.6-15.6l-25.3,0L451.5,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M473.9,25.6l25.7,0l-10.2-15.6h-25.2L473.9,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M496.1,25.6h25.8l-10.8-15.6l-25.3,0L496.1,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M518.5,25.6l25.7,0l-11.4-15.6h-25.3L518.5,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(682.729521406277,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M540.8,25.6l25.7,0l-12-15.6h-25.3L540.8,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(694.7227160555908,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M563.1,25.6h25.7l-12.6-15.6l-25.3,0L563.1,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(706.725717078289,334.0541093449508)">
				  <g>
					  <g>
						  <path class="st0" d="M585.4,25.6l25.8,0l-13.2-15.6h-25.3L585.4,25.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-438,35.2l26.3,0l14.4-16.3h-25.9L-438,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-414.9,35.2h26.3l13.7-16.3l-25.9,0L-414.9,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-391.8,35.2h26.3l13.1-16.3h-25.9L-391.8,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-368.6,35.2l26.3,0l12.5-16.3h-25.9L-368.6,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-345.5,35.2h26.4l11.8-16.3l-25.9,0L-345.5,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-322.4,35.2h26.3l11.2-16.3h-25.9L-322.4,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-299.2,35.2l26.3,0l10.6-16.3h-25.9L-299.2,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-276.1,35.2h26.4l10-16.3l-25.9,0L-276.1,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-253,35.2h26.4l9.3-16.3h-25.9L-253,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-229.8,35.2l26.4,0l8.7-16.3h-25.9L-229.8,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-206.7,35.2l26.4,0l8.1-16.3l-25.9,0L-206.7,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-183.5,35.2h26.4l7.5-16.3h-25.9L-183.5,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-160.4,35.2l26.4,0l6.8-16.3h-25.9L-160.4,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-137.3,35.2l26.4,0l6.2-16.3l-25.9,0L-137.3,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-114.1,35.2h26.4l5.6-16.3h-25.9L-114.1,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-91,35.2l26.4,0l5-16.3h-25.9L-91,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-67.9,35.2l26.4,0l4.3-16.3l-25.9,0L-67.9,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-44.7,35.2h26.4l3.7-16.3h-25.9L-44.7,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M-21.6,35.2l26.3,0l3.1-16.3H-18L-21.6,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M1.6,35.2l26.4,0l2.5-16.3l-25.9,0L1.6,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M24.7,35.2h26.4l1.8-16.3H27L24.7,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M47.8,35.2l26.4,0l1.2-16.3l-25.9,0L47.8,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M71,35.2l26.4,0l0.6-16.3l-25.9,0L71,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M94.1,35.2h26.4l-0.1-16.3H94.5L94.1,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M117.3,35.2l26.4,0l-0.7-16.3l-25.9,0L117.3,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M140.4,35.2l26.4,0l-1.3-16.3l-25.9,0L140.4,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M163.5,35.2h26.4l-1.9-16.3h-25.9L163.5,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M186.7,35.2H213l-2.6-16.3l-25.9,0L186.7,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M209.8,35.2l26.3,0l-3.2-16.3l-25.9,0L209.8,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M232.9,35.2h26.4l-3.8-16.3h-25.9L232.9,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M256.1,35.2h26.4L278,18.9l-25.9,0L256.1,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M279.2,35.2l26.3,0l-5.1-16.3l-25.8,0L279.2,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M302.3,35.2h26.3L323,18.9h-25.9L302.3,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M325.5,35.2h26.4l-6.3-16.3l-25.9,0L325.5,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M348.6,35.2l26.3,0L368,18.9l-25.9,0L348.6,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M371.7,35.2h26.4l-7.6-16.3h-25.9L371.7,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M394.9,35.2h26.3L413,18.9l-25.8,0L394.9,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M418,35.2l26.3,0l-8.8-16.3l-25.9,0L418,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M441.2,35.2h26.3L458,18.9h-25.9L441.2,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M464.3,35.2h26.4l-10.1-16.3l-25.9,0L464.3,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M487.5,35.2l26.3,0l-10.7-16.3l-25.8,0L487.5,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M510.5,35.2l26.4,0l-11.3-16.3h-25.9L510.5,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M533.7,35.2h26.3l-12-16.3l-25.9,0L533.7,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(682.729521406277,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M556.8,35.2l26.4,0l-12.6-16.3l-25.9,0L556.8,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(694.7227160555908,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M580,35.2l26.4,0l-13.2-16.3h-25.9L580,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(706.725717078289,346.0571103676492)">
				  <g>
					  <g>
						  <path class="st0" d="M603.1,35.2h26.4l-13.8-16.3l-25.9,0L603.1,35.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-458.6,45.9h27l15.1-17.1h-26.5L-458.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-434.6,45.9l27,0l14.4-17.1h-26.5L-434.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-410.6,45.9l27,0l13.8-17.1l-26.5,0L-410.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-386.6,45.9h27l13.1-17.1H-373L-386.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-362.6,45.9l27,0l12.4-17.1h-26.5L-362.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-338.6,45.9l27,0l11.8-17.1l-26.5,0L-338.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-314.6,45.9h27l11.1-17.1l-26.5,0L-314.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-290.6,45.9l27,0l10.5-17.1h-26.5L-290.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-266.6,45.9l27,0l9.8-17.1l-26.5,0L-266.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-242.6,45.9h27l9.1-17.1l-26.5,0L-242.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-218.6,45.9h27l8.5-17.1h-26.5L-218.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-194.6,45.9l27,0l7.8-17.1l-26.5,0L-194.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-170.6,45.9l27,0l7.2-17.1l-26.5,0L-170.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-146.6,45.9h27l6.5-17.1h-26.5L-146.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-122.5,45.9l27,0l5.9-17.1l-26.5,0L-122.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-98.5,45.9l27,0l5.2-17.1l-26.5,0L-98.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-74.5,45.9h27l4.5-17.1h-26.5L-74.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-50.5,45.9l27,0l3.9-17.1h-26.5L-50.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-26.5,45.9l27,0l3.2-17.1l-26.5,0L-26.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M-2.5,45.9h27l2.6-17.1H0.6L-2.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M21.5,45.9h27l1.9-17.1H23.9L21.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M45.5,45.9l27,0l1.3-17.1l-26.6,0L45.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M69.5,45.9l27,0l0.6-17.1H70.6L69.5,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M93.6,45.9h27l-0.1-17.1H94L93.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M117.6,45.9l27,0l-0.7-17.1l-26.5,0L117.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M141.6,45.9l27,0l-1.4-17.1l-26.5,0L141.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M165.6,45.9h27l-2-17.1H164L165.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M189.6,45.9h27l-2.7-17.1l-26.6,0L189.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M213.6,45.9l27,0l-3.3-17.1l-26.5,0L213.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M237.6,45.9h27l-4-17.1h-26.6L237.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M261.6,45.9h27l-4.7-17.1l-26.5,0L261.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M285.6,45.9l27,0l-5.3-17.1l-26.5,0L285.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M309.6,45.9l27,0l-6-17.1h-26.5L309.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M333.6,45.9h27L354,28.8l-26.6,0L333.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M357.6,45.9l27,0l-7.3-17.1l-26.5,0L357.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M381.6,45.9l27,0l-8-17.1h-26.5L381.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M405.6,45.9h27L424,28.8h-26.5L405.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M429.6,45.9h27l-9.3-17.1l-26.5,0L429.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M453.7,45.9l27,0l-9.9-17.1h-26.5L453.7,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M477.6,45.9h27l-10.6-17.1h-26.6L477.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M501.7,45.9h27l-11.2-17.1l-26.5,0L501.7,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M525.6,45.9l27,0l-11.9-17.1h-26.6L525.6,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M549.7,45.9l27,0l-12.6-17.1h-26.5L549.7,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(682.729521406277,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M573.7,45.9h27l-13.2-17.1l-26.5,0L573.7,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(694.7227160555908,358.050305016963)">
				  <g>
					  <g>
						  <path class="st0" d="M597.7,45.9l27,0l-13.9-17.1l-26.5,0L597.7,45.9z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(166.72796028424642,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-480.3,57.7h27.7l15.9-18h-27.2L-480.3,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-455.4,57.7l27.7,0l15.2-18h-27.2L-455.4,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-430.5,57.7l27.7,0l14.5-18l-27.2,0L-430.5,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-405.5,57.7h27.7l13.8-18h-27.2L-405.5,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-380.6,57.7h27.7l13.1-18H-367L-380.6,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-355.7,57.7l27.7,0l12.4-18l-27.2,0L-355.7,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-330.8,57.7l27.7,0l11.7-18l-27.2,0L-330.8,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-305.9,57.7h27.7l11-18h-27.2L-305.9,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-280.9,57.7h27.7l10.3-18l-27.2,0L-280.9,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-256,57.7l27.7,0l9.6-18l-27.2,0L-256,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-231.1,57.7l27.7,0l8.9-18h-27.2L-231.1,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-206.2,57.7h27.7l8.2-18h-27.2L-206.2,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-181.2,57.7l27.7,0l7.6-18l-27.2,0L-181.2,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-156.3,57.7l27.7,0l6.9-18l-27.2,0L-156.3,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-131.4,57.7h27.7l6.2-18h-27.2L-131.4,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-106.5,57.7h27.7l5.5-18l-27.2,0L-106.5,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-81.6,57.7l27.7,0l4.8-18l-27.2,0L-81.6,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-56.6,57.7l27.7,0l4.1-18H-52L-56.6,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-31.7,57.7H-4l3.4-18h-27.1L-31.7,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M-6.8,57.7h27.7l2.7-18l-27.2,0L-6.8,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M18.2,57.7l27.7,0l2-18H20.7L18.2,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M43.1,57.7l27.7,0l1.3-18H44.9L43.1,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M68,57.7h27.7l0.6-18l-27.2,0L68,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M92.9,57.7l27.7,0l-0.1-18l-27.2,0L92.9,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M117.9,57.7l27.7,0l-0.8-18h-27.2L117.9,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M142.8,57.7h27.7l-1.4-18l-27.2,0L142.8,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M167.7,57.7h27.7l-2.1-18l-27.2,0L167.7,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M192.6,57.7l27.7,0l-2.8-18h-27.2L192.6,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M217.5,57.7l27.7,0l-3.5-18h-27.1L217.5,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M242.5,57.7h27.7l-4.2-18l-27.2,0L242.5,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M267.4,57.7h27.7l-4.9-18l-27.2,0L267.4,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M292.3,57.7l27.7,0l-5.6-18h-27.1L292.3,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M317.2,57.7l27.7,0l-6.3-18l-27.1,0L317.2,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M342.2,57.7h27.7l-7-18l-27.2,0L342.2,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M367.1,57.7l27.7,0l-7.7-18h-27.1L367.1,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M392,57.7l27.7,0l-8.4-18h-27.2L392,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M417,57.7h27.7l-9.1-18l-27.1,0L417,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M441.9,57.7h27.7l-9.8-18l-27.1,0L441.9,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M466.8,57.7l27.7,0l-10.4-18h-27.1L466.8,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M491.7,57.7l27.7,0l-11.1-18l-27.2,0L491.7,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M516.7,57.7h27.7l-11.8-18l-27.1,0L516.7,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M541.5,57.7h27.7l-12.5-18h-27.2L541.5,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M566.5,57.7l27.7,0l-13.2-18h-27.1L566.5,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(682.729521406277,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M591.4,57.7l27.7,0l-13.9-18l-27.2,0L591.4,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(694.7227160555908,370.0533060396614)">
				  <g>
					  <g>
						  <path class="st0" d="M616.3,57.7H644l-14.6-18h-27.2L616.3,57.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(178.72115493356023,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-477.3,70.8h28.4l15.9-18.9h-27.9L-477.3,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(190.7241559562586,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-451.4,70.8h28.4l15.2-18.9h-27.9L-451.4,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-425.5,70.8l28.4,0l14.5-18.9l-27.9,0L-425.5,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-399.6,70.8l28.4,0l13.8-18.9l-27.9,0L-399.6,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-373.7,70.8h28.4l13-18.9h-27.9L-373.7,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-347.8,70.8h28.4l12.3-18.9h-27.9L-347.8,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-321.9,70.8l28.4,0l11.6-18.9l-27.9,0L-321.9,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-296,70.8l28.4,0l10.8-18.9l-27.9,0L-296,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-270.1,70.8h28.4l10.1-18.9h-27.9L-270.1,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-244.3,70.8h28.4l9.4-18.9l-27.9,0L-244.3,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-218.4,70.8l28.4,0l8.7-18.9l-27.9,0L-218.4,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-192.5,70.8l28.4,0l7.9-18.9l-27.9,0L-192.5,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-166.6,70.8h28.4l7.2-18.9h-27.9L-166.6,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-140.7,70.8h28.4l6.5-18.9l-27.9,0L-140.7,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-114.8,70.8l28.4,0l5.8-18.9l-27.9,0L-114.8,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-88.9,70.8l28.4,0l5-18.9h-27.9L-88.9,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-63,70.8h28.4l4.3-18.9h-27.9L-63,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-37.1,70.8h28.4l3.6-18.9l-27.8,0L-37.1,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M-11.3,70.8l28.4,0L20,51.9l-27.9,0L-11.3,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M14.6,70.8l28.4,0l2.1-18.9H17.3L14.6,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M40.5,70.8H69l1.4-18.9H42.4L40.5,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M66.4,70.8h28.4l0.7-18.9l-27.9,0L66.4,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M92.3,70.8l28.4,0l-0.1-18.9l-27.9,0L92.3,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M118.2,70.8l28.4,0l-0.8-18.9h-27.9L118.2,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M144.1,70.8h28.4L171,51.9l-27.9,0L144.1,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M170,70.8h28.4l-2.2-18.9l-27.9,0L170,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M195.8,70.8l28.5,0l-3-18.9l-27.9,0L195.8,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M221.7,70.8l28.4,0l-3.7-18.9h-27.8L221.7,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M247.6,70.8h28.5l-4.4-18.9l-27.9,0L247.6,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M273.5,70.8h28.4l-5.2-18.9l-27.9,0L273.5,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M299.4,70.8l28.4,0l-5.9-18.9h-27.8L299.4,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M325.3,70.8l28.4,0l-6.6-18.9h-27.8L325.3,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M351.2,70.8h28.5l-7.3-18.9l-27.9,0L351.2,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M377.1,70.8h28.4l-8.1-18.9l-27.8,0L377.1,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M402.9,70.8l28.4,0l-8.8-18.9h-27.9L402.9,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M428.9,70.8l28.4,0l-9.5-18.9h-27.8L428.9,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M454.7,70.8h28.4l-10.3-18.9l-27.8,0L454.7,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M480.6,70.8H509l-11-18.9l-27.8,0L480.6,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M506.5,70.8l28.5,0l-11.7-18.9h-27.9L506.5,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M532.4,70.8l28.4,0l-12.4-18.9l-27.8,0L532.4,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M558.2,70.8h28.5l-13.2-18.9l-27.9,0L558.2,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M584.2,70.8h28.4l-13.9-18.9h-27.8L584.2,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(682.729521406277,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M610,70.8l28.4,0l-14.6-18.9h-27.9L610,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(694.7227160555908,382.0563070623598)">
				  <g>
					  <g>
						  <path class="st0" d="M635.9,70.8l28.4,0L649,51.9l-27.9,0L635.9,70.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(202.72715697895694,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-446.4,85.2l29.2,0l15.2-19.9l-28.6,0L-446.4,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-419.5,85.2l29.2,0l14.5-19.9l-28.6,0L-419.5,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-392.6,85.2l29.2,0l13.7-19.9l-28.6,0L-392.6,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-365.7,85.2h29.2l12.9-19.9h-28.6L-365.7,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-338.8,85.2h29.2l12.2-19.9l-28.6,0L-338.8,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-311.9,85.2l29.2,0l11.4-19.9l-28.6,0L-311.9,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-285,85.2l29.2,0l10.6-19.9l-28.6,0L-285,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-258.1,85.2l29.2,0l9.9-19.9h-28.6L-258.1,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-231.2,85.2h29.2l9.1-19.9h-28.6L-231.2,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-204.3,85.2h29.2l8.4-19.9l-28.6,0L-204.3,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-177.4,85.2l29.2,0l7.6-19.9l-28.6,0L-177.4,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-150.5,85.2l29.2,0l6.8-19.9h-28.6L-150.5,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-123.6,85.2h29.2l6.1-19.9H-117L-123.6,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-96.7,85.2h29.2l5.3-19.9l-28.6,0L-96.7,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-69.8,85.2l29.2,0l4.5-19.9l-28.6,0L-69.8,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-42.9,85.2l29.1,0l3.8-19.9h-28.6L-42.9,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M-16,85.2l29.2,0l3-19.9h-28.6L-16,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M10.9,85.2h29.2l2.2-19.9l-28.6,0L10.9,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M37.8,85.2H67l1.5-19.9l-28.6,0L37.8,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M64.7,85.2l29.2,0l0.7-19.9H66L64.7,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M91.6,85.2l29.2,0l-0.1-19.9H92.1L91.6,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M118.5,85.2h29.2l-0.8-19.9l-28.6,0L118.5,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M145.4,85.2h29.2L173,65.2l-28.6,0L145.4,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M172.3,85.2l29.2,0l-2.4-19.9h-28.6L172.3,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M199.2,85.2l29.2,0l-3.1-19.9h-28.6L199.2,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M226.1,85.2l29.1,0l-3.9-19.9l-28.6,0L226.1,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M253,85.2h29.2l-4.7-19.9l-28.6,0L253,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M279.9,85.2h29.2l-5.4-19.9l-28.6,0L279.9,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M306.8,85.2l29.1,0l-6.2-19.9h-28.6L306.8,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M333.7,85.2l29.1,0l-7-19.9l-28.6,0L333.7,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M360.6,85.2l29.2,0l-7.7-19.9l-28.6,0L360.6,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M387.5,85.2h29.1l-8.5-19.9l-28.6,0L387.5,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M414.4,85.2l29.2,0l-9.3-19.9h-28.6L414.4,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M441.4,85.2l29.1,0l-10-19.9h-28.6L441.4,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M468.2,85.2l29.1,0l-10.8-19.9l-28.6,0L468.2,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M495.1,85.2h29.1l-11.6-19.9l-28.6,0L495.1,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M522,85.2h29.2l-12.3-19.9h-28.6L522,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M549,85.2l29.1,0L565,65.2h-28.6L549,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M575.8,85.2l29.2,0l-13.8-19.9l-28.6,0L575.8,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M602.8,85.2l29.1,0l-14.6-19.9l-28.6,0L602.8,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(682.729521406277,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M629.6,85.2h29.2l-15.4-19.9h-28.6L629.6,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(694.7227160555908,394.04950171167354)">
				  <g>
					  <g>
						  <path class="st0" d="M656.5,85.2h29.2l-16.1-19.9h-28.6L656.5,85.2z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(214.73015800165533,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-440.6,101l30,0l15.3-21l-29.4,0L-440.6,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-412.6,101h30l14.5-21l-29.4,0L-412.6,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-384.6,101h30l13.7-21h-29.4L-384.6,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-356.6,101l30,0l12.9-21h-29.4L-356.6,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-328.7,101l30,0l12-21l-29.4,0L-328.7,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-300.7,101l30,0l11.2-21l-29.4,0L-300.7,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-272.7,101h30l10.4-21l-29.4,0L-272.7,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-244.8,101h30l9.6-21h-29.4L-244.8,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-216.8,101h30l8.8-21h-29.4L-216.8,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-188.8,101l30,0l8-21l-29.4,0L-188.8,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-160.8,101l30,0l7.2-21l-29.4,0L-160.8,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-132.9,101l30,0l6.4-21l-29.4,0L-132.9,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-104.9,101h30l5.6-21h-29.4L-104.9,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-76.9,101h30l4.8-21h-29.4L-76.9,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-48.9,101l29.9,0l4-21l-29.3,0L-48.9,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M-21,101l30,0l3.2-21l-29.4,0L-21,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M7,101l30,0l2.4-21H10L7,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M35,101h30l1.5-21H37.1L35,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M62.9,101h30l0.7-21l-29.4,0L62.9,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M90.9,101l30,0l-0.1-21l-29.4,0L90.9,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M118.9,101l30,0L148,80l-29.4,0L118.9,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M146.9,101l30,0l-1.7-21h-29.4L146.9,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M174.8,101h30l-2.5-21h-29.4L174.8,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M202.8,101h30l-3.3-21l-29.4,0L202.8,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M230.8,101h29.9l-4.1-21l-29.3,0L230.8,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M258.7,101l30,0l-4.9-21l-29.4,0L258.7,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M286.7,101l30,0L311,80h-29.4L286.7,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M314.7,101l29.9,0l-6.5-21h-29.3L314.7,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M342.7,101h29.9l-7.3-21l-29.3,0L342.7,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M370.6,101h30l-8.2-21l-29.4,0L370.6,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M398.6,101l29.9,0l-9-21l-29.3,0L398.6,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M426.6,101l30,0l-9.8-21h-29.4L426.6,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M454.6,101l29.9,0l-10.6-21l-29.3,0L454.6,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M482.5,101h29.9l-11.4-21l-29.3,0L482.5,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M510.5,101h29.9l-12.2-21l-29.3,0L510.5,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M538.4,101l30,0l-13-21H526L538.4,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(646.7303247115664,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M566.5,101l29.9,0l-13.8-21h-29.3L566.5,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(658.7235193608802,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M594.4,101l30,0l-14.6-21l-29.4,0L594.4,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(670.7265203835785,406.0525027343719)">
				  <g>
					  <g>
						  <path class="st0" d="M622.4,101h29.9l-15.4-21l-29.3,0L622.4,101z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-433.7,118.5h30.8l15.3-22.2h-30.2L-433.7,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-404.6,118.5h30.8l14.4-22.2h-30.2L-404.6,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-375.5,118.5l30.8,0l13.6-22.2l-30.2,0L-375.5,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-346.4,118.5l30.8,0l12.7-22.2l-30.2,0L-346.4,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-317.3,118.5l30.8,0l11.9-22.2l-30.2,0L-317.3,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-288.2,118.5l30.9,0l11-22.2h-30.2L-288.2,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-259.1,118.5h30.8l10.2-22.2h-30.2L-259.1,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-230,118.5h30.8l9.3-22.2l-30.2,0L-230,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-200.9,118.5h30.9l8.5-22.2l-30.2,0L-200.9,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-171.8,118.5l30.8,0l7.6-22.2l-30.2,0L-171.8,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-142.7,118.5l30.8,0l6.8-22.2l-30.2,0L-142.7,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-113.6,118.5l30.9,0l5.9-22.2H-107L-113.6,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-84.5,118.5l30.8,0l5-22.2h-30.2L-84.5,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-55.3,118.5h30.8l4.2-22.2l-30.2,0L-55.3,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M-26.2,118.5H4.6l3.3-22.2l-30.2,0L-26.2,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M2.9,118.5l30.8,0l2.5-22.2L6,96.3L2.9,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M31.9,118.5l30.9,0l1.6-22.2H34.2L31.9,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M61.1,118.5l30.8,0l0.8-22.2H62.5L61.1,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M90.2,118.5l30.8,0l-0.1-22.2H90.8L90.2,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M119.3,118.5h30.8l-0.9-22.2l-30.2,0L119.3,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M148.4,118.5h30.8l-1.8-22.2l-30.2,0L148.4,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M177.5,118.5l30.8,0l-2.6-22.2l-30.2,0L177.5,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M206.6,118.5l30.9,0L234,96.3h-30.2L206.6,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M235.7,118.5l30.8,0l-4.3-22.2H232L235.7,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M264.8,118.5l30.9,0l-5.2-22.2l-30.2,0L264.8,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M293.9,118.5l30.8,0l-6.1-22.2l-30.2,0L293.9,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M323,118.5h30.8l-6.9-22.2l-30.1,0L323,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M352.1,118.5h30.8l-7.8-22.2l-30.2,0L352.1,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M381.2,118.5l30.9,0l-8.6-22.2h-30.2L381.2,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M410.3,118.5l30.8,0l-9.5-22.2h-30.2L410.3,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M439.4,118.5l30.8,0l-10.3-22.2l-30.2,0L439.4,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M468.6,118.5l30.8,0l-11.2-22.2l-30.1,0L468.6,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(610.7311280168558,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M497.6,118.5h30.8l-12-22.2l-30.2,0L497.6,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(622.7243226661697,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M526.7,118.5h30.8l-12.9-22.2h-30.2L526.7,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(634.727323688868,418.0555037570703)">
				  <g>
					  <g>
						  <path class="st0" d="M555.8,118.5l30.9,0l-13.7-22.2h-30.2L555.8,118.5z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(226.72335265096913,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-456,137.6l31.7,0l16.2-23.5h-31L-456,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-425.7,137.6l31.7,0l15.3-23.5h-31L-425.7,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-395.4,137.6l31.7,0l14.4-23.5h-31.1L-395.4,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-365.2,137.6h31.7l13.5-23.5l-31.1,0L-365.2,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-334.8,137.6h31.7l12.6-23.5l-31.1,0L-334.8,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-304.6,137.6h31.8l11.7-23.5l-31.1,0L-304.6,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-274.3,137.6l31.7,0l10.8-23.5l-31.1,0L-274.3,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-243.9,137.6l31.7,0l9.9-23.5h-31.1L-243.9,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-213.6,137.6l31.8,0l9-23.5H-204L-213.6,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-183.3,137.6l31.7,0l8.1-23.5h-31.1L-183.3,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-153,137.6l31.7,0l7.2-23.5l-31.1,0L-153,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-122.7,137.6l31.8,0l6.3-23.5l-31.1,0L-122.7,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-92.4,137.6h31.7l5.3-23.5l-31.1,0L-92.4,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-62.1,137.6h31.7l4.4-23.5l-31,0L-62.1,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-31.8,137.6h31.7l3.5-23.5h-31.1L-31.8,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M-1.5,137.6l31.7,0l2.6-23.5H1.8L-1.5,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M28.8,137.6l31.8,0l1.7-23.5H31.2L28.8,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M59.1,137.6l31.7,0l0.8-23.5l-31.1,0L59.1,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M89.4,137.6l31.7,0l-0.1-23.5l-31.1,0L89.4,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M119.7,137.6l31.7,0l-1-23.5l-31.1,0L119.7,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M150,137.6h31.7l-1.9-23.5l-31.1,0L150,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M180.3,137.6H212l-2.8-23.5h-31.1L180.3,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M210.6,137.6h31.8l-3.7-23.5h-31.1L210.6,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M240.9,137.6l31.7,0l-4.6-23.5l-31,0L240.9,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M271.2,137.6l31.8,0l-5.5-23.5l-31.1,0L271.2,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M301.5,137.6l31.7,0l-6.4-23.5l-31.1,0L301.5,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M331.8,137.6l31.7,0l-7.3-23.5l-31,0L331.8,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M362.1,137.6l31.7,0l-8.2-23.5l-31,0L362.1,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(562.7289302994469,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M392.4,137.6h31.8l-9.1-23.5h-31.1L392.4,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(574.7221249487608,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M422.7,137.6h31.7l-10-23.5h-31L422.7,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(586.7251259714591,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M453,137.6h31.7l-10.9-23.5l-31.1,0L453,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(598.7281269941574,430.0486984063841)">
				  <g>
					  <g>
						  <path class="st0" d="M483.3,137.6l31.7,0l-11.8-23.5l-31,0L483.3,137.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-448.2,158.7h32.7l16.2-25l-31.9,0L-448.2,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-416.6,158.7l32.7,0l15.3-25l-32,0L-416.6,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-385,158.7l32.7,0l14.3-25l-32,0L-385,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-353.5,158.7l32.7,0l13.3-25l-32,0L-353.5,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-321.9,158.7l32.7,0l12.4-25h-32L-321.9,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-290.3,158.7l32.7,0l11.4-25h-32L-290.3,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-258.7,158.7l32.7,0l10.5-25h-32L-258.7,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-227.2,158.7l32.7,0l9.5-25l-32,0L-227.2,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-195.6,158.7l32.7,0l8.5-25l-32,0L-195.6,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-164,158.7l32.7,0l7.6-25l-32,0L-164,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-132.5,158.7h32.7l6.6-25l-32,0L-132.5,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-100.9,158.7h32.7l5.7-25l-32,0L-100.9,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-69.3,158.7h32.6l4.7-25l-31.9,0L-69.3,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-37.7,158.7h32.7l3.8-25h-32L-37.7,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M-6.2,158.7l32.7,0l2.8-25h-32L-6.2,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M25.4,158.7l32.7,0l1.8-25h-32L25.4,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M57,158.7l32.7,0l0.9-25l-32,0L57,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M88.6,158.7l32.7,0l-0.1-25l-32,0L88.6,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M120.1,158.7l32.7,0l-1-25l-32,0L120.1,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M151.7,158.7l32.7,0l-2-25l-32,0L151.7,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M183.3,158.7l32.7,0l-3-25l-32,0L183.3,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(490.7305369100259,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M214.8,158.7l32.7,0l-3.9-25l-32,0L214.8,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(502.7237315593396,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M246.4,158.7H279l-4.9-25h-31.9L246.4,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(514.726732582038,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M277.9,158.7h32.7l-5.8-25h-32L277.9,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(526.7297336047363,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M309.6,158.7h32.7l-6.8-25h-32L309.6,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(538.7327346274348,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M341.1,158.7h32.6l-7.8-25l-31.9,0L341.1,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(550.7259292767486,442.0516994290824)">
				  <g>
					  <g>
						  <path class="st0" d="M372.7,158.7l32.6,0l-8.7-25l-31.9,0L372.7,158.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(238.7263536736675,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-472,181.7l33.7,0l17.2-26.5l-32.9,0L-472,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-439,181.7l33.7,0l16.2-26.5l-32.9,0L-439,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-406.2,181.7l33.7,0l15.2-26.5l-32.9,0L-406.2,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-373.2,181.7l33.7,0l14.2-26.5h-32.9L-373.2,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-340.3,181.7l33.7,0l13.2-26.5h-33L-340.3,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-307.4,181.7l33.7,0l12.1-26.5h-32.9L-307.4,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-274.5,181.7l33.7,0l11.1-26.5h-32.9L-274.5,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-241.6,181.7l33.7,0l10.1-26.5l-33,0L-241.6,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-208.6,181.7l33.7,0l9.1-26.5l-32.9,0L-208.6,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-175.7,181.7l33.7,0l8.1-26.5l-32.9,0L-175.7,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-142.8,181.7l33.7,0l7-26.5l-33,0L-142.8,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-109.9,181.7l33.7,0l6-26.5l-32.9,0L-109.9,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-76.9,181.7l33.7,0l5-26.5l-32.9,0L-76.9,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-44,181.7l33.7,0l4-26.5l-32.9,0L-44,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M-11.1,181.7l33.7,0l3-26.5l-32.9,0L-11.1,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M21.8,181.7l33.7,0l1.9-26.5l-33,0L21.8,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M54.7,181.7h33.7l0.9-26.5l-32.9,0L54.7,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M87.7,181.7h33.7l-0.1-26.5H88.3L87.7,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M120.6,181.7h33.7l-1.1-26.5h-32.9L120.6,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(466.7245348646291,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M153.5,181.7h33.7l-2.1-26.5h-32.9L153.5,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(478.72753588732746,454.05470045178083)">
				  <g>
					  <g>
						  <path class="st0" d="M186.4,181.7h33.7l-3.1-26.5H184L186.4,181.7z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-463,207.1l34.8,0l17.2-28.2l-34,0L-463,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-428.6,207.1l34.8,0l16.1-28.2l-34,0L-428.6,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-394.3,207.1l34.8,0l15.1-28.2l-34,0L-394.3,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-359.9,207.1l34.8,0l14-28.2l-34,0L-359.9,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-325.6,207.1l34.8,0l12.9-28.2l-34,0L-325.6,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-291.2,207.1l34.8,0l11.8-28.2l-34,0L-291.2,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-256.9,207.1l34.8,0l10.7-28.2l-34,0L-256.9,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-222.5,207.1l34.8,0l9.7-28.2l-34,0L-222.5,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-188.1,207.1l34.8,0l8.6-28.2l-34,0L-188.1,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-153.8,207.1l34.8,0l7.5-28.2l-34,0L-153.8,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-119.4,207.1l34.8,0l6.4-28.2l-34,0L-119.4,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-85.1,207.1l34.7,0l5.3-28.2l-33.9,0L-85.1,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-50.7,207.1l34.8,0l4.2-28.2l-34,0L-50.7,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M-16.4,207.1l34.8,0l3.2-28.2l-34,0L-16.4,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M18,207.1l34.8,0l2.1-28.2l-34,0L18,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M52.3,207.1l34.8,0l1-28.2l-34,0L52.3,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M86.7,207.1l34.8,0l-0.1-28.2l-34,0L86.7,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(454.7313402153153,466.0577014744792)">
				  <g>
					  <g>
						  <path class="st0" d="M121.1,207.1l34.8,0l-1.2-28.2l-34,0L121.1,207.1z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(262.7225493456797,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-452.6,234.8l35.9,0l17.2-30.1l-35,0L-452.6,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-416.7,234.8l35.9,0l16.1-30.1l-35.1,0L-416.7,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-380.8,234.8l35.9,0l14.9-30.1l-35.1,0L-380.8,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(298.7217460403902,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-344.9,234.8h35.9l13.8-30.1l-35,0L-344.9,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-309,234.8h35.9l12.6-30.1l-35,0L-309,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-273.1,234.8h35.9l11.5-30.1l-35.1,0L-273.1,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(334.73074910848527,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-237.2,234.8h35.9l10.3-30.1l-35.1,0L-237.2,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(346.72394375779913,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-201.4,234.8l35.9,0l9.1-30.1l-35,0L-201.4,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(358.7269447804975,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-165.5,234.8l35.9,0l8-30.1l-35.1,0L-165.5,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-129.6,234.8l35.9,0l6.8-30.1l-35,0L-129.6,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-93.7,234.8l35.9,0l5.7-30.1l-35,0L-93.7,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-57.8,234.8l35.9,0l4.5-30.1l-35,0L-57.8,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M-22,234.8l35.9,0l3.4-30.1l-35,0L-22,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M13.9,234.8l36,0l2.2-30.1l-35.1,0L13.9,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M49.8,234.8l35.9,0l1.1-30.1l-35,0L49.8,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,478.050896123793)">
				  <g>
					  <g>
						  <path class="st0" d="M85.7,234.8l35.9,0l-0.1-30.1l-35.1,0L85.7,234.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M-440.6,265.3l37.1,0l17.2-32.2l-36.2,0L-440.6,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M-403.1,265.3l37.2,0l16-32.2l-36.2,0L-403.1,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(310.7247470630886,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M-328.1,265.3l37.1,0l13.5-32.2l-36.2,0L-328.1,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(322.72774808578697,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M-290.6,265.3l37.2,0l12.3-32.2l-36.2,0L-290.6,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(370.72994580319585,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M-140.5,265.3h37.1l7.3-32.2l-36.2,0L-140.5,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(382.72314045250965,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M-103,265.3h37.1l6.1-32.2l-36.2,0L-103,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(394.726141475208,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M-65.4,265.3l37.1,0l4.8-32.2l-36.2,0L-65.4,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(406.72914249790637,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M-27.9,265.3l37.1,0l3.6-32.2l-36.2,0L-27.9,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(418.7321435206048,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M9.6,265.3l37.2,0l2.4-32.2H12.9L9.6,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M47.1,265.3l37.1,0l1.1-32.2H49.1L47.1,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(442.72833919261694,490.0538971464914)">
				  <g>
					  <g>
						  <path class="st0" d="M84.6,265.3l37.1,0l-0.1-32.2H85.5L84.6,265.3z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(274.72555036837804,502.05689816918976)">
				  <g>
					  <g>
						  <path class="st0" d="M-466.3,298.8l38.5,0l18.4-34.4l-37.5,0L-466.3,298.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,502.05689816918976)">
				  <g>
					  <g>
						  <path class="st0" d="M-427,298.8l38.5,0l17.1-34.4h-37.5L-427,298.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(430.7253381699186,502.05689816918976)">
				  <g>
					  <g>
						  <path class="st0" d="M44.2,298.8l38.5,0l1.2-34.4l-37.5,0L44.2,298.8z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(250.72935469636587,514.0500928185036)">
				  <g>
					  <g>
						  <path class="st0" d="M-576,335.6l39.9,0l22.6-36.9l-38.8,0L-576,335.6z"/>
					  </g>
				  </g>
			  </g>
			  <g transform="translate(286.7285513910764,514.0500928185036)">
				  <g>
					  <g>
						  <path class="st0" d="M-452.6,335.6l39.9,0l18.3-36.9l-38.8,0L-452.6,335.6z"/>
					  </g>
				  </g>
			  </g>
		  </g>
	  </g>
  </g>
  <path class="st1" targetID="7" title="تبوك" alt="تبوك" d="M148.3,80.2c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C179.1,94,165.3,80.2,148.3,80.2z M148.3,126.4c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4
	  S156.8,126.4,148.3,126.4z"/>
  <path class="st1" targetID="2" d="M124.7,285.8c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C155.5,299.6,141.7,285.8,124.7,285.8z M124.7,332c-8.5,0-15.4-6.9-15.4-15.4c0-8.5,6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4
	  C140.1,325.1,133.2,332,124.7,332z"/>
  <path class="st1" targetID="11" d="M117.6,423.4c-17,0.3-30.5,14.3-30.2,31.3c0.4,21.7,31.7,54.6,31.7,54.6s30.2-33.9,29.8-55.7
	  C148.6,436.7,134.6,423.1,117.6,423.4z M118.4,469.6c-8.5,0.1-15.5-6.6-15.6-15.1c-0.1-8.5,6.6-15.5,15.1-15.6s15.5,6.6,15.6,15.1
	  S126.9,469.4,118.4,469.6z"/>
  <path class="st1" targetID="10" d="M71.3,351c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C102,364.8,88.3,351,71.3,351z M71.3,397.1c-8.5,0-15.4-6.9-15.4-15.4c0-8.5,6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4
	  C86.7,390.3,79.8,397.1,71.3,397.1z"/>
  <path class="st1" targetID="5" d="M197.1,620.3c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C227.9,634,214.1,620.3,197.1,620.3z M197.1,666.4c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4c8.5,0,15.4,6.9,15.4,15.4
	  S205.6,666.4,197.1,666.4z"/>
  <path class="st1" targetID="6" d="M710.3,181.6c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C741,195.4,727.3,181.6,710.3,181.6z M710.3,227.7c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4c8.5,0,15.4,6.9,15.4,15.4
	  S718.8,227.7,710.3,227.7z"/>
  <path class="st1" targetID="1" d="M927.1,296.2c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C957.9,310,944.1,296.2,927.1,296.2z M927.1,342.4c-8.5,0-15.4-6.9-15.4-15.4c0-8.5,6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4
	  C942.5,335.5,935.6,342.4,927.1,342.4z"/>
  <path class="st1" targetID="8" d="M417.6,0c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C448.4,13.8,434.6,0,417.6,0z M417.6,46.1c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4S433,22.3,433,30.8S426.1,46.1,417.6,46.1z"
	  />
  <path class="st1" targetID="4" d="M1137.1,193.7c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C1167.9,207.5,1154.1,193.7,1137.1,193.7z M1137.1,239.9c-8.5,0-15.4-6.9-15.4-15.4c0-8.5,6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4
	  C1152.5,233,1145.6,239.9,1137.1,239.9z"/>
  <path class="st1" targetID="3" d="M1064.9,162.3c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C1095.6,176.1,1081.8,162.3,1064.9,162.3z M1064.9,208.4c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4
	  S1073.4,208.4,1064.9,208.4z"/>
  <path class="st1" targetID="9" d="M1194.6,247.3c-17,0-30.8,13.8-30.8,30.8c0,21.8,30.8,55.2,30.8,55.2s30.8-33.4,30.8-55.2
	  C1225.4,261,1211.6,247.3,1194.6,247.3z M1194.6,293.4c-8.5,0-15.4-6.9-15.4-15.4c0-8.5,6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4
	  C1210,286.5,1203.1,293.4,1194.6,293.4z"/>
  </svg>
  
  
  `)
}

var tube = new TubeAnimation("tube_container", {
			
  //Main settings
    TUBE_SIZE: 200,
    TUBE_WIDTH: 50,
    TUBE_DISTANCE: 1000,
    PERSPECTIVE_DISTORTION: 1,
    TUBE_TORSION: 0.3,
    TUBE_STRETCH: 200,
    ROTATION_SPEED: 5,
    DOT_COLOR: 'rgba(222, 113, 113, 1)',
    DOT_SIZE: 0,
    DETALIZATION: 209,
    MESH_DISTRIBUTION: 2,
    MESH_RATIO: 18.103,
    OFFSET_X: 0, //offset in pixels
    OFFSET_Y: 0, //offset in pixels
    PERCENTAGE_OFFSET_X: 0, //offset in percentages
    PERCENTAGE_OFFSET_Y: 0, //offset in percentages

  //Responsivity settings
    AUTO_SCALE: false,
    VIEWPORT_WIDTH: 1000,
    VIEWPORT_HEIGHT: 1000,
  
  //Mouse settings
    MOUSE_DISTANCE_MIN: 20,
    MOUSE_DISTANCE_MAX: 400,
    MOUSE_SENSITIVITY: 1,
    INERTIAL_TIME: 2,
    
  //Main morphing settings
    USE_MAIN_MORPHING: true,
    MAIN_MORPHING_AUTOPLAY: true,
    MAIN_MORPHING_DURATION: 1.5,
    MAIN_MORPHING_DELAY: 0.01,
    MAIN_MORPHING_TRANSITION_TYPE: "cubic",
    MAIN_MORPHING_STAGES: [
      {DOT_COLOR: 'rgba(222, 113, 113, 1)', DOT_SIZE: 2},
      {DOT_COLOR: 'rgba(196, 182, 49, 1)'},
      {DOT_COLOR: 'rgba(113, 196, 49, 1)'},
      {DOT_COLOR: 'rgba(49, 196, 152, 1)'},
      {DOT_COLOR: 'rgba(49, 118, 196, 1)'},
      {DOT_COLOR: 'rgba(117, 101, 224, 1)'},
      {DOT_COLOR: 'rgba(185, 101, 224, 1)'},
      {DOT_COLOR: 'rgba(224, 101, 175, 1)'},
      {DOT_COLOR: 'rgba(101, 179, 224, 1)'},
      {DOT_COLOR: 'rgba(58, 201, 36, 1)'}
    ],
        
  //Surface distortion settings
    SURFACE_INITIAL_DISTORTION: {
        wave1: {amplitude: 39.216, frequency: 4, phase: 1.201},
        wave2: {amplitude: 7.843, frequency: 3, phase: 0},
        wave3: {amplitude: 25.49, frequency: 2, phase: 0}   
      },
    USE_SURFACE_MORPHING: false,
    USE_SURFACE_MOTION: true,
    USE_SURFACE_SWING: false,
             
  //Surface motion settings
    WAVE_1_MOTION_SPEED: 2,
    WAVE_2_MOTION_SPEED: 2,
    // WAVE_3_MOTION_SPEED: -3			
});