$(window).load(function(){
	
	// ***********************************************
	// Resizing methods for a responsive design
	// ***********************************************
	
	//cache the containers and child elements for resizing
    var $page				 = $('#page'),
		$header              = $('#header'),
		$contentBoxGray      = $('.content-box-gray'),
		$smallBoxGray        = $('.small-box-gray'),
		$smallBoxOrange      = $('.small-box-orange'),
		$lastBox             = $('.last-box'),
		
		$text18              = $('.text18'),
		$text18_16           = $('.text18-16'),
		$text22              = $('.text22'),
		$text24              = $('.text24'),
		$text24_18           = $('.text24-18'),
		$text26              = $('.text26'),
		$text28              = $('.text28'),
		$text30              = $('.text30'),
		$text32              = $('.text32'),
		$text32_24           = $('.text32_24');
		$text36              = $('.text36'),
		$text40              = $('.text40'),
		$text42              = $('.text42'),
		$text44              = $('.text44'),
		$text46              = $('.text46'),
		$text50              = $('.text50'),
		$text64              = $('.text64'),
		$text80              = $('.text80'),
		$text90              = $('.text90'),
		$text106             = $('.text106'),
		$text110             = $('.text110'),
		
		$topNav              = $('#top-nav'),
        $topNavTarget1       = $topNav.find('a'),
		$topNavTarget2       = $topNav.find('.first-letter'),
		
		$adminInput          = $('.admin-content-box input'),
		$landingInput        = $('.landing-content-box input');

    //bind event handler to `window.resize`
    $(window).resize(function() {
		
		// adjust padding/margins (percentage based)
		$header.css('height', $page.width()*0.0859+"px");
		$contentBoxGray.css('margin-bottom', $page.width()*0.0155+"px");
		$smallBoxGray.css('margin-bottom', $page.width()*0.0090+"px");
		$smallBoxOrange.css('margin-bottom', $page.width()*0.0090+"px");
		$lastBox.css('margin-bottom', 0);
		$adminInput.css('margin-bottom', $page.width()*0.0070+"px");
		$landingInput.css('margin-bottom', $page.width()*0.0080+"px");
		
		// text styles (percentage based)
		$text18.css('fontSize', $page.width()*0.0142+"px");
		$text18_16.css('fontSize', ($page.width()*0.0142 < 16)?16:$page.width()*0.0142+"px"); // max 18, min 16
		$text22.css('fontSize', $page.width()*0.0172+"px");
		$text24.css('fontSize', $page.width()*0.0188+"px");
		$text24_18.css('fontSize', ($page.width()*0.0188 < 18)?18:$page.width()*0.0188+"px"); // max 24, min 18
		$text26.css('fontSize', $page.width()*0.0204+"px");
		$text28.css('fontSize', $page.width()*0.0219+"px");
		$text30.css('fontSize', $page.width()*0.0235+"px");
		$text32.css('fontSize', $page.width()*0.0250+"px");
		$text32_24.css('fontSize', ($page.width()*0.0250 < 24)?24:$page.width()*0.0250+"px");
		$text36.css('fontSize', $page.width()*0.0281+"px");
		$text40.css('fontSize', $page.width()*0.0313+"px");
		$text42.css('fontSize', $page.width()*0.0320+"px");
		$text44.css('fontSize', $page.width()*0.0343+"px");
		$text46.css('fontSize', $page.width()*0.0360+"px");
		$text50.css('fontSize', $page.width()*0.0400+"px");
		$text64.css('fontSize', $page.width()*0.0500+"px");
		$text80.css('fontSize', $page.width()*0.0625+"px");
		$text90.css('fontSize', $page.width()*0.0712+"px");
		$text106.css('fontSize', $page.width()*0.0830+"px");
		$text110.css('fontSize', $page.width()*0.0860+"px");
		
		// resize nav links padding (percentage based)
		$topNavTarget1.css('padding-left', $page.width()*0.0235+"px");
		$topNavTarget1.css('padding-right', $page.width()*0.0235+"px");
		
    });
	
	// trigger resize function after page load
	$(window).trigger('resize');
	
	// Tabular data alternate color row colors
	$(".management-table tr:even td").addClass("alt-row");
	$(".management-table .table-head-gap td").css("background-color", "transparent");
	$(".dashboard-table tr:even td").addClass("alt-row");
	$(".dashboard-table .table-head-gap td").css("background-color", "transparent");
	
	
	
	// ***********************************************
	// Popup/Overlay Content
	// ***********************************************
	
	// hide overlay when clicking on empty overlay space
	$('#overlay-bg').click(function(e) {
		$('#overlay-bg').fadeOut();
		$('#popup-login').fadeOut();
		$('#popup-chart').fadeOut();
	});
	
	// login popup button
	$('#login-btn').click(function(e) {
		e.preventDefault(); // prevents link from going to a URL or anchor (remove if needed)
		$('#overlay-bg').fadeIn();
		$('#popup-login').fadeIn();
	});
	
	// Account summary Chart popup button
	$('#account-summary-btn').click(function(e) {
		e.preventDefault();
		$('#overlay-bg').fadeIn();
		$('#popup-chart').fadeIn();
	});
	
	// Chart close button
	$('#chart-close-btn').click(function(e) {
		e.preventDefault();
		$('#overlay-bg').click();
	});
	
	// login submit button
	$('#login-signin-btn').click(function(e) {
		e.preventDefault(); // prevents link from going to a URL or anchor (remove if needed)
		$('#overlay-bg').fadeOut();
		$('#popup-login').fadeOut();
	});
	
	// Show 'fake' password field to display the text "Password" on screen
	// When the fake password field recieves focus, pass focus to the real password field
	$('#password-clear').show();
	$('#login-password').hide();
	$('#password-clear').focus(function() {
	    $('#password-clear').hide();
	    $('#login-password').show();
	    $('#login-password').focus();
	});
	$('#login-password').blur(function() {
	    if($('#login-password').val() == '') {
	        $('#password-clear').show();
	        $('#login-password').hide();
	    }
	});
	
	// Display default text within input fields such as "Username", "Search..."
	// Default text in "rel" field is removed on focus, and restored if field is left empty after losing focus
	$('#popup-login input').on('blur', function(){
            var default_value = $(this).attr('rel');
            if ($(this).val() == ""){ $(this).val(default_value); }
    }).on('focus', function(){
            var default_value = $(this).attr('rel');
            if ($(this).val() == default_value){ $(this).val(''); }
    });
	$('.dashboard-panel input').on('blur', function(){
            var default_value = $(this).attr('rel');
            if ($(this).val() == ""){ $(this).val(default_value); }
    }).on('focus', function(){
            var default_value = $(this).attr('rel');
            if ($(this).val() == default_value){ $(this).val(''); }
    });
	$('.management-panel input').on('blur', function(){
            var default_value = $(this).attr('rel');
            if ($(this).val() == ""){ $(this).val(default_value); }
    }).on('focus', function(){
            var default_value = $(this).attr('rel');
            if ($(this).val() == default_value){ $(this).val(''); }
    });
	$('.landing-content-box input').on('blur', function(){
            var default_value = $(this).attr('rel');
            if ($(this).val() == ""){ $(this).val(default_value); }
    }).on('focus', function(){
            var default_value = $(this).attr('rel');
            if ($(this).val() == default_value){ $(this).val(''); }
    });
	
	
});