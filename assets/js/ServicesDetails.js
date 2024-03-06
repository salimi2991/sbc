var ServiceID = getUrlParameter('ServiceID');
$.ajax({
    url: '/assets/DataSources/Services.json',
    dataType: 'json',
    success: function(data) {
        if(data.details.length > 0){
            jQuery.each( data.details, function( i, val ) {
                if(data.details[i].id == ServiceID){
                  $('.ServiceName').html(data.details[i].title)
                  $('.ServiceDetails').append(`
                  <div class="bg-white">
									<div class="row justify-content-center mt-4"  id="ServiceID-`+data.details[i].id+`">
										<div class="col-12 col-lg-10">
											<h4 class="section-title-4 text-right FontBold  text-uppercase mb-1 tit-color-custom text-center p-2">
                      `+data.details[i].title+`
											</h4>
										</div>
										<div class="col-12 col-lg-2">
										<a  class="ExternalLink btn btn-secondary custom-links mb-0 d-block rounded-0 shadow-none BtnWithBefore" href="#" targettitle="" targeturl="">  ابدأ الخدمة </a>
										</div>
									</div>
								</div>
                  <div class="row mt-4">
                    <div class="col-lg-12 mb-3">                    
                     <h3 class="section-title-4 text-right FontBold  text-uppercase mb-3 tit-color-custom"> وصف الخدمة </h3>                 
                   <div class="ServicesDetailsSection">
                     <p>
                     `+data.details[i].desc+`
                     </p>
                   </div>
                        <div class="row mb-3">
                        <div class="col-md-4">
                        <div class="align-middle bg-white  mb-1 p-2 w-100">
                        <div class="d-flex">
                        <div class="CustomIconList my-auto">
                          <img class="ml-1" src="/assets/imgs/SVG/Icon-043.svg" alt="">
                        </div>
                        <p class="d-table-cell align-middle mb-0 text-center text-md-right my-auto flex-grow-1 font-weight-bold">الفئة المستفيدة
                        </p>
                        <p class="my-auto px-3 ms-auto">الأفراد / المنشآت</p>
                        </div>
                        </div>
                        </div>
                          
                        <div class="col-md-4">
                        <div class="align-middle bg-white  mb-1 p-2 w-100">
                        <div class="d-flex">
                        <div class="CustomIconList my-auto">
                          <img class="ml-1" src="/assets/imgs/icons/379.svg" alt="">
                        </div>
                        <p class="d-table-cell align-middle mb-0 text-center text-md-right my-auto flex-grow-1 font-weight-bold">مدة تنفيذ الخدمة
                        </p>
                        <p class="my-auto px-3 ms-auto">أثناء المعاينة </p>
                        </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="align-middle bg-white  mb-1 p-2 w-100">
                        <div class="d-flex">
                        <div class="CustomIconList my-auto">
                          <img class="ml-1" src="/assets/imgs/SVG/Icon-056.svg" alt="">
                        </div>
                        <p class="d-table-cell align-middle mb-0 text-center text-md-right my-auto flex-grow-1 font-weight-bold">رسوم الخدمة
                        </p>
                        <p class="my-auto px-3 ms-auto">حسب التصنيف</p>
                        </div>
                        </div>
                        </div>
    
                        </div>



                   
                   <div class="border border-light mb-4"></div>
                   <div class="ServicesDetailsSection">
                   <h3 class="section-title-4 text-right FontBold  text-uppercase mb-3 tit-color-custom">
                      الاشتراطات والمتطلبات
                     </h3>
                     <div class="ServiceTerms">
                     `+data.details[i].terms+`
                     </div>
                   </div>
                   <!--<div class="border border-light mb-4"></div>
                   <div class="ServicesDetailsSection">
                     <h3 class="section-title-4 text-right FontBold  text-uppercase mb-3 tit-color-custom">
                       اتفاقية مستوى الخدمة
                     </h3>
                     <div class="ServiceSLA">
                     `+data.details[i].sla+`
                     </div>
                   </div>
                   -->
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