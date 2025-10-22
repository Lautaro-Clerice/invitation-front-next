import React from "react";

type WithErrorBoundaryProps = {
  error?: unknown;
  [key: string]: any;
};

export function withErrorBoundary(WrappedComponent: React.ComponentType<any>) {
  const ComponentWithErrorBoundary = ({
    error,
    ...props
  }: WithErrorBoundaryProps) => {
    if (error)
      return (
        <h2 className="text-red-500 text-center">Error al cargar datos</h2>
      );
    return <WrappedComponent {...props} />;
  };
  ComponentWithErrorBoundary.displayName = `WithErrorBoundary(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return ComponentWithErrorBoundary;
}
