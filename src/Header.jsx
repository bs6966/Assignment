import React from "react";
import SubHeading from "./SubHeading";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info"></div>
      <div className="app__wrapper__img">
        <SubHeading title="Our Journey" />
        <h1 className="app__header-h1">December 2020</h1>
        <h5 className="app__header-h5">2 November</h5>
        <h6 className="test__lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe
          accusantium deserunt, aperiam adipisci corrupti quidem, culpa pariatur
          obcaecati unde ratione ducimus nemo enim eligendi id eius vel,
          aspernatur similique.
        </h6>
        <h3 className="journey">Journey Begins</h3>
        <h1 className="circle">B</h1>
        <h5 className="app__header-h5-1">2 November</h5>
        <h6 className="test__lorem-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe
          accusantium deserunt, aperiam adipisci corrupti quidem, culpa pariatur
          obcaecati unde ratione ducimus nemo enim eligendi id eius vel,
          aspernatur similique.
        </h6>
        <h1 className="nineteen">December 2019</h1>
        <h1 className="circle-1">
          Creating
          <h3 className="lorem-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic non
            debitis at nulla
          </h3>
        </h1>
        <h3 className="completed">App Completed</h3>
        <h3 className="repeat">2 November</h3>
        <h5 className="repeat__lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          totam deserunt officiis consequatur reiciendis quam molestias sit,
          soluta, fugit porro repellendus suscipit doloribus ullam harum quae
          neque? Architecto, exercitationem. Ut.
        </h5>
        <h3 className="lorem-3">
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
        </h3>
        <h1 className="app__header-h2">December 2020</h1>
        <h5 className="app__header-h5-2">2 November</h5>
        <h6 className="test__lorem-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe
          accusantium deserunt, aperiam adipisci corrupti quidem, culpa pariatur
          obcaecati unde ratione ducimus nemo enim eligendi id eius vel,
          aspernatur similique.
        </h6>
        <h3 className="journey-1">App Launch</h3>
        <h1 className="circle-2">
          Launch
          <h3 className="lorem-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ab
            accusamus, voluptates,
          </h3>
        </h1>
        <h1 className="continues">Continues...</h1>
      </div>
    </div>
  );
};

export default Header;
