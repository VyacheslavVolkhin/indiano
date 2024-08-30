$.fn.isVisible = function () {

	let elementTop = $(this).offset().top;
	let elementBottom = elementTop + $(this).outerHeight();

	let viewportTop = $(window).scrollTop();
	let viewportBottom = viewportTop + $(window).height();

	let flag = elementBottom > viewportTop && elementTop < viewportBottom;

	let item = $(this)

	if(flag) {

		if(item.hasClass('lz-bg')) {
			let src = item.attr('href');
			$('<img>').attr('src', src).load(function(){
				item.css('background-image', 'url(' + src + ')');
				item.removeClass('lz-lazy');
				item.removeClass('lz-bg');
			});
		}else{
			let 
			src = item.attr('data-src');
			item.removeAttr('data-src');

			item.attr('src', src);
			item.on('load', function(){
				item.removeClass('lz-lazy');
			})
		}
	}
};

function getURLVar(key) {
	var value = [];

	var query = document.location.search.split('?');

	if (query[1]) {
		var part = query[1].split('&');

		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');

			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}

		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
}
$(function(){

	$(window).on('load scroll resize', function(){
		$('.lz-lazy').each(function(){
			$(this).isVisible();
		});
	});

	$(window).on('resize', function(){$.fn.matchHeight._update();});

	$(window).on('load scroll resize', function(){
		if($(document).scrollTop() > 50) {
			$('.header').addClass('active');
			$('.toTop').addClass('active');
		}else{
			$('.header').removeClass('active');
			$('.toTop').removeClass('active');
		}
	})

	if($('.page__search').length) {
		$(window).on('load scroll resize', function(){
			var $pageH = $('.page__top').outerHeight() + $('.page__top').offset().top;

			if($(document).scrollTop() > $pageH) {
				$('.hsearch__cont').addClass('active');
			}else{
				$('.hsearch__cont').removeClass('active');
			}
		})
	}
	$(window).on('scroll resize', function(){
		$('.hsearch__cont').removeClass('show');
	})
	$(document).on('click', '.head__search a', function(e){
		e.preventDefault();
		var $search = $('.hsearch__cont');
		if(!$search.hasClass('active')){
			if($search.hasClass('show')) {
				$search.removeClass('show');
			}else{
				$search.addClass('show');
			}
		}
	})


	$('input[name="phone"]').inputmask("+7 (999) 999-99-99");
	$('input[name="telephone"]:not(#input-payment-telephone)').inputmask("+7 (999) 999-99-99");

	if($('.select_style').length){$('.select_style').styler();}
	
	$(document).on('click','.modalshow', function(e){
		e.preventDefault();
		var 
		$href = $(this).attr('href');

		if($(this).hasClass('modalclose')) {
			$instance = $.fancybox.getInstance();
			if($instance){$instance.close();}
		}

		$.fancybox.open({
			src  : $href,
			type : 'inline',
			opts : {
				animationEffect: "zoom-in-out",
				afterShow : function( instance, current ) {
					if($href === '#modal_menu') {
						$('#modal_menu').addClass('mmenu__vis');
					}
				},
				afterClose : function( instance, current ) {
					if($href === '#modal_menu') {
						$('#modal_menu').removeClass('mmenu__vis');
					}
				},
			}
		});
	})

	$(document).on('click', '.pr__btn', function(e) {
		e.preventDefault();

		var 
		cont = $(this).siblings('.pr__images'),
		first = cont.find('img:first'),
		last = cont.find('img:last'),
		current = cont.find('img.active').length ? cont.find('img.active') : cont.find('img:first'),
		next;

		if($(this).hasClass('pr__next')) {
			next = ((current.next().length) ? ((current.next().hasClass('active')) ? first : current.next()) : first);	
		}else{
			next = ((current.prev().length) ? ((current.prev().hasClass('active')) ? last : current.prev()) : last);	
		}
		current.removeClass('active');
		next.addClass('active');

	});

	$(document).on('click', '.form__viewpass', function(e) {
		e.preventDefault();
		var $inp = $(this).siblings('input');

		if ($inp.attr('type') == 'password'){
			$(this).addClass('view');
			$inp.attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$inp.attr('type', 'password');
		}

		return false;
	})



	if($('.pr__images').length) {
		$('.pr__images').slick({
			lazyload: 'ondemand',
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			dotsClass: 'nav__dots',
			prevArrow: '<button type="button" class="slick-prev nav__item nav__prev"><svg><use xlink:href="#arrow-left" /></svg></button>',
			nextArrow: '<button type="button" class="slick-next nav__item nav__next"><svg><use xlink:href="#arrow-right" /></svg></button>',
			customPaging: function(slider, i) { 
				return '<button class="tab"><span>' + (i+1) + ' из ' + slider.$slides.length + '</span></button>';
			},
		});
	}

	/* COLLECTION SLIDER */
	if($('.coll__slider').length) {
		$('.coll__slider').each(function(key, item){
			$(this).addClass('coll__slider-'+key);
			$('.coll__slider-'+key+' .coll__sliderin').slick({
				lazyload: 'progressive',
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: true,
				dotsClass: 'nav__dots',
				appendDots: '.coll__slider-'+key + ' .nav__cont',
				prevArrow: '.coll__slider-'+key + ' .nav__cont .nav__prev',
				nextArrow: '.coll__slider-'+key + ' .nav__cont .nav__next',
				customPaging: function(slider, i) { 
					return '<button class="tab"><span>' + (i+1) + ' из ' + slider.$slides.length + '</span></button>';
				},
				responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					},
				}
				]
			});
		})
		
	}
	/* # COLLECTION SLIDER */



	/* MODULE TABS */
	let mtabSlides = [];
	if($('.mtab__slider').length) {
		key = 0;
		$('.mtab__slider').each(function(key, item){
			$(this).addClass('mtab__slider-'+key);
			mtabSlides[key] = $('.mtab__slider-'+key+' .mtab__sliderin').slick({
				lazyload: 'progressive',
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				dotsClass: 'nav__dots',
				appendDots: '.mtab__slider-'+key + ' .mtab__nav',
				// prevArrow: '.mtab__slider-'+key + ' .mtab__nav .nav__prev',
				// nextArrow: '.mtab__slider-'+key + ' .mtab__nav .nav__next',
				prevArrow: '<button type="button" class="slick-prev nav__item nav__prev"><svg><use xlink:href="#arrow-left" /></svg></button>',
				nextArrow: '<button type="button" class="slick-next nav__item nav__next"><svg><use xlink:href="#arrow-right" /></svg></button>',
				customPaging: function(slider, i) { 
					return '<button class="tab"><span>' + (i+1) + ' из ' + slider.$slides.length + '</span></button>';
				},
				responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					},
				}
				]
			});
			
		})


		$(document).on('click', '.mtab__item', function(e){
			e.preventDefault();
			var 
			$self = $(this),
			$href = $self.attr('href'),
			$cont = $self.closest('.section_mtab');

			if(!$self.hasClass('active')) {
				$cont.find('.mtab__item').removeClass('active');
				$cont.find('.mtab__pane').removeClass('active');
				$self.addClass('active');
				$cont.find($href).addClass('active');

				$('.mtab__nav .nav__dots').remove();
				$.each(mtabSlides, function(key,item) {
					mtabSlides[key].slick('reinit');
				});

				setTimeout(function(){
					$('.pr__images').slick('setPosition');
					$(window).resize();
				}, 250);

			}
		})
	}
	/* # MODULE TABS */


	/* VIDEO SLIDER */
	if($('.video__slider').length) {
		$('.video__slider').slick({
			lazyload: 'progressive',
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			prevArrow: '<button type="button" class="slick-prev nav__item nav__prev"><svg><use xlink:href="#arrow-left" /></svg></button>',
			nextArrow: '<button type="button" class="slick-next nav__item nav__next"><svg><use xlink:href="#arrow-right" /></svg></button>',
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			}
			]
		});
	}
	/* # VIDEO SLIDER */


	$(document).on('click', '.coll__show a', function(e){
		e.preventDefault();
		$(this).parent().stop(true, true).slideUp();
		$(this).parent().addClass('hidden').siblings('.coll__hidden').stop(true, true).slideDown();
	})



	$(document).on('click','.qty__change .qty__plus', function(e){
		console.log('plus');
		e.preventDefault();
		var
		$input = $(this).closest('.qty__cont').find('input'),
		$new_val = parseInt($input.val()) + 1;
		$input.val($new_val);
		$input.trigger('change');

	})
	$(document).on('click','.qty__change .qty__minus', function(e){
		e.preventDefault();
		var
		$input = $(this).closest('.qty__cont').find('input'),
		$new_val = parseInt($input.val()) - 1;
		$input.val($new_val);
		$input.trigger('change');

	})

	$(document).on('change', '.qty__change .qty__input', function(){

		var
		$input = $(this),
		$val = $(this).val(),
		$min = $input.attr('data-min'),
		$new_val = $min;
		$id = $input.attr('data-id');
		if(isNaN($val) || $val < $min){
			$input.val($new_val);
		}


		if($(this).closest('.cart__cont').length) {
			$(this).closest('.cart__cont').submit();
		}

	});

	$('.search__item').on('submit', function(e){
		e.preventDefault();
		var url = $('base').attr('href') + 'index.php?route=product/search';
		var value = $(this).find('input[name=\'search\']').val();
		if (value) {
			url += '&search=' + encodeURIComponent(value);
		}
		location = url;
		return false;
	})




	// FORM REGISTER
	$('.form_register').on('submit', function(){
		var
		$form = $(this),
		$data = $form.serialize(),
		$agree = $form.find('input[name="agree"]:checked'),
		$error = false;



		if($form.find('input[name="agree"]').length && !$agree.length){
			$form.find('.agree__cont').addClass('invalid');
			$error = true;
		}else{
			$form.find('.agree__cont').removeClass('invalid');
		}

		if($error){
			return false;
		}else{
			$.ajax({
				type: "POST", 
				url: "index.php?route=themeset/themeset/register", 
				dataType: "json", 
				data: $data,
				beforeSend: function(json) {

				},
				success: function(json){
					if(json['success']){
						$form.find('.modal__alert').removeClass('error');
						$form.find('.modal__alert').addClass('valid').html('Вы успешно зарегистрировались!<br>Обновите страницу, чтобы увидеть цены<br><br><a href="#" onclick="location.reload()">Обновить страницу</a>');
						$form.find('.modal__alert').stop(true,true).slideDown();
					}
					if(json['error']) {
						$form.find('.modal__alert').addClass('error').text(json['error']);
						$form.find('.modal__alert').stop(true,true).slideDown();
					}
				},
				error: function(json){
					console.log('register error', json);
				}
			});
		}
		return false;
	})
	$('.form_login').on('submit', function(){
		var
		$form = $(this),
		$data = $form.serialize();

		$.ajax({
			type: "POST", 
			url: "index.php?route=themeset/themeset/login", 
			dataType: "json", 
			data: $data,
			beforeSend: function(json) {

			},
			success: function(json){
				if(json['success']){
					location.reload();
					// $form.find('.modal__alert').removeClass('error');
					// $form.find('.modal__alert').addClass('valid').html('Вы успешно авторизовались!<br>Обновите страницу, чтобы увидеть цены<br><br><a href="#" onclick="location.reload()">Обновить страницу</a>');
					$form.find('.modal__alert').stop(true,true).slideDown();
				}
				if(json['error']) {
					$form.find('.modal__alert').addClass('error').text(json['error']);
					$form.find('.modal__alert').stop(true,true).slideDown();
				}
			},
			error: function(json){
				console.log('login error', json);
			}
		});
		return false;
	})
	$('.form_forgotten').on('submit', function(){
		var
		$form = $(this),
		$data = $form.serialize();

		$.ajax({
			type: "POST", 
			url: "index.php?route=themeset/themeset/forgotten", 
			dataType: "json", 
			data: $data,
			beforeSend: function(json) {

			},
			success: function(json){
				if(json['success']){
					$form.find('.modal__alert').removeClass('error');
					$form.find('.modal__alert').addClass('valid').html(json['success']);
					$form.find('.modal__alert').stop(true,true).slideDown();
				}
				if(json['error']) {
					$form.find('.modal__alert').addClass('error').text(json['error']);
					$form.find('.modal__alert').stop(true,true).slideDown();
				}
			},
			error: function(json){
				console.log('login error', json);
			}
		});
		return false;
	})
	// # FORM REGISTER

	// FORM SUBMIT
	$('.form_bid').on('submit', function(){
		var
		$form = $(this),
		$data = $form.serialize(),
		$name = $form.find('input[name="name"]'),
		$phone = $form.find('input[name="phone"]'),
		$email = $form.find('input[name="email"]'),
		$agree = $form.find('input[name="agree"]:checked'),
		$rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/,
		$error = false;


		if($form.find('input[name="agree"]').length && !$agree.length){
			$form.find('.agree__cont').addClass('invalid');
			$error = true;
		}else{
			$form.find('.agree__cont').removeClass('invalid');
		}

		if($name.length){
			if($name.val().length < 3){
				$name.addClass('invalid'); 
				$error = true;
			}else{
				$name.removeClass('invalid');
			}
		}
		if($phone.length){
			if($phone.val().length < 1){
				$phone.addClass('invalid'); 
				$error = true;
			}else{
				$phone.removeClass('invalid');
			}
		}
		if($email.length){
			if($email.val().length < 1 || !$rv_email.test($email.val())){
				$email.addClass('invalid');
				$error = true;		
			}else{
				$email.removeClass('invalid');
			}
		}

		if($error){
			return false;
		}else{
			$.ajax({
				type: "POST", 
				url: "index.php?route=themeset/themeset/send", 
				dataType: "json", 
				data: $data,
				beforeSend: function($json) {

				},
				success: function($json){
					if($json['success']){

						// ga('send', 'event', 'forms', 'vstsro');
						// yaCounter46379184.reachGoal('forms_vstsro');

						$instance = $.fancybox.getInstance();
						if($instance){$instance.close();}
						$.fancybox.open({
							src  : $('#modal_success'),
							type : 'inline'
						});
					}
				},
				error: function(){

				}
			});
		}
		return false;
	})
	// # FORM SUBMIT


	// GO TO 
	$('.goTo').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});

	$(document).on('click','.addtocart', function(e){
		e.preventDefault();
		var options = [];
		
		var sel = $(this).parents('.pr__bottom').find('select');
		var pid = $(this).attr('zonclick');
		var inp = $(this).parents('.pr__bottom').find('input');
		var selname = sel.attr('name').replace(/[^0-9]/g, '');
		var inpname = inp.attr('name').replace(/[^0-9]/g, '');
		cart.add(pid.replace(/[^0-9]/g, ''),1,{selname:sel.val(),inpname:inp.val()});
	});
	/* CHANGE VIEW */
	$(document).on('click','#list-view', function(e){
		e.preventDefault();
		$('.category__list').addClass('cat_list_view');
		$(this).addClass('active');
		$('#grid-view').removeClass('active');
		localStorage.setItem('display', 'list');

		setTimeout(function(){
			$.fn.matchHeight._update();
		}, 400)
	})
	$(document).on('click','#grid-view', function(e){
		e.preventDefault();
		$('.category__list').removeClass('cat_list_view');
		$(this).addClass('active');
		$('#list-view').removeClass('active');
		localStorage.setItem('display', 'grid');


		setTimeout(function(){
			$('.category__list .pr__images').slick('refresh');
		}, 200)

		setTimeout(function(){
			$.fn.matchHeight._update();
		}, 400)
	})

	/* # CHANGE VIEW */

	if (localStorage.getItem('display') == 'list') {
		$('#list-view').trigger('click');
		$('#list-view').addClass('active');
	} else {
		$('#grid-view').trigger('click');
		$('#grid-view').addClass('active');
	}


	// Currency
	$('.curr__item button').on('click', function(e) {
		e.preventDefault();

		var $self = $(this),
		form = $self.closest('form');

		form.find('input[name=\'code\']').val($self.attr('name'));

		form.submit();
	});

});



var cart = {
	'add': function(product_id, quantity, options = '') {
		if(options){
			var productData = {'product_id' : product_id, 'quantity': (typeof(quantity) != 'undefined' ? quantity : 1),'option':options};

			$.ajax({
				url: 'index.php?route=checkout/cart/add',
				type: 'post',
				data: $.param(productData),
				dataType: 'json',
				beforeSend: function() {

				},
				complete: function(){

				},
				success: function(json) {

					var html = '';

					if (json['redirect']) {
						location = json['redirect'];
					}

					var now_location = String(document.location.pathname);

					if ((now_location == '/cart/') || (now_location == '/checkout/') || (getURLVar('route') == 'checkout/cart') || (getURLVar('route') == 'checkout/checkout') || (getURLVar('route') == 'checkout/buy')) {
						location = 'index.php?route=checkout/cart';
					}

					if (json['success']) {

						$('.alert__modal').remove();
						var html = $('<div class="alert alert-success alert__modal"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
						$('body').append(html);
						setTimeout(function(){
							html.remove();
						}, 5000);

						if(json['count']) {
							$('.hcart__num').text(json['count']);
							$('.hcart__text').text(json['cart_price']);
						}else{
							$('.hcart__num').text(0);
							$('.hcart__text').text('Корзина пуста');
						}

					}

				},
				error: function(json) {
					console.log(json);
				}
			});
		}
		else{
			$.ajax({
				url: 'index.php?route=checkout/cart/add',
				type: 'post',
				data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
				dataType: 'json',
				beforeSend: function() {

				},
				complete: function(){

				},
				success: function(json) {

					var html = '';

					if (json['redirect']) {
						location = json['redirect'];
					}

					var now_location = String(document.location.pathname);

					if ((now_location == '/cart/') || (now_location == '/checkout/') || (getURLVar('route') == 'checkout/cart') || (getURLVar('route') == 'checkout/checkout') || (getURLVar('route') == 'checkout/buy')) {
						location = 'index.php?route=checkout/cart';
					}

					if (json['success']) {

						$('.alert__modal').remove();
						var html = $('<div class="alert alert-success alert__modal"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
						$('body').append(html);
						setTimeout(function(){
							html.remove();
						}, 5000);

						if(json['count']) {
							$('.hcart__num').text(json['count']);
							$('.hcart__text').text(json['cart_price']);
						}else{
							$('.hcart__num').text(0);
							$('.hcart__text').text('Корзина пуста');
						}

					}

				},
				error: function(json) {
					console.log(json);
				}
			});
		}
	},
	'update': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit_qty',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				// $('.mcart__outer').addClass('loading');
			},
			complete: function(){
				// $('.mcart__outer').removeClass('loading');
			},
			success: function(json) {
				var now_location = String(document.location.pathname);

				if ((now_location == '/cart/') || (now_location == '/checkout/') || (getURLVar('route') == 'checkout/cart') || (getURLVar('route') == 'checkout/checkout') || (getURLVar('route') == 'checkout/buy')) {
					location = 'index.php?route=checkout/cart';
				} else {


					// $('.mcart__outer').load('index.php?route=common/cart_modal/info .mcart__outerin');
					
					$('.alert__modal').remove();
					var html = $('<div class="alert alert-success alert__modal"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
					$('body').append(html);
					setTimeout(function(){
						html.remove();
					}, 5000);

					if(json['count']) {
						$('.hcart__num').text(json['count']);
						$('.hcart__text').text(json['cart_price']);
					}else{
						$('.hcart__num').text(0);
						$('.hcart__text').text('Корзина пуста');
					}

				}

			},
			error: function(json) {
				console.log(json);
			}
		});
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				// $('.mcart__outer').addClass('loading');
			},
			complete: function(){
				// $('.mcart__outer').removeClass('loading');
			},
			success: function(json) {
				var now_location = String(document.location.pathname);

				if ((now_location == '/cart/') || (now_location == '/checkout/') || (getURLVar('route') == 'checkout/cart') || (getURLVar('route') == 'checkout/checkout')) {
					location = 'index.php?route=checkout/cart';
				} else {

					$('.alert__modal').remove();
					var html = $('<div class="alert alert-success alert__modal"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
					$('body').append(html);
					setTimeout(function(){
						html.remove();
					}, 5000);

					if(json['count']) {
						$('.hcart__num').text(json['count']);
						$('.hcart__text').text(json['cart_price']);
					}else{
						$('.hcart__num').text(0);
						$('.hcart__text').text('Корзина пуста');
					}

				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}



function wishlist_change($element, $url = '', $action = ''){

	var
	$product_id = $($element).attr('data-id'),
	$label = $('.wish-'+$product_id),
	$label_text = $label.find('span');

	if($label.hasClass('active') || $action == 'remove'){
		$.ajax({
			url: 'index.php?route=account/wishlist/remove',
			type: 'post',
			data: 'product_id=' + $product_id + '&url=' + $url,
			dataType: 'json',
			success: function(json) {
				if (json['redirect']) {
					location = json['redirect'];
				}

				$('.alert__modal').remove();
				var html = $('<div class="alert alert-success alert__modal"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
				$('body').append(html);
				setTimeout(function(){
					html.remove();
				}, 5000);

				var now_location = String(document.location.pathname);

				if ((now_location == '/wishlist/') || (getURLVar('route') == 'account/wishlist')) {
					$label.closest('.pr__outer').remove();

					if(!$('.category__list .pr__outer').length) {
						$('.nf__cont').removeClass('hidden');
					}
				}
				
				$label.removeClass('active');
				$label_text.text('В избранное');
				$('.head__wish span').text(json['total_count']);
			},
			error: function(json) {
				console.log(json);
			}
		});
	}else{
		$.ajax({
			url: 'index.php?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + $product_id,
			dataType: 'json',
			success: function(json) {
				if (json['redirect']) {
					location = json['redirect'];
				}
				if (json['success']) {

					$('.alert__modal').remove();
					var html = $('<div class="alert alert-success alert__modal"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
					$('body').append(html);
					setTimeout(function(){
						html.remove();
					}, 5000);

					$label.addClass('active');
					$label_text.text('В избранном');

					$('.head__wish span').text(json['total_count']);
				}
				
				$label.addClass('active');
			},
			error: function(json) {
				console.log(json);
			}
		});
	}
}