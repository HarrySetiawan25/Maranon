/* =================================
------------------------------------
	Maranon | Sports Wear & Shoes
 ------------------------------------
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");	
});

(function($) {
	var shoeProduct= [
		{"name": "NIKE Joyride Run Flyknit", "price": 135, "pId":"0",
				"desc": "", "url": "./img/product/1.jpg", 
				"targetUrl": "./img/single-product/1"
				},
		{"name": "ANTA KT5", "price": 115, 
				 "desc": "", "url": "./img/product/2.jpg", "pId":"1",
				 "targetUrl": "./img/single-product/2"
				},
		{"name": "ANTA NASA WHITE", "price": 85, 
				 "desc": "", "url": "./img/product/3.jpg", "pId":"2",
				 "targetUrl": "./img/single-product/3"
				},
		{"name": "ANTA KT4", "price": 75, 
				 "desc": "", "url": "./img/product/4.jpg", "pId":"3",
				 "targetUrl": "./img/single-product/4"
				},
		{"name": "ANTA VEGETA", "price": 110, 
				 "desc": "", "url": "./img/product/5.jpg", "pId":"4",
				 "targetUrl": "./img/single-product/5"
				},
		{"name": "ANTA GOKU", "price": 95, 
				 "desc": "", "url": "./img/product/6.jpg", "pId":"5",
				 "targetUrl": "./img/single-product/6"
				},
		{"name": "ANTA KT4 LIMITED EDITION", "price": 105, "pId":"6",
				 "desc": "", "url": "./img/product/7.jpg", 
				 "targetUrl": "./img/single-product/7"
				},
		{"name": "ANTA KT3", "price": 75, 
				"desc": "", "url": "./img/product/8.jpg", "pId":"7",
				"targetUrl": "./img/single-product/8"
				},
		{"name": "ANTA KT4 BHM", "price": 75, 
				"desc": "", "url": "./img/product/9.jpg", "pId":"8",
				"targetUrl": "./img/single-product/9"
				},
		{"name": "ANTA NASA BLUE GRAY", "price": 85, 
				"desc": "", "url": "./img/product/10.jpg", "pId":"9",
				"targetUrl": "./img/single-product/10"
				},
		{"name": "ANTA KRILIN", "price": 95, 
				"desc": "", "url": "./img/product/11.jpg", "pId":"10",
				"targetUrl": "./img/single-product/11"
				},
		{"name": "ANTA NASA BLACK", "price": 85, 
				 "desc": "", "url": "./img/product/12.jpg", "pId":"11",
				  "targetUrl": "./img/single-product/12"
				},
		{"name": "NIKE RUN WOMAN", "price": 100, 
				 "desc": "", "url": "./img/product/13.jpg", "pId":"12",
				 "targetUrl": "./img/single-product/13"
				},
		{"name": "NIKE BASKETBALL", "price": 120, 
				 "desc": "", "url": "./img/product/14.jpg", "pId":"13",
				 "targetUrl": "./img/single-product/14"
				},
		{"name": "NIKE FUTSAL", "price": 99, 
				 "desc": "", "url": "./img/product/15.jpg", "pId":"14",
				 "targetUrl": "./img/single-product/15"
				},
		{"name": "ANTA THANOS", "price": 95, 
				 "desc": "", "url": "./img/product/16.jpg", "pId":"15",
				 "targetUrl": "./img/single-product/16"
				},
		{"name": "NIKE LUNAREPIC FLYKNIT 2", "price": 99, 
				 "desc": "", "url": "./img/product/17.jpg", "pId":"17",
				 "targetUrl": "./img/single-product/17"
				}
	];

	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;
	
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');
	
			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
	};

	var $_GET = {};

	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
		function decode(s) {
			return decodeURIComponent(s.split("+").join(" "));
		}

		$_GET[decode(arguments[1])] = decode(arguments[2]);
	});
	
	/*------------------
		Seacrch Box
	--------------------*/
	var temp5="";
	//looping to asign all product data into table
	for(var i=0; i<=15; i++){
		temp5 = temp5 +
		"<tr>"+
			"<td><a href='./product.html?id="+i+"'>"+shoeProduct[i].name+"</a></td>"+
			//asign id in href for variable in product page
		"</tr>";
	}
	$('#myTable').html(temp5); //asign the table to the html
	$('.result').hide(); //hide the result box (default)
	$('.header-search-box > input[type="text"]').on('keyup', function(){
		var inputVal = $(this).val().toLowerCase();//user text input to lower key
    	$('#myTable > tr').each(function() {
			if($(this).text().toLowerCase().search(inputVal) < 0){
				$(this).fadeOut();//eliminate the product that doesn't match with user input input
			}else{
				$('.result').show();//if match, show the table
				$(this).show();
			}
		});  
		$('.header-search-box').mouseleave('click', function(){
			$('.result').hide();//if the mouse leave from the table, hide the result again
		})
	});

	/*----------------
		Mini-Cart
	-----------------*/
	$('.mini-cart').hide();//first hide the mini cart (default)
	$('.mc-open').on('click', function(){
		$('.mini-cart').show();//if cart icon was clicked show the cart
	});
	$('.mini-cart').mouseleave('click', function(){
		$('.mini-cart').hide();//if mouse leave the cart, hide it again
	});


	/*------------------
		Navigation
	--------------------*/
	$('.main-menu').slicknav({
		prependTo:'.main-navbar .container',
		closedSymbol: '<i class="flaticon-right-arrow"></i>',
		openedSymbol: '<i class="flaticon-down-arrow"></i>'
	});

	/*------------------
		ScrollBar
	--------------------*/
	$(".cart-table-warp, .product-thumbs").niceScroll({
		cursorborder:"",
		cursorcolor:"#afafaf",
		boxzoom:false
	});


	/*------------------
		Category menu
	--------------------*/
	$('.category-menu > li').hover( function(e) {
		$(this).addClass('active');
		e.preventDefault();
	});
	$('.category-menu').mouseleave( function(e) {
		$('.category-menu li').removeClass('active');
		e.preventDefault();
	});

	/*-------------------
		Category Image
	--------------------- */
	function loadCategoryImage(){
		var temp4="";
		for(var i=0; i<=15; i++){
			temp4= temp4 +
			"<div class='col-lg-3 col-sm-6'>"+
				"<div class='product-item'>"+
					"<div class='pi-img'>";
		if(i==5){temp4 =temp4 + "<div class='tag-sale'>ON SALE</div>";}
		temp4= temp4 +	"<a href='./product.html?id="+i+"'>"+
							"<img class='productImg' data-pId='"+shoeProduct[i].pId+"' src='"+shoeProduct[i].url+"'>"+
						"</a>"+
						"<div class='pi-links'>"+
							"<a href='#1' data-pId='"+i+"' class='add-card'><i class='flaticon-bag'></i><span>ADD TO CART</span></a>"+" "+
							"<a href='#' class='wishlist-btn'><i class='flaticon-heart'></i></a>"+
						"</div>"+
					"</div>"+
					"<div class='pi-text'>"+
						"<h6>$"+shoeProduct[i].price+",00</h6>"+
						"<p>"+shoeProduct[i].name+"</p>"+
					"</div>"+
				"</div>"+
			"</div>";
		}
		$('#category-img').html(temp4);
	}

	loadCategoryImage();

	$('#filterMenu').hide();
	$('.filter-btn').on('click', function(){
		$('#filterMenu').show();
	});

	$('#filterMenu').on('click', function(){
		$('#filterMenu').hide();
	});

	$('#filterMenu').mouseleave(function(){
		$('#filterMenu').hide();
	});
	/* $('#filterMenu').scroll(function(){
		if($('#filterMenu').scrollTop() > $('#filterMenu').offset().top){
			$('#filterMenu').css('margin-top', '-50');
		}else{
			$('#filterMenu').css('margin-top', '0');
		}
	}); */

	//./index.html?cartId="+i+"


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*------------------
		Hero Slider
	--------------------*/
	var hero_s = $(".hero-slider");
	hero_s.owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		items: 1,
		dots: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
		onInitialized: function() {
			var a = this.items().length;
			$("#snh-1").html("<span>1</span><span>" + a + "</span>");
		}
	}).on("changed.owl.carousel", function(a) {
		var b = --a.item.index, a = a.item.count;
		$("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + a + "</span>");

	});

	hero_s.append('<div class="slider-nav-warp"><div class="slider-nav"></div></div>');
	$(".hero-slider .owl-nav, .hero-slider .owl-dots").appendTo('.slider-nav');

	
	/*------------------
		Brands Slider
	--------------------*/
	function loadBrandSlider(){
	var temp="";//create temporary variable

		for(var i=0; i<=4; i++){//looping for asign the product data
			temp =temp + //asign temporary variable 
			"<div class='product-item'>"+
				"<div class='pi-img'>";
	if(i==1){temp =temp + "<div class='tag-new'>New</div>";}
	temp =temp + "<a href='./product.html?id="+i+"'>"+//asign id for variable in product page
/*get the product url for the image*/"<img class='productImg' src='"+shoeProduct[i].url+"'>"+ 
					"</a>"+
					"<div class='pi-links'>"+
			//asign id, later we use this id to identify what product to add to cart
						"<a href='#1' data-pId='"+i+"' class='add-card'><i class='flaticon-bag'>"+
						"</i><span>ADD TO CART</span></a>"+" "+
						"<a href='#' class='wishlist-btn'><i class='flaticon-heart'></i></a>"+
					"</div>"+
				"</div>"+
				"<div class='pi-text'>"+
					"<h6>$"+shoeProduct[i].price+",00</h6>"+//get price
					"<p>"+shoeProduct[i].name+"</p>"+//get name
				"</div>"+
			"</div>";
		}
		$('.product-slider').html(temp);//asign temp into div in html
	}
	loadBrandSlider();//load the function

	 $('.product-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin : 30,
		autoplay: true,
		navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			768 : {
				items: 3,
			},
			1200 : {
				items: 4,
			}
		}
	});
 
	/*------------------
		Top Product
	--------------------*/
	function loadTopProduct(){
		var temp1="";
		for(var i=4; i<=11; i++){
			temp1= temp1 +
			"<div class='col-lg-3 col-sm-6'>"+
				"<div class='product-item'>"+
					"<div class='pi-img'>";
		if(i==5){temp1 =temp1 + "<div class='tag-sale'>ON SALE</div>";}
		temp1= temp1 +	"<a href='./product.html?id="+i+"'>"+
							"<img class='productImg' data-pId='"+shoeProduct[i].pId+"' src='"+shoeProduct[i].url+"'>"+
						"</a>"+
						"<div class='pi-links'>"+
							"<a href='#1' data-pId='"+i+"' class='add-card'><i class='flaticon-bag'></i><span>ADD TO CART</span></a>"+" "+
							"<a href='#' class='wishlist-btn'><i class='flaticon-heart'></i></a>"+
						"</div>"+
					"</div>"+
					"<div class='pi-text'>"+
						"<h6>$"+shoeProduct[i].price+",00</h6>"+
						"<p>"+shoeProduct[i].name+"</p>"+
					"</div>"+
				"</div>"+
			"</div>";
		}
		$('#topProductImg').html(temp1);
	}
	loadTopProduct();


	/*------------------
		Load More
	--------------------*/
	var temp2="";
	for(var i=12; i<=15; i++){
		temp2= temp2 +
		"<div class='col-lg-3 col-sm-6'>"+
			"<div class='product-item'>"+
				"<div class='pi-img'>"+
				"<a href='./product.html?id="+i+"'>"+
					"<img class='productImg' data-pId='"+shoeProduct[i].pId+"' src='"+shoeProduct[i].url+"'>"+
				"</a>"+
					"<div class='pi-links'>"+
						"<a href='#1' data-pId='"+i+"' class='add-card'><i class='flaticon-bag'></i><span>ADD TO CART</span></a>"+
						"<a href='#' class='wishlist-btn'><i class='flaticon-heart'></i></a>"+
					"</div>"+
				"</div>"+
				"<div class='pi-text'>"+
					"<h6>$"+shoeProduct[i].price+",00</h6>"+
					"<p>"+shoeProduct[i].name+"</p>"+
				"</div>"+
			"</div>"+
		"</div>";
	}
	$('#load-more').html(temp2);
	$('#load-more').hide();
	$('#btnLoad').on('click', function(){
		$('#load-more').show();
		$('#btnLoad').hide();
	});
	

	/*------------------
		Popular Services
	--------------------*/
	$('.popular-services-slider').owlCarousel({
		loop: true,
		dots: false,
		margin : 40,
		autoplay: true,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive : {
			0 : {
				items: 1,
			},
			768 : {
				items: 2,
			},
			991: {
				items: 3
			}
		}
	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});

	/*-------------------
		Range Slider
	--------------------- */
	var rangeSlider = $(".price-range"),
		minamount = $("#minamount"),
		maxamount = $("#maxamount"),
		minPrice = rangeSlider.data('min'),
		maxPrice = rangeSlider.data('max');
	rangeSlider.slider({
		range: true,
		min: minPrice,
		max: maxPrice,
		values: [minPrice, maxPrice],
		slide: function (event, ui) {
			minamount.val('$' + ui.values[0]);
			maxamount.val('$' + ui.values[1]);
		}
	});
	minamount.val('$' + rangeSlider.slider("values", 0));
	maxamount.val('$' + rangeSlider.slider("values", 1));


	/*-------------------
		Quantity change
	--------------------- */
	var proQty = $('.pro-qty');
	proQty.prepend('<span class="dec qtybtn">-</span>');
	proQty.append('<span class="inc qtybtn">+</span>');
	proQty.on('click', '.qtybtn', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});

	/*-------------------------
		Shopping Cart Function
	---------------------------*/
	var countTotalItem;//var to count total
	var cart=[];//object cart
	var Item=function(url, name, price, count){
		this.url=url;
		this.name=name;
		this.price=price;
		this.count=count;
		this.size=42;
	};//object item

	var Item1=function(url, name, price, count, size){
		this.url=url;
		this.name=name;
		this.price=price;
		this.count=count;
		this.size=size;
	};

	function addToCart(url, name, price, count){
		for(var i in cart){
			if(cart[i].name===name){
				cart[i].count+=count;
				//if there are same item, then just change the total count
				countTotalItem= countTotalItem + 1;
				saveCart();//save it to local storage
				return;
			}
		}
		var item= new Item(url, name, price, count);
		cart.push(item);//if new item, then add it to cart object
		countTotalItem= countTotalItem + 1;
		saveCart();
	}

	function addToCart(url, name, price, count,size){
		for(var i in cart){
			if(cart[i].name===name){
				cart[i].count+=count;
				countTotalItem= countTotalItem + 1;
				saveCart();
				return;
			}
		}
		var item1= new Item1(url, name, price, count,size);
		cart.push(item1);
		countTotalItem= countTotalItem + 1;
		saveCart();
	}

	function removeFromCart(name){
		var substractCount=0;
		for(var i in cart){
			if(cart[i].name===name){
				substractCount=cart[i].count;
				countTotalItem-=substractCount;
				//if find the item that match name, then remove it.
				cart.splice(i, 1);
				saveCart();// save to local storage
				break;
			}
		}
	}
	function listCart(){
		var cartCopy=[];
		for(var i in cart){
			var item=cart[i];
			var itemCopy={};
			for(var p in itemCopy){
				itemCopy[p]=item[p];
			}
			cartCopy.push(itemCopy);
		}
		return cartCopy;
	}
	function clearCart(){
		cart = [];//clear the cart
		count=0;
		saveCart();//save to local storage
	}
	function countTotalPrice(){
		var totalPrice=0;
		for(var i in cart){
			//count total price
			totalPrice += cart[i].price * cart[i].count;
		}
		return totalPrice;
	}

	function saveCart(){
		//save the cart object to local storage with in string form
		localStorage.setItem('shoppingCart', JSON.stringify(cart));
		localStorage.setItem('countItem', JSON.stringify(countTotalItem));
	}

	function loadCart(){
		//get the string of cart then parse it into object
		cart= JSON.parse(localStorage.getItem('shoppingCart'));
		countTotalItem= JSON.parse(localStorage.getItem('countItem'));
	}
	loadCart();

	function showCart(){
		loadCart();//call function
		var cartCopy=listCart();
		var mcItem="";
		var mcTotal="";
		var mcButton="";
		var mcEmpty="";
		var totalPrice= countTotalPrice();

		if(cartCopy.length<=0){//if cart is empty
			$('.mc-item').hide();
			//hide the all the div, included button
			$('.mc-total').hide();
			$('.mc-btn').hide();
			mcEmpty="<p><i class='flaticon-shopping-cart'></i></p>No Products In The Cart";
			$('.mc-empty').html(mcEmpty);
			//show the notice that cart is empty
			$('.mc-empty').show();
			$('.shopping-cart > span').html(countTotalItem);
		}else{
			loadCart();
			//if there are item hide empty notice
			$('.mc-empty').hide();
			//then show all div, including button
			$('.mc-item').show();
			$('.mc-total').show();
			$('.mc-btn').show();
			for(var i in cart){
				mcItem= mcItem +
				"<li class='mc-li'>"+
					"<a href='#' data-pName='"+cart[i].name+"' class='mc-remove'>×</a>"+											
					"<a href='' class='product-name'>"+
						"<img src='"+cart[i].url+"' class='mc-img'>"+cart[i].name+ 					
					"</a>"+
					"<dl class='variation'>"+
						"<dt class='variation-Size'>Size: 42</dt>"+
					"</dl>"+
					"<span class='quantity'>"+cart[i].count+"× "+ 
						"<span class=''>"+
							"<span class='woocommerce-Price-currencySymbol'>$</span>"+cart[i].price+
						"</span>"+
					"</span>"+				
				"</li><hr>";
			}
	
			mcTotal = "<strong>SUBTOTAL</strong><span class='mc-price'>$"+totalPrice+"</span>";
			mcButton= mcButton +
				"<a class='paypal-logo'><img src='img/paypal1.png'></a>"+
				"<a href='./checkout.html' class='button'>CHECKOUT</a>"+
				"<a href='./cart.html' class='button'>VIEW CART</a>";
	
			$('.mc-item').html(mcItem); //asign all the the product data into the cart div
			$('.mc-total').html(mcTotal);
			$('.mc-btn').html(mcButton);
			$('.shopping-cart > span').html(countTotalItem);
		}
	}
	showCart();

	/*------------------
		Add To Cart
	--------------------*/
	$('.add-card').on('click', function(){
		var cartId= $(this).attr('data-pId');
		//if add-card was clicked, get id to identify which product.
		//then call function add to cart with parameter of Json Object
		addToCart(shoeProduct[cartId].url, shoeProduct[cartId].name, shoeProduct[cartId].price, 1);
		showCart();//call function showCarty
		loadCartImg();

		var cartIcon = $('.flaticon-shopping-cart');//get cart icon
		//find img of the clicked product
        var imgtodrag = $(this).parent('.pi-links').parent('.pi-img').find("img").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5', //make it kinda blur
                    'position': 'absolute',
                    'height': '150px',//make the size became small
                    'width': '150px',
                    'z-index': '100'//adjust it to the front of the page
            })
                .appendTo($('body'))
                .animate({
                'top': cartIcon.offset().top + 10, //make animation like it draged to cart icon
                    'left': cartIcon.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cartIcon.effect("shake", {
                    times: 2
                }, 200);//shake the cart icon 2 times
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
	});

	$('.mini-cart').on('click', '.mc-remove', function(){
		var Pname= $(this).attr('data-pName');
		removeFromCart(Pname);
		//if delete button was clicked, then remove the item
		showCart();
	});
	
	/*------------------
		load cart.html
	--------------------*/
	function loadCartImg(){
		loadCart();
		var output=[];
		var totalPrice= countTotalPrice();
		for(var i in cart){
	 output [i]= "<tr>"+
				"<td class='product-col'>"+
					"<img src='"+cart[i].url+"' alt=''>"+
					"<div class='pc-title'>"+
						"<h4>"+cart[i].name+"</h4>"+
						"<p>$"+cart[i].price+".00</p>"+
					"</div>"+
				"</td>"+
				"<td class='quy-col'>"+
					"<div class='quantity'>"+
						"<div class='pro-qty'>"+
							"<input type='text' value='"+cart[i].count+"'>"+
						"</div>"+
					"</div>"+
				"</td>"+
				"<td class='size-col'><h4>"+cart[i].size+"</h4></td>"+
				"<td class='total-col'><h4>$"+(cart[i].count*cart[i].price)+".00</h4></td>"+
			"</tr>";
		}
		$('.cart-content').html(output);		
		$('.total-cost').html('<h6>Total <span>$'+totalPrice+'.00</span></h6>');
	}

	loadCartImg();

	/*----------------------
		load Checkout.html
	------------------------*/
	function loadCheckOut(){
		loadCart();
		var output=[];
		var totalPrice=countTotalPrice();
		var priceList="";
		for(var i in cart){
		 output[i]="<li>"+
						"<div class='pl-thumb'><img src='"+cart[i].url+"' alt=''></div>"+
						"<h6>"+cart[i].name+"</h6>"+
						"<p>"+cart[i].count+"x   $"+cart[i].price+".00</p>"+
					"</li>";
		}

		priceList="<li>Total<span>$"+totalPrice+".00</span></li>"+
				  "<li>Shipping<span>free</span></li>"+
				  "<li class='total'>Total<span>$"+totalPrice+".00</span></li>";

		$('.product-list').html(output);
		$('.price-list').html(priceList);
	}
	loadCheckOut();


	/*------------------
		Single Product
	--------------------*/
	function loadSingleProductImg(){
		var productId= getUrlParameter('id');
		var temp3 = "";

			temp3="<div class='product-pic-zoom'>"+
					"<img role='presentation' class='zoomImg' src='"+shoeProduct[productId].targetUrl+"/1.jpg' alt=''>"+
				"</div>"+
				"<div class='product-thumbs' tabindex='1' style='overflow: hidden; outline: none;'>"+
					"<div class='product-thumbs-track'>"+
						"<div class='pt active' data-imgbigurl='"+shoeProduct[productId].targetUrl+"/1.jpg'><img src='"+shoeProduct[productId].targetUrl+"/1.jpg' alt=''></div>"+
						"<div class='pt' data-imgbigurl='"+shoeProduct[productId].targetUrl+"/2.jpg'><img src='"+shoeProduct[productId].targetUrl+"/2.jpg' alt=''></div>"+
						"<div class='pt' data-imgbigurl='"+shoeProduct[productId].targetUrl+"/3.jpg'><img src='"+shoeProduct[productId].targetUrl+"/3.jpg' alt=''></div>"+
						"<div class='pt' data-imgbigurl='"+shoeProduct[productId].targetUrl+"/4.jpg'><img src='"+shoeProduct[productId].targetUrl+"/4.jpg' alt=''></div>"+
					"</div>"+
				"</div>";
			$('#singleProductImg').html(temp3);
			$('.p-title').html(shoeProduct[productId].name);
			$('.p-price').html("$"+shoeProduct[productId].price+",00");
	}
	loadSingleProductImg();

	$('.product-thumbs-track > .pt').on('click', function(){
		$('.product-thumbs-track .pt').removeClass('active');
		$(this).addClass('active');
		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product-big-img').attr('src');
		if(imgurl != bigImg) {
			$('.product-big-img').attr({src: imgurl});
			$('.zoomImg').attr({src: imgurl});
		}
	});


	$('.product-pic-zoom').zoom();

})(jQuery);	
	

