
		$(".menu-trigger").on('click', function() {
			$(".offcanvas-menu").addClass("show-menu");
			$(".offcanvas-menu").addClass("show-menu");
		});
		
		$(".menu-close").on('click', function() {
			$(".offcanvas-menu").removeClass("show-menu");
		});

		$(".hambug-menu").on("click", function() {
			$(".hambug-menu").toggleClass("active")
		});

		$(".hambug-menu").on('click', function() {
        	$('.main-menu').toggleClass('menu-open');
    	});
		$(".hambug-menu").on('click', function() {
        	$('.offcanvas-menu').toggleClass('menu-open');
    	});
