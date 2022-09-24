let url = "https://jsonplaceholder.typicode.com/todos"

let fetchUsers = () => {
    fetch(url)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let postData = "";
            data.map((value) => {
                postData += `${value.title}`;
            });
            postData += "";
            const data2 = document.getElementById("index");
            data2.innerText = postData;
        })
        .catch((err) => {
            console.log(err);
        });
};

fetchUsers();