import { Button, CircularProgress } from '@material-ui/core'
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

interface Props {
  isDisabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

interface State {
  isLoading: boolean
}

const ActionButton = styled(Button)`
  && {
    color: #12838b;
  }
`;

const Loader = styled(CircularProgress)`
  position: absolute;
  top: 10px;
  left: 61px;
  z-index: 1;
`;

class AddButton extends React.Component<Props, State> {

  public state = {
    isLoading: false
  }



  public render() {
    const { children, isDisabled } = this.props;
    const { isLoading } = this.state;
    return (
      <Wrapper>
        <ActionButton disabled={isDisabled} onClick={this.onAdd}>{children}</ActionButton>
        {isLoading && <Loader data-testid="loader"/>}
      </Wrapper>
    )
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isDisabled === true) {
      this.setState({ isLoading: false })
    }
  }

  private onAdd = () => {
    this.setState({ isLoading: true })
    this.props.onClick();
  }
}

export default AddButton;

