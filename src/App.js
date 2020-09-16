import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import Dashboard from './pages/Dashboard'
import useReviews from './hooks/useReviews'

export default function App() {
  const { reviews, addReview, removeReview, editReview } = useReviews()
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard
          reviews={reviews}
          onRemove={removeReview}
          onEdit={editReview}
        />
      </Route>
      <Route path="/create">
        <Form onSubmit={addReview} />
      </Route>
    </Switch>
  )
}
