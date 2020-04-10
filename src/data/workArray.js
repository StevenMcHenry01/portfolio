import React from 'react'

import bobsImage from '../images/work/bobsBurgersImg.png'
import starcraftLadderImage from '../images/work/starcraftLadder.png'
import locationsImage from '../images/work/locations.png'

import { FaReact, FaNode, FaFire, FaSitemap} from 'react-icons/fa';

export const workArray = [
  {
    title: `Bob's Burgers Menu`,
    description: `React application with auth and data preservaton through firebase.`,
    image: bobsImage,
    githubUrl: 'https://github.com/StevenMcHenry01/bobs_burgers',
    siteUrl: 'https://bobsburgers.netlify.com/',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> },
      {key: 2, label: 'Firebase', icon: <FaFire />}
    ]
  },
  {
    title: `Starcraft Ladder Battle`,
    description: `React application calling a third party Api and caching information.`,
    image: starcraftLadderImage,
    githubUrl: 'https://github.com/StevenMcHenry01/starcraft-ladder-client',
    siteUrl: 'https://starcraft-ladder.netlify.com/',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> }
    ]
  },
  {
    title: `Locations App`,
    description: `React application featuring full auth from scratch, image upload, email password retrieval, and utilizes the google maps API.`,
    image: locationsImage,
    githubUrl: 'https://github.com/StevenMcHenry01/locations',
    siteUrl: 'https://locations-app.netlify.com/',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> },
      { key: 2, label: 'Express', icon: <FaSitemap /> },
    ]
  },
]
