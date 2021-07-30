<template>
    <div>
        <head-nav/>
        <!--Breadcrumb Area Start-->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h1 class="breadmome-name">About</h1>
                            <ul>
                                <li>
                                    <router-link :to="{name: 'Home'}">Home</router-link>
                                </li>
                                <li class="active">About</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumb Area End-->
        <!--About Area Start-->
        <div class="about-area pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <!--About Image Area Start-->
                        <div class="about-img-area img-full">
                            <div class="img-title">
                                <h2>Volunteer</h2>
                                <img src="../assets/img/about/about1.png" alt="">
                            </div>
                        </div>
                        <!--About Image Area End-->
                    </div>
                    <div class="col-lg-6 col-12">
                        <!--About Content Area Start-->
                        <div class="about-content">
                            <h2>FASWAS</h2>
                            <h3>Feed a Soul Win a Soul.</h3>
                            <h4>Happy World, Happy People</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
                            <a class="default-btn" href="javascript:void(0)">Contact</a>
                        </div>
                        <!--About Content Area End-->
                    </div>
                </div>
            </div>
        </div>
        <!--About Area End-->
        <!--Service Area Start-->
        <div class="service-area" :style="{backgroundImage: 'url('+serviceBG+')'}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-12">
                                <div class="service-section-title mb-40">
                                    <h2>What we do</h2>
                                    <h3>Always try to do better for humanity</h3>
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
                <img src="../assets/img/service/service1.png" alt="">
            </div>
        </div>
        <!--Service Area End-->
        <!--Fun Factor Area Start-->
        <div class="fun-factor-area fun-bg" :style="{backgroundImage: 'url('+funBG+')'}">
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
                                <h2>$<span class="counter">280</span>m</h2>
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
        <div class="testimonial-area pt-100 mb-5 pb-50">
            <div class="container">
                <div class="row testimonial-active">
                    <div class="col-6">
                        <!--Single Testimonial Start-->
                        <div class="single-testimonial">
                            <div class="testimonial-content">
                                <p>Pursue pleasure rationally encounter equences that treme painful. Nor again is there anyone  obtain pain of itself, because it is pain</p>
                            </div>
                            <div class="testimonial-author-info">
                                <div class="team-author-deg">
                                    <h3>Stephen Smith</h3>
                                    <p>Donetor, CEO of Axion</p>
                                </div>
                                <div class="author-img">
                                    <img src="../assets/img/testimonial/testi1-home-1.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <!--Single Testimonial End-->
                    </div>
                    <div class="col-6">
                        <!--Single Testimonial Start-->
                        <div class="single-testimonial">
                            <div class="testimonial-content">
                                <p>Pursue pleasure rationally encounter equences that treme painful. Nor again is there anyone  obtain pain of itself, because it is pain</p>
                            </div>
                            <div class="testimonial-author-info">
                                <div class="team-author-deg">
                                    <h3>Jeniger Hearly</h3>
                                    <p>Donetor, CEO of Axion</p>
                                </div>
                                <div class="author-img">
                                    <img src="../assets/img/testimonial/testi2-home-1.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <!--Single Testimonial End-->
                    </div>
                </div>
            </div>
        </div>
        <!--Testimonial Area End-->
        <foot-nav/>
    </div>
</template>

<script>
import funBG from "../assets/img/bg/bg2.jpg";
import serviceBG from "../assets/img/bg/bg1.jpg";

export default {
    name: 'About',
    data(){
        return {
            funBG,
            serviceBG
        }
    },
    mounted() {
        $('.counter').counterUp({
            delay: 70,
            time: 5000
        });
    }
}
</script>
