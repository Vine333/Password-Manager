import React, {useState} from "react";
import styled from "styled-components";
import {Drawer, Collapse} from "antd";

const Header = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const colors = ["#e63946", "#f4a261", "#2a9d8f", "#264653", "#8a4fff"];
    const [textColors, setTextColors] = useState({});

    const handleMouseEnter = (key) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setTextColors((prev) => ({...prev, [key]: randomColor}));
    };

    const handleMouseLeave = (key) => {
        setTextColors((prev) => ({...prev, [key]: "var(--text-color)"}));
    };

    return (<Wrapper>
            <div className="container">
                <div className="logo">
                    <img
                        src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/663f2f66c6546b588a916dcc_icon.png"
                        alt=" "
                        className="logo-img"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/654191f437e421437154f98b_logo%20light.svg"
                        alt=""
                        className="name-img"
                    />
                </div>
                <div className="container-download">
                    <div className="download">Download</div>
                    {["macOS", "Web", "IOS", "Android"].map((item) => (<div
                            key={item}
                            className="links"
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={() => handleMouseLeave(item)}
                            style={{color: textColors[item] || "var(--text-color)"}}
                        >
                            {item}
                        </div>))}
                    <div className="slash">/</div>

                    <div
                        className="links"
                        onMouseEnter={() => handleMouseEnter("Updates")}
                        onMouseLeave={() => handleMouseLeave("Updates")}
                        style={{color: textColors["Updates"] || "var(--text-color)"}}
                    >
                        Updates
                    </div>
                    {["Pricing", "Sign in"].map((item) => (<div
                            key={item}
                            className="links"
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={() => handleMouseLeave(item)}
                            style={{color: textColors[item] || "var(--text-color)"}}
                        >
                            {item}
                        </div>))}
                </div>
                {['Menu'].map((item) => (<span
                    key={item}
                    onClick={showDrawer}
                    className="btn-menu"
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={() => handleMouseLeave(item)}
                    style={{color: textColors[item] || "var(--text-color)"}}
                >
                    {item}
                </span>))}
                <Drawer title="Menu" onClose={onClose} open={open} className='drawer'>

                    <div className='drawer-container' style={{
                        display:'flex',
                        flexDirection:'column',
                        gap:"30px",

                    }}>
                        <a>Updates</a>
                        <a>Pricing</a>
                        <a>Sign in</a>
                        <span className='disable-download'>Download</span>
                        <a>ISO</a>
                        <a>Android</a>
                        <a>Cookies</a>

                    </div>
                </Drawer>
            </div>
        </Wrapper>);
};

const Wrapper = styled.div`
  z-index: 100;
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: transparent;
  backdrop-filter: blur(10px) brightness(1.09) contrast(103%) saturate(91%);

  .container-download {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .links {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 6px;
    transition: color 0.3s ease-in-out;
  }

  .links::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease-in-out;
  }
  
  

  .links:hover::after {
    width: 100%;
  }

  .download {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #515360;
  }

  .slash {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #515360;
  }

  .btn-menu {
    display: none;
  }

  .container {
    padding: 35px 50px;
    height: 110px;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .logo-img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .name-img {
    width: 97px;
    height: 22px;
  }

  @media (max-width: 1000px) {
    .slash{
      display: none;
    }
    .download{
      display: none;
    }
    .links {
      display: none;
    }

    .btn-menu {
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      color: var(--text-color);
      position: relative;
      display: inline-block;
      padding: 5px 10px;
      border-radius: 6px;
      transition: color 0.3s ease-in-out;
    }
   
.drawer{
  flex-direction: column !important;
  gap: 30px !important;
  display: flex !important;
  background-color: transparent !important;
  backdrop-filter: blur(10px) brightness(1.09) contrast(103%) saturate(91%) !important;
}


    .btn-menu::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background-color: currentColor;
      transition: width 0.3s ease-in-out;
    }

    .btn-menu:hover::after {
      width: 100%;
    }
  }
  @media(max-width: 320px){
    .container{
      width: 320px;
      padding: 25px 25px 20px;
      justify-content: space-between;
      align-items: center;
      margin: 0;
    }
    
    
  }
  @media(max-width: 375px){
    .container{
      padding: 10px;
      align-items: center;
    }
  }
`;

export default Header;
