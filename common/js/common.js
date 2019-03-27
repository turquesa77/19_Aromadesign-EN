// GDPR対応 -------------------------------------------
/** GDPR **/
window.addEventListener('DOMContentLoaded',function(){
	var cookie_name = "gdpr";
	// cookie check
	if(document.cookie.indexOf(cookie_name) === -1){
		/* add style for modal window */
		var css = document.createElement('style');
		var css_cnt = (function () {/*
			@keyframes close {
				100% {
					display: none;
					opacity: 0;
					transform: translateX(-50%) translateY(-50%) scale(1.2);
				}
			}
			.modal_content.close { animation: .5s forwards close;}
			.modal_content {
				position: fixed;
				top: 50%;
				left: 50%;
				z-index: 9999;
				width: 80%;
				max-width: 800px;
				padding: 25px;
				box-sizing: border-box;
				box-shadow: 0 5px 15px rgba(0,0,0,.15);
				border: 1px solid #ebebeb;
				background: #fff;
				line-height: 1.4;
				transition: 0.5s;
				transform: translateX(-50%) translateY(-50%);
			}
			.modal_content p {
				margin-bottom: 20px;
				font-size: 14px;
			}
			
			.modal_content a {
				color: #008bd5 !important;
				text-decoration: underline !important;
				opacity: 1 !important;
			}
			.modal_content a:hover {
				color: #00a6ff !important;
				text-decoration: none !important;
			}
			
			.modal_content .close_button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 200px;
				height: 40px;
				margin: auto;
				box-shadow: 0 1px 3px rgba(0,0,0,0.5);
				border: none;
				border-radius: 25px;
				background: #008bd5;
				color: #fff;
				font-weight: bold;
				font-size: 16px;
				cursor: pointer;
			}
			.close_button:hover { background: #00a6ff;}
	*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");

		var rule = document.createTextNode(css_cnt);
		css.media = 'screen';
		css.type = 'text/css';
		if (css.styleSheet) {
			css.styleSheet.cssText = rule.nodeValue;
		} else {
				css.appendChild(rule);
		};
		document.getElementsByTagName('head')[0].appendChild(css);

		/* add modal div element */
		var modal = document.createElement('div');
		modal.classList.add('modal_content');

		// modal inner text
		modal.innerHTML = (function () {/*
			<p>This website uses Cookies to improve functionality and performance. If you continue browsing the site, you are giving implied consent to the use of Cookies on this website. If you want to know more or refuse consent, read our <a href="https://www.jma.or.jp/en/policy/cookie.html" target="_blank">Cookie Policy.</a></p>
		*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");

		// accept btn
		var accept_btn = document.createElement('button');
		accept_btn.classList.add('close_button');
		accept_btn.textContent = "Accept";
		modal.appendChild(accept_btn);

		// add modal element to body
		document.body.insertAdjacentElement('afterbegin',modal);

		// add event listener
		accept_btn.addEventListener('click',function(){
			// set cookie
			document.cookie = cookie_name + '=true;path=/';
			// close modal
			this.parentNode.classList.add('close');
		});
	}
});

// slick: keyVisual -------------------------------------------

$(document).ready(function(){
	$('.keyVisual__slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true, //マウスホバーで一時停止
		infinite: true, //スライドの無限ループの有効化
		slidesToShow: 1, // 表示するスライドの数
		slidesToScroll: 1, // 一度にスクロールするスライドの数
		variableWidth: true, // スライドの横幅をバラバラにする
		centerMode: true, // 要素を中央寄せ
		//centerPadding: '20px', // centerMode:trueの時、左右のスライドを見せる幅
	});
});

// slick: links__slider1 -------------------------------------------

$(document).ready(function(){
	$('.links__slider1').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true, //マウスホバーで一時停止
		infinite: true, //スライドの無限ループの有効化
		slidesToShow: 4, // 表示するスライドの数
		slidesToScroll: 2, // 一度にスクロールするスライドの数
		//dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});

// slick: photo__slider -------------------------------------------

$(document).ready(function(){
	$('.photo__slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true, //マウスホバーで一時停止
		infinite: true, //スライドの無限ループの有効化
		slidesToShow: 1, // 表示するスライドの数
		slidesToScroll: 1, // 一度にスクロールするスライドの数
	});
});

// スムーススクロール -------------------------------------------

$(function(){
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^="#"]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// 移動先を取得
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

// ページトップリンク -------------------------------------------

$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// フッターメニュー Toggle -------------------------------------------

$(function(){
	$(".footer__tgl--title").click(function(){
		$(this).next().slideToggle();
	});
});

// よくある質問 Toggle -------------------------------------------

$(function(){
	$('.qanda__define dt').click(function(event) {
		$(this).next().slideToggle();
	});
});

