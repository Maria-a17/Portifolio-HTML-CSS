const perfil = document.getElementById('perfil');

function troca() {
    perfil.src = './assets/photo3.png';

}

function troca2() {
    perfil.src = './assets/perfil3.png';
}

perfil.addEventListener('mouseover', troca);
perfil.addEventListener('mouseleave', troca2);