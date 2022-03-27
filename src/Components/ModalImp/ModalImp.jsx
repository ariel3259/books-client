import { Modal } from "react-bootstrap"

export const ModalImp =  (props) => {

    /*
    props: 
        show: boolean
        title: string
        handleClose: false
        body: JSX.Element[]
        footer: JSX.Element[]
    */

    return(
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>
                    {props.title}
                </Modal.Title>
                <h2
                className="text-secondary"
                onClick={props.HandleClose}
                style={{cursor:"pointer"}}
                >
                    X
                </h2>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer>
                {props.footer}
            </Modal.Footer>
        </Modal>
    )
}