<script>
    import Navbar from "$lib/components/navbar.svelte";
    
    import { inview } from "svelte-inview";

    import { langTable } from "../store";

    import { Css3Icon, Html5Icon, JavascriptIcon, NodeJsIcon, MySqlIcon, WordpressIcon, ReactIcon, SvelteIcon, GithubIcon, LinkedIcon, FootballIcon, WeightliftIcon, BikeIcon } from "$lib/components/icons/index.js";

    import axiantisImg from "$lib/assets/axiantis-screenshot.png";

    import projectData from "$lib/data/data.json";

    let data;
    let homeHeight;
    let isInView;
    const options = { threshold: 0.5 };
    let y = 0;
    let width = "36px";
    let height = "36px";

    langTable.subscribe(value => {
        data = value;
    });

    const handleEntry = ({ detail }) => {
        isInView = detail.node.id;
    }

    langTable.subscribe(value => {
        data = value;
    });

    let selectedTab = "professional";

    const handleSelect = (str) => {
        selectedTab = str;
    }

    let payload = { name: "", email: "", message: "" };
    let activeInput;

    const handleLabel = (e) => {
        activeInput = e.target.name;
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let str = e.target.value;
        payload[name] = str;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(payload)
    }
</script>

<svelte:window bind:scrollY={y} />
<section class="home" id="home" bind:clientHeight={homeHeight} use:inview={options} on:inview_enter={handleEntry}>    
    <div class="inner-container">
        <div class="welcome-message">
            <h2>{data.welcome.title1}</h2>
            <h1>{data.welcome.title2}</h1>
            <p>{data.welcome.p1}</p>
        </div>

        <Navbar homeHeight={homeHeight} y={y} isInView={isInView} />

    </div>
</section>

<section class="about-me" id="about-me" use:inview={options} on:inview_enter={handleEntry}>
    <h1>{data.about.title}</h1>
    <div class="inner-container">
        <div class="skills-container">
            <h2>{data.about.subtitle2}</h2>
            <p>{data.about.p1}</p>
            <div class="wrapper">
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
        </div>

        <div class="intro-container">
            <h2>{data.about.subtitle1}</h2>
            <p>{data.about.p2}</p>
            <div class="flex-row-container">
                <div>
                    <BikeIcon width="72px" height="72px" />
                </div>
                <div>
                    <WeightliftIcon width="72px" height="72px" />
                </div>
                <div>
                    <FootballIcon width="72px" height="72px" />
                </div>
            </div>
        </div>
    </div>
</section>

<section class="projects" id="projects" use:inview={{ threshold: 0.3 }} on:inview_enter={handleEntry}>
    <h1>Projects</h1>
    <div class="selector-container">
        <div class="button-wrapper">
            <button on:click={() => handleSelect("professional")}>{data.projects.section1.title}</button>
            <div class={`underline ${selectedTab === "professional" && "active"}`}></div>
        </div>
        <div class="button-wrapper">
            <button on:click={() => handleSelect("personal")}>{data.projects.section2.title}</button>
            <div class={`underline ${selectedTab === "personal" && "active"}`}></div>
        </div>
    </div>

    {#if selectedTab === "professional"}
    <div class="flex-column-container">
        <div class="project-container">
            <a class="preview" href="https://axiantis.com/" target="_blank">
                <img src={axiantisImg} alt="Axiantis website preview" />
            </a>
            <div class="content">
                <h3><a href="https://axiantis.com/" target="_blank">Axiantis</a></h3>
                <p>Made with Sveltekit with speed and SEO in mind.</p>
            </div>
        </div>
    </div>

    {:else if selectedTab === "personal"}
    <div class="flex-column-container codepen-outer-container">
        <p>{data.projects.section2.p1}</p>
        <div class="flex-row-container">
           {#each projectData as item} 
            <div class="codepen-project-container">
                <a href={item.url} target="_blank">
                <img src={item.imgUrl} alt="Project preview"/>
                <h4>{item.name}</h4>
                <ul>
                    {#each item.technologies as str}
                    <li>{str}</li>
                    {/each}
                </ul>
            </div>
           {/each}
        </div>
    </div>
    {/if}
</section>

<section class="contact" id="contact" use:inview={options} on:inview_enter={handleEntry}>
    <h1>Contact</h1>
    <p>{data.contact.p1}</p>
    <form on:submit={handleSubmit}>
        <div class={`input-container ${activeInput === "name" && "active"}`}>
            <label class={activeInput === "name" || payload.name ? "active" : ""} for="name">Name</label>
            <input type="text" id="name" name="name" required on:focus={handleLabel} on:focusout={() => activeInput = ""} on:input={handleInput} autocomplete="off" value={payload["name"]} />
        </div>

        <div class={`input-container ${activeInput === "email" && "active"}`}>
            <label class={activeInput === "email" || payload.email ? "active" : ""} for="email">Email</label>
            <input type="email" id="email" name="email" required on:focus={handleLabel} on:focusout={() => activeInput = ""} on:input={handleInput} autocomplete="off" value={payload["email"]} />
        </div>

        <textarea name="message" id="message" required on:focus={handleLabel} on:focusout={() => activeInput = ""} on:input={handleInput} value={payload["message"]} placeholder="Message" rows="5" />

        <button class="btn-container" type="submit">{data.contact.send}</button>
    </form>
</section>

<footer>
    <div class="socials">
        <a href="https://github.com/Jerome-Gautier" target="_blank">
            <GithubIcon width="24px" height="24px" />
        </a>
        <a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-gautier-a0020121b/" target="_blank">
            <LinkedIcon width="24px" height="24px" />
        </a>
    </div>
    <div>Built with SvelteKit ©{new Date().getFullYear()} copyright all right reserved</div>
</footer>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --primary-color: #1F2041;
        --primary-text: #fff;
        --secondary-text: #14191b;
        --tertiary-text: #FFC857;
    }

    .flex-column-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    .flex-row-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .home {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        background-color: var(--primary-color);
        color: var(--primary-text);
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
        border-image: linear-gradient(to left, transparent, var(--tertiary-text)) 1;
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

    /****************************
    About me section
    ****************************/

    .about-me {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        padding: 80px 0;
        background: linear-gradient(to bottom, white, rgb(231, 231, 231));
    }

    .about-me h1 {
        font-size: 32px;
        margin-bottom: 48px;
    }

    .about-me h2 {
        text-align: center;
        margin: 12px 0;
    }

    .about-me .inner-container {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-flow: row wrap;
        margin: 12px;
    }

    .about-me .intro-container {
        display: flex;
        flex-flow: column nowrap;
        max-width: 600px;
        margin: 0 12px;
    }

    .about-me .intro-container .flex-row-container div {
        padding: 24px;
    }

    .about-me .skills-container p {
        max-width: 600px;
        margin: 0 12px;
    }

    .about-me .skills-container .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        max-width: 600px;
        margin: 12px 0;
    }

    .about-me .flex-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 60px;
        margin: 8px;
        background: #fff;
        border: 2px solid black;
        border-radius: 20px;
    }

    .about-me p {
        font-size: 1.25rem;
    }

    .about-me .flex-container div {
        margin-left: 4px;
    }

    /****************************
    Projects section
    ****************************/

    .projects {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        background: linear-gradient(to bottom, white, rgb(231, 231, 231));
    }

    .projects .separation {
        height: 8px;
        width: 80%;
        max-width: 800px;
        background-color: var(--primary-color);
        border-radius: 4px;
    }

    .projects h1 {
        font-size: 32px;
        margin-top: 108px;
        margin-bottom: 48px;
    }

    .projects .selector-container {
        display: flex;
        flex-flow: row nowrap;
        margin-bottom: 24px;
    }

    .projects .selector-container button {
        font-size: 18px;
        margin: 0 18px;
        width: 150px;
        text-align: center;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all 0.4s ease-in-out;
    }

    .projects .selector-container button:hover {
        color: var(--tertiary-text);
    }

    .projects .selector-container .button-wrapper {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    .projects .selector-container .button-wrapper .underline {
        width: 0;
        height: 2px;
        background: transparent;
        transition: all 0.4s ease-in-out;
    }

    .projects .selector-container .button-wrapper .underline.active {
        width: 80%;
        background: var(--primary-color);
    }

    .projects .project-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin: 24px 0;
    }

    .projects .project-container .preview {
        width: 50%;
    }

    .projects .project-container .preview img {
        object-fit: fill;
        width: 100%;
        height: auto;
    }

    .projects .project-container .content {
        padding: 12px;
    }

    .projects .project-container .content h3 {
        margin: 24px 0;
    }

    .projects .codepen-outer-container {
        max-width: 1200px;
    }

    .projects .codepen-outer-container p {
        margin: 24px 8px 12px 8px;
        font-size: 18px;
    }

    .projects .codepen-project-container {
        width: 300px;
        padding: 12px;
        margin: 12px;
        background-color: rgba(133, 133, 133, 0.7);
        border-radius: 12px;
        transition: all 0.4s ease-in-out;
    }

    .projects .codepen-project-container:hover {
        transform: scale(1.1);
    }

    .projects .codepen-project-container img {
        width: 100%;
        height: 168.75px;
        height: auto;
    }

    .projects .codepen-project-container h4 {
        margin: 4px 2px;
    }

    .projects .codepen-project-container ul {
        display: flex;
        flex-flow: row nowrap;
    }

    .projects .codepen-project-container li {
        background: #fff;
        border-radius: 4px;
        padding: 2px 4px;
        margin: 2px 4px;
    }

    /****************************
    Contact section
    ****************************/

    .contact {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        padding-top: 60px;
        background: var(--primary-color);
        color: #fff;
    }

    .contact h1 {
        font-size: 32px;
        margin-bottom: 24px;
    }

    .contact p {
        font-size: 18px;
        margin: 0 8px 48px 8px;
        max-width: 600px;
    }

    .contact form {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        max-width: 600px;
    }

    .contact form .input-container {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 60px;
        margin: 0 12px 24px 12px;
        padding: 8px;
        border-bottom: solid 1px #fff;
    }

    .contact form .input-container.active {
        border: solid 1px #fff;
    }

    .contact form .input-container label {
        position: absolute;
        font-size: 20px;
        max-width: 80%;
        top: 18px;
        left: 12px;
        transition: all 0.1s linear;
    }

    .contact form label.active {
        font-size: 16px;
        top: 8px;
        left: 8px;
    }

    .contact form input {
        font-size: 20px;
        color: #fff;
        background: transparent;
        border: none;
    }

    .contact form input:focus {
        outline: none;
    }

    .contact form textarea {
        font-size: 20px;
        color: #fff;
        background: transparent;
        resize: vertical;
        padding: 8px;
        margin: 24px 12px 0 12px;
    }

    .btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.214em;
        width: 126px;
        height: 56px;
        padding: 0 32px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 32px;
        color: rgb(48, 48, 48);
        background-color: rgb(255, 255, 255);
        transition: all 0.4s ease-in-out;
    }

    .btn-container:hover {
        background-color: rgba(128, 128, 128, 0.9);
        color: rgb(255, 255, 255);
    }

    .btn-container-waiting {
        text-align: center;
        background-color: rgba(128, 128, 128, 0.9);
    }

    /****************************
    Footer section
    ****************************/

    footer {
        display: flex;
        flex-flow: row-reverse wrap;
        justify-content: space-evenly;
        align-items: flex-end;
        padding: 24px 0;
        background: #14191b;
        color: #fff;
    }

    footer div {
        font-size: 16px;
        font-weight: 600;
        margin: 12px;
    }

    @media (max-width: 920px) {
        .home .inner-container {
            justify-content: center;
        }

        .projects .project-container .preview {
            width: 100%;
        }

        .projects .project-container .content h3 {
            margin: 0;
        }
    }

    @media (max-width: 480px) {
        .welcome-message {
            width: 100%;
            padding: 48px 12px;
        }

        .welcome-message h1 {
            font-size: 60px;
        }

        .welcome-message h2 {
            font-size: 48px;
        }

        .contact p {
            text-align: center;
        }
    }
</style>