import { HeaderContainer } from 'containers/header'
import { ProfileContainer } from 'containers/profile'
import React from 'react'
import PageTransition from 'components/page-transition'

export default function Profile() {
  return (
    <>
      <HeaderContainer backIcon='true' title='Profile' showMenu='false' />
      <PageTransition>
        <ProfileContainer />
      </PageTransition>
    </>
  )
}
