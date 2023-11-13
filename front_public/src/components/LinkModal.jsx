import React from "react";
import "../css/LinkModal.css";
import PropTypes from "prop-types";

const LinkModal = ({ modalServiceId }) => {
  // predefined props for digital services
  const servicesProps = [
    {
      service_id: "12",
      link: "https://www.gosuslugi.ru/600365/1/form",
      link_msk: "",
      link_style: "single",
      link_location: false,
    },
    {
      service_id: "21",
      link: "https://www.gosuslugi.ru/600152/1/form",
      link_msk: "https://uslugi.mosreg.ru/services/6864",
      link_style: "list",
      link_location: true,
    },
    {
      service_id: "22",
      link: "https://www.gosuslugi.ru/600151/1/form",
      link_msk: "https://uslugi.mosreg.ru/services/6863",
      link_style: "list",
      link_location: true,
    },
    {
      service_id: "23",
      link: "https://www.gosuslugi.ru/600158/1/form",
      link_msk: "",
      link_style: "list",
      link_location: true,
    },
  ];
  // filter out props for selected service
  const selectedServiceProps = servicesProps.filter(
    (item) => item.service_id === modalServiceId
  );

  // regions names dictionary
  const regionsNames = [
    {
      region_id: 1,
      region_name: "Алтайский край",
      region_link: selectedServiceProps[0].link,
      // "12" - region is also used as dummy for services with Sinlge link but region name won't be displayed
      included_in_service: ["12", "21", "22", "23"],
    },
    {
      region_id: 2,
      region_name: "Амурская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 3,
      region_name: "Архангельская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 4,
      region_name: "Астраханская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 5,
      region_name: "Белгородская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 6,
      region_name: "Брянская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 7,
      region_name: "Владимирская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 8,
      region_name: "Волгоградская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 9,
      region_name: "Вологодская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 10,
      region_name: "Воронежская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 11,
      region_name: "Еврейская автономная область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 12,
      region_name: "Забайкальский край",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 13,
      region_name: "Ивановская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 14,
      region_name: "Иркутская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 15,
      region_name: "Кабардино-Балкарская Республика",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 16,
      region_name: "Калининградская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 17,
      region_name: "Калужская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 18,
      region_name: "Камчатский край",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 19,
      region_name: "Карачаево-Черкесская Республика",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 20,
      region_name: "Кемеровская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 21,
      region_name: "Кировская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 22,
      region_name: "Костромская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 23,
      region_name: "Краснодарский край",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 24,
      region_name: "Красноярский край",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 25,
      region_name: "Курганская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 26,
      region_name: "Курская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 27,
      region_name: "Ленинградская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 28,
      region_name: "Липецкая область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 29,
      region_name: "Магаданская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 30,
      region_name: "Московская область",
      region_link: selectedServiceProps[0].link_msk,
      included_in_service: ["21", "22"],
    },
    {
      region_id: 31,
      region_name: "Мурманская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 32,
      region_name: "Ненецкий автономный округ",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 33,
      region_name: "Нижегородская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 34,
      region_name: "Новгородская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 35,
      region_name: "Новосибирская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 36,
      region_name: "Омская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 37,
      region_name: "Оренбургская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 38,
      region_name: "Орловская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 39,
      region_name: "Пензенская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 40,
      region_name: "Пермский край",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 41,
      region_name: "Приморский край",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 42,
      region_name: "Псковская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 43,
      region_name: "Республика Адыгея (Адыгея)",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 44,
      region_name: "Республика Алтай",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 45,
      region_name: "Республика Башкортостан",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 46,
      region_name: "Республика Бурятия",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 47,
      region_name: "Республика Дагестан",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 48,
      region_name: "Республика Ингушетия",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 49,
      region_name: "Республика Калмыкия",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 50,
      region_name: "Республика Карелия",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 51,
      region_name: "Республика Коми",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 52,
      region_name: "Республика Крым",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 53,
      region_name: "Республика Марий Эл",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 54,
      region_name: "Республика Мордовия",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 55,
      region_name: "Республика Саха (Якутия)",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 56,
      region_name: "Республика Северная Осетия-Алания",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 57,
      region_name: "Республика Татарстан (Татарстан)",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 58,
      region_name: "Республика Тыва",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 59,
      region_name: "Республика Хакасия",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 60,
      region_name: "Ростовская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 61,
      region_name: "Рязанская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 62,
      region_name: "Самарская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 63,
      region_name: "Саратовская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 64,
      region_name: "Сахалинская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 65,
      region_name: "Свердловская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 66,
      region_name: "Севастополь",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 67,
      region_name: "Смоленская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 68,
      region_name: "Ставропольский край",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 69,
      region_name: "Тамбовская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 70,
      region_name: "Тверская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 71,
      region_name: "Томская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 72,
      region_name: "Тульская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 73,
      region_name: "Тюменская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 74,
      region_name: "Удмуртская Республика",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 75,
      region_name: "Ульяновская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 76,
      region_name: "Хабаровский край",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 77,
      region_name: (
        <span>
          Ханты-Мансийский автономный
          <br />
          округ - Югра
        </span>
      ),
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 78,
      region_name: "Челябинская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 79,
      region_name: "Чеченская Республика",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 80,
      region_name: "Чувашская Республика - Чувашия",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 81,
      region_name: "Чукотский автономный округ",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 82,
      region_name: "Ямало-Ненецкий автономный округ",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
    {
      region_id: 83,
      region_name: "Ярославская область",
      region_link: selectedServiceProps[0].link,
      included_in_service: ["21", "22", "23"],
    },
  ];

  // prepare array of links for modal window + conditional rendering for link location
  let regionsLinks = regionsNames.map(
    (region) =>
      Boolean(
        region.included_in_service.find((item) => item === modalServiceId)
      ) && (
        <li id="linkModalListItem" key={region.region_id}>
          {selectedServiceProps[0].link_location && (
            <div id="linkModalListItem_region">
              <svg viewBox="0 0 14 20">
                <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" />
              </svg>
              <span>{region.region_name}</span>
            </div>
          )}
          <div
            id="linkModalListItem_link"
            onClick={() => {
              window.open(region.region_link, "_blank");
            }}
          >
            <span>Перейти</span>
            <svg viewBox="0 0 24 24">
              <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" />
            </svg>
          </div>
        </li>
      )
  );

  // slice links array for single link modal window type
  if (selectedServiceProps[0].link_style === "single") {
    regionsLinks = regionsLinks.slice(0, 1);
  }

  return (
    <div className="linkModalList">
      <ul>{regionsLinks}</ul>
    </div>
  );
};

LinkModal.propTypes = {
  modalServiceId: PropTypes.oneOf(["12", "21", "22", "23"]).isRequired,
};

export default LinkModal;
