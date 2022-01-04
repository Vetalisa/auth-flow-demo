import React from "react"
import { useLocation } from "wouter"

// Decorator (Wrapper)
const locationProvider = (Component) => {
  return (props) => {
    const [location, setLocation] = useLocation()
    return (
      <Component
        {...props}
        location={location}
        setLocation={setLocation}
      />
    )
  }
}

export default locationProvider
