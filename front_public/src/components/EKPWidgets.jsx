import React, { useState } from "react";
import FetchData from "./FetchData";
import Loader from "./Loader";
import Nodata from "./Nodata";
import PropTypes from "prop-types";
import "../css/EKPSport.css";

const EKPSport = ({ widget_color, section_num }) => {
  // month names array dictionary
  const namesOfMonths = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  // init current month and current year variables
  const curMonth = new Date().getMonth();
  const curYear = new Date().getFullYear();
  // correct index value for Sunday + calculate index for first day of week for selected month
  const firstDayofWeek = (m, y) => {
    let d = new Date(y, m, 1).getDay();
    return d === 0 ? 7 : d;
  };
  // init 1st active day in month - current day if current month otherwise 1st day for non-current
  const firstDayinMonth = (m, y) => {
    return m === curMonth && y === curYear
      ? firstDayofWeek(m, y) + new Date().getDate() - 2
      : firstDayofWeek(m, y) - 1;
  };
  // set state for date object
  const [date, setDate] = useState({
    month: curMonth,
    year: curYear,
    shift: firstDayinMonth(curMonth, curYear),
  });
  const daysInMonth = new Date(date.year, date.month + 1, 0).getDate(); // calculate number of days in current month
  let monthLayout = []; // init empty array for calendar widget
  let ekpEvents = []; // init empty array for EKP events widget

  // function for month number normalization and api preparation to fetch EKP events
  const normalizeMonthNumber = (m) => {
    if (m === 0) {
      return "01";
    }
    return m < 9 ? "0" + (m + 1) : m + 1;
  };
  // function for day number normalization
  const normalizeDayNumber = (d) => {
    return d <= 9 ? "0" + d : d;
  };
  // fucntion to set CSS properties for calendar widget
  const CSSStyle = (d) => {
    if (d === date.shift) {
      return "active_click";
    }
    return d > firstDayofWeek(date.month, date.year) - 2 &&
      d < daysInMonth + firstDayofWeek(date.month, date.year) - 1 &&
      d !== date.shift
      ? "active"
      : "passive";
  };
  // function to define number of days in calendar widget
  const daysInWidget = () => {
    return daysInMonth + firstDayofWeek(date.month, date.year) <= 36 ? 34 : 41;
  };
  // complete days numbers for selected month in calendar widget
  for (let d = 0; d <= daysInWidget(); d++) {
    let fd = firstDayofWeek(date.month, date.year);
    let fe = new Date(date.year, date.month, d - fd + 2);
    monthLayout[d] = {
      id: d,
      day: fe.getDate(),
      item_date:
        fe.getFullYear() +
        "-" +
        normalizeMonthNumber(fe.getMonth()) +
        "-" +
        normalizeDayNumber(fe.getDate()),
      css_style: CSSStyle(d),
      event_exists: false,
    };
  }
  // function to decrease month by click
  const decreaseMonth = () => {
    date.month - 1 === -1
      ? setDate({
          ...date,
          month: 11,
          year: date.year - 1,
          shift: firstDayinMonth(11, date.year - 1),
        })
      : setDate({
          ...date,
          month: date.month - 1,
          shift: firstDayinMonth(date.month - 1, date.year),
        });
  };
  // function to increase month by click
  const increaseMonth = () => {
    date.month + 1 === 12
      ? setDate({
          ...date,
          month: 0,
          year: date.year + 1,
          shift: firstDayinMonth(0, date.year + 1),
        })
      : setDate({
          ...date,
          month: date.month + 1,
          shift: firstDayinMonth(date.month + 1, date.year),
        });
  };
  // prepare API to fetch EKP events from backend
  const date_begin = date.year + "-" + normalizeMonthNumber(date.month) + "-01";
  const date_end =
    date.year + "-" + normalizeMonthNumber(date.month) + "-" + daysInMonth;
  const api =
    "https://sportrf.gov.ru/portal-public/block_items/get_ekp?&section_num=" +
    `${section_num}` +
    "&date_begin=" +
    date_begin +
    "&date_end=" +
    date_end +
    "&for_month=true&page=1&per_page=150";
  // fetch EKP data from backend if month is changed
  const EKPData = FetchData(api, [date.month, section_num]);
  // prepare array of EKP events for widget
  if (!EKPData.isLoading && EKPData.data.meta.count !== 0) {
    let selected_date =
      date.year +
      "-" +
      normalizeMonthNumber(date.month) +
      "-" +
      normalizeDayNumber(monthLayout[date.shift].day);

    EKPData.data.data.map((item, index) => {
      return (ekpEvents[index] = {
        // check if event occurs at selected date
        event_validity:
          item.block_item_fields
            .filter((item) => item.code === "date_begin")
            .map((item) => item.value)[0] <= selected_date &&
          item.block_item_fields
            .filter((item) => item.code === "date_end")
            .map((item) => item.value)[0] >= selected_date,
        date_start: item.block_item_fields
          .filter((item) => item.code === "date_begin")
          .map((item) => item.value)[0],
        date_end: item.block_item_fields
          .filter((item) => item.code === "date_end")
          .map((item) => item.value)[0],
        sport_type: item.block_item_fields
          .filter((item) => item.code === "registers_sport_types")
          .map((item) => item.value)[0],
        region_name: item.block_item_fields
          .filter((item) => item.code === "region_name")
          .map((item) => item.value)[0],
        name: item.name,
      });
    });
    // check if event exists for day in calendar widget
    for (let i = 0; i < monthLayout.length; i++) {
      for (let ix = 0; ix < ekpEvents.length; ix++) {
        if (
          monthLayout[i].item_date >= ekpEvents[ix].date_start &&
          monthLayout[i].item_date <= ekpEvents[ix].date_end
        ) {
          ix = ekpEvents.length;
          monthLayout[i].event_exists = true;
        }
      }
    }
  }
  // prepare first three events for widget if exist
  const ekpWidget = ekpEvents
    .filter((item) => item.event_validity === true)
    .slice(0, 3)
    .map((event, index) => {
      return (
        <div
          id="EKPevent"
          style={{ borderLeftColor: widget_color }}
          key={index}
        >
          <div id="EKPevent_date">
            {event.date_start.split("-").reverse().join(".") +
              " - " +
              event.date_end.split("-").reverse().join(".")}
          </div>
          <div id="EKPevent_sport_type">
            <svg viewBox="0 0 24 24">
              <path d="M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6H11.23zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
              <circle cx="11" cy="12" r="2"></circle>
            </svg>
            <span>{event.sport_type}</span>
          </div>
          <div id="EKPevent_location">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
            </svg>
            <span>{event.region_name}</span>
          </div>
          <div id="EKPevent_name">
            <span>{event.name}</span>
          </div>
        </div>
      );
    });

  return (
    <div className="calendar__EKPWidget">
      <div className="calendar">
        {EKPData.error && <Nodata nodata_size={84} />}
        {!EKPData.error && (
          <div>
            <div className="calendar_01">
              <div id="month_select">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  onClick={decreaseMonth}
                >
                  <path
                    d="M16.1102 7.41L14.7002 6L8.7002 12L14.7002 18L16.1102 16.59L11.5302 12L16.1102 7.41Z"
                    fill="#3744C4"
                  />
                </svg>
                <p>
                  {namesOfMonths[date.month]} {date.year}
                </p>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  onClick={increaseMonth}
                >
                  <path
                    d="M10.4998 6L9.08984 7.41L13.6698 12L9.08984 16.59L10.4998 18L16.4998 12L10.4998 6Z"
                    fill="#3744C4"
                  />
                </svg>
              </div>
              <div id="days_of_week">
                <span>Пн</span>
                <span>Вт</span>
                <span>Ср</span>
                <span>Чт</span>
                <span>Пт</span>
                <span>Сб</span>
                <span>Вс</span>
              </div>
              <div className="days_of_month">
                {monthLayout.map((dayItem) => (
                  <div id="day_select" key={dayItem.id}>
                    <span
                      onClick={() => {
                        if (dayItem.css_style === "active") {
                          setDate({
                            ...date,
                            shift: dayItem.id,
                          });
                        }
                      }}
                      id={dayItem.css_style}
                    >
                      {dayItem.day}
                    </span>
                    {dayItem.event_exists && (
                      <svg width="4" height="4" viewBox="0 0 4 4">
                        <circle cx="2" cy="2" r="2" fill={widget_color} />
                      </svg>
                    )}
                  </div>
                ))}
                {EKPData.isLoading && (
                  <div className="Calendar_loader">
                    <Loader loader_size={85} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="EKPwidget">
        {EKPData.error && <Nodata nodata_size={84} />}
        {!EKPData.error && ekpWidget.length === 0 && !EKPData.isLoading && (
          <div className="EKPwidget_no_events">
            <svg viewBox="0 0 100 100">
              <path
                d="M47.9998 43C46.3998 39 45.3998 30.4 49.5998 24.6C55.3998 16.8 58.9998 7.2 47.9998 3C50.1998 5.3 53.8998 10.9 51.2998 15.1C50.1483 16.9425 49.0346 18.555 48.0189 20.0257C42.8606 27.4942 40.2298 31.3032 47.9998 43ZM39.0001 24.5C41.9001 16.3 43.5001 11.4 42.9001 11C42.5085 11.7832 42.307 12.2369 42.0474 12.8212C41.5779 13.8784 40.9185 15.3631 38.6001 20C35.0001 27.2 32.7001 33.3 38.8001 39C37.5001 33.8 37.4001 29.1 39.0001 24.5ZM57.3998 29.3C55.8998 32.8 57.1998 37.9 58.1998 41C56.2998 38.5 51.7998 32.3 55.1998 28C56.1685 26.5468 57.3178 25.052 58.4355 23.5983L58.4355 23.5982C60.3174 21.1505 62.1096 18.8194 62.7998 17C63.5673 20.4888 61.2675 23.6369 59.3656 26.2402C58.5418 27.3679 57.7927 28.3933 57.3998 29.3ZM74 50V46H24V70C24 79.9 32.1 88 42 88H49H56C64.1 88 70.9 82.7 73.2 75.3C87 66.4 90.4 50.9 74 50ZM74 69V54C82.7 54.3 81.5 61.6 74 69ZM33.5 96.2C29.6 95.5 28 92.1 28 91H49H70C70 92.1 67.8 95.4 63.9 96.2C59.9 97 54.6 97 49 97C43.4 97 37.4 97 33.5 96.2Z"
                fill="#EDEFFF"
              ></path>
            </svg>
            <span>Физкультурных и спортивных мероприятий не запланировано</span>
          </div>
        )}
        {!EKPData.error && (
          <div>
            {EKPData.isLoading ? (
              <div className="EKPwidget_loader">
                <Loader loader_size={85} />
              </div>
            ) : (
              <div className="EKPevents">{ekpWidget}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

EKPSport.propTypes = {
  widget_color: PropTypes.string.isRequired,
  section_num: PropTypes.oneOf(["Спортивные", "Физкультурные"]).isRequired,
};

export default EKPSport;
