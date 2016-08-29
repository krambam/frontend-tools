// dependencies
global.jquery = require('jquery');
global.$ = global.jquery;
var mmenu = require('jquery.mmenu');

(function(window){
    var mlFrontendTools = {
        mMenu: function(optionsObject){
            var defaultOptions = {
                pageWrapId: 'mm-page-wrap',
                navId: 'main-nav',
                mobnavTriggerId: 'mobnav-trigger',
                elementsToWrapSelector: 'body > header, body > section, body > div, body > footer'
            };
            var opts = $.extend({}, defaultOptions, optionsObject);

            $( opts.elementsToWrapSelector ).wrapAll( '<div id="' + opts.pageWrapId + '" />');
            $('#' + opts.navId).mmenu({},{
                classNames: {
                    selected: "active"
                },
                offCanvas: {
                    pageSelector: '#' + opts.pageWrapId
                },
                clone: true
            });
            $('#' + opts.mobnavTriggerId ).click(function() {
                $('#mm-' + opts.navId ).data( "mmenu" ).open();
            });
        }
    
    };
    window.mlFrontendTools = mlFrontendTools;
})(window);