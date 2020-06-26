import React, { memo, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { useSpring, a } from 'react-spring'
import ResizeObserver from 'resize-observer-polyfill'
import { useTheme } from '@material-ui/core'

import * as Icons from '../images/icons/icons'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ ref }, bounds]
}

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const theme = useTheme()
  const colorItems = theme.palette.type === 'dark' ? 'white' : '#191b21'
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  })
  const Icon =
    Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Check'}SquareO`]

  const Title = styled('span')`
    color: ${theme.palette.type === 'dark' ? '#FFFFFF' : '#191b21'};
    vertical-align: middle;
  `
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: 1, fill: colorItems }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
          borderLeft:
            theme.palette.type === 'dark'
              ? `1px dashed rgba(255, 255, 255, 0.4)`
              : `1px dashed ${theme.palette.common.black}`,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  )
})

const SkillsTree = () => {
  const theme = useTheme()
  const PageStyle = styled('div')`
    max-width: 30rem;
    height: 100%;
    margin: 0;
    padding: 0;
    background: ${theme.palette.switchable.skillsBackground};
    overflow: visible;
    font-size: 20px;
    line-height: 28px;
    div,
    a,
    i,
    button,
    select,
    option,
    optgroup,
    hr,
    br {
      user-select: none;
      cursor: default;
    }
  `

  return (
    <PageStyle>
      <Tree name='Skills' defaultOpen>
        <Tree name='Web Dev'>
          <Tree name='Frontend'>
            <Tree name='CSS'>
              <Tree name='Scss' />
              <Tree name='Styled-components' />
              <Tree name='Bootstrap' />
              <Tree name='Material-UI' />
              <Tree name='Themeing' />
            </Tree>
            <Tree name='JavaScript'>
              <Tree name='React'>
                <Tree name='Hooks' />
                <Tree name='ContextAPI' />
                <Tree name='GatsbyJs' />
                <Tree name='NextJs' />
                <Tree name='Redux' />
                <Tree name='Apollo-Client' />
              </Tree>
              <Tree name='Angular' />
              <Tree name='Es6+' />
              <Tree name='Typescript' />
            </Tree>
          </Tree>
          <Tree name='Backend'>
            <Tree name='Node Js'>
              <Tree name='Express Js'>
                <Tree name='Authentication'>
                  <Tree name='Auth0' />
                  <Tree name='OAuth' />
                  <Tree name='Basic Auth' />
                  <Tree name='JWT' />
                </Tree>
                <Tree name='Routing' />
                <Tree name='Pagenation' />
                <Tree name='Security' />
              </Tree>
              <Tree name='NPM' />
            </Tree>
            <Tree name='Databases'>
              <Tree name='MySql'>
                <Tree name='Sequelize' />
              </Tree>
              <Tree name='Postgresql' />
              <Tree name='GraphQl' />
              <Tree name='AWS Rds' />
              <Tree name='MongoDB'>
                <Tree name='Mongoose' />
              </Tree>
            </Tree>
          </Tree>
          <Tree name='Testing'>
            <Tree name='Jest' />
            <Tree name='Mocha' />
            <Tree name='Chai' />
          </Tree>
        </Tree>
        <Tree name='Tooling'>
          <Tree name='Git' />
          <Tree name='Webpack' />
          <Tree name='SSH' />
          <Tree name='HTTPS Certification' />
          <Tree name='Terminal Proficiency' />
          <Tree name='AWS'>
            <Tree name='S3' />
            <Tree name='EC2' />
            <Tree name='RDS' />
            <Tree name='Route 53' />
            <Tree name='IAM' />
          </Tree>
        </Tree>
        <Tree name='OOP'>
          <Tree name='Java'>
            <Tree name='REST API' />
            <Tree name='Web servers' />
          </Tree>
          <Tree name='C++'>
            <Tree name='Threading' />
            <Tree name='Pointers' />
            <Tree name='Memory Management' />
          </Tree>
          <Tree name='Python'>
            <Tree name='Networking' />
            <Tree name='Sockets' />
          </Tree>
        </Tree>
      </Tree>
    </PageStyle>
  )
}

export default SkillsTree

//////////
// Styles
//////////

const Frame = styled('div')`
  position: relative;
  padding: 8px 0px 0px 8px;
  text-overflow: ellipsis;
  white-space: nowrap;

  vertical-align: middle;
  color: white;
  fill: white;
`

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  overflow: hidden;
`

const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}
