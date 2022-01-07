import GithubIcon from "./github-logo.png";
import LinkedinIcon from "./linkedin-logo.png";

export function footerFunctionality() {
    let imgContainer = document.getElementById("imgContainer");
    function openGithub() {
        window.open("https://github.com/GuidoRial", "_blank");
    }
    function openLinkedin() {
        window.open(
            "https://www.linkedin.com/in/guido-rial-275552221/",
            "_blank"
        );
    }

    const githubLogo = document.createElement("img");
    githubLogo.src = GithubIcon;
    const linkedinLogo = document.createElement("img");
    linkedinLogo.src = LinkedinIcon;
    imgContainer.appendChild(githubLogo);
    imgContainer.appendChild(linkedinLogo);

    githubLogo.addEventListener("click", openGithub);
    linkedinLogo.addEventListener("click", openLinkedin);
}
