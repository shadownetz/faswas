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
<!--                                <h2>Volunteer</h2>-->
                                <img src="../assets/img/about/about.jpg" alt="">
                            </div>
                        </div>
                        <!--About Image Area End-->
                    </div>
                    <div class="col-lg-6 col-12">
                        <!--About Content Area Start-->
                        <div class="about-content">
                            <h2>FASWAS</h2>
                            <h3>Feed a Soul - Win a Soul.</h3>
                            <h4><q>If you can’t feed a hundred people, then just feed one.</q> <i>– Mother Theresa</i></h4>
                            <p>
                                "Feed a Soul - Win a Soul" is an initiative of the Elldanin Humanitarian Foundation International (EHFI),
                                with the aim of providing food to less privileged Nigerians. Our society continues to degenerate by the day,
                                and as feeding becomes increasingly difficult, crime increases as well. This initiative has broad impact on society,
                                as providing food to a hungry human is an act of love which equally elicits love for others, and the beautiful circle continues.
                                This is an all-round win for society.
                            </p>
                            <router-link class="default-btn"  :to="{name: 'Contact'}">
                                Contact
                            </router-link>
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
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="service-section-title mb-40">
                                    <h2>Elldanin Humanitarian Foundation International</h2>
                                    <h3 class="text-muted">Founder of Feed a Soul - Win a Soul</h3>
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

    }
}
</script>

<style scoped>
.obj-list{
    padding-inline-start: 15px;
}
.obj-list li{
    margin-bottom: 20px;
    font-size: 1.1em;
    font-weight: 500;
}
.service-section-title p{
    max-width: 100%;
    text-align: justify;
    font-weight: 500;
}
@media screen and (min-width: 1024px){
    .service-image{
        opacity: .3;
    }
}
</style>