export function bodyForm(params)
{
    let encodedForm=[];
     
    for(let property in params){

        let encodedKey = encodeURIComponent(property);
        let enocdedValue = encodeURIComponent(params[property]);

        encodedForm(encodedKey +"="+ enocdedValue);
    }
    return encodedForm.join("&")
}