import React from 'react'

import { FaReact, FaNode, FaFire, FaSitemap } from 'react-icons/fa'

export const workArray = [
  {
    title: `Starcraft Ladder Battle`,
    description: `React application calling a third party Api and caching information.`,
    imageName: 'starcraft',
    githubUrl: 'https://github.com/StevenMcHenry01/starcraft-ladder-client',
    siteUrl: 'https://starcraft-ladder.netlify.app/',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> },
    ],
  },
  {
    title: `Locations App`,
    description: `A full-stack react application which allows the user to upload
    locations to their profile and allows others to view these locations.
    Implements auth from scratch and utilizes google maps API to show the
    locations.`,
    imageName: 'locations',
    githubUrl: 'https://github.com/StevenMcHenry01/locations',
    siteUrl: 'https://locations-app.netlify.app/',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> },
      { key: 2, label: 'Express', icon: <FaSitemap /> },
    ],
  },
  {
    title: `Bob's Burgers Menu`,
    description: `React application with auth and data preservaton through firebase.`,
    imageName: 'bobs',
    githubUrl: 'https://github.com/StevenMcHenry01/bobs_burgers',
    siteUrl: 'https://bobsburgers.netlify.app/',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> },
      { key: 2, label: 'Firebase', icon: <FaFire /> },
    ],
  },
]
