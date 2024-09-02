<script>
    import frLogo from "$lib/assets/france.png";
    import ukLogo from "$lib/assets/united-kingdom.png";    

    import engData from "$lib/data/eng.json";
    import fraData from "$lib/data/fra.json";

    import { langTable, currentLang } from "../../store";

    let lang = "English";
    
    const handleChangeLang = (str) => {
        if ( str === "English") {
            langTable.set(engData);
            lang = str;
            document.documentElement.setAttribute("lang", 'en');
        } else if (str === "Français") {
            langTable.set(fraData);
            lang = str;
            document.documentElement.setAttribute("lang", 'fr');
        }
        currentLang.set(str);
    }
</script>

<div class="lang-container">
    <div class="inner-container">
        <div class={`lang-bg ${lang === "Français" && "fr"}`}></div>
        <button class={lang === "English" && "inactive"} on:click={() => handleChangeLang("English")}>
            <img src={ukLogo} width="24px" height="auto" alt="British flag">
        </button>
        <button class={lang === "Français" && "inactive"} on:click={() => handleChangeLang("Français")}>
            <img src={frLogo} width="24px" height="auto" alt="French flag">
        </button>
    </div>
</div>

<style>
    .lang-container .inner-container {
        position: relative;
        padding: 24px;
    }

    .lang-container .inner-container button {
        position: relative;
        width: 48px;
        height: 48px;
        z-index: 100;
    }

    .lang-container .inner-container .lang-bg {
        position: absolute;
        width: 48px;
        height: 48px;
        background-color: var(--aqua-green);
        border-radius: 8px;
        z-index: 1;
        transition: all 0.4s linear;
    }

    .lang-container .inner-container .lang-bg.fr {
        transition: all 0.5s ease-out;
        margin-left: 52px;
    }
</style>