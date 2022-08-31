import Modal from "react-modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

type ModalProps = {
  isOpen: boolean
  onAfterOpen?: () => void
  onRequestClose: () => void
  style?: string
  contentLabel: string
  closeButton: () => void
}
const CustomModal = ({ isOpen, onRequestClose, contentLabel, style, onAfterOpen, closeButton }: ModalProps) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
        onAfterClose={onAfterOpen}
        ariaHideApp={false}
      >
        <h1>Location not found!</h1>
        <FontAwesomeIcon icon={faExclamationTriangle} />
        <div>
          <h3>Try again</h3>
          <button onClick={closeButton}>Close</button>
        </div>
      </Modal>

    </div>
  )
}

export default CustomModal