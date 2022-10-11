import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ModalStyled, ButtonCloseStyled } from "./Modal.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { AiOutlineClose } from "react-icons/ai";

const modalRoot = document.querySelector('#modal-root')


export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    }

    handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    

    render() {

        return createPortal(
            <ModalStyled onClick={this.handleBackDropClick}>
                <div>
                    <ButtonCloseStyled type="button" onClick={() => this.props.onClose()}>
                        <AiOutlineClose size={16}/>
                    </ButtonCloseStyled>
                    <ContactForm />
                </div>                
            </ModalStyled>,
            modalRoot
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}