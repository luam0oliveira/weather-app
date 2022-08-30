import Modal from "react-modal"

type ModalProps = {
  isOpen: boolean
  onAfterOpen?: () => void
  onRequestClose: () => void
  style?: string
  contentLabel: string
}

const CustomModal = ({ isOpen, onRequestClose, contentLabel, style, onAfterOpen }: ModalProps) => {
  return (
    <div>
      <Modal isOpen={isOpen} className="ReactModal__Content" overlayClassName="ReactModal__Overlay" onRequestClose={onRequestClose} contentLabel={contentLabel} onAfterClose={onAfterOpen}>
        <h1>Location not found!</h1>
        <img src="" alt="" />
        <h3>Try again</h3>
      </Modal>

    </div>
  )
}

export default CustomModal