<template>
    <div>
        <index-nav/>
        <!--Breadcrumb Area Start-->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h1 class="breadmome-name">Give For Hope</h1>
                            <ul>
                                <li>
                                    <router-link :to="{name: 'Home'}">Home</router-link>
                                </li>
                                <li class="active">Give For Hope</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumb Area End-->
        <div class="about-area pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <!--About Image Area Start-->
                        <div class="about-img-area img-full">
                            <div class="img-title">
                                <h2>A Humanitarian Concert</h2>
                                <img src="../../assets/img/about/give_for_hope.jpeg" alt="">
                            </div>
                        </div>
                        <!--About Image Area End-->
                    </div>
                    <div class="col-lg-6 col-12">
                        <!--About Content Area Start-->
                        <div class="about-content">
                            <h2>Give For Hope 2023</h2>
                            <!--                            <h3>Outreach.</h3>-->
                            <h4>
                                <q>Without love, deeds, even the most brilliant, count as nothing.</q>
                                <i>– Mother Theresa</i>
                            </h4>
                            <p>
                                Give for hope project is saddled with the
                                responsibility of touching the lives of the victims of
                                the recent flooding experienced across the
                                country. The project is aimed at touching the lives
                                of 1.5 million Nigerians across 7 states. Elldanin
                                Foundation has championed several projects in
                                bettering the lives of Nigerians and with your
                                unaloyed partnership/support success is assured.
                            </p>
                            <p>
                                The Elldanin Foundation humanitarian concert is
                                going to hold in the commercial city of Lagos, ,
                                Nigeria which will feature music artist such as
                                Solidstar, Teni, Erigga, Falz, Gordons,
                                Akumonibanks, 2baba, Mercy johnson okojie, Mr
                                Macaroni, Kaffy, Funke Akindele, Ushbebe,
                                Duncan Mighty, Harrysong. and many more.
                            </p>
                            <p>
                                This Concert is aimed at raising funds tor these
                                communities & also make them inclusive &loved,
                                as well as giving hope to the affected homes and
                                making them feel loved and part of the society.
                            </p>
                        </div>
                        <!--About Content Area End-->
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid vid-intro my-3" style="background-image: url('../../assets/img/banner/banner3.png')">
            <button class="btn play-btn text-center" @click.prevent="showIntro=true" :style="{display: showIntro?'none':'block'}">
                <i class="fa fa-play fa-3x text-white"></i>
            </button>
            <div class="vid-content animated slideInRight" :style="{display: showIntro?'block':'none'}">
                <iframe class="vid-embed" width="560" height="315" src="https://www.youtube.com/embed/NL2Jet6cgjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 py-5 text-center">
                    <h2 class="text-secondary">
                        Outreach Highlights
                    </h2>
                </div>
                <div class="col-md-6 col-lg-4" v-for="(img, idx) in images" :key="'event_'+idx">
                    <!--Single Event Start-->
                    <div class="single-event event-three-col mb-30">
                        <div class="event-img img-full">
                            <img :src="img.src" alt="">
                        </div>
                        <div class="single-event-title">
                            <div class="event-date">
                                <h4>Give For Hope Outreach</h4>
                            </div>
                            <div class="event-content">
                                <h3><a href="javascript:void(0)">{{img.name}}</a></h3>
                                <p>
                                    <i class="fa fa-map-pin"></i> Lagos, Nigeria
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--Single Event End-->
                </div>
            </div>
        </div>
        <div class="container-fluid meet-the-team" style="background-image: url('../../assets/img/bg/bg1.jpg') ">
            <div class="row align-items-center justify-content-center" style="height: 500px">
                <div class="col-12 col-lg-3 text-center">
                    <h1>
                        Meet The Team
                    </h1>
                </div>
                <div class="col-12 col-lg-9">
                    <div class="row no-gutters project-team owl-carousel">
                        <div class="col-12">
                            <!--Single Project Start-->
                            <div class="single-project img-full">
                                <a href="javascript:void(0)" style="height: 400px">
                                    <iframe class="vid-embed" width="560" height="400" src="https://www.youtube.com/embed/8I9xljL9SzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </a>
                            </div>
                            <!--Single Project End-->
                        </div>
                        <div class="col-12">
                            <!--Single Project Start-->
                            <div class="single-project img-full">
                                <a href="javascript:void(0)" style="height: 400px">
                                    <iframe class="vid-embed" width="560" height="400" src="https://www.youtube.com/embed/42jcPa3IErs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </a>
                            </div>
                            <!--Single Project End-->
                        </div>
                        <div class="col-12">
                            <!--Single Project Start-->
                            <div class="single-project img-full">
                                <a href="javascript:void(0)" style="height: 400px">
                                    <iframe class="vid-embed" width="560" height="400" src="https://www.youtube.com/embed/GpKY7mb_4NY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </a>
                            </div>
                            <!--Single Project End-->
                        </div>
                        <div class="col-12">
                            <!--Single Project Start-->
                            <div class="single-project img-full">
                                <a href="javascript:void(0)" style="height: 400px">
                                    <iframe class="vid-embed" width="560" height="400" src="https://www.youtube.com/embed/lgXwd7W0JVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </a>
                            </div>
                            <!--Single Project End-->
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

export default {
    name: "GiveForHope",
    data(){
        return {
            showIntro: false,
            images: [
                {
                    name: 'Brief Prayer with Victims',
                    src: 'https://firebasestorage.googleapis.com/v0/b/faswas-5661c.appspot.com/o/outreach%2Fgive_for_hope%2FWhatsApp%20Image%202022-12-31%20at%2011.28.42%20AM%20(1).jpeg?alt=media&token=dbad47a2-1fa3-4e5d-aaeb-1432e2b98c14',
                },
                {
                    name: 'Group Photograph',
                    src: 'https://firebasestorage.googleapis.com/v0/b/faswas-5661c.appspot.com/o/outreach%2Fgive_for_hope%2F20221211_111720.jpg?alt=media&token=d9e1607b-5859-4866-a712-f50f04bd3f80',
                },
                {
                    name: 'Brief Discussion With Victims',
                    src: 'https://firebasestorage.googleapis.com/v0/b/faswas-5661c.appspot.com/o/outreach%2Fgive_for_hope%2F20221211_111507.jpg?alt=media&token=74d9827e-c4bd-4099-bc87-0c5cfe19f453',
                }

            ]
        }
    },
    components: {IndexFoot, IndexNav},
    mounted() {
        $('.project-team').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
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
                    items: 3,
                }
            }
        });
    }

}
</script>

<style scoped>
.vid-intro{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: 500px;
    background: #00baa3 no-repeat center center;
    background-size: cover;
    position: relative;
}
.vid-intro:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    z-index: 0;
}
.play-btn{
    width: 100px;
    height: 100px;
    border: none;
    border-radius: 50%;
    background-color: #00baa3;
    z-index: 3;
    box-shadow: 1px 1px 50px white;
}
.play-btn:hover{
    background-color: #efc94c;
}
.play-btn:hover i{
    color: #00baa3!important;
}
.vid-intro .vid-content{
    height: 500px;
    width: 500px;
    background-color: #00baa3;
    z-index: 3;
}
iframe.vid-embed{
    height: 100%;
    width: 100%;
    object-fit: contain;
}
.meet-the-team{
    height: 500px;
    min-height: 500px;
    background: #efc94c no-repeat center center;
    background-size: cover;
}
</style>