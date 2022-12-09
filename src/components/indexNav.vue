<template>
    <!--Header Area Start-->
    <header>
        <!--Default Header Area Start-->
        <div class="default-header-area header-sticky">
            <div class="container">
                <div class="row align-items-center">
                    <!--Header Logo Start-->
                    <div class="col-lg-3 col-md-6">
                        <div class="header-logo">
                            <a href="javascript:void(0)">
                                <img src="../assets/img/logo/logo-banner.png" alt="">
                            </a>
                        </div>
                    </div>
                    <!--Header Logo End-->
                    <!--Header Menu Start-->
                    <div class="col-lg-7  d-none d-lg-block text-right">
                        <div class="header-menu-area">
                            <nav>
                                <ul class="main-menu">
                                    <li :class="[$route.name==='Home'?'active':'']">
                                        <router-link :to="{name: 'Home'}">
                                            Home
                                        </router-link>
                                    </li>
                                    <li>
                                        <a href="/about-us">
                                            About
                                        </a>
                                    </li>
                                    <li><a href="javascript:void(0)">Initiatives</a>
                                        <!--Dropdown Menu Start-->
                                        <ul>
                                            <li :class="[$route.name==='FASWASPage'?'active':'']">
                                                <router-link :to="{name: 'FASWASPage'}">
                                                    FASWAS
                                                </router-link>
                                            </li>
                                        </ul>
                                        <!--Dropdown Menu End-->
                                    </li>
                                    <li>
                                        <a href="/contact-us">
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!--Header Menu End-->
                    <!--Book Now Area Start-->
                    <div class="col-lg-2 col-md-6">
                        <div class="book-now-btn text-right">
                            <a href="tel:+2349039038475">
                                (+234)9039038475
                            </a>
                        </div>
                    </div>
                    <!--Book Now Area Start-->
                </div>
                <div class="row">
                    <div class="col-12">
                        <!--Mobile Menu Area Start-->
                        <div class="mobile-menu d-lg-none d-xl-none"></div>
                        <!--Mobile Menu Area End-->
                    </div>
                </div>
            </div>
        </div>
        <!--Default Header Area End-->
    </header>
    <!--Header Area End-->
</template>

<script>
export default {
    name: "indexNav",
    mounted() {
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        });
                    }
                }
            });
    }
}
</script>

<style scoped>

</style>