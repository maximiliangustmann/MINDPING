import React from 'react'
import Reviews from '../components/Reviews'
import CreateButton from '../components/CreateButton'

export default function Dashboard({ reviews }) {
  return (
    <>
      <CreateButton />
      <Reviews reviews={reviews} />
    </>
  )
}