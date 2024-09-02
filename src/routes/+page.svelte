<svelte:head>
    <title>Jerome Gautier Fullstack Web Developper</title>
    <meta name="description" content="I am Jérôme Gautier a French Fullstack webdevelopper, I'm competent with Wordpress and most nodejs based frameworks.">
</svelte:head>

<script>
    import Navbar from "$lib/components/navbar.svelte";
    
    import { inview } from "svelte-inview";

    import { langTable } from "../store";

    import { Css3Icon, Html5Icon, JavascriptIcon, NodeJsIcon, MySqlIcon, WordpressIcon, ReactIcon, SvelteIcon, GithubIcon, LinkedIcon, FootballIcon, WeightliftIcon, BikeIcon, VsCodeIcon } from "$lib/components/icons/index.js";

    import axiantisImg from "$lib/assets/axiantis-screenshot.png";
    import projectData from "$lib/data/data.json";
    import Lang from "$lib/components/lang.svelte";
    import LinkedinIcon from "$lib/components/icons/linkedin-icon.svelte";
    import SqlIcon from "$lib/components/icons/sql-icon.svelte";
    import SolidjsIcon from "$lib/components/icons/solidjs-icon.svelte";
    import MongodbIcon from "$lib/components/icons/mongodb-icon.svelte";

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

    let payload = { name: "", email: "", subject: "", body: "" };
    let activeInput;

    const handleLabel = (e) => {
        activeInput = e.target.name;
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let str = e.target.value;
        payload[name] = str;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: payload.name,
                email: payload.email,
                subject: payload.subject,
                body: payload.body
            })
        });
        const result = await response.json();
        console.log(result);

    }
</script>

<svelte:window bind:scrollY={y} />
<Navbar homeHeight={homeHeight} y={y} isInView={isInView} />

<div class="hero-container flex-column-center" id="hero-section" use:inview={options} on:inview_enter={handleEntry}>
    <div class="intro-container flex-column-center">
        <h1>Designer & Fullstack Developper</h1>
        <h2>I like to create efficient and user-friendly products.</h2>
    </div>
    <div class="under-container">
        <div class="lang-container flex-column-center">
            <h3>Language selection</h3>
            <Lang />
        </div>
        <div class="socials-container flex-row-center">
            <a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-gautier-a0020121b/" target="_blank">
                <LinkedinIcon width="40px" height="40" />
            </a>
            <a href="https://github.com/Jerome-Gautier" target="_blank">
                <GithubIcon width="40" height="40"/>
            </a>
        </div>
    </div>

</div>

<section class="about-me" id="about-me" use:inview={options} on:inview_enter={handleEntry}>
        <div class="aboutme-intro-container">
            <h2>Who I am and what I do</h2>
            <h3>
                I grew up and still live in the south east of France, I lived in the UK for about a year and I'm fluent in french, english and currently learning russian.
                I love coding and I love Javascript, when it comes to building applications my approach is holistic and I take into account user-readability, scale, performance and SEO.
            </h3>
        </div>

        <div class="skills-container">
            <div class="frontend-container">
                <div class="intro-container">
                    <h3>Frontend</h3>
                    <p>My preference is to code things from the ground up but I'm also well versed in Wordpress.</p>  
                </div>
                <div class="codelang-container">
                    <h4>Languages</h4>
                    <ul>
                        <li class="skill-flex-container">
                            <Html5Icon {width} {height} />
                            <p>Html 5</p>
                        </li>
                        <li class="skill-flex-container">
                            <Css3Icon {width} {height} />
                            <p>Css 3</p>
                        </li>
                        <li class="skill-flex-container">
                            <JavascriptIcon {width} {height} />
                            <p>Javascript</p>
                        </li>
                    </ul>
                </div>
                <div class="codelang-container">
                    <h4>Favourite tools</h4>
                    <ul>
                        <li class="skill-flex-container">
                            <ReactIcon {width} {height} />
                            <p>React</p>
                        </li>
                        <li class="skill-flex-container">
                            <SolidjsIcon {width} {height} />
                            <p>SolidJs</p>
                        </li>
                        <li class="skill-flex-container">
                            <SvelteIcon {width} {height} />
                            <p>Svelte</p>
                        </li>
                        <div class="skill-flex-container">
                            <WordpressIcon {width} {height} />
                            <p>Wordpress</p>
                        </div>
                        <li class="skill-flex-container">
                            <GithubIcon {width} {height} />
                            <p>Github</p>
                        </li>
                        <li class="skill-flex-container">
                            <VsCodeIcon {width} {height} />
                            <p>Vs Code</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="backend-container">
                <div class="intro-container">
                    <h3>Backend</h3>
                    <p>I have all the right tools to build fast, efficient and secured servers, and i can provide robusts databases with MySQL when needed.</p>
                </div>
                <div class="codelang-container">
                    <h4>Languages</h4>
                    <ul>
                        <li class="skill-flex-container">
                            <SqlIcon {width} {height} />
                            <p>SQL</p>
                        </li>
                        <li class="skill-flex-container">
                            <JavascriptIcon {width} {height} />
                            <p>Javascript</p>
                        </li>
                    </ul>
                </div>
                <div class="codelang-container">
                    <h4>Favourite tools</h4>
                    <ul>
                        <li class="skill-flex-container">
                            <NodeJsIcon {width} {height} />
                            <p>Node Js</p>
                        </li>
                        <li class="skill-flex-container">
                            <MySqlIcon {width} {height} />
                            <p>MySQL</p>
                        </li>
                        <li class="skill-flex-container">
                            <MongodbIcon {width} {height} />
                            <p>MobgoDB</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</section>

<section class="projects" id="projects" use:inview={{ threshold: 0.3 }} on:inview_enter={handleEntry}>
    <h1>Recent Projects</h1>
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

        <div class={`input-container ${activeInput === "subject" && "active"}`}>
            <label class={activeInput === "subject" || payload.email ? "active" : ""} for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required on:focus={handleLabel} on:focusout={() => activeInput = ""} on:input={handleInput} autocomplete="off" value={payload["email"]} />
        </div>

        <textarea name="body" id="body" required on:focus={handleLabel} on:focusout={() => activeInput = ""} on:input={handleInput} value={payload["body"]} placeholder="Message" rows="5" />

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
        --aqua-green: #4EB5A9;
        --midnight-purple: #2F284F;
        --royal-blue: #6157E1;
        --slate-grey: #374854;
        --primary-text: #fff;
        --secondary-text: #141c3a;       
    }

    /****************************
    Hero section
    ****************************/
    .hero-container {
        position: relative;
        background: linear-gradient(-30deg, var(--midnight-purple), black 40% 60%, var(--midnight-purple));
        background-size: 100% 100%;
        animation: gradient 60s linear infinite;
        height: 100vh;
    }

    .hero-container .intro-container {
        position: relative;
         margin: auto;
         color: #fff;
         background-color: rgba(0, 0, 0, 0.5);
         margin-top: 150px;
         max-width: 1000px;
         height: 400px;
         padding: 12px;
         border-radius: 15px;
    }

    .hero-container .intro-container h1 {
        font-family: "latoregular", sans-serif;
        font-size: 3rem;
        font-weight: 800;
        color: white;
        line-height: 1.125;
        letter-spacing: 0.3rem;
        text-align: center;
    }

    .hero-container .intro-container h2 {
        font-family: "latoregular", sans-serif;
        font-size: 1.5rem;
        color: var(--aqua-green);
        line-height: 1.525;
        letter-spacing: 0.2rem;
        text-align: center;
        margin-top: 24px
    }

    .hero-container .under-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 850px;
        height: 400px;
        margin: auto;
        color: #fff;
    }

    .hero-container .lang-container {
        display: flex;
        background-color: rgba(0, 0, 0, 0.5);
        width: 250px;
        height: 250px;
        border: 1px solid var(--royal-blue);
        border-radius: 8px;
    }

    .hero-container .socials-container {
        background-color: rgba(0, 0, 0, 0.5);
        width: 250px;
        height: 250px;
        border: 1px solid var(--royal-blue);
        border-radius: 8px;
    }

    .hero-container .socials-container a {
        margin: 12px;
        transition: all 0.4s ease-in-out;
    }

    .hero-container .socials-container a:hover {
        color: var(--aqua-green)
    }

    /****************************
    About me section
    ****************************/
    .about-me .codelang-container ul {
        display: flex;
        flex-flow: column wrap;
        height: 200px;
    }

    .about-me .skill-flex-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        max-width: 180px;
        margin: 12px auto 12px auto;
    }

    .about-me .skill-flex-container p {
        font-size: 16px;
        width: 100px;
        text-align: center;
    }

    .about-me .aboutme-intro-container {
        height: 600px;
        max-width: 100%;
        text-align: center;
        font-size: 1.5rem;
        margin: auto;
        background-color: var(--aqua-green)
    }

    .about-me .aboutme-intro-container h2 {

    }

    .about-me .aboutme-intro-container h3 {
        max-width: 600px;
        margin: auto;
    }

    .about-me .aboutme-intro-container h2 {
        padding-top: 200px;
        margin-bottom: 1.5rem;
        font-family: "latoregular", sans-serif;
        font-weight: 600;
    }

    .about-me .aboutme-intro-container h3 {
        font-size: 1.25rem;
        font-family: "roboto", sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
    }

    .about-me .skills-container {
        display: flex;
        flex-flow: row wrap;
        max-width: 1000px;
        margin: -100px auto 0 auto;
        text-align: center;
        color: #fff;
        border-radius: 12px;
    }

    .about-me .skills-container .intro-container p {
        font-family: "roboto", sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
    }

    .about-me .skills-container .frontend-container {
        width: 50%;
        padding: 70px 45px;
        background: linear-gradient(to right, black, var(--midnight-purple) 10% 90%, black);
        box-sizing: border-box;
        border-top-left-radius: 24px;
    }

    .about-me .skills-container .frontend-container h3 {
        font-family: "roboto", sans-serif;
        font-size: 1.5rem;
        margin: 24px;
        letter-spacing: 0.25rem;
        font-weight: 600;
    }    

    .about-me .skills-container .backend-container {
        width: 50%;
        padding: 70px 45px;
        background: linear-gradient(to right, black, var(--midnight-purple) 10% 90%, black);
        box-sizing: border-box;
        border-top-right-radius: 24px;
    }

    .about-me .skills-container .backend-container h3 {
        font-family: "roboto", sans-serif;
        font-size: 1.5rem;
        margin: 24px;
        letter-spacing: 0.25rem;
        font-weight: 600;
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
        top: 30px;
        left: 12px;
        transition: all 0.1s linear;
    }

    .contact form .input-container label.active {
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
        .about-me .skills-container .frontend-container {
            width: 100%;
            max-width: 640px;
            border-radius: 12px;
            margin: 48px auto 48px auto;
        }

        .about-me .skills-container .backend-container {
            width: 100%;
            max-width: 640px;
            border-radius: 12px;
            margin: 48px auto 48px auto;
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

        .contact p {
            text-align: center;
        }
    }
</style>