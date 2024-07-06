import React from "react";
import './qualification.css';

const Qualification = () => {
  return (
    <section className="" id="">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Test
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {""}
            Test
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content  qualification__content-active ">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Disign</h3>
                <span className="qualification__subtitle"> Spain-Instiute</span>

                <div className="qualification__calender">
                  <i className="uil uik-calender-alt"></i>
                  2021-Present
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

              <div>
                <h3 className="qualification__title">Art Direcctor</h3>
                <span className="qualification__subtitle"> Spain-Instiute</span>

                <div className="qualification__calender">
                  <i className="uil uik-calender-alt"></i>
                  2021-Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Disign</h3>
                <span className="qualification__subtitle"> Spain-Instiute</span>

                <div className="qualification__calender">
                  <i className="uil uik-calender-alt"></i>
                  2021-Present
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

              <div>
                <h3 className="qualification__title">Art Direcctor</h3>
                <span className="qualification__subtitle"> Spain-Instiute</span>

                <div className="qualification__calender">
                  <i className="uil uik-calender-alt"></i>
                  2021-Present
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
