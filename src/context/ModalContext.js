import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ModalContext = createContext(['closed', () => {}])

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState('closed')

  const openModal = () => setModalState('open')
  const closeModal = () => setModalState('closed')

  return (
    <ModalContext.Provider
      value={[modalState, { openModal, closeModal }]}
    >
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
