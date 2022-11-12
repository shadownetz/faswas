<template>
<div>
    <head-nav/>
    <!--Slider Area Start-->
    <div class="slider-area">
        <div class="hero-slider owl-carousel">
            <!--Single Slider Start-->
            <div class="single-slider slider-style-2" :style="{backgroundImage: 'url('+slide1+')'}">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="hero-slider-content" style="max-width: 100%">
                                <h1>
                                    Elldanin Humanitarian Foundation Intl'l
                                </h1>
<!--                                <div class="slider-btn">-->
<!--                                    <a class="default-btn" href="#">READ MORE</a>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Single Slider End-->
            <!--Single Slider Start-->
            <div class="single-slider slider-style-2" :style="{backgroundImage: 'url('+slide2+')'}">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="hero-slider-content" style="max-width: 100%">
                                <h1>Small help together makes better life, the reason for our initiative FASWAS</h1>
                                <div class="slider-btn">
                                    <router-link class="default-btn" :to="{name: 'FASWASPage'}">
                                        Read More
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
    <!--Our Causes Area Start-->
    <div class="our-causes-area pt-115 pb-70">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <!--Section Title Start-->
                    <div class="section-title mb-60">
                        <h2>Our Outreach</h2>
                        <p>
                            We try to provide and share items to the less privileged
                        </p>
                    </div>
                    <!--Section Title End-->
                </div>
            </div>
            <div class="row">
                <!--Single Causes Area Start-->
                <div class="col-lg-6 col-xl-6 col-md-12" v-for="count in 20" :key="count">
                    <div class="single-causes-area mb-30">
<!--                        <div class="causes-feature">-->
<!--                            <ul>-->
<!--                                <li><span class="content">Raised</span> <span class="per-count">$10,000</span></li>-->
<!--                                <li><span class="content">Achive</span> <span class="per-count">50.5%</span></li>-->
<!--                                <li><span class="content">Goal</span> <span class="per-count">$18,000</span></li>-->
<!--                            </ul>-->
<!--                        </div>-->
                        <div class="causes-img img-full">
                            <a href="javascript:void(0)"><img :src="`/assets/img/outreach/${count}.jpeg`" alt="image"></a>
                        </div>
<!--                        <div class="casues-content">-->
<!--                            <h3><a href="single-causes.html">Education.</a></h3>-->
<!--                            <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>-->
<!--                        </div>-->
                    </div>
                </div>
                <!--Single Causes Area End-->
            </div>
        </div>
    </div>
    <!--Our Causes Area End-->
    <!--Service Area Start-->
    <div class="service-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-12">
                            <div class="service-section-title mb-40">
                                <h2>What we do</h2>
                                <h3>We always try to do better for humanity</h3>
                                <p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <!--Single Service Start-->
                            <div class="single-service mb-30">
                                <h2 class="service-title">Make Donation</h2>
                                <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            <!--Single Service End-->
                        </div>
                        <div class="col-md-6">
                            <!--Single Service Start-->
                            <div class="single-service mb-30">
                                <h2 class="service-title">Give Scholarship</h2>
                                <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            <!--Single Service End-->
                        </div>
                        <div class="col-md-6">
                            <!--Single Service Start-->
                            <div class="single-service mb-30">
                                <h2 class="service-title">Become a Volunteer</h2>
                                <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            <!--Single Service End-->
                        </div>
                        <div class="col-md-6">
                            <!--Single Service Start-->
                            <div class="single-service mb-30">
                                <h2 class="service-title">Organize Entertainment</h2>
                                <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            <!--Single Service End-->
                        </div>
                        <div class="col-md-6">
                            <!--Single Service Start-->
                            <div class="single-service mb-30">
                                <h2 class="service-title">Food & Water Supply</h2>
                                <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            <!--Single Service End-->
                        </div>
                        <div class="col-md-6">
                            <!--Single Service Start-->
                            <div class="single-service mb-30">
                                <h2 class="service-title">Protect Environment</h2>
                                <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            <!--Single Service End-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="service-image">
            <img src="../assets/img/contact/contact1.jpg" alt="">
        </div>
    </div>
    <!--Service Area End-->
    <foot-nav/>
</div>
</template>

<script>
import HeadNav from "../components/indexNav";
import FootNav from "../components/indexFoot";
import slide1 from "../assets/../assets/img/slider/1.jpeg";
import slide2 from "../assets/../assets/img/slider/2.jpeg";

export default {
    name: "Index",
    data(){
      return {
          slide1,
          slide2
      }  
    },
    mounted() {
        $('.hero-slider').owlCarousel({
            smartSpeed: 1000,
            nav: true,
            loop: true,
            autoplay: true,
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
    },
    components: {
        HeadNav,
        FootNav
    }
}
</script>

<style scoped>

</style>