export default {
    methods: {
        getDate(date){
            return date.toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        },
        getTime(date){
            return date.toLocaleString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true })
        },
        getDatetime(date){
            return date.toLocaleString(undefined, {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        },
        getReadableDate(store_timestamp){
            if(store_timestamp){
                let _date = new Date(0);
                _date.setSeconds(store_timestamp.seconds);
                if(_date.getTime() === _date.getTime())
                    return _date.toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
            }
            return ''
        },
        getReadableTime(store_timestamp){
            if(store_timestamp){
                let _date = new Date(0);
                _date.setSeconds(store_timestamp.seconds);
                if(_date.getTime() === _date.getTime())
                    return _date.toLocaleString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true })
            }
            return ''
        },
        getReadableDatetime(store_timestamp){
            if(store_timestamp){
                let _date = new Date(0);
                _date.setSeconds(store_timestamp.seconds);
                if(_date.getTime() === _date.getTime())
                    return _date.toLocaleString(undefined, {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
            }
            return ''
        },
        getReadableMonth(store_timestamp){
            if(store_timestamp){
                let _date = new Date(0);
                _date.setSeconds(store_timestamp.seconds);
                if(_date.getTime() === _date.getTime())
                    return (_date.getMonth()+1)
            }
            return ''
        },
        getReadableYear(store_timestamp){
            if(store_timestamp){
                let _date = new Date(0);
                _date.setSeconds(store_timestamp.seconds);
                if(_date.getTime() === _date.getTime())
                    return _date.getFullYear()
            }
            return ''
        },
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
    }
}