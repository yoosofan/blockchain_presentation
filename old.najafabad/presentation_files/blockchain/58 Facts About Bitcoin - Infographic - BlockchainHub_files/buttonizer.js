var buttonizer = {
    settings: {
        buttonizerOpened: false,
        buttonizerHasOpened: false,
        wHeight: 0,
        scrollBarTop: 0,
        showAfter: 0,
        exitIntent: 0,
        exitIntentText: 'Are you looking for this?',
        currentPageUrl: '',
        currentPageTitle: '',
        showedExitIntent: false,
    },
    init: function(options) {
        options = jQuery.extend({
            scrollBarTop: 0,
            showAfter: 0,
            exitIntent: 0,
            exitIntentText: 'Are you looking for this?'
        }, options);

        this.settings.scrollBarTop = options.scrollBarTop;
        this.settings.showAfter = options.showAfter;
        this.settings.wHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        this.settings.exitIntent = options.exitIntent;
        this.settings.exitIntentText = options.exitIntentText;

        document.addEventListener('DOMContentLoaded', this.ready);
    },
    ready: function() {
        if(document.getElementById("buttonizer-sys") != null) {
            document.addEventListener("click", function(e) {
                if(buttonizer.settings.buttonizerOpened && !document.getElementById("buttonizer-button").contains(e.target)) {
                    document.getElementById("buttonizer-sys").className = 'buttonizer_inner';
                    buttonizer.settings.buttonizerOpened = false;

                    if(document.querySelector("#buttonizer-sys .buttonizer_head .text") != null) {
                        document.querySelector("#buttonizer-sys .buttonizer_head .text").remove();
                    }
                }
            }, false);

            document.getElementById("buttonizer-sys").addEventListener("click", function() {
                if(buttonizer.settings.buttonizerOpened == true) {
                    document.getElementById("buttonizer-sys").className = 'buttonizer_inner';
                    buttonizer.settings.buttonizerOpened = false;

                    if(document.querySelector("#buttonizer-sys .buttonizer_head .text") != null) {
                        document.querySelector("#buttonizer-sys .buttonizer_head .text").remove();
                    }
                }else{
                    document.getElementById("buttonizer-sys").className = 'buttonizer_inner opened';
                    buttonizer.settings.buttonizerOpened = true;
                }
            });
        }

        
/* Premium Code Stripped by Freemius */

    }
}

function onButtonizerClickEvent(text) {
    if (typeof ga == 'function') {
        ga('send', 'event', {
            eventCategory: 'Buttonizer',
            eventAction: document.location.href,
            eventLabel: text
        });
    }
}

function onButtonizerButtonFacebook() {
    window.open('http://www.facebook.com/sharer.php?u='+ buttonizer.settings.currentPageUrl +'&t='+ buttonizer.settings.currentPageTitle +'', 'popupFacebook', 'width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0'); return false;
}

function onButtonizerButtonTwitter() {
    window.open('https://twitter.com/intent/tweet?text='+ buttonizer.settings.currentPageTitle +'&url='+ buttonizer.settings.currentPageUrl +'', 'popupTwitter', 'width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0'); return false;
}

function onButtonizerButtonLinkedin() {
    window.open('http://www.linkedin.com/shareArticle?mini=true&url='+ buttonizer.settings.currentPageUrl +'&title='+ buttonizer.settings.currentPageTitle +'&summary='+ buttonizer.settings.currentPageTitle +'', 'popupLinkedIn', 'width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0'); return false;
}
