<template>
    <div>
        <head-nav/>
        <div class="container-fluid my-4">
            <div class="col-12 col-lg-6 offset-lg-3 bg-light p-3" ref="loginRef">
                <div class="col-12 text-center text-primary">
                    <h4>Restricted Access [Login]</h4>
                </div>
                <form @submit.prevent="proceed">
                    <div class="form-group mt-5">
                        <label for="exampleInputEmail1">Email address</label>
                        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <foot-nav/>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async proceed(){
            if(!this.email || !this.password){
                return alert("Complete all fields")
            }
            const {email, password} = this;
            const loader = this.$loading.show({container: this.$refs.loginRef})
            const response = await this.$store.dispatch('login', {
                email, password
            });
            loader.hide()
            if(response.status){
                let dash_url = this.$router.resolve({name: 'Dashboard'}).href;
                if(dash_url.endsWith("/")){
                    const idx = dash_url.lastIndexOf("/");
                    dash_url = dash_url.substr(0, idx)
                }
                window.location.href = dash_url
            }else{
                alert(response.message)
            }
        }
    }
}
</script>

<style scoped>

</style>