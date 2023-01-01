<template>
    <div>
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
                                    <template v-if="preview">
                                        <router-link :to="{name: 'AboutUs'}" class="btn btn-outline-secondary">
                                            Read More
                                        </router-link>
                                    </template>
                                    <template v-else>
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
                                    </template>

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
    props: {
        preview: {
            type: Boolean,
            default: false
        }
    },
    data(){
      return {
          serviceBG
      }
    }
}
</script>

<style scoped>
</style>

<style>
.slider-area .owl-dots{
    display: none;
}
</style>