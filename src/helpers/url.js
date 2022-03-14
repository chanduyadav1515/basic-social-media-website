const API_ROOT = "http://codeial.codingninjas.com:8000/api/v2"

export const ApiUrls = {
    login : ()=> `${API_ROOT}/users/login`,
    signin : ()=> `${API_ROOT}/users/signup`,
    fetchposts : (page,limit)=>`${API_ROOT}/posts?page=${page}&limit=${limit}`
}