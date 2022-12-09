<template>
    <div>
        <index-nav/>
            <contact-content/>
        <index-foot/>
    </div>
</template>

<script>
import IndexFoot from "../../components/indexFoot";
import IndexNav from "../../components/indexNav";
import ContactContent from "../../components/elldanin/ContactContent";

export default {
    name: "Contact",
    components: {ContactContent, IndexFoot, IndexNav}

}
</script>

<style scoped>

</style>