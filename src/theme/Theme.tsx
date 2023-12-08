"use client";
import { useState, useEffect } from "react";



const Theme = () => {
 
  
  const [theme, setTheme] = useState<any>(
    typeof window !== 'undefined' ? (localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"): (null)
  );

  const handleTheme = (e: any) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme: any = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, [theme]);

  

  return (
    <>
      
        <input
          type="checkbox"
          checked={theme === "light" ? false : true}
          onChange={handleTheme}
          value="synthwave"
          className="toggle theme-controller"
        />

       
    </>
  );
};

export default Theme;
