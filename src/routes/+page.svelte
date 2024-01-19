<script>
    import Navbar from "$lib/components/navbar.svelte";

    import { inview } from "svelte-inview";

    import { langTable, currentLang } from "../store";

    import { Css3Icon, Html5Icon, JavascriptIcon, NodeJsIcon, MySqlIcon, WordpressIcon, ReactIcon, SvelteIcon } from "$lib/components/icons/index.js";

    let data;
    let lang;
    let homeHeight;
    let isInView;
    const options = { threshold: 0.5 };
    let y = 0;
    let width = "36px";
    let height = "36px";

    langTable.subscribe(value => {
        data = value["homepage"];
    });

    const handleInView = (str) => {
        isInView = str;
    }

    langTable.subscribe(value => {
        data = value;
    });

    currentLang.subscribe(value => {
        lang = value;
    });
</script>
<svelte:window bind:scrollY={y} />
<section class="home" id="home" bind:clientHeight={homeHeight} use:inview={options} on:inview_enter={() => handleInView("home")}>    
    <div class="inner-container">
        <div class="welcome-message">
            <h2>{data.welcome.title1}</h2>
            <h1>{data.welcome.title2}</h1>
            <p>{data.welcome.p1}</p>
        </div>

        <Navbar homeHeight={homeHeight} y={y} isInView={isInView} />

</div>
</section>

<section class="about-me" id="about-me" use:inview={options} on:inview_enter={() => handleInView("about")}>
    <h1>About me</h1>
    <div class="intro-container">
        <p>My main area of expertise is front end development but i also have full-stack experience with Wordpress and also NodeJS, using MySQL and MongoDB to create databases.</p>
    </div>
    <div class="skills-container">
        <div class="flex-container">
            <Html5Icon {width} {height} />
            <div>HTML 5</div>
        </div>
        <div class="flex-container">
            <Css3Icon {width} {height} />
            <div>CSS 3</div>
        </div>
        <div class="flex-container">
            <JavascriptIcon {width} {height} />
            <div>JAVASCRIPT</div>
        </div>
        <div class="flex-container">
            <NodeJsIcon {width} {height} />
            <div>NODE JS</div>
        </div>
        <div class="flex-container">
            <ReactIcon {width} {height} />
            <div>REACT</div>
        </div>
        <div class="flex-container">
            <SvelteIcon {width} {height} />
            <div>SVELTE</div>
        </div>
        <div class="flex-container">
            <MySqlIcon {width} {height} />
            <div>MYSQL</div>
        </div>
        <div class="flex-container">
            <WordpressIcon {width} {height} />
            <div>WORDPRESS</div>
        </div>
    </div>
    
</section>

<section class="projects" id="projects" use:inview={options} on:inview_enter={() => handleInView("projects")}>
    <h1>Projects</h1>
</section>

<section class="contact" id="contact" use:inview={options} on:inview_enter={() => handleInView("contact")}>
    <h1>Contact</h1>
</section>

<footer>
    <h1>Footer</h1>
</footer>

<style>
    .home {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        background-color: #1F2041;
        color: #fff;
    }

    .home .inner-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1000px;
    }

    .welcome-message {
        max-width: 700px;
        border-width: 4px;
        border-style: solid;
        border-image: linear-gradient(to left, transparent, goldenrod) 1;
        padding: 96px 48px;
    }
    
    .welcome-message h1 {
        font-size: 72px;
        text-transform: uppercase;
    }

    .welcome-message h2 {
        font-size: 60px;
    }

    .welcome-message p {
        font-size: 18px;
        line-height: 28px;
        margin-top: 12px;
    }

    .about-me {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        background: linear-gradient(to bottom, white, rgb(231, 231, 231));
    }

    .about-me .skills-container {
        display: flex;
        flex-flow: row wrap;
    }

    .about-me .flex-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        padding: 24px;
    }

    .about-me .flex-container div {
        margin-left: 12px;
    }

    .projects {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        background: linear-gradient(to bottom, white, rgb(231, 231, 231));
    }

    .contact {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        background: linear-gradient(to bottom, white, rgb(231, 231, 231));
    }

    @media (max-width: 920px) {
        .home .inner-container {
            justify-content: center;
        }
    }

    @media (max-width: 480px) {
        .welcome-message {
            padding: 48px 12px;
        }
    }
</style>