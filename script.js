window.addEventListener('scroll', reveal)

function reveal()
{
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowHeight - revealpoint)
        {
            reveals[i].classList.add('active');
        }
        else
        {
            reveals[i].classList.remove('active');
        }
    }
}

const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar')
const navLinks = document.querySelectorAll('.navlink')

menuBar.classList.remove('active');

menuBtn.addEventListener('click', () => {
    menuBar.classList.toggle('active');
});
