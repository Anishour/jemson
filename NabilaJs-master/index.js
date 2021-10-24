const makeRequst = async (url, config) => {
    const res = await fetch(url, config);
    if(!res.ok){
        const massage = `Error : ${res.status}`;
        throw new Error(massage)
    }
    const data = await res.json();
    return data;
};

const deleteData = () => {
    makeRequst("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'DELETE',
 
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

};
deleteData();
//const updateData = () => {
//    makeRequst("https://jsonplaceholder.typicode.com/posts/1",{
//        method: 'PUT',
//        body: JSON.stringify({
//            id: 1,
//          title: 'heyyo',
//          body: 'bar',
//          userId: 1,
//        }),
//        headers: {
//          'Content-type': 'application/json; charset=UTF-8',
//        },
//    })
//    .then((res) => console.log(res))
//    .catch((err) => console.log(err))
//
//};
//updateData();
//const sendData = () => {
//    makeRequst("https://jsonplaceholder.typicode.com/posts",{
//        method: 'POST',
//        body: JSON.stringify({
//          title: 'foo',
//          body: 'bar',
//          userId: 1,
//        }),
//        headers: {
//          'Content-type': 'application/json; charset=UTF-8',
//        },
//    })
//    .then((res) => console.log(res))
//    .catch((err) => console.log(err))
//
//};
//sendData();
//const getData = () => {
//    makeRequst("https://jsonplaceholder.typicode.com/posts")
//    .then((res) => console.log(res))
//    .catch((err) => console.log(err))
//
//};
//getData();