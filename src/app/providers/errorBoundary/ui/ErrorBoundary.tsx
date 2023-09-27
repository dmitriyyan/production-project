import React, { ErrorInfo, PropsWithChildren, Suspense } from 'react';
import { PageError } from 'widgets/PageError';
import { PageLoader } from 'widgets/PageLoader';

type ErrorBoundaryState = {
  hasError: boolean;
}
type ErrorBoundaryProps = PropsWithChildren<unknown>

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Suspense fallback={<PageLoader/>}>
        <PageError />
      </Suspense>;
    }

    return this.props.children;
  }
}
