// testing /user route
import fetch from 'node-fetch';
let res = fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'ankush',
        password: 'gan'
    })
}).then((res) => {
    return res.json();
}
).then((data) => {
    console.log(data);
});