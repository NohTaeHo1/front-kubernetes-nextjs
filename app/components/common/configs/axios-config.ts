import axios from "axios";
import { parseCookies } from "nookies";

// export default function AxiosConfig() {
//   return {
//     headers: {
//       "Cache-Control": "no-cache", // defalut값
//       "Content-Type": "application/json",
//       Authorization: `Bearer blah ~`,
//       "Access-Control-Allow-Origin": "*",
//     }
//   }
// }

const instance = axios.create({baseURL:process.env.NEXT_PUBLIC_API_URL})

instance.interceptors.request.use(
  (request)=>{
    const accessToken = parseCookies().accessToken;
    console.log('Token in parseCookies of AXIOS interceptors')

    request.headers['Content-Type'] = "application/json"
    request.headers['Authorization'] = `Bearer ${accessToken}`
    return request
  },
  (error)=>{
    console.log('AXIOS interceptors error(request) : '+error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response)=>{
    if(response.status === 404){
      console.log('AXIOS interceptors error(no token)')
    }
    return response
  }
)

export default instance