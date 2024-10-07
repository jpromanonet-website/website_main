import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaDiscord,
    FaTwitter,
} from "react-icons/fa";

const NavLinkData = [
    {
        id: 1,
        to: "home",
        name: "Home",
    },
    {
        id: 2,
        to: "about",
        name: "About",
    },
    {
        id: 3,
        to: "work",
        name: "Work",
    },
    {
        id: 4,
        to: "biodata",
        name: "Biodata",
    },
    {
        id: 5,
        to: "projects",
        name: "Projects",
    },
    {
        id: 6,
        to: "contact",
        name: "Contact",
    },
];

const NavSocialData = [
    {
        id: 1,
        social_icon: <FaLinkedin />,
        social_link: "https://www.linkedin.com/in/jpromanonet/",
    },
    {
        id: 2,
        social_icon: <FaGithub />,
        social_link: "https://github.com/jpromanonet",
    },
    {
        id: 3,
        social_icon: <FaInstagram />,
        social_link: "https://instagram.com/jpromanonet",
    },
    {
        id: 4,
        social_icon: <FaDiscord />,
        social_link: "",
    },
    {
        id: 5,
        social_icon: <FaTwitter />,
        social_link: "https://www.x.com/jpromanonet",
    },
];

export { NavLinkData, NavSocialData };
