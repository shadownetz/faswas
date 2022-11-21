<template>
    <!--Footer Area Start-->
    <footer>
        <div class="footer-container">
            <!--Footer Top Area Start-->
            <div class="footer-top-area black-bg pt-80 pb-45">
                <div class="container">
                    <div class="row justify-content-between">
                        <!--Single Footer Widget Start-->
                        <div class="col-md-6 col-lg-4">
                            <div class="single-footer-widget mb-30">
                                <a class="footer-logo" href="javascript:void(0)">
                                    <img src="../assets/img/logo/logo-index.png" alt="">
                                </a>
                                <p>
                                    Elldanin Humanitarian Foundation International, with the aim of sensitization and empowerment of 20,000+ children, women, youths, the elderly and persons with disability across different African countries
                                </p>
<!--                                <h4 class="newslatter-title mb-1">Newsletter</h4>-->
<!--                                <p>-->
<!--                                    Subscribe to receive notifications of our upcoming events-->
<!--                                </p>-->
<!--                                <form id="mc-embedded-subscribe-form" @submit.prevent="subscribe" name="mc-embedded-subscribe-form" class="footer-subscribe-form validate" novalidate>-->
<!--                                    <div id="mc_embed_signup_scroll">-->
<!--                                        <div id="mc-form" class="mc-form subscribe-form" >-->
<!--                                            <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email" />-->
<!--                                            <button id="mc-submit">SEND</button>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </form>-->
                            </div>
                        </div>
                        <!--Single Footer Widget End-->
                        <!--Single Footer Widget Start-->
                        <div class="col-md-6 col-lg-4">
                            <div class="single-footer-widget mb-30 footer-menu">
                                <h3 class="footer-title">Quick Links</h3>
                                <ul>
                                    <li>
                                        <router-link :to="{name: 'FASWASPage'}">
                                            Feed a soul win a soul
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--Single Footer Widget End-->
                        <!--Single Footer Widget Start-->
                        <div class="col-md-6 col-lg-4">
                            <div class="single-footer-widget mb-30 footer-menu">
                                <h3 class="footer-title">Contact Info</h3>
                                <p class="ft-address">
                                    <span>Address:</span>
                                    Shop Block A, 3rd Floor,
                                    Shop 25/28, Agric Plaza
                                    Odun Ade, Lagos, Nigeria
                                </p>
                                <p class="ft-contact-info ds-inline">
                                    <span>Call us:</span>
                                    <a href="tel:+2349039038475">+2349039038475</a>
<!--                                    <a href="javascript:void(0)">+12548 789 987</a>-->
                                </p>
                                <p class="ft-contact-info">
                                    <span>Web:</span>
                                    <a href="mailto:elldaninfoundation@gmail.com">info@elldaninfoundation.com</a>
                                    <a href="https://www.elldaninfoundation.com">www.elldaninfoundation.com</a>
                                </p>
                            </div>
                        </div>
                        <!--Single Footer Widget End-->
                    </div>
                </div>
            </div>
            <!--Footer Top Area End-->
            <!--Footer Bottom Area Start-->
            <div class="footer-bottom-area pt-20 pb-20">
                <div class="container text-center">
                    <p><span>&copy;</span> Copyright, All right reserved by <a href="javascript:void(0)">Elldanin Humanitarian Foundation International</a> - {{(()=>new Date().getFullYear())()}}</p>
                </div>
            </div>
            <!--Footer Bottom Area End-->
        </div>
    </footer>
    <!--Footer Area End-->
</template>

<script>
export default {
    name: "footNav",
    data(){
        return {

        }
    },
    methods: {
        subscribe(){

        }
    }
}
</script>

<style scoped>
.footer-logo img{
    width: 90px;
    height: 80px
}
</style>