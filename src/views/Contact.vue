<template>
    <div>
        <head-nav/>
        <!--Breadcrumb Area Start-->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h1 class="breadmome-name">Contact</h1>
                            <ul>
                                <li>
                                    <router-link :to="{name: 'Home'}">Home</router-link>
                                </li>
                                <li class="active">Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumb Area End-->
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
                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
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
                            <form id="contact-form" @submit.prevent="proceed">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="contact-form-style mb-30">
                                            <input name="firstname" placeholder="First Name*" type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="contact-form-style mb-30">
                                            <input name="lastname" placeholder="Last Name*" type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="contact-form-style mb-30">
                                            <input name="email" placeholder="Email*" type="email">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="contact-form-style mb-30">
                                            <input name="subject" placeholder="Subject*" type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="contact-form-style">
                                            <textarea name="message" placeholder="Type your message here.."></textarea>
                                            <button class="sent-btn" type="submit"><span>Send Email</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p class="form-messege"></p>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4 green-bg">
                        <div class="contact-address">
                            <h3 class="ct-title">Contact</h3>
                            <div class="astha-contact-info">
                                <h4>Address</h4>
                                <p>
                                    245 Central Tower, 4th Floow New City, Lagos, Nigeria
                                </p>
                            </div>
                            <div class="astha-contact-info">
                                <h4>Email</h4>
                                <p>info@example.com</p>
                                <p>info@example.com</p>
                            </div>
                            <div class="astha-contact-info">
                                <h4>Phone No</h4>
                                <p>+12546 658 987</p>
                                <p>+12546 658 987</p>
                            </div>
                            <div class="astha-contact-info-web">
                                <p class="web-address">www.faswas.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Contact Area End-->
        <foot-nav/>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data(){
        return {

        }
    },
    methods: {
        proceed(){

        }
    }
}
</script>

<style scoped>

</style>