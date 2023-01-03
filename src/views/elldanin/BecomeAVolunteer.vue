<template>
    <div style="overflow-x: hidden">
        <index-nav/>
        <!--Breadcrumb Area Start-->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h1 class="breadmome-name">Become A Volunteer</h1>
                            <ul>
                                <li>
                                    <router-link :to="{name: 'Home'}">Home</router-link>
                                </li>
                                <li class="active">Become A Volunteer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumb Area End-->
        <div class="volunteer-about-area pt-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6">
                        <!--Volunteer About Image Area Start-->
                        <div class="about-img-area img-full">
                            <div class="img-title">
                                <img src="../../assets/img/about/give_for_hope.jpeg" alt="">
                            </div>
                        </div>
                        <!--Volunteer About Image Area End-->
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <!--Volunteer About Content Area Start-->
                        <div class="volunteer-about-content">
                            <h2>Become a Volunteer</h2>
                            <h3>Join The Winning Team</h3>
                            <p>
                                Join us to eradicate hunger and feed children all over the world
                            </p>
                        </div>
                        <!--Volunteer About Content Area End-->
                    </div>
                </div>
            </div>
        </div>
        <div class="volunteer-signup-area pt-90 pb-75 gray-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
<!--                        <div class="signup-title">-->
<!--                            <h2>Become <span>Volunteer Now</span></h2>-->
<!--                        </div>-->
                        <div class="page-content">
                            <div class="volunteer-form">
                                <div class="alert alert-success text-center" v-if="formCompleted">
                                    <h3>Thank you for showing interest!</h3>
                                    <p>
                                        Our team will review your information and revert to you
                                    </p>
                                </div>
                                <become-a-volunteer-form @done="formCompleted=true" v-else/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <index-foot/>
    </div>
</template>

<script>
import IndexNav from "../../components/indexNav.vue";
import IndexFoot from "../../components/indexFoot.vue";
import BecomeAVolunteerForm from "../../components/elldanin/forms/becomeAVolunteer.vue";

export default {
    name: "BecomeAVolunteer",
    data(){
      return {
          formCompleted: false
      }
    },
    components: {BecomeAVolunteerForm, IndexFoot, IndexNav}
}
</script>

<style scoped>

</style>