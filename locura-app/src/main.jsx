import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NormalPage from './normal/page.tsx'
import UseQueryPage from './use-query/page.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <>
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/normal" element={<NormalPage />} />
        <Route path="/use-query" element={<UseQueryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  </QueryClientProvider>
  </>
)
