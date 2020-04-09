import React from 'react'

import bobsImage from '../images/work/bobsBurgersImg.png'
import starcraftLadderImage from '../images/work/starcraftLadder.png'

import { FaReact, FaNode, FaFire} from 'react-icons/fa';

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
]
