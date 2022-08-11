import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

function Forecast({data}) {
  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => {
          <AccordionItem>
            <AccordionItemHeading></AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        })}
      </Accordion>
    </>
  )
}

export default Forecast
