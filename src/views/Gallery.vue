<template>
    <div>
        <head-nav/>
        <!--Breadcrumb Area Start-->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h1 class="breadmome-name">Gallery</h1>
                            <ul>
                                <li>
                                    <router-link :to="{name: 'Home'}">Home</router-link>
                                </li>
                                <li class="active">Gallery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumb Area End-->
        <!--Gallery Area Start-->
        <div class="gallery-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery1.jpg" data-fancybox="gallery">
                                <img src="../assets/img/gallery/gallery1.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery2.jpg" data-fancybox="gallery"><img src="../assets/img/gallery/gallery2.jpg" alt=""></a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery3.jpg" data-fancybox="gallery"><img src="../assets/img/gallery/gallery3.jpg" alt=""></a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery4.jpg" data-fancybox="gallery"><img src="../assets/img/gallery/gallery4.jpg" alt=""></a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery5.jpg" data-fancybox="gallery"><img src="../assets/img/gallery/gallery5.jpg" alt=""></a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery6.jpg" data-fancybox="gallery"><img src="../assets/img/gallery/gallery6.jpg" alt=""></a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery7.jpg" data-fancybox="gallery"><img src="../assets/img/gallery/gallery7.jpg" alt=""></a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery8.jpg" data-fancybox="gallery"><img src="../assets/img/gallery/gallery8.jpg" alt=""></a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start-->
                    <div class="col-md-4 col-sm-6">
                        <div class="single-gallery-img mb-30">
                            <a href="../assets/img/gallery/gallery9.jpg" data-fancybox="gallery"><img src="../assets/img/gallery/gallery9.jpg" alt=""></a>
                        </div>
                    </div>
                    <!--Single Gallery Image End-->
                </div>
                <div class="row">
                    <div class="col-12">
                        <!--See More Button Start-->
                        <div class="see-more-btn">
                            <a href="javascript:void(0)">see more</a>
                        </div>
                        <!--See More Button End-->
                    </div>
                </div>
            </div>
        </div>
        <!--Gallery Area End-->
        <foot-nav/>
    </div>
</template>

<script>
export default {
    name: "Gallery"
}
</script>

<style scoped>

</style>