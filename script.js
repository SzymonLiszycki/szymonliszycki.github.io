const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks =document.querySelectorAll('header nav a');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.getElementsByClassName.toggle('active');
}

window.onscroll =()=>{
    sections.forEach(sec =>{
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;
        const id = sec.getAttribute(id);

        if(top>= offset && top <offset +height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+id+']').classList.add('active');
            })
        }
    })
}












function downloadResume() {
    const language = document.documentElement.lang;

    const resumeLinks = {
        'en': './downloads/CV_SL_EN_2024.pdf', 
        'pl': './downloads/CV_SL_PL_2024.pdf',       
    };

    const resumeToDownload = resumeLinks[language] || resumeLinks['en']; 

    const link = document.createElement('a');
    link.href = resumeToDownload;
    link.download = resumeToDownload.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

