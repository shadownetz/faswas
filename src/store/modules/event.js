import Event from "../../models/event";
import {CustomResponse} from "../../utils/globalObjects";
import {eventStore} from "../../configs/firebase";

export default {
    namespaced: true,
    state: {
        events: [],
        listener: null
    },
    getters: {
        getEvents: state=>state.events
    },
    mutations: {
        setEvents: (state, payload) => state.events = payload,
        reset(state){
            if(state.listener !== null) state.listener()
            state.events = [];
            state.listener = null
        }
    },
    actions: {
        fetchEvents({state, commit}){
            state.listener = eventStore
                .orderBy('createdAt', 'desc')
                .onSnapshot(snapshot=>{
                const tmp_arr = [];
                snapshot.forEach(doc=>{
                    if(doc.exists){
                        tmp_arr.push({
                            id: doc.id,
                            data: doc.data()
                        })
                    }
                });
                commit('setEvents', tmp_arr)
            })
        },
        async addEvent(context, event){
            const response = new CustomResponse();
            try{
                let new_event = new Event(event);
                await new_event.save()
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
        async updateEvent(context, {u_event, o_event}){
            const response = new CustomResponse();
            try{
                let new_event = new Event(u_event.data);
                await new_event.update(u_event.id, o_event)
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
        async deleteEvent(context, event){
            const response = new CustomResponse();
            try{
                let new_event = new Event(event);
                await new_event.delete(event.id)
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
    }
}