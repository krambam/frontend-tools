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
                elementsToWrapSelector: 'body > header, body > section, body > div, body > footer, body > nav, body > article',
                mmenuOptions: {}
            };
            var opts = $.extend({}, defaultOptions, optionsObject);

            // mmenuConfig extend and default
            var defaultMmenuConfig = {
                className: {
                    selected: "active"
                },
                offCanvas: {
                    pageSelector: '#' + opts.pageWrapId
                },
                clone: true
            };
            if(optionsObject.mmenuConfig){
                var extended = $.extend({}, defaultMmenuConfig, optionsObject.mmenuConfig);
                opts.mmenuConfig = extended;
            }else{
                opts.mmenuConfig = defaultMmenuConfig;
            }

            $( opts.elementsToWrapSelector ).wrapAll( '<div id="' + opts.pageWrapId + '" />');

            $('#' + opts.navId).mmenu( opts.mmenuOptions, opts.mmenuConfig);

            var mobileNavSelector = opts.navId;
            if(opts.mmenuConfig.clone) {
                mobileNavSelector = '#mm-' + mobileNavSelector; // cloning makes a prefix
            } else {
                mobileNavSelector = '#' + mobileNavSelector;
            }
            $('#' + opts.mobnavTriggerId ).click(function() {
                $(mobileNavSelector).data( "mmenu" ).open();
            });
        }
    
    };
    window.mlFrontendTools = mlFrontendTools;
})(window);