import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Test from './Test.jsx'
import ErrorPage from './ErrorPage.jsx'
import { Form } from './form.jsx'
import { EvalRule } from './EvalRule.jsx'
import { StandardsProc } from './StandardsProc.jsx'
import { AccessRisk } from './AccessRisk.jsx'
import { Implement } from './Implement.jsx'
import { Reports } from './Reports.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "evaluate-rule",
        element: <EvalRule />,
      },
      {
        path: "standards-Procedures",
        element: <StandardsProc />,
      },
      {
        path: "access-risk",
        element: <AccessRisk />,
      },
      {
        path: "implementation",
        element: <Implement />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
