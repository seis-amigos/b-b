// get the slider tag
let slideshow=document.getElementById('imageShow');



// creat array of images
let slideShowImages=[
    'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
    'https://plantationhomes.com.au/cms_uploads/images/15861_six-stages-of-building-a-home.jpg',
    'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    'https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg',
    'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/7/3/BP_HHMTN310_Bolden_home-exterior_AFTER_0132.jpg.rend.hgtvcom.966.644.suffix/1549585070420.jpeg'

]

let i=0;
setInterval(function() {
    slideshow.style.backgroundImage=`url(${slideShowImages[i]})`;
    slideshow.style.animation=`kenburns-top 5s infinite ease-out both`;
    i++;
    if(i==slideShowImages.length)
    {
        i=0;
    }
  }, 5000);
  


  
//get the add form contianer 
let addForm = document.getElementById('formContainer');

// get the span to close form
let span = document.getElementById("close");

let video=document.getElementById('video');


// function to open the add form

window.addEventListener('load', function(event) {
    addForm.style.display = 'block';
    addForm.style.visibility = 'visible';
});
// function to close the add form
span.addEventListener('click', function () {
    addForm.style.display = 'none';
    video.muted = true;
    video.autoplay=true;

});

// close the form whem user click anywhere outside the form
window.addEventListener('click', function () {
    if (event.target == addForm) {
        addForm.style.display = 'none';
        video.muted = true;
    }
});