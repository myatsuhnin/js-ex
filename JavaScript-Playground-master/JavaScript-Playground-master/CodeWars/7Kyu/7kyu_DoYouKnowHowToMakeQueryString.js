/*

 7kyu - Do you know how to make Query String?

 Query string is a way to serialize object, which is used in HTTP requests. 
 You may see it in URL:

 codewars.com/kata/search/?q=querystring
 The part q=querystring represents that parameter q has value querystring. Also 
 sometimes querystring used in HTTP POST body:

 POST /api/users
 Content-Type: application/x-www-form-urlencoded

 username=warrior&kyu=1&age=28
 The string username=warrior&kyu=1&age=28 represents an entity (user in this example) with username equals warrior, kyu equals 1 and age equals 28. The entity may be represented as object:

 {
   "username": "warrior",
   "kyu": 1,
   "age": 28
 }

 Sometimes there are more than one value for property:

 {
   "name": "shirt",
   "colors": [ "white", "black" ]
 }

 Then it represents as repeated param:
 name=shirt&colors=white&colors=black

 So, your task is to write a function that convert an object to query string:
 to_query_string({ "bar": [ 2, 3 ], "foo": 1 }) # => "bar=2&bar=3&foo=1"

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



function toQueryString(obj) {
    let str = "";
    for(let x in obj) {
        if(str.length) { str += "&"}
        (Array.isArray(obj[x])) ? str += obj[x].map(a=> `${x}=${a}`).join("&") : str += `${x}=${obj[x]}`;
    }
    return str;
}