import {volunteerStore} from "../../configs/firebase";
import {CustomResponse} from "../../utils/globalObjects";
import Volunteer from "../../models/volunteer";

export default {
    namespaced: true,
    state: {
        volunteers: [],
        listener: null
    },
    getters: {
        getVolunteers: state => state.volunteers
    },
    mutations: {
        setVolunteers: (state, payload) => state.volunteers = payload,
        reset(state){
            if(state.listener !== null) state.listener();
            state.listener = null;
            state.volunteers = []
        }
    },
    actions: {
        fetchVolunteers({state, commit}){
            state.listener = volunteerStore
                .orderBy('createdAt', 'desc')
                .onSnapshot(snapshot => {
                    const tmp_arr = [];
                    snapshot.forEach(doc=>{
                        if(doc.exists){
                            tmp_arr.push({
                                id: doc.id,
                                data: doc.data()
                            })
                        }
                    });
                    commit('setVolunteers', tmp_arr)
                })
        },
        async addVolunteer(context, volunteer){
            const response = new CustomResponse();
            try{
                let new_volunteer = new Volunteer(volunteer);
                await new_volunteer.save()
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
        async updateVolunteer(context, {u_volun, o_volun}){
            const response = new CustomResponse();
            try{
                let volunteer = new Volunteer(u_volun.data);
                await volunteer.update(u_volun.id, o_volun)
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
        async deleteVolunteer(context, volunteer){
            const response = new CustomResponse();
            try{
                let tmp_volunteer = new Volunteer(volunteer);
                await tmp_volunteer.delete(volunteer.id)
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
    }
}