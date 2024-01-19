<script>
    import { onMount } from "svelte";

    import menuIcon from "$lib/assets/menu-icon.png";
    import ukLogo from "$lib/assets/united-kingdom.png";
    import frLogo from "$lib/assets/france.png";

    import { langTable, currentLang } from "../../store";

    import engData from "$lib/data/eng.json";
    import fraData from "$lib/data/fra.json";

    export let homeHeight;
    export let y;
    export let isInView;

    let data;
    let lang;
    let windowWidth;
    let breakPoint = 920;
    let clicked = false;
    let isExpanded = false;

    onMount(async () => {
        windowWidth = window.innerWidth;
    });

    const scrollToElement = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return;

        let position = el.getBoundingClientRect().top;
        let offset = position + window.scrollY;
        
        window.scrollTo({
            top: offset,
            behavior: "smooth",
        });
    }

    const handleChangeLang = (str) => {
        if ( str === "English") {
            langTable.set(engData)
            document.documentElement.setAttribute("lang", 'en');
        } else if (str === "Français") {
            langTable.set(fraData);
            document.documentElement.setAttribute("lang", 'fr');
        }
        currentLang.set(str);
    }
    
    const handleClick = () => {
        clicked = !clicked;
        isExpanded = !isExpanded;
        console.log("click")
    }

    const resetClicked = () => {
        clicked = false;
        isExpanded = false;
        document.body.style.overflowY = "auto";
    }

    const handleResize = () => {
        windowWidth = window.innerWidth;
        if (windowWidth >= breakPoint) resetClicked();
    }

    langTable.subscribe(value => {
        data = value.nav;
    });
</script>

<svelte:window on:resize={handleResize}/>
<div class="lang-dropdown">
    <button class="dropbtn">
        <img src={lang === "English" ? ukLogo : frLogo} width="20px" height="auto" alt="flag">
    </button>
    <div class="dropdown-content">
        <button class={lang === "English" && "inactive"} on:click={() => handleChangeLang("English")}>
            <div>English</div>
            <img src={ukLogo} width="24px" height="auto" alt="British flag">
        </button>
        <button class={lang === "Français" && "inactive"} on:click={() => handleChangeLang("Français")}>
            <div>Français</div>
            <img src={frLogo} width="24px" height="auto" alt="French flag">
        </button>
    </div>
</div>

{#if windowWidth >= breakPoint}
<nav class={ (2 / 3) * homeHeight > y ? "navbar" : "navbar-sticky"}>
    <ul>
        <li class={`nav-link ${isInView == "home" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#home")}>{data.home}</a>
        </li>
        <li class={`nav-link ${isInView == "about" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#about-me")}>{data.about}</a>
        </li>
        <li class={`nav-link ${isInView == "projects" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#projects")}>{data.projects}</a>
        </li>
        <li class={`nav-link ${isInView == "contact" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#contact")}>{data.contact}</a>
        </li>
    </ul>
</nav>
{/if}

{#if windowWidth < breakPoint}
<nav class="mobile-navbar">
    <div class="menu-container">
        <div class="menu-icon" role="menu" tabindex=-1 on:click={handleClick} on:keydown={handleClick}>
            <img src={menuIcon} alt="Menu Icon" />
        </div>
    </div>
    <ul class={isExpanded && "active"}>
        <li class={`nav-link ${isInView == "home" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#home")}>{data.home}</a>
        </li>
        <li class={`nav-link ${isInView == "about" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#about-me")}>{data.about}</a>
        </li>
        <li class={`nav-link ${isInView == "projects" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#projects")}>{data.projects}</a>
        </li>
        <li class={`nav-link ${isInView == "contact" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#contact")}>{data.contact}</a>
        </li>
    </ul>
</nav>
{/if}
<style>
/************
Language selection
************/
    .lang-dropdown {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 20px;
        height: 60px;
    }

    .lang-dropdown .dropbtn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        height: 48px;
        border: none;
        background-color: transparent;
    }

    .lang-dropdown .dropbtn img {
        width: 20px;
        height: auto,
    }

    .lang-dropdown .dropdown-content {
        display: none;
        position: absolute;
        min-width: 100px;
        font-size: 16px;
        top: 60px;
        right: -10px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        background-color: #f0f0f0;
    }

    .lang-dropdown .dropdown-content button {
        color: black;
        padding: 8px;
        text-decoration: none;
        display: block;
        cursor: pointer;
    }

    .lang-dropdown .dropdown-content button:hover {
        background-color: #ddd;
    }

    .lang-dropdown:hover .dropdown-content {
        display: block;
    }

    .lang-dropdown:hover .dropdown-content button {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .lang-dropdown .dropdown-content button.inactive {
        pointer-events: none;
        position: relative;
        background-color: #ddd;
    }

/************
Navbar
************/
    nav {
        background-color: #1F2041;
        color: #fff;
        font-size: 18px;
    }

    .navbar {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        height: 220px;
        width: 100px;
        transition: height 0.5s ease-in-out;
    }

    .navbar ul {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        height: 100%;
    }

    .navbar-sticky {
        top: 0;
        right: 0;
        position: fixed;
        display: flex;
        flex-flow: row nowrap;
        justify-content:flex-end;
        align-items: center;
        width: 100%;
        height: 60px;
        z-index: 1000;
        text-align: center;
    }

    .navbar-sticky ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row nowrap;
        margin-right: 5%;
        height: 100%;
    }

    .navbar-sticky .nav-link {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
    }

    .navbar-sticky .nav-link.active {
        background-color: #fff;
        color: #FFC857;
    }

    nav a:hover {
        transition: all 0.5s ease-in-out;
        color: #FFC857;
    }

/************
Mobile Navbar
************/
    .mobile-navbar .menu-container {
        position: fixed;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 60px;
        top: 0;
        left: 0;
        background-color: #1F2041;
        z-index: 1000;
    }

    .mobile-navbar .menu-container .menu-icon {
        cursor: pointer;
    }

    .mobile-navbar .menu-icon img {
        padding-right: 20px;
        height: 40px;
        width: "auto"
    }

    .mobile-navbar ul {
        position: fixed;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        top: -120px;
        left: 0;
        transition: all 0.4s ease-in-out;
        background: grey;
    }

    .mobile-navbar ul.active {
        top: 60px;
    }

    .mobile-navbar ul .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
    }

    @media (max-width: 920px) {
        .lang-dropdown {
            position: fixed;
            top: 0;
            right: 100px;
            z-index: 1001;
        }
    }
</style>