import {galleryStore} from "../../configs/firebase";
import {CustomResponse} from "../../utils/globalObjects";
import Gallery from "../../models/gallery";

export default {
    namespaced: true,
    state: {
        galleries: [],
        listener: null
    },
    getters: {
        getGalleries: state => state.galleries
    },
    mutations: {
        setGalleries: (state, payload) => state.galleries = payload,
        reset(state){
            if(state.listener !== null) state.listener();
            state.listener = null;
            state.galleries = []
        }
    },
    actions: {
        fetchGalleries({state, commit}){
            state.listener = galleryStore
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
                    commit('setGalleries', tmp_arr)
                })
        },
        async addGallery(context, gallery){
            const response = new CustomResponse();
            try{
                let new_gallery = new Gallery(gallery);
                await new_gallery.save()
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        },
        async deleteGallery(context, gallery){
            const response = new CustomResponse();
            try{
                let tmp_gallery = new Gallery(gallery);
                await tmp_gallery.delete(gallery.id)
            }catch (e){
                response.set_status(false, e)
            }
            return Promise.resolve(response)
        }
    }
}