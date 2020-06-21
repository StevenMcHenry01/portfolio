import React from 'react'

import {
  FaReact,
  FaNode,
  FaFire,
  FaSitemap,
  FaUserShield,
  FaFileCode,
  FaUserSecret,
} from 'react-icons/fa'

export const workArray = [
  {
    title: `Reddit Royale`,
    description: `A full-stack react application which implements a custom oauth flow and interacts with the reddit API to offer a seamless user experience.`,
    imageName: 'reddit',
    githubUrl: 'https://github.com/StevenMcHenry01/Reddit_Royale_Client',
    siteUrl: 'https://reddit-royale.netlify.app',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> },
      { key: 2, label: 'Express', icon: <FaSitemap /> },
      { key: 3, label: 'Oauth', icon: <FaUserShield /> },
      { key: 4, label: 'JWT', icon: <FaUserSecret /> },
      { key: 5, label: 'Material UI', icon: <FaFileCode /> },
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
    siteUrl: 'https://locations-app.netlify.app',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> },
      { key: 2, label: 'Express', icon: <FaSitemap /> },
      { key: 3, label: 'JWT', icon: <FaUserSecret /> },
      { key: 4, label: 'Material UI', icon: <FaFileCode /> },
    ],
  },
  {
    title: `Bob's Burgers Menu`,
    description: `React application with auth and data preservaton through firebase. Showcases snappy UI that is translated across entire app instantly.`,
    imageName: 'bobs',
    githubUrl: 'https://github.com/StevenMcHenry01/bobs_burgers',
    siteUrl: 'https://bobsburgers.netlify.app',
    chipArray: [
      { key: 0, label: 'React', icon: <FaReact /> },
      { key: 1, label: 'Node', icon: <FaNode /> },
      { key: 2, label: 'Firebase', icon: <FaFire /> },
    ],
  },
]
