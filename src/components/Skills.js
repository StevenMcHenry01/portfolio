import React, { memo, useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { animated } from "react-spring"
import { useSpring, a } from "react-spring"
import ResizeObserver from "resize-observer-polyfill"

import * as Icons from "../images/icons/icons"

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
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  })
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Check"}SquareO`]
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: 1 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  )
})

const SkillsTree = () => (
  <PageStyle>
    <Tree name="Skills" defaultOpen>
      <Tree name="Web Dev">
        <Tree name="Frontend">
          <Tree name="CSS">
            <Tree name="Scss" />
            <Tree name="Styled-components" />
            <Tree name="Bootstrap" />
          </Tree>
          <Tree name="JavaScript">
            <Tree name="React">
              <Tree name="Hooks" />
              <Tree name="GatsbyJs" />
              <Tree name="NextJs" />
            </Tree>
            <Tree name="Angular" />
            <Tree name="Es6+" />
            <Tree name="Typescript" />
          </Tree>
        </Tree>
        <Tree name="Backend">
          <Tree name="Node Js">
            <Tree name="Express Js">
              <Tree name="Authentication">
                <Tree name="Auth0"/>
                <Tree name="OAuth"/>
                <Tree name="Basic Auth"/>
                <Tree name="JWT"/>
              </Tree>
              <Tree name="Routing" />
              <Tree name="Pagenation" />
              <Tree name="Security" />
            </Tree>
            <Tree name="NPM" />
          </Tree>
          <Tree name="Databases">
            <Tree name="MySql">
              <Tree name="Sequelize" />
            </Tree>
            <Tree name="Postgresql" />
            <Tree name="GraphQl"/>
            <Tree name="AWS Rds"/>
          </Tree>
        </Tree>
        <Tree name="Testing">
          <Tree name="Jest" />
          <Tree name="Mocha" />
          <Tree name="Chai" />
        </Tree>
      </Tree>
      <Tree name="Tooling">
        <Tree name="Git" />
        <Tree name="Webpack" />
        <Tree name="Terminal Proficiency" />
      </Tree>
      <Tree name="OOP">
        <Tree name="Java"></Tree>
        <Tree name="CSS"></Tree>
      </Tree>
    </Tree>
  </PageStyle>
)

export default SkillsTree

//////////
// Styles
//////////

const PageStyle = styled("div")`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #191b21;
  overflow: hidden;
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

const Frame = styled("div")`
  position: relative;
  padding: 8px 0px 0px 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: white;
  fill: white;
`

const Title = styled("span")`
  vertical-align: middle;
`

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`

const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle",
}
