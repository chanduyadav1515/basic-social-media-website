export function bodyForm(params)
{
    let encodedForm=[];
     
    for(let property in params){

        let encodedKey = encodeURIComponent(property);
        let enocdedValue = encodeURIComponent(params[property]);

        encodedForm.push(encodedKey +"="+ enocdedValue);
    }
    return encodedForm.join("&")
}