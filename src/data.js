export async function  data(city){
    const apiKey = '1ec1107aad7477fcc2442977f02cf062'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try{
        const data1 = await fetch(apiUrl)
        if(!data1.ok){
            return;
        }
        const data2 = await data1.json()
        return data2
    }catch(error){
        return;
    }


}