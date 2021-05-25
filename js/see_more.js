// get the index of house the user has chooese

let houseIndexString= (JSON.parse(localStorage.getItem('index')));
let houseIndex=Number(houseIndexString[houseIndexString.length-1]);

// get all Houses array

let allHouses=JSON.parse(localStorage.getItem('houses'));


// render the page contant

function renderContant()
{
    
    for (let i = 0; i < allHouses.length; i++) {
        if (i===houseIndex) {
            console.log('hi');
            let mainHouseImage=document.getElementById('mainHouseImage');
            mainHouseImage.src=allHouses[i].images[0];
            let typeofhouse=document.getElementById('typeofhouse');
            typeofhouse.textContent=allHouses[i].type;
            let locationofhouse=document.getElementById('locationofhouse');
            locationofhouse.textContent=allHouses[i].location;
            let decriptionofhouse=document.getElementById('decriptionofhouse');
            decriptionofhouse.textContent=allHouses[i].decription;
            let priceofhouse=document.getElementById('priceofhouse');
            priceofhouse.textContent='$'+allHouses[i].price;
            let houseimage2=document.getElementById('houseimage2');
            houseimage2.src=allHouses[i].images[1];
            let houseimage3=document.getElementById('houseimage3');
            houseimage3.src=allHouses[i].images[2];
        }
        
    }
}

renderContant();

//-----------------------------------------------

// array for all users
let allUsers=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];


// constructor for user

function User(fname,phone,email,date,hour)
{
    this.fname=fname;
    this.phone=phone;
    this.email=email;
    this.date=date
    this.hour=hour;

    allUsers.push(this);
    
}


// set localStorge function

function setUser()
{
    localStorage.setItem('users',JSON.stringify(allUsers));

}

// get localStorge function

function getUser()
{
    let users=JSON.parse(localStorage.getItem('users'));
}


// get the form

let userform=document.getElementById('userform');
console.log(userform);
userform.addEventListener('submit',function(event)
{

    event.preventDefault();
    let name,phone,email,date,hour;
console.log(event);
    name=event.target[0].value;
    phone=event.target[1].value;
    email=event.target[2].value;
    date=event.target[3].value;
    hour=event.target[4].value;

    new User(name,phone,email,date,hour);

    setUser();
    showBox(name,phone,email,date,hour);
    
    // name=document.getElementById('fname');
    // phone=document.getElementById('phoneNumber');
    // email=document.getElementById('email');
    // date=document.getElementById('date');
    
    // name.textContent='';
    // phone.textContent='';
    // email.textContent='';
    // date.textContent='';
});




function showBox(name,phone,email,date,hour) {
    let na,pho,ema,fullDa,formBox;

    na=document.getElementById('formName');
    pho=document.getElementById('formPhone');
    ema=document.getElementById('formEmail');
    fullDa=document.getElementById('formDate');

    na.textContent='Name: '+name;
    pho.textContent='Phone Number: '+phone;
    ema.textContent='Email:'+email;
    fullDa.textContent='The chosen date & hour:'+date+' at '+hour;
    

    formBox=document.getElementById('formBox');
    formBox.style.display='block';

    


}

let close=document.getElementById('close');

close.addEventListener('click',function(event){
    event.preventDefault();
    formBox.style.display='none';
});
