function createFooter() {
    let footer = `
        <div class="container">
            <div class="row">
            <div class="box box-1"><img src="images/footer-logo.png"></div>
            <div class="box box-2">
                <ul class="ulbox-1">
                    <li>الرئيسية -</li>
                    <li>منصة الأعمال -</li>
                    <li>الأسئلة الشائعة -</li>
                    <li>التواصل معنا -</li>
                </ul>
            </div>
            <div class="box box-3">
                <ul class="ulbox-2">
                    <li>خريطة الموقع -</li>
                    <li>سياسة الخصوصية -</li>
                    <li>الاستخدام واخلاء المسئولية -</li>
                </ul>
            </div>
            <div class="socilas">
                <ul class="social-media">
                    <li><i class="fas fa-globe-americas"></i></li>
                    <li><i class="fa fa-twitter"></i></li>
                    <li><i class="fa fa-instagram"></i></li>
                    <li><i class="fa fa-linkedin"></i></li>
                    <li><i class="fa fa-youtube"></i></li>
                </ul>
            </div>
            </div>
            <div class="copyright">
                <p>المركز السعودي للأعمال 2021 &copy;</p>
            </div>
        </div>
    `;

    document.querySelector('.footer').innerHTML = footer;
}

createFooter();