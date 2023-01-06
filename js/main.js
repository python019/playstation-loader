// Inspired by the loader on the PS4 which randomises the symbols that appear
var iconList = ['triangle','square','cross','circle'],
    icons = document.getElementsByClassName('icon'),
    ready = 0,
    i,j;

function changeIcon(icon, iconParent) {
    var randomIcon = '#ps_' + iconList[Math.floor(Math.random() * iconList.length)],
        iconNum = parseInt(icon.id.substr(3));

    if (ready < iconNum) { // We make sure every icon is done animating in the right order
        ready = iconNum;
    }

    iconParent.classList.remove('animate');
    icon.setAttribute('xlink:href', randomIcon);

    if (ready === 4) { // If all symbols are changed, start the animation anew
        setTimeout(function(){
            for (j = 0 ; j < icons.length ; j++) {
                icons[j].classList.add('animate');
            }
            ready = 0;
        }, 0);
    }
}

for (i = 0 ; i < icons.length ; i++) { // Loop through all the icons
    icons[i].addEventListener('animationend', function(e) {
        changeIcon(e.target.querySelector('.svg-icon'), e.target);
    });
}

// Toggler, quick and easy
document.querySelector('button').addEventListener('click', function(){
  document.querySelector('.loader').classList.toggle('oneline');
});