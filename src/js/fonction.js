function carrousel3Images() {
    var accueil__imgfilm = document.querySelectorAll('.accueil__carroussel');
    let d = 2000;
    let delta = 1000;

    accueil__imgfilm.forEach(function(img,indice) {
        img.style.zIndex = accueil__imgfilm.length - indice;
    });

    let anim153 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim153.add({
        targets: accueil__imgfilm,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (2*delta)+d;
                         if (ind == 1) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 2) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            return (3*delta)+(2*d);
        }
    });
}