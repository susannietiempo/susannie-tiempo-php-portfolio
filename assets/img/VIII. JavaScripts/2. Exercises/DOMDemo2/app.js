let $ = function(id){
return document.getElementById(id);
};

let toggle = function(){
    let h2 = this;
    let toggleButton = h2.getElementsByTagName('i')[0];
    let topicDiv = h2.nextElementSibling;
    console.log(h2);
    console.log(toggleButton);
    console.log(topicDiv);
    if (!topicDiv.classList.contains('close')) {
        topicDiv.classList.add('close');
        toggleButton.classList.remove('red');
        toggleButton.classList.add('green');
        toggleButton.classList.remove('fa-minus-circle');
        toggleButton.classList.add('fa-plus-circle');
    }else{
        topicDiv.classList.remove('close');
        toggleButton.classList.add('red');
        toggleButton.classList.remove('green');
        toggleButton.classList.add('fa-minus-circle');
        toggleButton.classList.remove('fa-plus-circle');
    }

};

window.onload = function(){
    //get the h2 tags
let faqs = $('faqs');
let h2Elements = document.getElementsByTagName('h2');

for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].addEventListener('click', toggle);
}
};