import Client from "./Client"
import ToastService from "./ToastService"

class BookService {
    async postBook(payload){
        try {
            const response = await Client.post('/new-book', payload)
            return response
        }
        catch(err){
            ToastService.error(err.message)
        }
    }

    async getABook(payload){
        try {
            const response = await Client.get(`/book/${payload}`)
            return response
        }
        catch(err){
            ToastService.error(err.message)
        }
    }
    

    async getAllBook(url){
        try {
            const response = await Client.get(url)
            return response
        }
        catch(err){
            ToastService.error(err.message)
        }
    }

    async getAllCategory(url, payload){
        try {
            const response = await Client.get(url)
            return response
        }
        catch(err){
            ToastService.error(err.message)
        }
    }
}

export default new BookService()