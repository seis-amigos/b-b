// get btn id
let addBtn = document.getElementById('addBtn');

//get the add form contianer 
let addForm = document.getElementById('formContainer');

// get the span to close form
let span = document.getElementsByClassName("close")[0];




// function to open the add form
addBtn.addEventListener('click', function () {
    addForm.style.display = 'block';
    addForm.style.visibility = 'visible';
});

// function to close the add form
span.addEventListener('click', function () {
    addForm.style.display = 'none';
});

// close the form whem user click anywhere outside the form
window.addEventListener('click', function () {
    if (event.target == addForm) {
        addForm.style.display = 'none';
    }
});

//----------------------------------------------------------------------------

// array have all houses
let allHouses = JSON.parse(localStorage.getItem('houses')) ? JSON.parse(localStorage.getItem('houses')) : [];

//get the add house form 
let addHouseForm = document.getElementById('addHouseForm');

// get parent 
parent = document.getElementById('cardHouses2');

function HouseInfo(type, location, area, decription, price, images) {
    this.type = type;
    this.location = location;
    this.area = area;
    this.decription = decription;
    this.price = price;
    this.images = images;
    allHouses.push(this);
}

addHouseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let ty, loca, ar, decr, pr, img1, img2, img3, imagesArray = [];
    ty = event.target.selectType.value;
    console.log(event);
    loca = event.target.location.value;
    ar = event.target.Area.value;
    decr = event.target.briefDesc.value;
    pr = event.target.price.value;
    img1 = event.target.image1.value;
    imagesArray.push(img1);

    img2 = event.target.image2.value;
    if (img2 !== '') {
        imagesArray.push(img2);
    }

    img3 = event.target.image3.value;
    if (img3 !== '') {
        imagesArray.push(img3);
    }


    console.log(imagesArray);
    new HouseInfo(ty, loca, ar, decr, pr, imagesArray);
    console.log(allHouses);
    addForm.style.visibility = 'hidden';
    cardRender(ty, loca, ar, decr, pr, imagesArray);
    setHouse();
});

// console.log(allHouses[0].images);
console.log(allHouses);
getHouse();
let cardArray = [];
function cardRender(type, location, area, decription, price, images) {
    console.log(images);
    let houseCard = document.createElement('div');
    let housCardInner = document.createElement('div');
    let houseCardFront = document.createElement('div');
    let cardHeader = document.createElement('div');
    let houseInfo = document.createElement('div');
    let houseCardBack = document.createElement('div');
    let listContianer = document.createElement('div');
    let btnContainer = document.createElement('div');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let housePrice = document.createElement('div');
    for (let i = 0; i < allHouses.length; i++) {

        houseCard.setAttribute('class', 'house-card');
        houseCard.setAttribute('id', `Housecard${i}`);
        parent.appendChild(houseCard);
        houseCard.appendChild(housCardInner);
        housCardInner.setAttribute('class', 'house-card-ineer');
        houseCardFront.setAttribute('class', 'house-card-front');
        housCardInner.appendChild(houseCardFront);
        // --------------- front
        houseCardFront.appendChild(cardHeader);
        houseCardFront.appendChild(houseInfo);
        houseInfo.appendChild(p);
        houseInfo.appendChild(p2);
        housePrice.setAttribute('class', 'house-price');
        houseCardFront.appendChild(housePrice);
        //----------------------
        housCardInner.appendChild(houseCardBack);
        //---------------- back
        //---------------------
        cardHeader.setAttribute('class', 'card-image');
        cardHeader.setAttribute('id',`hederImg${i}`);
        houseInfo.setAttribute('class', 'house-info');
        

        houseInfo.innerHTML = `
        <p>${type}</p>
                           <p>
                               ${decription}
                           </p>
                       </div>
                       <div class="house-price">
                           $${price}
                       </div>
        `;
        houseCardBack.setAttribute('class', 'house-card-back');

        listContianer.setAttribute('id', 'listContainer');
        houseCardBack.appendChild(listContianer);
        listContianer.innerHTML = `     
        <ul>
        <li>${location}</li>
        <li>${area}</li>
        <li>3 room</li>
        </ul>
        `;
        btnContainer.setAttribute('id', 'btnContainer');
        houseCardBack.appendChild(btnContainer);
        btnContainer.innerHTML = `<button class="card-btn" id="cardBtn${i}"  onClick="getID(this.id)">See more</button>`;
        // cardHeader.setAttribute('id',`hederImg${i}`);
        // let cardHeaderImg=document.getElementById(`hederImg${i}`);
        // cardHeaderImg.style.backgroundImage=`url(${images[i]})`;
        document.getElementById(`hederImg${i}`).style.backgroundImage= `url('${allHouses[i].images[0]}')`;
        
        
    }
    cardHederImage();
}
// ---------------------------------------------------------
// Get the waiting id
let waiting = document.getElementById('waiting')


function getID(btnId) {
    console.log(btnId);
    localStorage.setItem('index', JSON.stringify(btnId));
    waiting.style.display = 'block';
    window.scrollTo(0, 50);
    setInterval(() => {
        window.location.replace("see-more.html");

    }, 2000);
}





//--------------------------------------------------------------------------------
// let searchForm = document.getElementById('searchForm');
// let alls=document.getElementsByClassName('house-price');
// console.log(document.getElementsByClassName('house-price'));
// for (let i = 0; i < alls.length; i++) {
//     console.log(alls[i]);

// }
// let x = [];
// let housePrice = document.getElementsByClassName('type');
// for (let i = 0; i < housePrice.length; i++) {
//     x.push(housePrice[i].textContent);
// }
// searchForm.addEventListener('submit', function (event) {

//     event.preventDefault();
//     let userInput = event.target.input.value;
//     // let fillter=event.target.value.toUpperCase();

//     let houseCard = document.getElementsByClassName('house-card');
//     // console.log(housePrice[0].textContent);


//     for (let i = 0; i < houseCard.length; i++) {
//         if (x[i] === userInput.trim()) {
//             houseCard[i].style.display = '';

//         }
//         else if (userInput.length === 0 || userInput.trim() === '') {
//             houseCard[i].style.display = '';
//         }
//         else {
//             houseCard[i].style.display = 'none';
//         }
//     }
//     getHouse();

// });


// -------------------------------- image in the same page -----------------


function cardHederImage()
{
    if (allHouses.length!==0) {
        for (let i = 0; i < allHouses.length; i++) {
        
       
            
            
        }
    }
   
}

//------------------------------------------LocalStorge --------------------------------


function setHouse() {
    let Houses = localStorage.setItem('houses', JSON.stringify(allHouses));


}

function getHouse() {
    let allData = JSON.parse(localStorage.getItem('houses'));
    if(allHouses.length !== 0)
    {
        for (let i = 0; i < allData.length; i++) {
            cardRender(allData[i].type, allData[i].location, allData[i].area, allData[i].decription, allData[i].price, allData[i].images);
            
        }
    
    }
    
}



