<template>
    <!--Footer Area Start-->
    <footer>
        <div class="footer-container">
            <!--Footer Top Area Start-->
            <div class="footer-top-area black-bg pt-80 pb-45">
                <div class="container">
                    <div class="row justify-content-between">
                        <!--Single Footer Widget Start-->
                        <div class="col-md-6 col-lg-3">
                            <div class="single-footer-widget mb-30">
                                <a class="footer-logo" href="javascript:void(0)">
                                    <img src="../assets/img/logo/logo.png" alt="">
                                </a>
                                <p>Pursue pleasure rationally encounter consequences that treme painful. Nor again is there anyone obtain pain </p>
                                <h4 class="newslatter-title mb-1">Newsletter</h4>
                                <p>
                                    Subscribe to receive notifications of our upcoming events
                                </p>
                                <form id="mc-embedded-subscribe-form" @submit.prevent="subscribe" name="mc-embedded-subscribe-form" class="footer-subscribe-form validate" novalidate>
                                    <div id="mc_embed_signup_scroll">
                                        <div id="mc-form" class="mc-form subscribe-form" >
                                            <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email" />
                                            <button id="mc-submit">SEND</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!--Single Footer Widget End-->
                        <!--Single Footer Widget Start-->
                        <div class="col-md-6 col-lg-3">
                            <div class="single-footer-widget mb-30 footer-menu">
                                <h3 class="footer-title">Quick Links</h3>
                                <ul>
                                    <li>
                                        <router-link :to="{name: 'About'}">
                                            About us
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'Contact'}">
                                            Contact us
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'Gallery'}">
                                            Gallery
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--Single Footer Widget End-->
                        <!--Single Footer Widget Start-->
                        <div class="col-md-6 col-lg-3">
                            <div class="single-footer-widget mb-30 footer-menu">
                                <h3 class="footer-title">Information</h3>
                                <ul>
                                    <li>
                                        <router-link :to="{name: 'Volunteers'}">
                                            Volunteers
                                        </router-link>
                                    </li>
<!--                                    <li><a href="javascript:void(0)">Donation</a></li>-->
<!--                                    <li><a href="javascript:void(0)">Login/Register</a></li>-->
<!--                                    <li><a href="javascript:void(0)">Support</a></li>-->
<!--                                    <li><a href="javascript:void(0)">Policy</a></li>-->
<!--                                    <li><a href="javascript:void(0)">FAQ</a></li>-->
                                </ul>
                            </div>
                        </div>
                        <!--Single Footer Widget End-->
                        <!--Single Footer Widget Start-->
                        <div class="col-md-6 col-lg-3">
                            <div class="single-footer-widget mb-30 footer-menu">
                                <h3 class="footer-title">Contact Info</h3>
                                <p class="ft-address">
                                    <span>Address:</span>
                                    245 Central Tower, 4th Floow New City, Lagos, Nigeria
                                </p>
                                <p class="ft-contact-info ds-inline">
                                    <span>Call us:</span>
                                    <a href="javascript:void(0)">+12546 658 987</a>,
                                    <a href="javascript:void(0)">+12548 789 987</a>
                                </p>
                                <p class="ft-contact-info">
                                    <span>Web:</span>
                                    <a href="javascript:void(0)">info@example.com</a>
                                    <a href="javascript:void(0)">www.example.com</a>
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
                    <p><span>&copy;</span> Copyright, All right reserved by <a href="javascript:void(0)">FASWAS</a> - {{(()=>new Date().getFullYear())()}}</p>
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

</style>