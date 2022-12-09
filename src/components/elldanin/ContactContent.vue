<template>
    <div class="event-area" id="contactus">
        <!--Contact Info Area Start-->
        <div class="contact-info-area pt-100">
            <div class="container">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="contact-info-here mb-30">
                            <div class="contact-img img-full">
                                <img src="../../assets/img/contact/contact1.jpg" alt="">
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
</template>

<script>
import ContactForm from "../forms/ContactForm";

export default {
    name: "ContactContent",
    components: {
        ContactForm
    }
}
</script>

<style scoped>

</style>