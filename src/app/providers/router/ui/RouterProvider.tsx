import { PropsWithChildren, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

const RouterProvider = ({children}: PropsWithChildren<{}>) => {
  return (
  <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
    </BrowserRouter>
  )
}

export default RouterProvider