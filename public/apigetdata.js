
// async function apiGetData(url) {
//     alert("hi");
//     console.log(url);
//     await fetch(url)

//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//                 //             console.log("Api Public -", x);
//                 //             return x;
//                 //         }
//                 //         else {
//                 //             throw new Error('Network res was not ok.');
//             }
//             //     })

// }

async function apiGetData(url) {
    const swapiUrl = url;
    let res = await fetch(swapiUrl);
    // let resJson = await res.json();
    if (res.ok) {
        let resJson = await res.json();
        return resJson;
    }
    else {
        throw new Error('Network res was not ok.');
    }

    // return resJson;
}

function f() {
    alert("hi");
}
