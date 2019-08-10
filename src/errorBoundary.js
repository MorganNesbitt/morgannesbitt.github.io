import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidMount() {
    if (!this.props.isRouter) return false;
    window.onerror = () => {
      this.setState({ hasError: true });
    };
  }

  componentDidCatch(error, info) {
    console.warn('that was scary, almost died', error, info);
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    const appName = this.props.appName || '';
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. {appName}</h1>;
    }

    return this.props.children;
  }
}

