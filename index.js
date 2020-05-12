// 스무스 스크롤
$('#navbar a, .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate (
            {
                scrollTop: $(hash).offset().top - 100 // 위치
            },
            800 // 속도
        );
    }
})

//  메뉴 벡그라운드 투명하게
window.addEventListener('scroll', function() { // 마우스로 스크롤 할때
    if(this.window.scrollY>150) { // Y축으로 150 픽셀 이상 했다 
        this.document.querySelector('#navbar').style.opacity = 0.5;  // 상단의 navbar를 0.5 정도 투명하게 만든다.
    }
    else {
        this.document.querySelector('#navbar').style.opacity = 1;  // 그게 아니면 원상태로 돌아간다.
    }
});