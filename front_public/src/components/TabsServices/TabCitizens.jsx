import React from "react";
import Servicebox from "../Servicebox"; //react component responsible for digital service box

const TabsCitizens = () => {
  return (
    <div className="Citizens">
      <Servicebox
        epgu={false}
        iconSrc="./media/Icons/child_sport_icon.svg"
        boxTitle="Выбор спорта для ребенка!"
        boxText={
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                fill="#FF9500"
              />
            </svg>
            <p>
              В настоящий момент проходит
              <br />
              тестирование обновленной
              <br />
              модели расчета показателей
            </p>
          </div>
        }
        boxLinkText="Перейти"
        path="https://sportrf.gov.ru/child_predisposition"
        target="_blank"
        boxModal={false}
      />
      <Servicebox
        epgu={true}
        iconSrc="./media/Icons/icon_stadium.svg"
        boxTitle={
          <p>
            Запись детей
            <br />в спортивную школу
          </p>
        }
        boxText="Подать электронное заявление через портал Госуслуг"
        boxLinkText="Перейти"
        path=""
        target="_self"
        boxModal={true}
        modalStyle="modalContext"
        titleModal="Услуга записи в организации спортивной подготовки спорта высших достижений"
        textModal={
          <p>
            Услуга представляет возможность записи на этапы спортивной
            подготовки:
            <br /> 1. Спортивно-оздоровительный этап
            <br /> 2. Этап начальной подготовки
            <br /> 3. Тренировочный этап (этап спортивной специализации)
            <br /> 4. Этап совершенствования спортивного мастерства
            <br /> 5. Этап высшего спортивного мастерства
          </p>
        }
        modalServiceId="12"
      />
      <Servicebox
        epgu={true}
        iconSrc="./media/Icons/icon_cup.svg"
        boxTitle={
          <p>
            Запись на участие в массовых
            <br />
            физкультурных мероприятиях
          </p>
        }
        boxText="Подать электронное заявление через портал Госуслуг"
        boxLinkText="Перейти"
        path="https://www.minsport.gov.ru/zapis-na-uchastie-v-massovyh-fizkulturnyh-meropriyatiyah/"
        target="_blank"
        boxModal={false}
      />
      <Servicebox
        epgu={false}
        iconSrc="./media/Icons/gto_icon.svg"
        boxTitle="ГТО"
        boxText="Программно-нормативная основа физического воспитания населения"
        boxLinkText="Перейти"
        path="https://user.gto.ru/user/register"
        target="_blank"
        boxModal={false}
      />
      <Servicebox
        epgu={false}
        iconSrc="./media/Icons/ekp_icon.svg"
        boxTitle="Единый календарный план"
        boxText="Единый календарный план физкультурных и спортивных мероприятий"
        boxLinkText="Посмотреть ЕКП"
        path="https://sportrf.gov.ru/ekp"
        target="_self"
        boxModal={false}
      />
      <Servicebox
        epgu={false}
        iconSrc="./media/Icons/sport_objects_icon.svg"
        boxTitle="Объекты спорта"
        boxText={<p>Найти объект спорта в своем регионе</p>}
        boxLinkText="Перейти"
        path="https://sportrf.gov.ru/cartographic"
        target="_self"
        boxModal={false}
      />
      <Servicebox
        epgu={false}
        iconSrc="./media/Icons/nsi_icon.svg"
        boxTitle="Нормативно-справочная информация сферы ФКиС"
        boxText={
          <p>
            Справочники и классификаторы <br />
            сферы физической культуры и спорта
          </p>
        }
        boxLinkText="Перейти"
        path="https://sportrf.gov.ru/nsi"
        target="_self"
        boxModal={false}
      />
      <Servicebox
        epgu={false}
        iconSrc="./media/Icons/nalog_icon.svg"
        boxTitle={<p>Налоговый вычет</p>}
        boxText={
          <p>
            Перечень организаций,
            <br />
            осуществляющих деятельность
            <br />в сфере ФКиС
          </p>
        }
        boxLinkText="Ознакомиться"
        path="https://www.minsport.gov.ru/activity/mass-sport/#sId-6476"
        target="_blank"
        boxModal={false}
      />
    </div>
  );
};
export default TabsCitizens;
