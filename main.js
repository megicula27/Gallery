let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestImg;
let newNextImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
    galleryImages.forEach(function (img, index) {

        img.onclick = function () {

            let getElementCss = window.getComputedStyle(img);
            let getFullImgURL = getElementCss.getPropertyValue("background-image");
            let getImgPosition = getFullImgURL.split("/img/");
            let newURL = getImgPosition[1].replace('")', '');

            getLatestImg = index;

            let container = document.body;
            let newEle = document.createElement("div");
            container.appendChild(newEle);

            newEle.setAttribute("class", "img-window");
            newEle.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newEle.appendChild(newImg);
            newImg.setAttribute("src", "/img/" + newURL);
            newImg.setAttribute("id", "currImg");


            newImg.onload = function () {

                let imgWidth = this.width;
                let calcAlignment = ((windowWidth - imgWidth) / 2) -120;



                // NEXT BUTTON
                let newNextBtn = document.createElement("a");
                let NextBtnText = document.createTextNode("Next");
                newNextBtn.appendChild(NextBtnText);
                container.appendChild(newNextBtn);

                newNextBtn.setAttribute("class", "img-btn-next");

                newNextBtn.setAttribute("onclick", "changeImg(1)");


                newNextBtn.style.cssText = "right:" + calcAlignment + "px;";



                // PREVIOUS BUTTON
                let newPrevBtn = document.createElement("a");
                let PrevBtnText = document.createTextNode("Previous");
                newPrevBtn.appendChild(PrevBtnText);
                container.appendChild(newPrevBtn);

                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");


                newPrevBtn.style.cssText = "left:" + calcAlignment + "px;";
            }


        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(flag) {
    document.querySelector("#currImg").remove();
    let imgWin = document.querySelector(".img-window");

    let calcNewImg;
   

    if (flag === 1) {
      
        if (getLatestImg === galleryImages.length - 1) {
            getLatestImg = 0;
        } else {
            getLatestImg = getLatestImg + 1;
        }

    } else {
       
        if (getLatestImg === 0) {
            getLatestImg = galleryImages.length - 1;
        } else {
            getLatestImg = getLatestImg - 1;
        }

    }
    calcNewImg = galleryImages[getLatestImg];
    let getElementCss = window.getComputedStyle(calcNewImg);
    let getFullImgURL = getElementCss.getPropertyValue("background-image");
    let getImgPosition = getFullImgURL.split("/img/");
    let newURL = getImgPosition[1].replace('")', '');

 
    let newImg = document.createElement("img");

    imgWin.appendChild(newImg);
    newImg.setAttribute("id", "currImg");
    newImg.setAttribute("src", "/img/" + newURL);



}