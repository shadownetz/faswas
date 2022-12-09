<template>
    <div>
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
                <img src="../../assets/img/service/service1.png" alt="">
            </div>
        </div>
        <!--Service Area End-->
    </div>

</template>

<script>
import serviceBG from "../../assets/img/bg/bg1.jpg";

export default {
    name: "AboutContent",
    data(){
      return {
          serviceBG
      }
    },
    mounted() {
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
    }
}
</script>

<style scoped>

</style>