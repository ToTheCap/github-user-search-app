import styled from 'styled-components'

const StatsBox = styled.div`
  width: 100%;
  height: 85px;
  padding: 18px 15px;
  border-radius: 10px;
  background-color: ${props => props.theme.body};
  display: flex;

  @media (min-width: 768px){
    padding: 15px 32px;
  }
`
const Stats = styled.div`
  flex: 2 2 0px;
  text-align: center;

  @media (min-width: 768px){
    text-align: left;
  }
`
const StatsName = styled.p`
  color: ${props => props.theme.text};
  font-size: 11px;
  line-height: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  @media (min-width: 768px){
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 0;
  }
`
const StatsNumber = styled.p`
  color: ${props => props.theme.boldText};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  @media (min-width: 768px){
    font-size: 22px;
    line-height: 32px;
  }
`

const UserStats = ({ repos, followers, following }) => {
  const stats = [
    { name: "repos", data: repos },
    { name: "followers", data: followers },
    { name: "following", data: following }
  ]

  const statsElements = stats.map(stat => (
    <Stats>
      <StatsName>{stat.name}</StatsName>
      <StatsNumber>{stat.data}</StatsNumber>
    </Stats>
  ))

  return (
    <StatsBox>
      {statsElements}
    </StatsBox>
  )
}

export default UserStats