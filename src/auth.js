// import router from "@/router";
/*eslint-disable*/
import axios from 'axios'
import router from './router'
export const tokenConfig = () => {
    let token = localStorage.getItem('auth-token')
    var headers = {
        "Content-Type": "application/json"
    }
    if (token) {
        headers['auth-token'] = token
    }
    return headers
}

export const guard = async (to, from, next) => {

    try {
        await axios({ 
            url: 'auth/verifyToken', 
            headers: tokenConfig()
        })
    } catch (error) {
        return router.push('/login').catch(err => {})
    }
    return next()
}