import React from 'react';

const onLoad = (onLoadFunction: (props: any) => void) => <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class OnLoadHOC extends React.Component<P> {

    public componentDidMount() {
      onLoadFunction(this.props);
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default onLoad;
