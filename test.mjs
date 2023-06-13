// testing /user route
import fetch from 'node-fetch';
let res = fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // email: 'ankush4@pes.com',
        // password: '$2a$10$6AqJQwOpPHvP7oz2Nk27uet.t5Ihw.0lVh497AXkr.Mik/3QIDNze'
        email: 'ankush',
        password: 'ganya'
    })
}).then((res) => {
    return res.json();
}
).then((data) => {
    console.log(data);
});