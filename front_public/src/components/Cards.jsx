import React from "react";
import FetchData from "./FetchData";
import Loader from "./Loader";
import Nodata from "./Nodata";
import LookButton from "./LookButton";
import { NumericFormat } from "react-number-format";
import PropTypes from "prop-types";
import "../css/Cards.css";

const Cards = ({ loader_size, api }) => {
  const Data = FetchData(api, []);
  return (
    <div className="cards">
      <div className="card01">
        {Data.error && <Nodata nodata_size={loader_size} />}
        {!Data.error && (
          <div>
            {Data.isLoading ? (
              <Loader loader_size={loader_size} />
            ) : (
              <div className="card01_1">
                <svg viewBox="0 0 24 24" width="24px" height="24px">
                  <path
                    d="M17 4H20V20H17V4ZM5 14H8V20H5V14ZM11 9H14V20H11V9Z"
                    fill="#3744C4"
                  />
                </svg>
                <h3>
                  Доля граждан, систематически занимающихся физической культурой
                  и спортом, по итогам 2022 года
                </h3>
                <img
                  src="./media/pictures/pie_chart.svg"
                  alt="pie_chart_image"
                />
                <div className="statistics-70">
                  <div id="count1">
                    <NumericFormat
                      value={
                        Data.data.block_items[4].block_item_fields[1].value
                      }
                      displayType="text"
                      decimalSeparator=","
                      suffix="%"
                    />
                    <p>В организованных формах</p>
                  </div>
                  <div id="count2">
                    <NumericFormat
                      value={
                        Data.data.block_items[4].block_item_fields[0].value
                      }
                      displayType="text"
                      decimalSeparator=","
                      suffix="%"
                    />
                    <p>С учетом самостоятельно занимающихся граждан</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="card02">
        {Data.error && <Nodata nodata_size={loader_size} />}
        {!Data.error && (
          <div>
            {Data.isLoading ? (
              <Loader loader_size={loader_size} />
            ) : (
              <div className="card02_1">
                <div
                  className="sportsmen"
                  style={{ width: "319px", height: "104px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM15 9C16.1 9 17 9.9 17 11C17 12.1 16.1 13 15 13C13.9 13 13 12.1 13 11C13 9.9 13.9 9 15 9ZM19 17H11V16C11 14.67 13.67 14 15 14C16.33 14 19 14.67 19 16V17Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4
                      style={{
                        color: "#333",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      Спортсмены
                    </h4>
                  </div>
                  <NumericFormat
                    value={Data.data.block_items[1].block_item_fields[0].value}
                    displayType="text"
                    thousandSeparator=" "
                  />
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "104px",
                    background: "#E5E5EB",
                  }}
                ></div>
                <div
                  className="coaches"
                  style={{ width: "319px", height: "104px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <svg width="25" height="24" viewBox="0 0 25 24">
                      <path
                        d="M7.20203 7.73C8.34203 6.66 9.90203 6 11.562 6H22.332V10.01H18.262C17.652 10.01 17.182 10.54 17.272 11.14C17.362 11.8 17.362 12.49 17.212 13.2C16.702 15.71 14.572 17.69 12.022 17.97C8.29203 18.38 5.16203 15.38 5.34203 11.7C5.35203 11.43 5.39203 11.17 5.44203 10.92C5.24203 10.97 5.04203 11 4.83203 11C3.45203 11 2.33203 9.88 2.33203 8.5C2.33203 7.12 3.45203 6 4.83203 6C5.94203 6 6.87203 6.73 7.20203 7.73ZM4.33203 8.5C4.33203 8.78 4.55203 9 4.83203 9C5.11203 9 5.33203 8.78 5.33203 8.5C5.33203 8.22 5.11203 8 4.83203 8C4.55203 8 4.33203 8.22 4.33203 8.5ZM8.33203 12C8.33203 13.66 9.67203 15 11.332 15C12.992 15 14.332 13.66 14.332 12C14.332 10.34 12.992 9 11.332 9C9.67203 9 8.33203 10.34 8.33203 12ZM13.332 12C13.332 13.1046 12.4366 14 11.332 14C10.2275 14 9.33203 13.1046 9.33203 12C9.33203 10.8954 10.2275 10 11.332 10C12.4366 10 13.332 10.8954 13.332 12Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4
                      style={{
                        color: "#333",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      Тренеры
                    </h4>
                  </div>
                  <NumericFormat
                    value={Data.data.block_items[1].block_item_fields[2].value}
                    displayType="text"
                    thousandSeparator=" "
                  />
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "104px",
                    background: "#E5E5EB",
                  }}
                ></div>
                <div
                  className="referees"
                  style={{ width: "319px", height: "104px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <svg width="25" height="24" viewBox="0 0 25 24">
                      <path
                        d="M20.668 6H12.668L10.668 4H4.66797C3.56797 4 2.67797 4.9 2.67797 6L2.66797 18C2.66797 19.1 3.56797 20 4.66797 20H20.668C21.768 20 22.668 19.1 22.668 18V8C22.668 6.9 21.768 6 20.668 6ZM15.668 9C16.768 9 17.668 9.9 17.668 11C17.668 12.1 16.768 13 15.668 13C14.568 13 13.668 12.1 13.668 11C13.668 9.9 14.568 9 15.668 9ZM19.668 17H11.668V16C11.668 14.67 14.338 14 15.668 14C16.998 14 19.668 14.67 19.668 16V17Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4
                      style={{
                        color: "#333",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      Судьи
                    </h4>
                  </div>
                  <NumericFormat
                    value={Data.data.block_items[1].block_item_fields[1].value}
                    displayType="text"
                    thousandSeparator=" "
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="card03">
        {Data.error && <Nodata nodata_size={loader_size} />}
        {!Data.error && (
          <div>
            {Data.isLoading ? (
              <Loader loader_size={loader_size} />
            ) : (
              <div className="card03_1">
                <div className="card03_1_1">
                  <img src="./media/pictures/map.webp" alt="map" />
                  <div id="card03_title">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M7 5L3 7V3L7 5ZM18 3V7L22 5L18 3ZM11 2V6L15 4L11 2ZM5 10.04C6.38 10.53 8.77 11 12 11C15.23 11 17.62 10.53 19 10.04C19 9.86 16.22 9 12 9C7.78 9 5 9.86 5 10.04ZM15 17H9V21.88C4.94 21.49 2 20.34 2 19V10C2 8.34 6.48 7 12 7C17.52 7 22 8.34 22 10V19C22 20.34 19.06 21.48 15 21.87V17Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4>Oбъекты спорта России</h4>
                    <div id="card03_facilities">
                      <NumericFormat
                        value={
                          Data.data.block_items[2].block_item_fields[1].value
                        }
                        displayType="text"
                        thousandSeparator=" "
                      />
                      <h5>Спортивных сооружений</h5>
                      <a
                        href="https://sportrf.gov.ru/athletic-facilities"
                        rel="noreferrer noopener"
                        target="_self"
                      >
                        <div id="card03_facilities_link">
                          <p>Статистика</p>
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div id="card03_objects">
                      <NumericFormat
                        value={
                          Data.data.block_items[2].block_item_fields[0].value
                        }
                        displayType="text"
                        thousandSeparator=" "
                      />
                      <h5>
                        Включенных
                        <br />
                        во Всероссийский реестр
                        <br />
                        объектов спорта
                      </h5>
                      <a
                        id="card03_objects_link"
                        href="https://sportrf.gov.ru/portal-public/xlsx/get_sport_object_page_xlsx"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Загрузить реестр
                      </a>
                    </div>
                    <div id="card03_button1">
                      <LookButton
                        text="Смотреть на карте"
                        link="https://sportrf.gov.ru/cartographic"
                        color="#fff"
                        arrow={false}
                        color_hover="#0050B2"
                      />
                    </div>
                  </div>
                </div>
                <div className="card03_1_2">
                  <div id="card03_osf">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M15 11V5L12 2L9 5V7H3V21H21V11H15ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM13 19H11V17H13V19ZM13 15H11V13H13V15ZM13 11H11V9H13V11ZM13 7H11V5H13V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4>Общероссийские спортивные федерации</h4>
                    <NumericFormat
                      value={
                        Data.data.block_items[5].block_item_fields[1].value
                      }
                      displayType="text"
                      thousandSeparator=" "
                    />
                  </div>
                  <div id="card03_rsf">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M15 11V5L12 2L9 5V7H3V21H21V11H15ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM13 19H11V17H13V19ZM13 15H11V13H13V15ZM13 11H11V9H13V11ZM13 7H11V5H13V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4>Аккредитованные региональные спортивные федерации</h4>
                    <NumericFormat
                      value={
                        Data.data.block_items[5].block_item_fields[0].value
                      }
                      displayType="text"
                      thousandSeparator=" "
                    />
                  </div>
                  <div id="card03_button2">
                    <LookButton
                      text="Посмотреть"
                      link="https://sportrf.gov.ru/sports-federations"
                      color="#17228E"
                      arrow={true}
                      color_hover="#edefff"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="card04">
        {Data.error && <Nodata nodata_size={loader_size} />}
        {!Data.error && (
          <div>
            {Data.isLoading ? (
              <Loader loader_size={loader_size} />
            ) : (
              <div className="card04_1">
                <div className="card04_1_1">
                  <div id="card04_ekp">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H7V21H17V19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4>Спортивные и физкультурные мероприятия</h4>
                    <NumericFormat
                      value={
                        Data.data.block_items[0].block_item_fields[0].value
                      }
                      displayType="text"
                      thousandSeparator=" "
                    />
                  </div>
                  <div id="card04_button1">
                    <LookButton
                      text="Посмотреть ЕКП"
                      link="https://sportrf.gov.ru/ekp"
                      color="#17228E"
                      arrow={true}
                      color_hover="#edefff"
                    />
                  </div>
                </div>
                <div className="card04_1_2">
                  <div id="card04_osp">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M15 11V5L12 2L9 5V7H3V21H21V11H15ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM13 19H11V17H13V19ZM13 15H11V13H13V15ZM13 11H11V9H13V11ZM13 7H11V5H13V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4>Организации спортивной подготовки</h4>
                    <NumericFormat
                      value={
                        Data.data.block_items[3].block_item_fields[0].value
                      }
                      displayType="text"
                      thousandSeparator=" "
                    />
                  </div>
                  <a
                    id="card04_osp_adapt"
                    href="https://sportrf.gov.ru/%D0%A0%D0%B5%D0%B5%D1%81%D1%82%D1%80_%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B9_%D0%BF%D0%BE_%D0%B0%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9_%D1%84%D0%B8%D0%B7%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B5_%D0%B8_%D1%81%D0%BF%D0%BE%D1%80%D1%82%D1%83.rar"
                    target="_self"
                  >
                    <p>
                      Загрузить реестр организаций, осуществляющих
                      <br />
                      деятельность по адаптивной физической культуре
                      <br />и спорту
                    </p>
                  </a>
                  <div id="card04_button2">
                    <LookButton
                      text="Посмотреть"
                      link="https://sportrf.gov.ru/sports-federations"
                      color="#17228E"
                      arrow={true}
                      color_hover="#edefff"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="card05">
        {Data.error && <Nodata nodata_size={loader_size} />}
        {!Data.error && (
          <div>
            {Data.isLoading ? (
              <Loader loader_size={loader_size} />
            ) : (
              <div className="card05_1">
                <div className="card05_1_1">
                  <div id="card05_vrvs">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 3.3L12.35 2.35C14.17 2.91 15.72 4.11 16.73 5.69L16.34 7.03L14.99 7.49L11 4.7V3.3ZM7.65 2.35L9 3.3V4.7L5.01 7.49L3.66 7.03L3.27 5.69C4.28 4.12 5.83 2.92 7.65 2.35ZM5.08 15.11L3.94 15.21C2.73 13.81 2 11.99 2 10C2 9.88 2.01 9.77 2.02 9.65L3.02 8.92L4.4 9.4L5.86 13.74L5.08 15.11ZM12.5 17.59C11.71 17.85 10.87 18 10 18C9.13 18 8.29 17.85 7.5 17.59L6.81 16.1L7.45 15H12.56L13.2 16.11L12.5 17.59ZM12.27 13H7.73L6.38 8.98L10 6.44L13.63 8.98L12.27 13ZM16.06 15.21L14.92 15.11L14.13 13.74L15.59 9.4L16.98 8.93L17.98 9.66C17.99 9.77 18 9.88 18 10C18 11.99 17.27 13.81 16.06 15.21Z"
                        fill="#3744C4"
                      />
                    </svg>
                    <h4>Всероссийский&nbsp;реестр&nbsp;видов&nbsp;спорта</h4>
                  </div>
                  <div id="card05_button1">
                    <LookButton
                      text="Посмотреть"
                      link="https://sportrf.gov.ru/sport-types"
                      color="#17228E"
                      arrow={true}
                      color_hover="#edefff"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Cards.propTypes = {
  loader_size: PropTypes.number.isRequired,
  api: PropTypes.string.isRequired,
};

export default Cards;
