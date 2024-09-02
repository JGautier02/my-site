<script>
    import { onMount } from "svelte";

    import menuIcon from "$lib/assets/menu-icon.png";

    import { langTable } from "../../store";

    export let homeHeight;
    export let y;
    export let isInView;

    let data;
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

        if (isExpanded) isExpanded = false;
    }
    
    const handleClick = () => {
        clicked = !clicked;
        isExpanded = !isExpanded;
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

{#if windowWidth >= breakPoint}
<nav class={`navbar ${isInView === "hero-section" ? null : "sticky"}`}>
    <a class="title-container" href={"#"} on:click|preventDefault={() => scrollToElement("#hero-section")}>
        <span class={isInView !== "hero-section" && "golden"}>J</span><span class={`dis-span-1 ${isInView !== "hero-section" && "inactive"}`}>érôme</span>
        <span class={`transleft ${isInView !== "hero-section" && "active golden"}`}>G</span><span class={`dis-span-2 ${isInView !== "hero-section" && "inactive"}`}>autier</span></a>
    <ul>
        <li class={`nav-link ${isInView == "hero-section" && "active"}`}>
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#hero-section")}>{data.home}</a>
        </li>
        <li class={`nav-link ${isInView == "about-me" && "active"}`}>
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
            <a href={"#"} on:click|preventDefault={() => scrollToElement("#hero-section")}>{data.home}</a>
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
Navbar
************/
    nav {
        position: absolute;
        background-color: transparent;
        color: var(--primary-text);
        font-size: 18px;
    }

    .navbar {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        max-width: 1900px;
        height: 80px;
        z-index: 1000;
        text-align: center;
    }

    .navbar.sticky {
        position: fixed;
        align-items: center;
        height: 40px;
        background: linear-gradient(135deg, black 8%, var(--midnight-purple) 15%, black 90%);
    }

    .navbar .title-container {
        font-family: "playfairregular", sans-serif;
        font-size: 48px;
        font-weight: 600;
        letter-spacing: 1.2px;
        color: var(--primary-text);
        padding: 0 80px;
        transition: all 0.3s linear;
    }

    .navbar .title-container span {
        display: inline-block;
    }

    .navbar .title-container span.golden {
        font-size: 32px;
        color: goldenrod;
        transform: translateY(-8px);
    }

    .navbar .title-container .transleft {
        transition: all 0.3s linear;
    }

    .navbar .title-container .transleft.active {
        color: goldenrod;
        transform: translateX(-160px);
    }

    .navbar .title-container .dis-span-1 {
        transition: all 0.3s linear;
    }
    .navbar .title-container .dis-span-1.inactive {
        opacity: 0;
        transform: translateX(200px);
    }

    .navbar .title-container .dis-span-2 {
        transition: all 0.3s linear;
    }

    .navbar .title-container .dis-span-2.inactive {
        opacity: 0;
        transform: translateX(-200px);
    }

    .navbar ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        height: 100%;
        padding: 0 24px;
    }

    .navbar .nav-link {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
    }

    .navbar .nav-link.active {
        text-decoration: underline var(--aqua-green) 2px;
        text-underline-offset: 8px;;
    }

    nav a:hover {
        transition: all 0.5s ease-in-out;
        color: var(--tertiary-text);
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
        background-color: transparent;
        z-index: 1000;
    }

    .mobile-navbar .menu-container .menu-icon {
        display: flex;
        width: 80px;
        height: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: #fff;
    }

    .mobile-navbar .menu-icon img {
        height: 40px;
        width: 40px;
    }

    .mobile-navbar ul {
        position: fixed;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        top: -220px;
        left: 0;
        padding-top: 60px;
        transition: all 0.4s ease-in-out;
        background: #fff;
        color: #0c0c0c;
        z-index: 100;
    }

    .mobile-navbar ul.active {
        top: 0;
    }

    .mobile-navbar ul .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
    }
</style>