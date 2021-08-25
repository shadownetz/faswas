<template>
    <div class="container-fluid my-4">
        <div class="col-12 my-3">
<!--            <a href="javascript:void(0)" class="float-right" data-toggle="modal" data-target="#addGalleryModal">-->
<!--                <i class="fa fa-plus"></i> Add a new image-->
<!--            </a>-->
            <h1>Messages</h1>
        </div>
        <div class="row">
            <template v-if="contacts.length > 0">
                <div class="container-fluid">
                    <table class="table table-responsive-md">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(contact, idx) in contacts" :key="'contact_'+idx">
                            <th scope="row">{{idx+1}}</th>
                            <td>{{ contact.data.email }}</td>
                            <td>{{ contact.data.subject }}</td>
                            <td>
                                <div class="badge badge-success" v-if="contact.data.read">read</div>
                                <div class="badge badge-warning" v-else>unread</div>
                            </td>
                            <td>
                                <div class="col">
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#viewContactModal" class="text text-primary" @click="active_contact=contact">
                                        <i class="fa fa-eye"></i> view
                                    </a>
                                    <a href="javascript:void(0)" class="text text-danger ml-2" @click="deleteContact(contact)">
                                        <i class="fa fa-trash"></i> delete
                                    </a>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </template>
            <template v-else>
                <div class="col-12 text-center pt-5">
                    <h3>Empty Contact Message History</h3>
                </div>
            </template>
        </div>

        <!-- Modal -->
        <view-contact :contact="active_contact"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import viewContact from "../../components/dashboard/modals/contact/viewContact";

export default {
    name: "Contacts",
    data(){
      return {
          active_contact: {id: '', data: {}}
      }
    },
    computed: {
        ...mapGetters('contact', {
            contacts: 'getContacts'
        })
    },
    methods: {
      async deleteContact(contact){
          const status = confirm("Continue with this operation?");
          if(status){
              const response = await this.$store.dispatch('contact/deleteContact', contact);
              if(!response.status){
                  alert(response.message)
              }
          }
      }
    },
    components: {
      viewContact
    },
    mounted() {
        this.$store.dispatch('contact/fetchContacts')
    }
}
</script>

<style scoped>

</style>