// dependencies
// global.jquery = require('jquery');
// global.$ = global.jquery;
// var mmenu = require('jquery.mmenu');

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
        },

        addTargetBlankToExternalAnchorTags: function(allAnchorTags){
            allAnchorTags = allAnchorTags ? allAnchorTags : $('a');
            addTargetBlankToPdfAnchors(allAnchorTags);
            addTargetBlankToExternalLinkAnchors(allAnchorTags);

            function addTargetBlankToPdfAnchors(allAnchorTags){
                var anchorTagsPointingToPdfFile =  allAnchorTags.filter(function(){
                    var hrefValue = $(this).attr('href');
                    if(hrefValue){
                        return hrefValue.substr(-4) === '.pdf';
                    }
                });
                anchorTagsPointingToPdfFile.attr("target", "_blank");
            }
            function addTargetBlankToExternalLinkAnchors(allAnchorTags){
                var anchorTagsPointingToExternalPage =  allAnchorTags.filter(function(){
                    var hrefValue = $(this).attr('href');
                    if(hrefValue){
                        var regexP = new RegExp('(http\:\/\/)|(https\:\/\/)|(\/\/)', 'g');
                        return hrefValue.match(regexP);
                    }
                });
                anchorTagsPointingToExternalPage.attr("target", "_blank");
            }
        }
    
    };
    window.mlFrontendTools = mlFrontendTools;
})(window);