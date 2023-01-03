<template>
    <div>
        <head-nav/>
        <!--Slider Area Start-->
        <div class="slider-area">
            <div class="hero-slider owl-carousel">
                <!--Single Slider Start-->
                <div class="single-slider" :style="{backgroundImage: 'url('+slider2+')'}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-slider-content">
                                    <h1>Small help together makes better life</h1>
                                    <div class="slider-btn">
                                        <router-link :to="{name: 'Contact'}" class="default-btn">
                                            KNOW MORE
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Single Slider End-->

                <!--Single Slider Start-->
                <div class="single-slider" :style="{backgroundImage: 'url('+slider1+')'}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-slider-content">
                                    <h1>Let's teach them letter, the world will be better</h1>
                                    <div class="slider-btn">
                                        <router-link :to="{name: 'Contact'}" class="default-btn">
                                            KNOW MORE
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Single Slider End-->
            </div>
        </div>
        <!--Slider Area End-->

        <!--Feature Area Start-->
        <!--        <div class="feature-area fix mb-10">-->
        <!--            <div class="container-fluid p-0">-->
        <!--                <div class="row coustom-row">-->
        <!--                    <div class="single-feature col-md-4">-->
        <!--                        &lt;!&ndash;Single Feature Area Start&ndash;&gt;-->
        <!--                        <div class="single-feature-inner">-->
        <!--                            <h2>Get our Promotional <span class="text-underline">Products</span> and help the humanity</h2>-->
        <!--                        </div>-->
        <!--                        &lt;!&ndash;Single Feature Area End&ndash;&gt;-->
        <!--                    </div>-->
        <!--                    <div class="single-feature col-md-4">-->
        <!--                        &lt;!&ndash;Single Feature Area Start&ndash;&gt;-->
        <!--                        <div class="single-feature-inner">-->
        <!--                            <h2>Our Upcoming <span class="text-underline">Event Date</span>: <br> 3rd October, 2021-->
        <!--                                <br><span class="text-underline">Venue</span>: EKO Hotels and Suites</h2>-->
        <!--                        </div>-->
        <!--                        &lt;!&ndash;Single Feature Area End&ndash;&gt;-->
        <!--                    </div>-->
        <!--                    <div class="single-feature col-md-4">-->
        <!--                        &lt;!&ndash;Single Feature Area Start&ndash;&gt;-->
        <!--                        <div class="single-feature-inner">-->
        <!--                            <h2>Our Latest <span class="text-underline">Achievement Fund’s</span> $3,85,65,250 <span class="text-underline">Member’s</span> 50,000</h2>-->
        <!--                        </div>-->
        <!--                        &lt;!&ndash;Single Feature Area End&ndash;&gt;-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--Feature Area End-->

        <!--Service Area Start-->
        <div class="service-area" :style="{backgroundImage: 'url('+serviceBG+')'}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-12">
                                <div class="service-section-title mb-40">
                                    <h2>FASWAS</h2>
                                    <h3>Feed a Soul - Win a Soul</h3>
                                    <p>
                                        "Feed a Soul - Win a Soul" is an initiative of the <a href="javascript:void(0)">Elldanin Humanitarian Foundation International</a> (EHFI),
                                        with the aim of providing food to less privileged Nigerians. Our society continues to degenerate by the day,
                                        and as feeding becomes increasingly difficult, crime increases as well. This initiative has broad impact on society,
                                        as providing food to a hungry human is an act of love which equally elicits love for others, and the beautiful circle continues.
                                        This is an all-round win for society.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <router-link :to="{name: 'About'}" class="default-btn">
                                    Learn More
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-image">
                <img src="../assets/img/service/service1.png" alt="">
            </div>
        </div>
        <!--Service Area End-->

        <!--Our Causes Area Start-->
        <!--        <div class="our-causes-area pt-115">-->
        <!--            <div class="container">-->
        <!--                <div class="row">-->
        <!--                    <div class="col-12">-->
        <!--                        &lt;!&ndash;Section Title Start&ndash;&gt;-->
        <!--                        <div class="section-title mb-60">-->
        <!--                            <h2>Our Causes</h2>-->
        <!--                            <p>Pursue pleasure rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues </p>-->
        <!--                        </div>-->
        <!--                        &lt;!&ndash;Section Title End&ndash;&gt;-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="row">-->
        <!--                    &lt;!&ndash;Single Causes Area Start&ndash;&gt;-->
        <!--                    <div class="col-lg-6 col-xl-3 col-md-6">-->
        <!--                        <div class="single-causes-area mb-30">-->
        <!--                            <div class="causes-feature">-->
        <!--                                <ul>-->
        <!--                                    <li><span class="content">Raised</span> <span class="per-count">$10,000</span></li>-->
        <!--                                    <li><span class="content">Achive</span> <span class="per-count">50.5%</span></li>-->
        <!--                                    <li><span class="content">Goal</span> <span class="per-count">$18,000</span></li>-->
        <!--                                </ul>-->
        <!--                            </div>-->
        <!--                            <div class="causes-img img-full">-->
        <!--                                <a href="javascript:void(0)"><img src="../assets/img/causes/causes1.jpg" alt=""></a>-->
        <!--                            </div>-->
        <!--                            <div class="casues-content">-->
        <!--                                <h3><a href="javascript:void(0)">Education.</a></h3>-->
        <!--                                <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;Single Causes Area End&ndash;&gt;-->
        <!--                    &lt;!&ndash;Single Causes Area Start&ndash;&gt;-->
        <!--                    <div class="col-lg-6 col-xl-3 col-md-6">-->
        <!--                        <div class="single-causes-area mb-30">-->
        <!--                            <div class="causes-feature">-->
        <!--                                <ul>-->
        <!--                                    <li><span class="content">Raised</span> <span class="per-count">$8,500</span></li>-->
        <!--                                    <li><span class="content">Achive</span> <span class="per-count">141.23%</span></li>-->
        <!--                                    <li><span class="content">Goal</span> <span class="per-count">$12,000</span></li>-->
        <!--                                </ul>-->
        <!--                            </div>-->
        <!--                            <div class="causes-img img-full">-->
        <!--                                <a href="javascript:void(0)"><img src="../assets/img/causes/causes2.jpg" alt=""></a>-->
        <!--                            </div>-->
        <!--                            <div class="casues-content">-->
        <!--                                <h3><a href="javascript:void(0)">Green World.</a></h3>-->
        <!--                                <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;Single Causes Area End&ndash;&gt;-->
        <!--                    &lt;!&ndash;Single Causes Area Start&ndash;&gt;-->
        <!--                    <div class="col-lg-6 col-xl-3 col-md-6">-->
        <!--                        <div class="single-causes-area mb-30">-->
        <!--                            <div class="causes-feature">-->
        <!--                                <ul>-->
        <!--                                    <li><span class="content">Raised</span> <span class="per-count">$15,000</span></li>-->
        <!--                                    <li><span class="content">Achive</span> <span class="per-count">83.33%</span></li>-->
        <!--                                    <li><span class="content">Goal</span> <span class="per-count">$18,000</span></li>-->
        <!--                                </ul>-->
        <!--                            </div>-->
        <!--                            <div class="causes-img img-full">-->
        <!--                                <a href="javascript:void(0)"><img src="../assets/img/causes/causes3.jpg" alt=""></a>-->
        <!--                            </div>-->
        <!--                            <div class="casues-content">-->
        <!--                                <h3><a href="javascript:void(0)">Accomodation.</a></h3>-->
        <!--                                <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;Single Causes Area End&ndash;&gt;-->
        <!--                    &lt;!&ndash;Single Causes Area Start&ndash;&gt;-->
        <!--                    <div class="col-lg-6 col-xl-3 col-md-6">-->
        <!--                        <div class="single-causes-area mb-30">-->
        <!--                            <div class="causes-feature">-->
        <!--                                <ul>-->
        <!--                                    <li><span class="content">Raised</span> <span class="per-count">$10,000</span></li>-->
        <!--                                    <li><span class="content">Achive</span> <span class="per-count">100%</span></li>-->
        <!--                                    <li><span class="content">Goal</span> <span class="per-count">$10,000</span></li>-->
        <!--                                </ul>-->
        <!--                            </div>-->
        <!--                            <div class="causes-img img-full">-->
        <!--                                <a href="javascript:void(0)"><img src="../assets/img/causes/causes4.jpg" alt=""></a>-->
        <!--                            </div>-->
        <!--                            <div class="casues-content">-->
        <!--                                <h3><a href="javascript:void(0)">Food.</a></h3>-->
        <!--                                <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;Single Causes Area End&ndash;&gt;-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--Our Causes Area End-->

        <!--Donate Product Area Start-->
        <div class="donate-product-area pt-60">
            <div class="container coustom-container">
                <div class="row coustom-row-two">
                    <div class="col-lg-5 col-xl-6 col-50">
                        <div class="donation-image">
                            <img src="../assets/img/donate/donrt1.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-7 col-xl-6 col-70">
                        <div class="donet-product">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="donet-shop">
                                        <h2>Product for <br> Humanity</h2>
                                        <p>
                                            Donate by getting our shirts and caps for
                                            our global outreach
                                        </p>
                                        <!--                                        <a href="javascript:void(0)">SHOP NOW</a>-->
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="single-donet-product">
                                        <img src="../assets/img/donate/donet-product12.png" alt="">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="single-donet-product">
                                        <img src="../assets/img/donate/donet-product13.png" alt="">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="single-donet-product">
                                        <img src="../assets/img/donate/donet-product15.png" alt="" style="max-width: 100%">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="single-donet-product">
                                        <img src="../assets/img/donate/donet-product14.png" alt="">
                                    </div>
                                </div>
<!--                                <div class="col-md-4">-->
<!--                                    <div class="single-donet-product">-->
<!--                                        <img src="../assets/img/donate/donet-product11.png" alt="">-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Donate Product Area End-->

        <!--Event Area Start-->
        <div class="event-area pt-70">
            <div class="container">
                <div class="row align-items-center">
                    <!--Event Slider Start-->
                    <div class="col-lg-6 col-12">
                        <div class="event-slider" v-if="events.length > 0">
                            <!--Single Event Start-->
                            <div class="single-event" v-for="(event, idx) in events" :key="'event_'+idx">
                                <div class="event-img img-full">
                                    <img :src="event.data.image" alt="">
                                </div>
                                <div class="single-event-title">
                                    <div class="event-date">
                                        <h4>{{getReadableDate(event.data.scheduledFor)}}</h4>
                                    </div>
                                    <div class="event-content">
                                        <h3><a href="javascript:void(0)">{{event.data.title}}</a></h3>
                                        <p>{{getReadableTime(event.data.scheduledFor)}}</p>
                                    </div>
                                </div>
                            </div>
                            <!--Single Event End-->
                        </div>
                        <div class="col-12 text-center text-muted" v-else>
                            <h3>There are no events at the moment</h3>
                            <p>Please check back later</p>
                        </div>
                    </div>
                    <!--Event Slider End-->

                    <!--Event Description Start-->
                    <div class="col-lg-6 col-12 pl-60">
                        <!--Section Title Start-->
                        <div class="section-title text-left">
                            <h2>Events</h2>
                        </div>
                        <!--Section Title End-->
                        <div class="event-description">
                            <h4>Know about our latest and upcoming events ...</h4>

                            <router-link :to="{name: 'Events'}" class="default-btn" v-if="events.length > 0">
                                View all
                            </router-link>
                        </div>
                    </div>
                    <!--Event Description Start-->
                </div>
            </div>
        </div>
        <!--Event Area End-->

        <!--Fun Factor Area Start-->
        <div class="fun-factor-area fun-bg mt-100" :style="{backgroundImage: 'url('+funBG+')'}">
            <div class="container">
                <div class="row justify-content-between content-between">
                    <div class="col">
                        <div class="single-funfactor mb-30 text-center">
                            <div class="fun-facttor-number">
                                <h2><span class="counter">1280</span></h2>
                            </div>
                            <h4 class="counter-title">Successful Projects</h4>
                        </div>
                    </div>
                    <div class="col">
                        <div class="single-funfactor mb-30 text-center">
                            <div class="fun-facttor-number">
                                <h2><span class="counter">1052</span></h2>
                            </div>
                            <h4 class="counter-title">Total Sponsor</h4>
                        </div>
                    </div>
                    <div class="col">
                        <div class="single-funfactor mb-30 text-center">
                            <div class="fun-facttor-number">
                                <h2>₦<span class="counter">280</span>k</h2>
                            </div>
                            <h4 class="counter-title">Money Donated</h4>
                        </div>
                    </div>
                    <div class="col">
                        <div class="single-funfactor mb-30 text-center">
                            <div class="fun-facttor-number">
                                <h2><span class="counter">3298</span></h2>
                            </div>
                            <h4 class="counter-title">Total Volunteers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Fun Factor Area End-->

        <!--Testimonial Area Start-->
        <div class="testimonial-area pt-100">
            <div class="container">
                <div class="row testimonial-active">
                    <div class="col-6">
                        <!--Single Testimonial Start-->
                        <div class="single-testimonial">
                            <div class="testimonial-content">
                                <p>
                                    A man there was, and they called him mad; the more he gave, the more he had.
                                </p>
                            </div>
                            <div class="testimonial-author-info">
                                <div class="team-author-deg">
                                    <h3>Adanin Elliot Okpataku</h3>
                                    <p>Founder, CEO</p>
                                </div>
                                <div class="author-img">
                                    <img src="../assets/img/testimonial/akumoni.jpeg" alt="" style="width: 120px;height:150px">
                                </div>
                            </div>
                        </div>
                        <!--Single Testimonial End-->
                    </div>
                    <div class="col-6">
                        <!--Single Testimonial Start-->
                        <div class="single-testimonial">
                            <div class="testimonial-content">
                                <p>
                                    When we give cheerfully and accept gratefully, everyone is blessed
                                </p>
                            </div>
                            <div class="testimonial-author-info">
                                <div class="team-author-deg">
                                    <h3>Adanin Elliot Okpataku</h3>
                                    <p>Founder, CEO</p>
                                </div>
                                <div class="author-img">
                                    <img src="../assets/img/testimonial/akumoni.jpeg" alt="" style="width: 120px;height:150px">
                                </div>
                            </div>
                        </div>
                        <!--Single Testimonial End-->
                    </div>

                </div>
            </div>
        </div>
        <!--Testimonial Area End-->

        <!--Our Blog Area Start-->
        <!--        <div class="our-blog-area pt-115">-->
        <!--            <div class="container">-->
        <!--                <div class="row">-->
        <!--                    <div class="col-12">-->
        <!--                        &lt;!&ndash;Section Title Start&ndash;&gt;-->
        <!--                        <div class="section-title mb-60">-->
        <!--                            <h2>Our Blog</h2>-->
        <!--                            <p>Pursue pleasure rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues </p>-->
        <!--                        </div>-->
        <!--                        &lt;!&ndash;Section Title End&ndash;&gt;-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="row">-->
        <!--                    &lt;!&ndash;Single Blog Start&ndash;&gt;-->
        <!--                    <div class="col-lg-6 col-xl-3 col-md-6">-->
        <!--                        <div class="single-blog mb-30">-->
        <!--                            <div class="blog-img img-full">-->
        <!--                                <a href="javascript:void(0)"><img src="../assets/img/blog/small/blog1.jpg" alt=""></a>-->
        <!--                            </div>-->
        <!--                            <div class="blog-content">-->
        <!--                                <ul class="meta">-->
        <!--                                    <li>By <a href="javascript:void(0)">Jenifer</a></li>-->
        <!--                                    <li>25 Oct, 2018 </li>-->
        <!--                                </ul>-->
        <!--                                <h4 class="title"><a href="javascript:void(0)">Marathon compitition for fund rising</a></h4>-->
        <!--                                <a href="javascript:void(0)">Continue Reading</a>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;Single Blog End&ndash;&gt;-->
        <!--                    &lt;!&ndash;Single Blog Start&ndash;&gt;-->
        <!--                    <div class="col-lg-6 col-xl-3 col-md-6">-->
        <!--                        <div class="single-blog mb-30">-->
        <!--                            <div class="blog-img img-full">-->
        <!--                                <a href="javascript:void(0)"><img src="../assets/img/blog/small/blog2.jpg" alt=""></a>-->
        <!--                            </div>-->
        <!--                            <div class="blog-content">-->
        <!--                                <ul class="meta">-->
        <!--                                    <li>By <a href="javascript:void(0)">Jenifer</a></li>-->
        <!--                                    <li>12 Nov, 2018 </li>-->
        <!--                                </ul>-->
        <!--                                <h4 class="title"><a href="javascript:void(0)">Africa Children Need More Food</a></h4>-->
        <!--                                <a href="javascript:void(0)">Continue Reading</a>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;Single Blog End&ndash;&gt;-->
        <!--                    &lt;!&ndash;Single Blog Start&ndash;&gt;-->
        <!--                    <div class="col-lg-6 col-xl-3 col-md-6">-->
        <!--                        <div class="single-blog mb-30">-->
        <!--                            <div class="blog-img img-full">-->
        <!--                                <a href="javascript:void(0)"><img src="../assets/img/blog/small/blog3.jpg" alt=""></a>-->
        <!--                            </div>-->
        <!--                            <div class="blog-content">-->
        <!--                                <ul class="meta">-->
        <!--                                    <li>By <a href="javascript:void(0)">Jenifer</a></li>-->
        <!--                                    <li>15 Apr, 2018 </li>-->
        <!--                                </ul>-->
        <!--                                <h4 class="title"><a href="javascript:void(0)">Africa Children Water And Clothes</a></h4>-->
        <!--                                <a href="javascript:void(0)">Continue Reading</a>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;Single Blog End&ndash;&gt;-->
        <!--                    &lt;!&ndash;Single Blog Start&ndash;&gt;-->
        <!--                    <div class="col-lg-6 col-xl-3 col-md-6">-->
        <!--                        <div class="single-blog mb-30">-->
        <!--                            <div class="blog-img img-full">-->
        <!--                                <a href="javascript:void(0)"><img src="../assets/img/blog/small/blog4.jpg" alt=""></a>-->
        <!--                            </div>-->
        <!--                            <div class="blog-content">-->
        <!--                                <ul class="meta">-->
        <!--                                    <li>By <a href="javascript:void(0)">Jenifer</a></li>-->
        <!--                                    <li>25 Feb, 2018 </li>-->
        <!--                                </ul>-->
        <!--                                <h4 class="title"><a href="javascript:void(0)">Marathon compitition for fund rising</a></h4>-->
        <!--                                <a href="javascript:void(0)">Continue Reading</a>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;Single Blog End&ndash;&gt;-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--Our Blog Area End-->

        <!--Project Area Start-->
        <div class="project-area pt-70">
            <div class="container-fluid p-0">
                <div class="row no-gutters project-active owl-carousel">
                    <div class="col-12">
                        <!--Single Project Start-->
                        <div class="single-project img-full">
                            <a href="javascript:void(0)"><img src="../assets/img/project/project1.jpg" alt=""></a>
                        </div>
                        <!--Single Project End-->
                    </div>
                    <div class="col-12">
                        <!--Single Project Start-->
                        <div class="single-project img-full">
                            <a href="javascript:void(0)"><img src="../assets/img/project/project2.jpg" alt=""></a>
                        </div>
                        <!--Single Project End-->
                    </div>
                    <div class="col-12">
                        <!--Single Project Start-->
                        <div class="single-project img-full">
                            <a href="javascript:void(0)"><img src="../assets/img/project/project3.jpg" alt=""></a>
                        </div>
                        <!--Single Project End-->
                    </div>
                    <div class="col-12">
                        <!--Single Project Start-->
                        <div class="single-project img-full">
                            <a href="javascript:void(0)"><img src="../assets/img/project/project4.jpg" alt=""></a>
                        </div>
                        <!--Single Project End-->
                    </div>
                    <div class="col-12">
                        <!--Single Project Start-->
                        <div class="single-project img-full">
                            <a href="javascript:void(0)"><img src="../assets/img/project/project5.jpg" alt=""></a>
                        </div>
                        <!--Single Project End-->
                    </div>
                </div>
            </div>
        </div>
        <!--Project Area End-->
        <foot-nav/>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import slider1 from "../assets/img/slider/slider-1.jpeg";
import slider2 from "../assets/img/slider/slider-2.jpeg";
import funBG from "../assets/img/bg/bg2.jpg";
import serviceBG from "../assets/img/bg/bg1.jpg";
import methodsMixin from "../utils/methodsMixin";

export default {
    name: 'Home',
    data(){
        return {
            slider1,
            slider2,
            funBG,
            serviceBG,

            events: []
        }
    },
    mixins: [methodsMixin],
    methods: {
        async fetchEvents(){
            let response = await this.$store.dispatch('event/fetchLimitedEvents');
            this.events = response.data;
            if(response.status){
                var eventSlider = $('.event-slider');
                eventSlider.slick({
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: false,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScoll: 1,
                    prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"></i> </button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',

                });
            }
        }
    },
    mounted() {
        this.fetchEvents();

        $('.header-menu-area nav').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991"
        });
        $(window).on('scroll',function() {
            if ($(this).scrollTop() >50){
                $('.header-sticky').addClass("is-sticky");
            }
            else{
                $('.header-sticky').removeClass("is-sticky");
            }
        });

        $('.hero-slider').owlCarousel({
            smartSpeed: 1000,
            nav: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: false,
            autoHeight:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                991: {
                    items: 1,
                }
            }
        });
        $('.event-slider-img-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
            asNavFor: '.event-title-active'
        });
        $('.event-title-active').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.event-slider-img-active',
            dots: false,
            arrows: false,
            autoplay: true,
            focusOnSelect: true,
            vertical: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
        $('.project-active').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay: true,
            autoplayTimeout: 10000,
            items:5,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 4,
                    nav: false,
                    dots: true
                },
                991: {
                    items: 5,
                }
            }
        });
        $('.testimonial-active').slick({
            arrows: false,
            dots: false,
            pauseOnFocus: true,
            pauseOnHover: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScoll: 2,
            zIndex:1,
            prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"></i> </button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $('.brand-active').owlCarousel({
            smartSpeed: 1000,
            nav: true,
            navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                450: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        });

        $('.counter').counterUp({
            delay: 70,
            time: 5000
        });

        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
    }
}
</script>
