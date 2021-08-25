<template>
    <div class="modal fade" id="viewContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" ref="addVolunteer">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{contact.data.subject}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-12">
                        <h4>Name</h4>
                        <h5>{{contact.data.name}}</h5>
                    </div>
                    <div class="col-12">
                        <h4>Email</h4>
                        <h5>{{contact.data.email}}</h5>
                    </div>
                    <div class="col-12">
                        <h4>Subject</h4>
                        <h5>{{contact.data.subject}}</h5>
                    </div>
                    <div class="col-12">
                        <h4>Message</h4>
                        <h5>{{contact.data.message}}</h5>
                    </div>
                    <div class="col-12">
                        <h4>Created At</h4>
                        <h5>{{getReadableDatetime(contact.data.createdAt)}}</h5>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
<!--                    <button type="button" class="btn btn-primary" @click="addVolunteer">Save changes</button>-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import methodsMixin from "../../../../utils/methodsMixin";

export default {
    name: "viewContact",
    mixins: [methodsMixin],
    props: {
        contact: {
            type: Object,
            required: true,
        }
    },
    mounted(){
        const modal = $('#viewContactModal');
        modal.on('show.bs.modal', ()=>{
            setTimeout(()=>{
                if(!this.contact.data.read){
                    this.$store.dispatch('contact/readContact', this.contact)
                }
            }, 1000)
        })
    }
}
</script>

<style scoped>

</style>