// alert("Hello JavaScript");
// var htmlDocument = document.getElementsByTagName('p');
// console.log(htmlDocument);
var styleArticle = document.getElementsByTagName('article');
for(i=0; i<styleArticle.length; i++){
    var element = styleArticle[i];
    element.style.width = '50%';
    element.style.textAlign = 'center';
    // element.style.display = 'flex';
    // element.style.flexDirection = 'row';
    // element.style.justifyContent = 'center';
    // element.style.alignItems = 'center';
}

var styleAuthor = document.getElementsByClassName('author');
for(i=0; i<styleAuthor.length; i++){
    var element = styleAuthor[i];
    if(i==0){
        element.innerHTML = 'Writer';
        element.style.fontWeight = '800';
    }
}