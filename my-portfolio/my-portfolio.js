 // THE BACK TO TOP SCROLL BUTTON ....
 window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show"); 
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};




document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};







document.body.style.backgroundImage = 'url("11_aswasdas1.jpg")';  // SETS BACKGROUND IMAGE SO AS TO CHANGE TO LIGHT MODE WHEN NEEDED....



//THE LIGHT AND DARK MODE TOGGLE BUTTON FUNCTION....

function changeBackgroundColor() {
    if(document.body.style.backgroundImage === 'url("11_aswasdas1.jpg")') {
        document.body.style.backgroundImage = '';
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundImage ='url("11_aswasdas1.jpg")'
        document.body.style.backgroundColor = '';

    }

    if (document.body.style.backgroundColor === 'white') {
        document.querySelector('.text').style.color = 'black';
        document.querySelector('.about').style.color = 'rgb(46, 46, 46)';
        document.querySelector('.projects').style.color = 'rgb(46, 46, 46)';
        document.querySelector('.contact').style.color = 'rgb(46, 46, 46)';
        document.querySelector('.about-msg').style.color = 'rgb(46, 46, 46)';
        document.querySelector('.skill').style.color = 'rgb(46, 46, 46)';
        document.querySelector('.experience').style.color = 'rgb(46, 46, 46)';
        // document.querySelector('main').style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        document.querySelector('.data').style.boxShadow = '0 6px 10px rgba(0,0,0,0.3)';
        // document.querySelector('.light').style.color = 'black';



    } else {
        document.querySelector('.text').style.color = '#F0FFFF';
        document.querySelector('.about').style.color = 'white';
        document.querySelector('.projects').style.color = 'white';
        document.querySelector('.contact').style.color = 'white';
        document.querySelector('.about-msg').style.color = 'white';
        document.querySelector('.skill').style.color = 'white';
        document.querySelector('.experience').style.color = 'white';
        document.querySelector('.light').style.color = 'white';
        document.querySelector('.data').style.boxShadow = 'none';

    }

    
}





    

    
    
    





// window.onload = function() {
//     document.body.style.backgroundImage = 'url("11_aswasdas1.jpg")';
//     document.body.style.backgroundSize = 'cover';
//     document.body.style.backgroundRepeat = 'no-repeat';
//     // document.body.style.backgroundPosition = 'center';
//   };

//   function changeBackgroundColor() {
//     // Check if the current background image is set
//     if (document.body.style.backgroundImage === 'url("11_aswasdas1.jpg")') {
//       document.body.style.backgroundImage = '';  // Remove background image
//       document.body.style.backgroundColor = 'white';  // Set white background color
//     } else {
//       document.body.style.backgroundImage = 'url("11_aswasdas1.jpg")';  // Set image as background
//       document.body.style.backgroundColor = '';  // Clear background color
//     }
//   }