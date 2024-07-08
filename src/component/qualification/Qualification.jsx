import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Exprerience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content  qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Rama 9 school</h3>
                <span className="qualification__subtitle">Primary-School</span>

                <div className="qualification__calender">
                  <i className="uil uik-calender-alt"></i>
                  2004-2012
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Tepleela School</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Secondary-School
                </span>

                <div className="qualification__calender">
                  <i className="uil uik-calender-alt"></i>
                  2013-2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Sripatum University </h3>
                <span className="qualification__subtitle">University</span>

                <div className="qualification__calender">
                  <i className="uil uik-calender-alt"></i>
                  2020-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="qualification__content  qualification__content-active ">
                <h3 className="qualification__title">Coding Hub</h3>
                <span className="qualification__subtitle">Workplace</span>

                <div className="qualification__calender">
                  <i className="uil uik-calender-alt"></i> Jan-Apr 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
