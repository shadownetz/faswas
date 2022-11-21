<template>
    <form id="contact-form" @submit.prevent="proceed" ref="contactForm">
        <div class="row">
            <div class="col-md-12">
                <div class="contact-form-style mb-30">
                    <input name="firstname" v-model="contact.name" placeholder="Name*" type="text">
                </div>
            </div>
            <div class="col-md-6">
                <div class="contact-form-style mb-30">
                    <input name="email" v-model="contact.email" placeholder="Email*" type="email">
                </div>
            </div>
            <div class="col-md-6">
                <div class="contact-form-style mb-30">
                    <input name="subject" v-model="contact.subject" placeholder="Subject*" type="text">
                </div>
            </div>
            <div class="col-md-12">
                <div class="contact-form-style">
                    <textarea v-model="contact.message" name="message" placeholder="Type your message here.."></textarea>
                    <button class="sent-btn" type="submit"><span>Send Message</span></button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import {ContactModel} from "../../models/contact";

export default {
    name: "ContactForm",
    data(){
        return {
            contact: new ContactModel()
        }
    },
    methods: {
        async proceed(){
            if(!this.contact.name || !this.contact.email || !this.contact.subject || !this.contact.message){
                return alert("Complete all fields")
            }
            const loader = this.$loading.show({container: this.$refs.contactForm});
            const response = await this.$store.dispatch('contact/addContact', this.contact);
            loader.hide();
            if(response.status){
                alert("Your message has been received")
            }else{
                alert(response.message)
            }
        }
    }
}
</script>

<style scoped>

</style>