// Cities: Write a function called describe_city() that accepts the name of a city and its country.

// The function should print a simple sentence, such as Karachi is in Pakistan.

// Give the parameter for the country a default value. 

// Call your function for three different cities, at least one of which is not in the default country.

function call_city_38(city:string="karachi",country:string="Pakistan"):void{
    console.log(`${city} is  situated  in ${country}`);
}

call_city_38();
call_city_38("lahore");
call_city_38("ISLAMABAD");
call_city_38("Peshawar");
call_city_38("Tokyo","Japan");