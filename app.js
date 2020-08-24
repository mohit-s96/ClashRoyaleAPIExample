const api_key = '';


document.querySelector('.formhook').addEventListener('submit' ,getProfile);

function getProfile(e){

    e.preventDefault();
    let tag = e.target.firstElementChild.children[0].value ;
    console.log(tag);
    if(tag === undefined || tag === null || tag === ''){
        displayError1();
    }
    else{
        console.log(tag);
        tag = tag.replace(/ /g, "");
        sendReq(tag);
    }
}
function displayError1(){
    let errMessage = document.createElement('span');
    errMessage.className = 'error';
    errMessage.textContent = 'Input field can\'t be empty';
    let form = document.querySelector('.formhook');
    let parent = document.querySelector('.formhook').parentElement;
    parent.insertBefore(errMessage,form);
    setTimeout(() => {
        errMessage.remove();
    },3000 );
}

let sendReq = (tag) => {
    let url = 'https://api.clashroyale.com/v1/players/';
    let token = api_key;
    url = url + '%23' + tag;
    let h = new Headers({
             "Accept": "application/json",
             "authorization": `Bearer ${token}`
           
        });
   
    let req = new Request(url, {
        method: 'GET',
        mode: 'cors',
        headers: h
    });
    fetch(req)
        .then(resp => resp.json())
        .then(data => {
          
            let result = data;
            updatePage(result);
        })
        .catch(err => {
            console.error(err.message);
            displayError(err.message);
        })
}
function displayError(mes){
    document.querySelector('.register').value = mes;
}
function updatePage(res){
    console.log(res);
    let cname = '';
    if(res.clan){
        cname = res.clan.name;
    }
    else{
        cname = 'No Clan';
    }
    let trashValue = 'Not Trash';
    if( (res.badges[2].progress > 1460) && (res.battleCount > 20000) && (res.bestTrophies < 7000)){
        trashValue = 'Trash';
    }
    let row = document.createElement('tr');
    row.innerHTML = `
    <th>${res.name}</th>
    <th>${cname}</th>
    <th>${res.bestTrophies}</th>
    <th>${res.expLevel}</th>
    <th>${trashValue}</th>
    `

    let tbody = document.querySelector('tbody');
    tbody.appendChild(row);

}
