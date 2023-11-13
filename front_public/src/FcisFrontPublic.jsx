import React from "react";
import "./css/FcisFrontPublic.css";
import TabsServices from "./components/TabsServices";
import TabsEKP from "./components/TabsEKP";
import LookButton from "./components/LookButton";
import Cards from "./components/Cards";
import TabsSTS from "./components/TabsSTS";
import ScrollButton from "./components/ScrollButton";

const FcisFrontPublic = () => {
  return (
    <div className="App">
      <ScrollButton />
      <div className="background_main">
        <div className="main">
          <div className="image_block">
            <img id="image" src="./media/pictures/image.svg" alt="gis_image" />
            <img id="light" src="./media/pictures/light.svg" alt="light" />
            <img id="logo" src="./media/pictures/logo.svg" alt="logo" />
          </div>
          <div className="header_desktop">
            <a
              id="minsport"
              target="_blank"
              rel="noreferrer noopener"
              href="http://www.minsport.gov.ru/"
            >
              <img id="" src="./media/Icons/Minsport_gerb.svg" alt="" />
              Минспорт России
            </a>
            <svg width="1" height="24" viewBox="0 0 1 24">
              <rect opacity="0.3" width="1" height="24" fill="#EDEFFF" />
            </svg>
            <a
              id="gis_sport"
              rel="noreferrer noopener"
              target="_blank"
              href="https://sport.gov.ru"
            >
              ФГИС «Спорт»
            </a>
            <svg width="1" height="24" viewBox="0 0 1 24">
              <rect opacity="0.3" width="1" height="24" fill="#EDEFFF" />
            </svg>
            <a
              id="life_normal"
              rel="noreferrer noopener"
              target="_blank"
              href="https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/mediaProjects/dvizhenie-k-luchshemu"
            >
              «Спорт – норма жизни»
            </a>
            <svg width="1" height="24" viewBox="0 0 1 24">
              <rect opacity="0.3" width="1" height="24" fill="#EDEFFF" />
            </svg>
            <a
              id="gto"
              rel="noreferrer noopener"
              target="_blank"
              href="https://user.gto.ru/user/register"
            >
              ВФСК ГТО
            </a>
          </div>
          <div className="info">
            <div id="text_services">
              Цифровые сервисы в сфере физической культуры и спорта
            </div>
            <div id="text_explanation">
              Информационная платформа позволяет собирать и агрегировать данные
              сферы ФКиС для обеспечения прозрачности процессов, реализуемых в
              ходе достижений целей государственной политики в<br /> сфере
              физической культуры и спорта
            </div>
            <div id="buttons">
              <div
                id="button_primary"
                onClick={() => {
                  window.scrollTo(0, 3120);
                }}
              >
                Перейти к статистике
              </div>
              <div id="button_primary_1">Перейти к статистике</div>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://rutube.ru/channel/25616557/"
              >
                <div id="how_it_works">
                  <svg viewBox="0 0 20 20">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.5 14.5V5.5L14.5 10L7.5 14.5Z" />
                  </svg>
                  <p id="how_it_works_text">Как это работает</p>
                </div>
              </a>
            </div>
          </div>
          <div id="information">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                fill="#FF9500"
              />
            </svg>
            <div id="text_Information">
              В настоящее время продолжается процесс наполнения и актуализации
              данных ФГИС «Спорт». При обнаружении ошибок и/или некорректных
              данных, просьба сообщить на email:
              <a
                id="mailbox_feedback"
                href="mailto:feedback-gis@minsport.gov.ru"
              >
                feedback-gis@minsport.gov.ru
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="background_services">
        <div className="services">
          <TabsServices />
        </div>
      </div>
      <div className="background_calendar">
        <div className="EKP">
          <div className="EKPTitle">
            <img src="./media/pictures/ekp_image.svg" alt="ekp_image" />
            <h2>Единый календарный план</h2>
          </div>
          <div className="buttonEKP">
            <LookButton
              text="Все мероприятия"
              link="https://sportrf.gov.ru/ekp"
              color="#17228e"
              arrow={true}
              color_hover="#edefff"
            />
          </div>
          <TabsEKP />
        </div>
      </div>
      <div className="background_statistics">
        <div className="statistics">
          <h2 id="STS">Статистика физкультуры и спорта в РФ</h2>
          <Cards
            loader_size={85}
            api="https://sportrf.gov.ru/portal-public/blocks/get_block_by_kind?kind=SFiS_RF"
          />
        </div>
        <div className="statistics_subj">
          <TabsSTS />
        </div>
      </div>
    </div>
  );
};

export default FcisFrontPublic;
