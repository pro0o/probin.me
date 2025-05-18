"use client"
import React from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Optionally log error info here
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 bg-red-100 text-red-800 rounded">
            <h2 className="font-bold text-lg mb-2">Something went wrong.</h2>
            <pre className="text-xs mb-2">{this.state.error?.message}</pre>
            <button
              onClick={this.handleReset}
              className="px-3 py-1 bg-accent text-black rounded"
            >
              Try again
            </button>
          </div>
        )
      )
    }
    return this.props.children
  }
} 