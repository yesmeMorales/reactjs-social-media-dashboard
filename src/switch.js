import React, { useRef } from "react";
import "./switch.css";

function Switch({ setDarkMode, checked, setChecked }) {
  // ref es una referencia a un valor mutable(que puede cambiar)
  const ref = useRef(null);
  //const [checked, setChecked] = useState(defaultChecked);

  //Forma de implementarlo con el target del evento
  // const handleChange = (e) => {
  //   console.log(e.target.checked);
  //   if (e.target.checked) {
  //     document.body.classList.remove("is-light-mode");
  //     document.body.classList.add("is-dark-mode");
  //   } else {
  //     document.body.classList.remove("is-dark-mode");
  //     document.body.classList.add("is-light-mode");
  //   }
  // };
  // Implementación con hooks dependemos del elemento ya seteado
  function handleChange(event) {
    console.log(event);
    console.log(ref.current.checked);
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>

      <input
        ref={ref}
        onChange={(e) => handleChange(e)}
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={checked}
      />
      <label className="switch" htmlFor="checkbox">
        {" "}
      </label>
    </div>
  );
}

export default Switch;
