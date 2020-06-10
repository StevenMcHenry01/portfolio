// 3rd party imports
import React from 'react'
import Swiper from 'react-id-swiper'
import styled from 'styled-components'

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
      {workArray.map((work) => (
        <div>
          <Slide work={work} />
        </div>
      ))}
    </Swiper>
  )
}

export default WorkSlideShow

// STYLING
