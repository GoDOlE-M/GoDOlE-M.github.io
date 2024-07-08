document.addEventListener("DOMContentLoaded", () => {
    const links = {
        about: "/root/pages/AboutMe.html",
        github: "https://github.com/DanivOleg",
        linkedin: "https://www.linkedin.com/in/oleg-daniv-5b8080220",
        discord: "https://discord.gg/BrDBsEkXhJ",
        youtube: "https://www.youtube.com/channel/UCeAJKq-AjUDk0eNVv685qgg",
        fiverr: "https://www.fiverr.com/olegd1/can-teach-you-unreal-engine-4-5"
    };

    document.getElementById("about-link").href = links.about;
    document.getElementById("github-link").href = links.github;
    document.getElementById("linkedin-link").href = links.linkedin;
    document.getElementById("discord-link").href = links.discord;
    document.getElementById("youtube-link").href = links.youtube;
    document.getElementById("fiverr-link").href = links.fiverr;
});