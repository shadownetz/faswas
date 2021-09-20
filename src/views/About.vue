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
                            <h3>Feed a Soul - Win a Soul.</h3>
                            <h4>Love is Our Religion</h4>
                            <p>
                                "Feed a Soul - Win a Soul" is global music conference founded by the Elldanin Humanitarian Foundation International (EHFI),
                                with the aim of <strong>sensitization</strong> and <strong>empowerment</strong> of 20,000+
                                children, women, youths, the elderly and persons with disability across different
                                African countries
                            </p>
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
                                    <h2>Elldanin Humanitarian Foundation International</h2>
                                    <h3 class="text-muted">Founder of Feed a Soul - Win a Soul</h3>
                                    <p>
                                        The <a href="javascript:void(0)">Elldanin Humanitarian Foundation International</a> (E.H.F.I) is a <br>non-governmental organization founded by popular Nigerian music Artist, Humanitarian, Public Speaker, Entrepreneur and Author at
                                        <a href="javascript:void(0)">Ellbanks Universal Music</a>, ELLIOT ADANIN OKPATAKU aka Akumonibanks.
                                    </p>
                                    <p>
                                        The Foundation was established July, 2021 with a clear vision and mission of establishing a grass root outreach program that seeks to enhance the life of all displaced and under-privileged women, girls, children, youths, the elderly and persons with disability in Nigeria and the rest of Africa irrespective of their Religious and Cultural divergence.
                                    </p>
                                    <p>
                                        The foundation is aimed at organizing regular outreach/sensitization programs, seminars and music conferences that will create impact through knowledge, wealth and skills creation to foster sanity and civility to the entire human race across the African continent. This will be achieved through Books, Music, Movies and Motivational Speaking by taking on societal issues affecting the girl child, children and women. These societal issues vary from inadequate education for the girl child, lack of food and poor security for less privilege children and persons with disability, gender inequality, rape, youth unemployment, lack of proper care for the elderly, human rights violation, climate change etc.
                                    </p>
                                    <p>
                                        Having identified this societal menace affecting children and women across the African continent, it is difficult to turn a blind eye especially as an African and a celebrity with a voice and an ever growing platform for creating constant impact in the society. We have therefore decided to contribute to the overall growth and development of the African continent through our foundation by setting up certain strategies and series of events to address the challenges as previously highlighted.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <!--Single Service Start-->
                                <div class="single-service mb-30">
                                    <h2 class="service-title">Our Vision</h2>
                                    <p>
                                        To create a world of equal opportunity where being a Child, a Woman, Persons with Disability or a Youth with no clear path in the society doesn't mean survival but Protection, Education and Inclusiveness leaving no one behind.
                                    </p>
                                </div>
                                <!--Single Service End-->
                            </div>
                            <div class="col-md-6">
                                <!--Single Service Start-->
                                <div class="single-service mb-30">
                                    <h2 class="service-title">Our Mission</h2>
                                    <p>
                                        To help children, women, youths, the elderly and persons with disability to attain equal opportunity within the society by providing adequate protection, education and system inclusiveness.
                                    </p>
                                </div>
                                <!--Single Service End-->
                            </div>
                            <div class="col-md-12">
                                <!--Single Service Start-->
                                <div class="single-service mb-30">
                                    <h2 class="service-title">Core Values </h2>
                                    <p style="max-width: 480px">
                                        Love, Equality, Advocacy and Transparency.
                                    </p>
                                </div>
                                <!--Single Service End-->
                            </div>
                            <div class="col-md-12">
                                <!--Single Service Start-->
                                <div class="single-service mb-30">
                                    <h2 class="service-title">Aims And Objectives</h2>
                                    <p style="max-width: 480px">
                                        In view of the United Nations 17 points Sustainable Development Goals for 2030 Agenda, adopted by the General Assembly in 2015.
                                        Our aim is to establish a grass root reachout program that seeks to enhance the life of all displaced and under-privileged children, girls, women, youths, the elderly and persons with disability in Nigeria and the rest of Africa irrespective of their Religious and Cultural divergence.
                                    </p>
                                </div>
                                <!--Single Service End-->
                            </div>
                            <div class="col-md-12">
                                <!--Single Service Start-->
                                <div class="single-service mb-30">
                                    <h2 class="service-title">Our Objectives</h2>
                                    <ul class="obj-list" style="max-width: 480px">
                                        <li>
                                            To provide food, clothes and financial assistance as well as other resources to 1,000 orphanages across Africa.
                                        </li>
                                        <li>
                                            To reach out to 100 Prisons across Africa to positively impact the lives of 5,000 inmates by spreading Happiness, Love and Hope as well as motivation while providing skill acquisition platforms and training for inmates reintegration to the society.
                                        </li>
                                        <li>
                                            To lend our voice and support as a strong advocate to legislative policies and laws fighting against Rape, Gender-based/Domestic Violence, Gender Inequality, Discrimination against Persons with Disability, Child Abuse/Molestation, Children Trafficking, Education for the Girl Child, etc.
                                        </li>
                                        <li>
                                            Sensitization and empowerment of 20,000+ children, women, youths, the elderly and persons with disability across different African countries through the launch of a Global Music Conference tagged "Feed-A-Soul Win-A-Soul".
                                        </li>
                                        <li>
                                            To reach out to victims of communal conflict and displaced communities across Africa for the purpose of rehabilitation and integration into the society through motivations, skill acquisition/training and provision of medical and financial assistance.
                                        </li>
                                        <li>
                                            To educate 10,000+ girls, children, and youths across different African countries by sending them back to school while providing relevant educational resources as well as financial aid.
                                        </li>
                                    </ul>
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
    .obj-list li{
        margin-bottom: 20px;
    }
</style>