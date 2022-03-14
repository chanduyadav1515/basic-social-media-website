const API_ROOT = "http://codeial.codingninjas.com:8000/api/v2"

export const ApiUrls = {
    login : ()=> `${API_ROOT}/user/login`,
    signin : ()=> `${API_ROOT}/user/signin`,
    fetchposts : (page,limit)=>`${API_ROOT}/posts?page=${page}&limit=${limit}`
}