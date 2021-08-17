<template>
    <div class="container-fluid dashboard my-4">
        <div class="col-12">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <div class="item">
                        <div class="col">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <h3>0</h3>
                        <h1>Events</h1>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="item">
                        <div class="col">
                            <i class="fa fa-image"></i>
                        </div>
                        <h3>0</h3>
                        <h1>Gallery</h1>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="item">
                        <div class="col">
                            <i class="fa fa-users"></i>
                        </div>
                        <h3>0</h3>
                        <h1>Volunteers</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>

<style scoped>
    .item{
        border-radius: 5px;
        background: rgb(250,250,250);
        padding: 50px 10px 10px;
        height: 300px;
        text-align: center;
        box-shadow: 1px 1px 2px #e5b403;
        margin-top: 2px
    }
    .item i{
        font-size: 40px;
    }
    .item h1,
    .item h3{
        margin-top: 30px
    }
</style>