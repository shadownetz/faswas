<template>
    <div>
        <index-nav/>
        <about-content/>
        <index-foot/>
    </div>
</template>

<script>
import IndexNav from "../../components/indexNav";
import IndexFoot from "../../components/indexFoot";
import AboutContent from "../../components/elldanin/AboutContent";
export default {
    name: "About",
    components: {AboutContent, IndexFoot, IndexNav}
}
</script>

<style scoped>

</style>