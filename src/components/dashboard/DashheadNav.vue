<template>
    <!--Header Area Start-->
    <header>
        <!--Default Header Area Start-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand header-logo" href="#">
                <img src="../../assets/img/logo/logo.png" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{name: 'Home'}" class="nav-item nav-link" :class="$route.name==='Home'?'active':''">
                        Home <span class="sr-only">(current)</span>
                    </router-link>
                    <router-link :to="{name: 'Dashboard'}" class="nav-item nav-link" :class="$route.name==='Dashboard'?'active':''">
                        Dashboard
                    </router-link>
                    <router-link :to="{name: 'DashEvents'}" class="nav-item nav-link" :class="$route.name==='Events'?'active':''">
                        Events
                    </router-link>
                    <router-link :to="{name: 'Dashboard'}" class="nav-item nav-link" :class="$route.name==='Gallery'?'active':''">
                        Gallery
                    </router-link>
                    <router-link :to="{name: 'DashVolunteers'}" class="nav-item nav-link" :class="$route.name==='DashVolunteers'?'active':''">
                        Volunteers
                    </router-link>
                    <router-link :to="{name: 'Dashboard'}" class="nav-item nav-link" :class="$route.name==='Contacts'?'active':''">
                        Contacts
                    </router-link>
                    <a class="nav-item nav-link" href="javascript:void(0)">Logout</a>
                </div>
            </div>
        </nav>
        <!--Default Header Area End-->
    </header>
    <!--Header Area End-->
</template>

<script>
export default {
    name: "DashHeadNav"
}
</script>

<style scoped>

</style>