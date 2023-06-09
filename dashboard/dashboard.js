let darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click", darkMode);

// document.querySelectorAll(".material-symbols-outlined").forEach((m) => {
//     console.log(m);
//     m.classList.add("material-symbols-outlined-dark");
//     m.classList.remove("material-symbols-outlined");
// });

let darkmodeon = false;

function darkMode() {
    // let element = document.body;
    // element.classList.toggle("dark-mode");
    // document.querySelectorAll(".material-symbols-outlined").forEach((m) => {
    //     console.log(m);
    //     m.classList.add("material-symbols-outlined-dark");
    //     m.classList.remove("material-symbols-outlined");
    // });
    if (darkmodeon) {
        document.documentElement.style.setProperty('--background-color', '#333333');
        document.documentElement.style.setProperty('--text-color', '#f5f5f5');
        document.documentElement.style.setProperty('--accent-color', '#cf9fff');
        document.documentElement.style.setProperty('--accent-color-light', '#cf9fff80');
        darkmodeon = false;
    }else
    {
        document.documentElement.style.setProperty('--background-color', '#f5f5f5');
        document.documentElement.style.setProperty('--text-color', '#333333');
        document.documentElement.style.setProperty('--accent-color', '#ff7f50');
        document.documentElement.style.setProperty('--accent-color-light', '#ff7f5080');
        darkmodeon = true;
    }
};

