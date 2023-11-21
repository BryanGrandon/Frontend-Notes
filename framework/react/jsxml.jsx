{
  /*
    React uses JSX to declare what to render. JSX is a JavaScript extension that allows you to write code that is visually closer to HTML,
    which improves the readability of the code and makes it easier to understand.
  */
  /*
     JSX Rules
 
     1: All tags must be closed.
     2: Components must return only one parent element.
     3: Rely on Fragment when i need to return 2 elements.
     4: Fragment => <> children </> OR <React.Fragment>.
     5: img always closes => <img />.
     6: class => className.
     7: for => htmlFor.
  */
}
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = (props) => {
  return (
    <>
      <section className="class_img">
        <img src={props.src1} alt="image 1" />
      </section>

      <section className="class_img">
        <img src={props.src2} alt="image 1" />
      </section>
    </>
  );
};

root.render(
  <React.Fragment>
    <App src1="" src2="" />
  </React.Fragment>
);
