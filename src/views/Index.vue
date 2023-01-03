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
        <div class="container-fluid py-5 px-4 who-we-are" style="background-image: url('/assets/img/team/1.jpeg')">
            <div class="row">
                <div class="col-12 col-lg-3">
                    <!--Section Title Start-->
                    <div class="section-title pt-lg-5 text-white">
                        <h2 class="text-white">Our Recent Campaigns</h2>
                        <router-link :to="{name:'BecomeAVolunteer'}" class="btn btn-outline-warning py-3">
                            Become a Volunteer
                        </router-link>
                    </div>
                    <!--Section Title End-->
                </div>
                <div class="col-12 col-lg-9">
                    <div class="row no-gutters project-active owl-carousel">
                        <div class="col-12" v-for="count in 20" :key="count">
                            <!--Single Project Start-->
                            <div class="single-project img-full">
                                <a href="javascript:void(0)"><img :src="`/assets/img/outreach/${count}.jpeg`" alt="photo"></a>
                            </div>
                            <!--Single Project End-->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <about-content :preview="true"/>
        <div class="container-fluid" style="background-color: #F3EEC0B2">
            <div class="row mb-5">
                <div class="col-12 pt-5 text-center">
                    <div class="section-title mb-60">
                        <h2>Meet Our Team</h2>
                        <!--                        <p>-->
                        <!--                            We have worked with trusted bodies over the years-->
                        <!--                        </p>-->
                    </div>
                </div>
                <div class="container">
                    <div class="row no-gutters team-active owl-carousel">
                        <div class="col-12">
                            <div class="single-project img-full text-center">
                                <a href="javascript:void(0)">
                                    <img src="../assets/img/team/Team_Adanin.png" alt="photo">
                                </a>
                                <h3 class="font-weight-bold mt-3">
                                    Dr. Elliot Adanin
                                </h3>
                                <h4>Founder</h4>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="single-project img-full text-center">
                                <a href="javascript:void(0)"><img src="../assets/img/team/Greg_Team.png" alt="photo"></a>
                                <h3 class="font-weight-bold mt-3">
                                    Mr. Greg Uchendu
                                </h3>
                                <h4>Director/Liason Partnership</h4>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="single-project img-full text-center">
                                <a href="javascript:void(0)"><img src="../assets/img/team/Team_Cynthia.png" alt="photo"></a>
                                <h3 class="font-weight-bold mt-3">
                                    Barr. Cynthia Areh
                                </h3>
                                <h4>Legal Advicer</h4>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="single-project img-full text-center">
                                <a href="javascript:void(0)"><img src="../assets/img/team/Team_Lucky.png" alt="photo"></a>
                                <h3 class="font-weight-bold mt-3">
                                   Mr. Ehinze Lucky
                                </h3>
                                <h4>National Team Lead</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <section class="container-fluid">
            <div class="row mb-5">
                <div class="col-12 pt-5 text-center">
                    <div class="section-title mb-60">
                        <h2 class="text-secondary">Our Partners</h2>
<!--                        <p>-->
<!--                            We have worked with trusted bodies over the years-->
<!--                        </p>-->
                    </div>
                </div>
                <div class="container">
                    <div class="row no-gutters partners-active owl-carousel">
                        <div class="col-12" v-for="count in 20" :key="count">
                            <!--Single Project Start-->
                            <div class="single-project img-full">
                                <a href="javascript:void(0)"><img :src="`/assets/img/icon/section-title1.png`" alt="photo"></a>
                            </div>
                            <!--Single Project End-->
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <foot-nav/>
    </div>
</template>

<script>
import HeadNav from "../components/indexNav";
import FootNav from "../components/indexFoot";
import slide1 from "../assets/../assets/img/slider/1.jpeg";
import slide2 from "../assets/../assets/img/slider/2.jpeg";
import serviceBG from "../assets/img/bg/bg1.jpg";
import AboutContent from "../components/elldanin/AboutContent";

export default {
    name: "Index",
    data(){
        return {
            slide1,
            slide2,
            serviceBG
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
                },
                768: {
                    items: 1,
                },
                991: {
                    items: 1,
                }
            }
        });
        $('.project-active').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay: true,
            autoplayTimeout: 2000,
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
                    items: 3,
                }
            }
        });
        $('.team-active').owlCarousel({
            loop:false,
            margin:0,
            nav:false,
            autoplay: true,
            autoplayTimeout: 2000,
            items:4,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 4,
                    nav: false,
                    dots: true
                },
                991: {
                    items: 4,
                }
            }
        });
        $('.partners-active').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay: true,
            autoplayTimeout: 2000,
            items:5,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
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

    },
    components: {
        AboutContent,
        HeadNav,
        FootNav
    }
}
</script>

<style scoped>
.service-image{
    opacity: 0.3;
}
.who-we-are{
    background: #00baa3 center no-repeat;
    background-size: cover;
    position: relative;
}
.who-we-are:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    z-index: 0;

}
.team-active .single-project a{
    display: flex;
    align-items: center;
    justify-content: center;
}
.team-active .single-project a>img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>