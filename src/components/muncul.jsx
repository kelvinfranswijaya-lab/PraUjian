import { useState, useEffect, useRef } from "react";

// biar section muncul pas di scroll
function Muncul({ children }) {
  const boxRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={boxRef} className={"muncul" + (visible ? " visible" : "")}>
      {children}
    </div>
  );
}

export default Muncul;
