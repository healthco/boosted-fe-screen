import styled from "styled-components"

export const PlayerLayout = styled.div`
  display: grid;
  background-color: #191414;
  border-top: 1px solid white;
  padding: 24px;

  @media (max-width: 579px) {
    grid-template-rows: auto 120px;
    gap: 12px;
  }

  @media (min-width: 580px) {
    grid-template-columns: 200px 1fr;
  }

  .controls-progress {
    display: flex;
    flex-flow: column nowrap;
    gap: 12px;

    @media (min-width: 580px) {
      padding: 0 24px;
    }
  }
`