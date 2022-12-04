import styled from 'styled-components'
import { format } from 'date-fns'

const UserImg = styled.img`
  width: 70px;
  border-radius: 50%;

  @media (min-width: 768px){
    width: 117px;
  }
`
const Name = styled.h1`
  font-size: 16px;
  color: ${props => props.theme.boldText};

  @media (min-width: 768px){
    font-size: 26px;
    line-height: 39px;
  }
`
const Username = styled.p`
  color: ${props => props.theme.dodgerBlue};
  line-height: 19px;
  margin-bottom: 6px;

  @media (min-width: 768px){
    margin: 2px 0px 4px 0px;
    font-size: 16px;
    line-height: 24px;
  }
`
const CreatedAt = styled.p`
  color: ${props => props.theme.date};
  line-height: 19px;

  @media (min-width: 768px){
    line-height: 22px;
  }
  @media (min-width: 1440px){
    position: absolute;
    right: 0px;
    top: 8px;
  }
`
const Bio = styled.p`
  color: ${props => props.theme.text};
  line-height: 25px;
  margin: 2.54em 0 1.77em 0;

  @media (min-width: 768px){
    margin: 24px 0px 32px 0px;
  }
  @media (min-width: 1440px){
    margin: 20px 0px 32px 0px;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px){
    gap: 40px;
  }
  @media (min-width: 1440px){
    align-items: flex-start;
  }
`

const UserInfo = ({ avatarUrl, name, login, createdAt, bio }) => {
  const date = format(new Date(createdAt), "dd MMM yyyy")
  return (
    <>
      <InfoWrapper>
        <UserImg src={avatarUrl} alt='user avatar' />
        <div style={{ width: "100%", position: "relative" }}>
          <Name>{name}</Name>
          <Username>@{login}</Username>
          <CreatedAt>Joined {date}</CreatedAt>
        </div>
      </InfoWrapper>
      <Bio>{bio || "This profile has no bio"}</Bio>
    </>
  )
}

export default UserInfo