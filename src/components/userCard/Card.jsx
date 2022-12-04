import styled from 'styled-components'
import UserInfo from './UserInfo'
import UserStats from './UserStats'
import UserContacts from './UserContacts'

const CardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 517px;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 32px 24px;
  border-radius: 15px;
  background-color: ${props => props.theme.div};
  box-shadow: 0px 16px 30px -10px ${props => props.theme.boxShadow};

  @media (min-width: 768px){
    padding: 40px;
    min-height: 481px;
  }
  @media (min-width: 1440px){
    padding: 48px;
    min-height: 444px;
  }
`

const Card = ({ user }) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company
  } = user

  return (
    <CardWrapper>
      <UserInfo avatarUrl={avatar_url} name={name} login={login} createdAt={created_at} bio={bio} />
      <UserStats repos={public_repos} followers={followers} following={following} />
      <UserContacts location={location} blog={blog} twitter={twitter_username} company={company} />
    </CardWrapper>
  )
}

export default Card