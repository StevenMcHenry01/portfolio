// 3rd party imports
import React from 'react'
import Swiper from 'react-id-swiper'

// My imports
import { workArray } from '../data/workArray'
import Slide from './Slide'

const WorkSlideShow = () => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  return (
    <Swiper {...params}>
      {workArray.map((work, index) => (
        <div key={index}>
          <Slide work={work} />
        </div>
      ))}
    </Swiper>
  )
}

export default WorkSlideShow

// STYLING
