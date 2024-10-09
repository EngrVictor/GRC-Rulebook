import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import { Form } from './governance/form.jsx'
import { EvalRule } from './governance/EvalRule.jsx'
import { StandardsProc } from './governance/StandardsProc.jsx'
import { AccessRisk } from './governance/AccessRisk.jsx'
import { Implement } from './governance/Implement.jsx'
import { Reports } from './governance/Reports.jsx'
import { Governance } from './governance/Governance.jsx'
import { Compliance } from './compliance/Compliance.jsx'
import { Risk } from './risk/Risk.jsx'
import { Wrapper } from './Wrapper.jsx'
import { Setting } from './containers/Setting.jsx'
import { Dashboard } from './containers/Dashboard.jsx'
import { Overview } from './containers/Overview.jsx'
import { Edit } from './containers/Edit.jsx'
import { Audit } from './containers/Audit.jsx'
import { Register } from './user/Register.jsx'
import { Login } from './user/Login.jsx'
import { ProtectiveRoute } from './components/protectiveRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectiveRoute><App /></ProtectiveRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Wrapper />,
        children: [
          {
            path: "/governance",
            element: <Governance />,
            children: [
              {
                path: "/governance/form",
                element: <Form />
              },
              {
                path: "/governance/evaluate-rule",
                element: <EvalRule />
              },
              {
                path: "/governance/standards-and-procedures",
                element: <StandardsProc />
              },
              {
                path: "/governance/access-risk",
                element: <AccessRisk />
              },
              {
                path: "/governance/implementation",
                element: <Implement />
              },
              {
                path: "/governance/reports",
                element: <Reports />
              },
            ]
          },
          {
            path: "/risk",
            element: <Risk />,
          },
          {
            path: "/compliance",
            element: <Compliance />
          }
        ]
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/audits",
        element: <Audit />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/settings",
        element: <Setting />,
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
