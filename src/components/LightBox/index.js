import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Grid from '../Grid';

class LightBox extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      currentModal: null
    }
	}
  toggleModal(index) {
    this.setState({ currentModal: index });
  }
  render() {
    const { currentModal } = this.state;
    const { children, images, col } = this.props;

    const validChildren = children.filter((child) => React.isValidElement(child))
    const childrenWithProps = React.Children.map(validChildren, (child, i) => {
      const clone = React.cloneElement(child, {
        onClick: () => this.toggleModal(i)
      })
      return clone;
    })
    return (
      <div>
        <Grid col={col}>
          {childrenWithProps}
        </Grid>
        <ModalGateway>
          {Number.isInteger(currentModal) ? (
            <Modal
              closeOnBackdropClick={true}
              onClose={() => this.toggleModal()}
            >
              <Carousel
                currentIndex={currentModal}
                views={images}
              />
            </Modal>
          ) : null}

        </ModalGateway>
      </div>
    );
  }
}

export default LightBox;
