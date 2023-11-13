import React from "react";
import Servicebox from "../Servicebox"; //react component responsible for digital service box

const TabOrganizations = () => {
  return (
    <div className="Organizations">
      <Servicebox
        epgu={true}
        iconSrc="./media/Icons/icon_cup.svg"
        boxTitle="Присвоение спортивных разрядов"
        boxText={<p>Запись доступна в некоторых регионах</p>}
        boxLinkText="Перейти"
        path=""
        target="_self"
        boxModal={true}
        modalStyle="modalContextOrg"
        titleModal="Присвоение спортивных разрядов"
        textModal={
          <p>
            По результатам выступлений на официальных
            <br /> спортивных соревнованиях или физкультурных
            <br /> мероприятиях гражданам Российской Федерации
            <br />
            присваиваются спортивные разряды.
            <br />
            <br />
            Срок услуги 19 рабочих дней.
            <br />
            <br />
            Результатом услуги является решение о присвоении или подтверждении
            спортивного разряда в электронном виде.
          </p>
        }
        modalServiceId="21"
      />
      <Servicebox
        epgu={true}
        iconSrc="./media/Icons/icon_whistle.svg"
        boxTitle={
          <p>
            Присвоение
            <br />
            квалификационных
            <br />
            категорий спортивных судей
          </p>
        }
        boxText={<p>Запись доступна в некоторых регионах</p>}
        boxLinkText="Перейти"
        path=""
        target="_self"
        boxModal={true}
        modalStyle="modalContextOrg"
        titleModal={
          <p>
            Присвоение квалификационных
            <br />
            категорий спортивных судей
          </p>
        }
        textModal={
          <p>
            Спортивным судьям в каждом виде спорта
            <br />
            устанавливаются квалификационные требования,
            <br />в соответствии с которыми могут быть присвоены
            <br />
            квалификационные категории.
            <br />
            <br />
            Срок услуги 19 рабочих дней.
            <br />
            <br />
            Результатом услуги является решение о присвоении
            <br />
            квалификационной категории спортивного судьи
            <br />в электронном виде.
          </p>
        }
        modalServiceId="22"
      />
      <Servicebox
        epgu={true}
        iconSrc="./media/Icons/icon_school.svg"
        boxTitle={
          <p>
            Присвоение статуса
            <br />
            региональной спортивной
            <br />
            федерации
          </p>
        }
        boxText={<p>Запись доступна в некоторых регионах</p>}
        boxLinkText="Перейти"
        path=""
        target="_self"
        boxModal={true}
        modalStyle="modalContextOrg"
        titleModal={
          <p>
            Государственная аккредитация
            <br />
            региональных спортивных федераций
          </p>
        }
        textModal={
          <p>
            Государственной аккредитации подлежат региональные общественные
            организации или структурные подразделения общероссийской спортивной
            федерации по видам спорта, включенным во Всероссийский реестр видов
            спорта, за исключением военно-прикладных и служебно-прикладных видов
            спорта, для наделения статусом региональных спортивных федераций.
            <br />
            <br />
            За выдачу документа о государственной аккредитации, подтверждающего
            наличие статуса региональной спортивной федерации, или его дубликата
            взимается государственная пошлина.
            <br />
            <br />
            Срок услуги от 5 до 34 рабочих дня в зависимости от цели обращения.
            <br />
            <br />
            Результатом услуги является решение об аккредитации в электронном
            виде.
          </p>
        }
        modalServiceId="23"
      />
      <Servicebox
        epgu={true}
        iconSrc="./media/Icons/icon_folder.svg"
        boxTitle={
          <p>
            Формирование и ведение
            <br />
            Всероссийского реестра
            <br />
            объектов спорта
          </p>
        }
        boxText={<p>Подать заявление через Госуслуги</p>}
        boxLinkText="Перейти"
        path="https://www.gosuslugi.ru/613225/1/form"
        target="_blank"
        boxModal={false}
      />
    </div>
  );
};
export default TabOrganizations;
