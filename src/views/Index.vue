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
        <div class="project-area pt-70" id="about">
            <div class="container-fluid p-0">
                <div class="row">
                    <div class="col-12">
                        <!--Section Title Start-->
                        <div class="section-title mb-60">
                            <h2>Who are we</h2>
                            <p>
                                If you can’t feed a hundred people, then just feed one
                            </p>
                        </div>
                        <!--Section Title End-->
                    </div>
                </div>
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

        <!--Service Area Start-->
        <div class="service-area" :style="{backgroundImage: 'url('+serviceBG+')'}">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="service-section-title mb-40">
                                    <h2>Elldanin Humanitarian Foundation International</h2>
                                    <!--                                <h3 class="text-muted">Founder of Feed a Soul - Win a Soul</h3>-->
                                    <p>
                                        As eradication of hunger by 2030 is one of the Sustainable Development
                                        Goals (SDGs) of the United Nations, all well-meaning people should do their bit
                                        to achieve it. To this extent, the <a href="javascript:void(0)">Elldanin Humanitarian Foundation International</a> (EHFI),
                                        uses the “Feed a Soul - Win a Soul" initiative to provide succor to the needy.
                                        The beneficiaries of this programme include street beggars, prison inmates, children in orphanages,
                                        patients of public hospitals or care homes and lots more.
                                    </p>
                                    <p>
                                        Between 2018 and 2020, on average 21.4 percent (over 40 million) Nigerians
                                        experienced hunger. People in severe food insecurity would go for entire days without food,
                                        due to lack of money or other resources. This has a corresponding impact on many of the challenges the country faces.
                                        Food is a critical requirement for well-being. It balances a person’s humanity.
                                        Nobody should ever have to go a full day without food.
                                    </p>
                                    <p>
                                        We at the <a href="javascript:void(0)">Elldanin Humanitarian Foundation International</a> (EHFI) have undertaken
                                        this burden to ensure we feed 1,000,000 Nigerians annually through the "Feed a Soul - Win a Soul" initiative.
                                    </p>
                                    <p>
                                        These are the means by which we pursue this campaign:
                                    </p>
                                    <ol class="obj-list">
                                        <li>
                                            Financial commitment from Elliot Adanin Okpataku aka Akumonibanks, a popular musician and the founder of  the Elldanin Humanitarian Foundation International (EHFI)                                        </li>
                                        <li>
                                            Support of international non-governmental organizations.                                         </li>
                                        <li>
                                            Regular music conferences with proceeds going to the initiative.
                                        </li>
                                        <li>
                                            Public contributions of food and money.
                                        </li>
                                        <li>
                                            Lots more.
                                        </li>
                                    </ol>
                                    <p>
                                        Food is essential for happiness, and as Helen Keller aptly put it <q><b>Happiness rarely keeps company with an empty stomach.</b></q> Together, we can bring happiness to multitudes by helping them get food. In the end, love spreads.
                                    </p>
                                </div>
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

        <div class="event-area" id="contactus">
            <!--Contact Info Area Start-->
            <div class="contact-info-area pt-100">
                <div class="container">
                    <div class="row no-gutters align-items-center">
                        <div class="col-lg-8 col-md-12">
                            <div class="contact-info-here mb-30">
                                <div class="contact-img img-full">
                                    <img src="../assets/img/contact/contact1.jpg" alt="">
                                </div>
                                <div class="contact-info">
                                    <h2>You Can <br> Contact With Us</h2>
                                    <p>
                                        For enquiries and donations, feel free to fill the form below and
                                        we will get in touch as soon as we can.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="contact-info-title">
                                <h2>Small help together makes better life</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Contact Info Area End-->
            <!--Contact Area Start-->
            <div class="contact-area pb-100">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col-md-12 col-lg-8 gray-bg">
                            <div class="contact-form-wrap">
                                <h3 class="contact-form-title">Get In Touch</h3>
                                <contact-form/>
                                <p class="form-messege"></p>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4 green-bg">
                            <div class="contact-address">
                                <h3 class="ct-title">Contact</h3>
                                <div class="astha-contact-info">
                                    <h4>Address</h4>
                                    <p>
                                        Shop Block A, 3rd Floor,
                                        Shop 25/28, Agric Plaza
                                        Odun Ade, Lagos, Nigeria
                                    </p>
                                </div>
                                <div class="astha-contact-info">
                                    <h4>Email</h4>
                                    <p>info@elldaninfoundation.com</p>
                                    <!--                                <p>info@example.com</p>-->
                                </div>
                                <div class="astha-contact-info">
                                    <h4>Phone No</h4>
                                    <p>+2349039038475</p>
                                    <!--                                <p>+12546 658 987</p>-->
                                </div>
                                <div class="astha-contact-info-web">
                                    <p class="web-address">feedasoulwinasoul.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Contact Area End-->
        </div>
        <foot-nav/>
    </div>
</template>

<script>
import HeadNav from "../components/indexNav";
import FootNav from "../components/indexFoot";
import slide1 from "../assets/../assets/img/slider/1.jpeg";
import slide2 from "../assets/../assets/img/slider/2.jpeg";
import serviceBG from "../assets/img/bg/bg1.jpg";
import ContactForm from "../components/forms/ContactForm";

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

    },
    components: {
        ContactForm,
        HeadNav,
        FootNav
    }
}
</script>

<style scoped>
.service-image{
    opacity: 0.3;
}
</style>