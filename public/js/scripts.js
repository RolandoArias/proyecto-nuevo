function init_portfolio_isotope() {
    var e = $(window);
    var t = $(".isotope");
    var n = $(".filter");
    try {
        t.imagesLoaded(function() {
            t.fadeIn();
            t.isotope({filter: "*",layoutMode: "masonry",animationOptions: {duration: 750,easing: "linear"}})
        })
    } catch (r) {
    }
    e.bind("resize", function() {
        var e = n.find("a.active").attr("data-filter");
        try {
            t.isotope({filter: e,animationOptions: {duration: 750,easing: "linear",queue: false}})
        } catch (r) {
        }
        return false
    });
    n.find("a").on("click", function() {
        var e = $(this).attr("data-filter");
        try {
            t.isotope({filter: e,animationOptions: {duration: 750,easing: "linear",queue: false}})
        } catch (n) {
        }
        return false
    });
    var i = $(".filter li a");
    i.on("click", function() {
        var e = $(this);
        if (!e.hasClass("active")) {
            i.removeClass("active");
            e.addClass("active")
        }
    })
}
function init_googlemap() {
    var e = new google.maps.LatLng(-37.81709, 144.955557);
    var t = document.getElementById("map_canvas");
    var n = {center: e,zoom: 16,mapTypeId: google.maps.MapTypeId.ROAD};
    var r = new google.maps.Map(t, n);
    var i = new google.maps.Marker({position: e,map: r,title: "Envato pty is Here!"});
    var s = '<div id="map-content"><h3>Envato pty is Here!</h3><p>We create awesome websites with WordPress Themes and Site HTMLs. This is awesome! We create awesome websites with WordPress Themes and Site HTMLs. This is awesome!</p></div>';
    var o = new google.maps.InfoWindow({content: s,maxWidth: 400});
    google.maps.event.addListener(i, "click", function() {
        o.open(r, i)
    });
    r.set("styles", [{featureType: "all",stylers: []}, {featureType: "road",elementType: "geometry",stylers: []}])
}
function init_portfolio_carousel() {
    try {
        $("#owl-slider").owlCarousel({autoplay: true,autoplayTimeout: 5e3,autoplayHoverPause: false,dots: false,nav: true,navText: ["", ""],items: 4,loop: true,responsive: {0: {items: 1},787: {items: 2},979: {items: 3},1199: {items: 4}}})
    } catch (e) {
    }
}
function init_testimonials() {
    try {
        $(".testimonials-slider").owlCarousel({autoplay: true,autoplayTimeout: 5e3,nav: false,autoplayHoverPause: false,dots: true,items: 1,singleItem: true,autoHeight: true,animateOut: "fadeOutDown",animateIn: "fadeInUp",loop: true})
    } catch (e) {
    }
}
function init_clients_carousel() {
    try {
        $(".clients-slider").owlCarousel({autoplay: true,autoplayTimeout: 5e3,autoplayHoverPause: false,nav: false,dots: true,items: 6,loop: true,margin: 30,responsiveClass: true,responsive: {0: {items: 1,nav: false},600: {items: 3,nav: false},1e3: {items: 5,nav: false}}})
    } catch (e) {
    }
}
function init_image_slider() {
    try {
        $(".image-slider").on("initialize.owl.carousel", function(e) {
            setTimeout(function() {
                $(e.target).trigger("next.owl.carousel")
            }, 100)
        }).owlCarousel({autoplay: true,autoplayTimeout: 5e3,autoplayHoverPause: true,nav: true,navText: ["", ""],stopOnHover: true,loop: true,autoHeight: true,dots: true,animateOut: "fadeOutDown",animateIn: "fadeInUp",items: 1})
    } catch (e) {
    }
}
function init_magnific_popup() {
    try {
        $(".zoom").magnificPopup({type: "image",gallery: {enabled: true}})
    } catch (e) {
    }
    try {
        $(".zoom.video").magnificPopup({type: "iframe",gallery: {enabled: true}})
    } catch (e) {
    }
}
function init_animated_effects() {
    try {
        if ($(".animated")[0]) {
            $(".animated").css("opacity", "0")
        }
        $(".triggerAnimation").waypoint(function() {
            var e = $(this).attr("data-animate");
            $(this).css("opacity", "");
            $(this).addClass("animated " + e)
        }, {offset: "88%",triggerOnce: true})
    } catch (e) {
    }
}
function init_fitvids() {
    try {
        $(".blog-grid-item").fitVids();
        $(".videoplay").fitVids()
    } catch (e) {
    }
}
function adjust_puzzle_size() {
    $(".flip-item").each(function() {
        $(this).find("img").each(function() {
            if ($(this).width() > $(this).height()) {
                $(this).height("100%");
                $(this).css({width: "auto"})
            } else {
                $(this).width("100%");
                $(this).css({height: "auto"})
            }
        })
    })
}
function build_header() {
    try {
        if (jQuery(window).width() < 481) {
            jQuery("body.onepage-home").css({"padding-top": "190px"});
            jQuery("body.onepage-home header.active .navbar-inverse").css({"min-height": "150px"})
        } else {
            jQuery("body.onepage-home").css({"padding-top": "120px"});
            jQuery("body.onepage-home header.active .navbar-inverse").css({"min-height": "70px"})
        }
    } catch (e) {
    }
}
function build_nav(e, t, n) {
    try {
        if (t == "prev") {
            $parent = jQuery(".navbar-right li#ajax-b3");
            $elem = jQuery(".navbar-right li a.link-prev")
        } else if (t == "next") {
            $parent = jQuery(".navbar-right li#ajax-b4");
            $elem = jQuery(".navbar-right li a.link-next")
        } else if (t == "index") {
            $parent = jQuery(".navbar-right li#ajax-b2");
            $elem = jQuery(".navbar-right li a.link-index")
        }
        if (e == "show") {
            $elem.attr("href", n);
            $elem.addClass("active");
            $parent.addClass("active")
        } else {
            $elem.attr("href", "#");
            $elem.removeClass("active");
            $parent.removeClass("active")
        }
        var r = jQuery(".navbar-right li.active").length + 1;
        jQuery(".navbar-right li").not(".active").not("#search").css({right: 0,display: "none"});
        jQuery(".navbar-right li#ajax-b1").css({right: 60 * r + "px"});
        jQuery(".navbar-right li.active").each(function() {
            r--;
            jQuery(this).css({right: 60 * r + "px",display: "inline-block"})
        })
    } catch (i) {
    }
}
function init_popover() {
    $("#search").popover("destroy");
    if (jQuery(window).width() < 481) {
        var e = "bottom"
    } else {
        var e = "left"
    }
    $("#search").popover({html: true,placement: e,container: "body",content: function() {
            return $("#popover-content").html()
        }})
}
function fit_ajaxloader() {
    var e = jQuery("#ajax-loader").outerHeight();
    jQuery("#ajax-container").css({"min-height": e})
}
function randsort(e) {
    var t = new Array;
    for (var n = 0; n < e; n++) {
        var r = Math.floor(Math.random() * e);
        if (jQuery.inArray(r, t) > 0)
            --n;
        else
            t.push(r)
    }
    return t
}
function hideBootstrapToolTips() {
    jQuery(".tooltip").each(function() {
        jQuery(this).hide()
    })
}
function init_postSlider() {
    var e = $(".slides");
    var t = e.on("initialized.owl.carousel", function(e) {
        $(window).load(function() {
            var t = 470;
            var n = 0;
            $(e.target).find(".item img").each(function() {
                n++;
                if (parseInt($(this).height()) > t) {
                    t = parseInt($(this).height())
                }
            });
            $(e.target).parents(".post-slider").find(".thumbs .item").each(function() {
                $(this).outerHeight(t / n)
            });
            $(e.target).parents(".post-slider").css({opacity: "1"})
        })
    }).owlCarousel({autoplay: true,autoplayTimeOut: 9e3,margin: 10,items: 1,nav: false,dots: false,animateOut: "fadeOut",animateIn: "fadeIn"}).on("changed.owl.carousel", function(e) {
        var t = $(e.target).parents(".post-slider");
        setTimeout(function() {
            $(t).find(".thumbs .active").removeClass("active");
            $(t).find(".slides .owl-item").each(function(e) {
                if ($(this).hasClass("active")) {
                    $(t).find(".thumbs .item:nth-child(" + (e + 1) + ")").removeClass("active").addClass("active")
                }
            })
        }, 100)
    }).data("owl.carousel");
    $(".thumbs").on("click", ".item", function(e) {
        var t = $(e.target).parents(".item").index();
        if (t == -1) {
            t = $(e.target).index()
        }
        $(this).parents(".post-slider").find(".slides").trigger("to.owl.carousel", [t, 0, true])
    })
}
function init_back2Top() {
    try {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $("#back-to-top").addClass("active")
            } else {
                $("#back-to-top").removeClass("active")
            }
        });
        $("#back-to-top").on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    } catch (e) {
    }
}
function init_tooltips() {
    try {
        jQuery(".blog-grid-controls a").tooltip({placement: "top",delay: 100,container: "body"});
        jQuery(".footer-social a").tooltip({delay: 100});
        jQuery(".navbar-right a").tooltip({placement: "bottom",delay: 50,container: "body"});
        jQuery(".team-social a").tooltip({placement: "top",delay: 50,container: "body"});
        jQuery(".clients-slider a").tooltip({placement: "top",delay: 50,container: "body"})
    } catch (e) {
    }
    try {
        jQuery.browserSelector();
        if (jQuery("html").hasClass("chrome")) {
            jQuery.smoothScroll()
        }
    } catch (e) {
    }
}
function init_headscroll() {
    function r() {
        window.addEventListener("scroll", function() {
            if (!t) {
                t = true;
                setTimeout(i, 50)
            }
        }, false)
    }
    function i() {
        var e = s();
        if (e >= n) {
            jQuery("header").addClass("active")
        } else {
            jQuery("header").removeClass("active")
        }
        t = false
    }
    function s() {
        return window.pageYOffset || e.scrollTop
    }
    var e = document.documentElement, t = false, n = 40;
    document.querySelector("header");
    r()
}
var $ = jQuery.noConflict();
$(window).bind("resize", function(e) {
    build_header();
    init_popover();
    fit_ajaxloader()
});
$(window).load(function() {
    $(".loading-content").fadeOut();
    fit_ajaxloader();
    adjust_puzzle_size()
});
$(document).ready(function(e) {
    "use strict";
    init_testimonials();
    init_clients_carousel();
    init_portfolio_isotope();
    init_portfolio_carousel();
    init_image_slider();
    init_magnific_popup();
    if (!/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
        init_animated_effects()
    }
    ;
    init_fitvids();
    init_popover();
    if (e("#map_canvas").length) {
        google.maps.event.addDomListener(window, "load", init_googlemap)
    }
    init_postSlider();
    init_back2Top();
    init_tooltips();
    var t = e("body > .container"), n = e(".mobile-nav").length ? e(".mobile-nav").removeClass("hidden") : e("#main-menu > .menu-container").clone(true, true).attr("id", "").addClass("mobile-nav").removeClass("nav dropdown");
    t.wrap('<div class="mp-container" />');
    t.wrap('<div class="mp-pusher" id="mp-pusher" />');
    t.wrap('<div class="scroller" />');
    t.wrap('<div class="scroller-inner" />');
    e("#mp-pusher").prepend('<nav id="mp-menu" class="mp-menu" />');
    e("nav.mp-menu").append(n);
    e("nav#mp-menu").find(".menu-container").each(function() {
        e(this).addClass("mp-level")
    }), e("nav#mp-menu").find(".mp-level").each(function() {
        e(this).removeClass("menu-container")
    });
    new mlPushMenu(document.getElementById("mp-menu"), document.getElementById("trigger"));
    var r = e(window).height();
    e("#ajax-container").css({"min-height": r});
    var i = e(".flip-item").width();
    var s = 80;
    var o = 0;
    e(".flip-item").each(function() {
        o++;
        var t = e(this);
        e(this).animate({"min-height": i * .9}, "slow", function() {
            var t = e("#ajax-loader").height();
            e("#ajax-container").css({"min-height": t})
        });
        if (randomColor) {
            jQuery(".flip-content.iconned").each(function() {
                var e = Math.random();
                if (randomHue == "red") {
                    var t = Math.floor(45 * e) + 158;
                    var n = Math.floor(30 * e) + 0;
                    var r = Math.floor(40 * e) + 71
                } else if (randomHue == "green") {
                    var t = Math.floor(75 * e) + 15;
                    var n = Math.floor(30 * e) + 177;
                    var r = Math.floor(40 * e) + 157
                } else if (randomHue == "orange") {
                    var t = Math.floor(75 * e) + 255;
                    var n = Math.floor(30 * e) + 138;
                    var r = Math.floor(40 * e) + 0
                } else if (randomHue == "multicolor") {
                    var t = Math.floor(57 * Math.random()) + 55;
                    var n = Math.floor(57 * Math.random()) + 55;
                    var r = Math.floor(57 * Math.random()) + 55
                } else {
                    var t = Math.floor(45 * e) + 15;
                    var n = Math.floor(30 * e) + 157;
                    var r = Math.floor(40 * e) + 177
                }
                var i = "rgb(" + t + "," + n + "," + r + ")";
                jQuery(this).css({"background-color": i}, 500)
            })
        }
        setTimeout(function() {
            e(t).addClass("images-loaded")
        }, s * o)
    });
    try {
        init_headscroll()
    } catch (u) {
    }
});
var homeURL = window.location.href;
var isbacked = 0;
jQuery(".flip-item a").on("click", function() {
    jQuery("#page-content").html('<div class="loading-content inner"><div id="stage"><p id="spinner"><img src="upload/loading.png"><BR><BR>Loading...</p></div></div>');
    hideBootstrapToolTips();
    isbacked = 1;
    var e = jQuery(".flip-menu");
    var t = e.find(".flip-item");
    var n = t.size();
    var r = randsort(n);
    e.find(".flip-item").each(function(e) {
        var t = this;
        setTimeout(function() {
            jQuery(t).addClass("active")
        }, 80 * r[e])
    });
    jQuery(".navbar-right li#ajax-b1").addClass("active");
    jQuery("#page-content").fadeIn(1e3);
    jQuery("#ajax-loader").css({"background-color": "transparent"});
    setTimeout(function() {
        jQuery("#ajax-loader").hide()
    }, 80 * (n - 1))
});
jQuery("body.onepage-home").on("click", ".tmq_closeserv", function(e) {
    e.preventDefault();
    hideBootstrapToolTips();
    isbacked = 0;
    build_nav("hide", "prev", "");
    build_nav("hide", "next", "");
    build_nav("hide", "index", "");
    jQuery(".navbar-right li#ajax-b1").css({right: "0px",display: "none"});
    jQuery(".navbar-right li#ajax-b1").removeClass("active");
    build_header();
    jQuery("#ajax-loader").animate({backgroundColor: "rgba(0,0,0,0.7)"}, "slow");
    jQuery("#ajax-loader").show();
    jQuery("#page-content").fadeOut(1e3);
    if (History && History.pushState) {
        History.pushState(null, "", homeURL)
    }
    var t = jQuery(".flip-menu");
    var n = t.find(".flip-item");
    var r = n.size();
    var i = randsort(r);
    t.find(".flip-item").each(function(e) {
        var t = this;
        setTimeout(function() {
            jQuery(t).removeClass("active")
        }, 80 * i[e])
    })
});
jQuery(window).on("popstate", function(e) {
    if (homeURL == window.location.href && isbacked == 1) {
        location.reload()
    }
})
