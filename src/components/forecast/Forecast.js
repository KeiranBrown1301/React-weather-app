import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import { Manipulation } from 'swiper';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function Forecast({data}) {

  const dayOfTheWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayOfTheWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfTheWeek)
    );

  console.log(forecastDays)

  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <img alt="weather" className='icon-small' src={`icons/${item.weather[0].icon}.png`} />
                  <label className='day'>{forecastDays[idx]}</label>
                  <label className='description'>
                    {item.weather[0].description}
                  </label>
                  <label className='min-max'>
                    {Math.round(item.main.temp_min)}°C / {" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast;
