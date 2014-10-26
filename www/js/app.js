(function($) {
    "use strict";
    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("grey");
    });
})(jQuery);
