(function($) {
    "use strict";

    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("black");
    });
})(jQuery);
