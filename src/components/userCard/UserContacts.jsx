import styled from 'styled-components'
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg'
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg'
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg'
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg'

const ContactsBox = styled.div`
  margin-top: 24px;
  display: grid;
  grid-auto-rows: minmax(20px, 22px);
  grid-row-gap: 16px;
  grid-template-areas:
    "location"
    "website"
    "twitter"
    "company"
  ;
  @media (min-width: 768px){
    grid-template-areas:
      "location twitter"
      "website company"
    ;
    margin-top: 30px;
  }

  @media (min-width: 1440px){
    margin-top: 37px;
  }
`
const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`

const UserContacts = ({ location, blog, twitter, company }) => {
  const contacts = [
    { name: "location", data: location, icon: <LocationIcon /> },
    { name: "website", data: blog, icon: <WebsiteIcon /> },
    { name: "twitter", data: twitter, icon: <TwitterIcon /> },
    { name: "company", data: company, icon: <CompanyIcon /> }
  ]

  const contactsElements = contacts.map(contact => (
    <ContactWrapper
      style={{
        gridArea: `${contact.name}`,
        color: `${contact.data ? "inherit" : "grey"}`
      }}
      key={contact.name}
    >
      {contact.icon}
      {contact.data || "Not Available"}
    </ContactWrapper>
  ))

  return (
    <ContactsBox>
      {contactsElements}
    </ContactsBox>
  )
}

export default UserContacts