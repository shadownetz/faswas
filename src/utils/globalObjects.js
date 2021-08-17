class _Response{
    constructor() {
        this.data = {};
        this.status = true;
        this.message = ''
    }
    set_status(value,err){
        this.status = value
        this.message = err.message||err.statusText || JSON.stringify(err)
    }
}

export const CustomResponse = _Response