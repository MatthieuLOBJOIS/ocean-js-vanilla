const listMenu = [
    "accueil", "évènement", "contact", "à propos"
];


const lorem = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

const app = {
    init: () => {
        app.container = document.querySelector('#container');
        app.header = document.querySelector('#header');
        app.oceanInfo = document.querySelector('.ocean-info');
        app.footer = document.querySelector('#footer');
        app.generateMenu();
        app.generateButton().addEventListener('click', app.handleButtonClick);
        app.generateDescriptionBloc();
        app.arrow = "down";
        app.generateBurger().addEventListener("click", app.openMenuBurger);
        //app.generateMenuBurger();
    },

    generateMenu: () => {
        const nav = document.createElement('nav');
        const ul =  document.createElement('ul');
        nav.className = 'menu';
        ul.className = 'menu-list';
        listMenu.map(item => {
            const li =  app.generateItemMenu(item);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        return app.header.appendChild(nav);
    },

    generateItemMenu: (item) => {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = item.charAt(0).toUpperCase() + item.slice(1);
        return li;
    },

    generateButton: () => {
        const button = document.createElement('button');
        const icon = document.createElement('ion-icon');
        icon.name = "caret-down-outline";
        icon.className = "info-button-icon";
        button.className = 'info-button';
        button.appendChild(icon);
        return app.oceanInfo.appendChild(button);
    },

    generateDescriptionBloc: () => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        div.className = "info-popup"
        p.className = "info-popup-paragraph"
        div.appendChild(p);
        p.innerHTML = lorem[0];
        return app.oceanInfo.appendChild(div);
    },

    handleButtonClick: () => {
        const icon =  document.querySelector('.info-button-icon');
        const div = document.querySelector('.info-popup');
        if(app.arrow === "down") {
            icon.classList.add("info-button-icon--up");
            div.classList.add("info-popup-up");
            app.arrow = "up";
        } else {
            icon.classList.remove("info-button-icon--up");
            div.classList.remove("info-popup-up");
            app.arrow = "down";
        }
    },

    generateBurger: () => {
        const button = document.createElement("button");
        button.className = "burger-button";
        for (var i = 0; i < 3; i++) {
        const bar = document.createElement("div");
        bar.className = "burger-bar";
        bar.classList.add("bar" + i);
        button.appendChild(bar);
        }
        return app.header.appendChild(button);
    },

    openMenuBurger: () => {
        console.log("click");
        const menu = document.querySelector(".menu");
        const button = document.querySelector(".burger-button");
        menu.classList.toggle("menu--display");
        button.classList.toggle("burger-button--close");

        for (var i = 0; i < 3; i++) {
            const bar = document.querySelector(".bar" + i);
            bar.classList.toggle("burger-bar--close")

        }

    }
};

document.addEventListener('DOMContentLoaded', app.init);