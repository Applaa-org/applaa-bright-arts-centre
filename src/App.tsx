import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet,
  Link
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Create root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <CookieConsent />
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create about route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create courses routes
const coursesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: Courses,
})

const courseDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/courses/$id',
  component: CourseDetail,
})

// Create booking route
const bookingRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/booking',
  component: Booking,
})

// Create gallery route
const galleryRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: Gallery,
})

// Create testimonials route
const testimonialsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/testimonials',
  component: Testimonials,
})

// Create contact route
const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

// Create privacy route
const privacyRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: () => (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600">Privacy policy content goes here...</p>
        </div>
      </div>
    </div>
  ),
})

// Create terms route
const termsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: () => (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600">Terms of service content goes here...</p>
        </div>
      </div>
    </div>
  ),
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  coursesRoute,
  courseDetailRoute,
  bookingRoute,
  galleryRoute,
  testimonialsRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;