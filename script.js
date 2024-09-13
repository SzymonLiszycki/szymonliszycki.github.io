// function setLanguageContent(language) {
//     const content = {
//         'pl': {
//             title: 'Witaj na mojej stronie',
//             text: 'To jest przykład strony w języku polskim.',
//         },
//         'en': {
//             title: 'Welcome to my website',
//             text: 'This is an example page in English.',
//         }
//     };

//     document.getElementById('mainTitle').innerText = content[language].title;
//     document.getElementById('mainContent').innerText = content[language].text;
// }

// // Funkcja do przełączania języka ręcznie
// function switchLanguage(language) {
//     localStorage.setItem('preferredLanguage', language);
//     setLanguageContent(language);
// }

// // Funkcja wykrywająca preferencje użytkownika
// function detectLanguage() {
//     const savedLanguage = localStorage.getItem('preferredLanguage');
//     if (savedLanguage) {
//         return savedLanguage;
//     }

//     const browserLanguage = navigator.language || navigator.userLanguage;
//     return browserLanguage.startsWith('pl') ? 'pl' : 'en';
// }

// // Inicjalizacja przy załadowaniu strony
// (function init() {
//     const language = detectLanguage();
//     setLanguageContent(language);
// })();
// // Funkcja, która uruchomi pobieranie CV
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

