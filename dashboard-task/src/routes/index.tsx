import { createRouter, RootRoute, Route } from '@tanstack/react-router';
import Root from './__root';
import HomePage from '../pages/HomePage';

// Define the root route
const rootRoute = new RootRoute({
  component: Root,
});

// Define the home route
const homeRoute = new Route({
  getParentRoute: () => rootRoute, // Specifies root as the parent
  path: '/',
  component: HomePage,
});

// Create and export the router
export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute]),
});
