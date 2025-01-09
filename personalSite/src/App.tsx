import { useState } from 'react'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Home />} />
      </>
    )
  )

  return (
    <>

    </>
  )
}

export default App
