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
                                <img src="../assets/img/logo/logo.png" alt="">
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
                                    <li :class="[$route.name==='About'?'active':'']">
                                        <router-link :to="{name: 'About'}">
                                            About
                                        </router-link>
                                    </li>
                                    <li :class="[$route.name==='Gallery'?'active':'']">
                                        <router-link :to="{name: 'Gallery'}">
                                            Gallery
                                        </router-link>
                                    </li>
                                    <li :class="[$route.name==='Events'?'active':'']">
                                        <router-link :to="{name: 'Events'}">
                                            Events
                                        </router-link>
                                    </li>
<!--                                    <li><a href="javascript:void(0)">BLOG</a>-->
<!--                                        &lt;!&ndash;Dropdown Menu Start&ndash;&gt;-->
<!--                                        <ul>-->
<!--                                            <li><a href="javascript:void(0)">Blog</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Blog details</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Blog Right Sidebar</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Blog Left Sidebar</a></li>-->
<!--                                        </ul>-->
<!--                                        &lt;!&ndash;Dropdown Menu End&ndash;&gt;-->
<!--                                    </li>-->
<!--                                    <li><a href="javascript:void(0)">PAGES</a>-->
<!--                                        &lt;!&ndash;Dropdown Menu Start&ndash;&gt;-->
<!--                                        <ul>-->
<!--                                            <li><a href="javascript:void(0)">About</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Volunteer</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Volunteer Details</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Become Volunteer</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Gallery</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Gallery Filtering</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Gallery Full Width</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Gallery Masonry</a></li>-->
<!--                                            <li><a href="javascript:void(0)">Donate</a></li>-->
<!--                                        </ul>-->
<!--                                        &lt;!&ndash;Dropdown Menu End&ndash;&gt;-->
<!--                                    </li>-->
<!--                                    <li><a href="javascript:void(0)">CONTACT</a></li>-->
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!--Header Menu End-->
                    <!--Book Now Area Start-->
                    <div class="col-lg-2 col-md-6">
                        <div class="book-now-btn text-right">
                            <router-link :to="{name:'Contact'}">
                                Contact
                            </router-link>
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
    name: "headNav"
}
</script>

<style scoped>

</style>