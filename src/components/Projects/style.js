import styled from "styled-components"
import { color } from "../../styles/Utils"

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;
  transition: all 0.5s ease;
  img {
    height: 500px;
    width: 400px;
    position: absolute;
    left: 0px;
    transition: all 0.5s ease;
  }
`
export const ProjectList = styled.ul`
  z-index: 999;
  height: 400px;
  width: 450px;
  margin-left: 300px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const Projects = styled.li`
  color: ${color.white};
  border-bottom: 1px solid ${color.white};
  padding: 15px 0px;
  width: 500px;
  :last-child {
    border-bottom: none;
  }
  a {
    font-size: 3rem;
    width: auto;
  }
  p {
    color: ${color.MossGreen};
  }
`
