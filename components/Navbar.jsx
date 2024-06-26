import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [anchorElBlog, setAnchorElBlog] = useState(null);
  const [anchorElPodcasts, setAnchorElPodcasts] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickBlog = (event) => {
    setAnchorElBlog(event.currentTarget);
  };

  const handleCloseBlog = () => {
    setAnchorElBlog(null);
  };

  const handleClickPodcasts = (event) => {
    setAnchorElPodcasts(event.currentTarget);
  };

  const handleClosePodcasts = () => {
    setAnchorElPodcasts(null);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-center items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#opensource">Open Source</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="https://jpromanonet-portfolio.vercel.app" target="_blank">
                Portfolio
              </a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <div
                aria-controls="blog-menu"
                aria-haspopup="true"
                onClick={handleClickBlog}
                className="cursor-pointer"
              >
                Blog
              </div>
              <Menu
                id="blog-menu"
                anchorEl={anchorElBlog}
                keepMounted
                open={Boolean(anchorElBlog)}
                onClose={handleCloseBlog}
              >
                <MenuItem onClick={handleCloseBlog}>
                  <a href="https://jpromanonet-blog.vercel.app" target="_blank">
                    Blog Personal
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseBlog}>
                  <a href="https://jpromanonet.medium.com" target="_blank">
                    Medium
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseBlog}>
                  <a href="https://www.freecodecamp.org/news/author/jpromanonet" target="_blank">
                    Free Code Camp
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseBlog}>
                  <a href="http://hackandmate.com.ar" target="_blank">
                    Hack & Mate
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseBlog}>
                  <a href="https://blogdeututo.vercel.app" target="_blank">
                    Ututo's Blog
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseBlog}>
                  <a href="https://www.enfoquedenegocios.com.ar/author/juanpablo-romano/" target="_blank">
                    Enfoque de Negocios
                  </a>
                </MenuItem>
              </Menu>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <div
                aria-controls="podcasts-menu"
                aria-haspopup="true"
                onClick={handleClickPodcasts}
                className="cursor-pointer"
              >
                Podcasts
              </div>
              <Menu
                id="podcasts-menu"
                anchorEl={anchorElPodcasts}
                keepMounted
                open={Boolean(anchorElPodcasts)}
                onClose={handleClosePodcasts}
              >
                <MenuItem onClick={handleClose}>
                  <a href="https://jpromanonet.medium.com" target="_blank">
                    Personal blog
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="http://hackandmate.com.ar" target="_blank">
                    Hack & Mate
                  </a>
                </MenuItem>
              </Menu>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="https://www.canva.com/design/DAFyOUofKq0/-bNDpWwA2V_9tNA7Vuy9-A/view?utm_content=DAFyOUofKq0&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
                Resume
              </a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#opensource">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Open Source
                </li>
              </Link>
              <a href="http://jpromanonet-portfolio.vercel.app" target="_blank">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Portfolio
                </li>
              </a>
              <div
                onClick={handleClick}
                className="cursor-pointer py-4 text-sm"
              >
                Blogs
              </div>
              <Menu
                id="mobile-blog-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <a href="https://jpromanonet-blog.vercel.app" target="_blank">
                    Blog Personal
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="https://jpromanonet.medium.com" target="_blank">
                    Medium
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="https://www.freecodecamp.org/news/author/jpromanonet" target="_blank">
                    Free Code Camp
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="http://hackandmate.com.ar" target="_blank">
                    Hack & Mate
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="https://blogdeututo.vercel.app" target="_blank">
                    Ututo's Blog
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="https://www.enfoquedenegocios.com.ar/author/juanpablo-romano/" target="_blank">
                    Enfoque de Negocios
                  </a>
                </MenuItem>
                {/* Add more MenuItem components as needed */}
              </Menu>
              <a href="https://www.canva.com/design/DAFyOUofKq0/-bNDpWwA2V_9tNA7Vuy9-A/view?utm_content=DAFyOUofKq0&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </a>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#00A86B]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/jpromanonet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/jpromanonet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
