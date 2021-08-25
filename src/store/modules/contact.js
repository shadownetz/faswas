import {contactStore} from "../../configs/firebase";
import {CustomResponse} from "../../utils/globalObjects";
import Contact from "../../models/contact";

export default {
    namespaced: true,
    state: {
        listener: null,
        contacts: []
    },
    getters: {
        getContacts: state => state.contacts
    },
    mutations: {
        setContacts: (state, payload) => state.contacts = payload,
        reset(state){
            if(state.listener !== null) state.listener();
            state.listener = null;
            state.contacts = [];
        }
    },
    actions: {
        fetchContacts({state, commit}){
            state.listener = contactStore
                .orderBy('createdAt', 'desc')
                .onSnapshot(snapshot => {
                    const tmp_arr = [];
                    snapshot.forEach(doc=>{
                        if(doc.exists){
                            tmp_arr.push({
                                id: doc.id, data: doc.data()
                            })
                        }
                    });
                    commit('setContacts', tmp_arr)
                })
        },
        async readContact(context, contact){
            const response = new CustomResponse();
            try{
                const tmp_contact = new Contact(contact);
                await tmp_contact.updateContact(contact.id, {read: true});
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
        async addContact(context, contact){
            const response = new CustomResponse();
            try{
                const tmp_contact = new Contact(contact);
                await tmp_contact.addContact()
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
        async deleteContact(context, contact){
            const response = new CustomResponse();
            try{
                const tmp_contact = new Contact(contact.data);
                await tmp_contact.deleteContact(contact.id)
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        }
    }
}