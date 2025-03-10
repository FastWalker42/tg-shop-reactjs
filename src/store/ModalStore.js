import { create } from 'zustand'

export const useModalStore = create((set) => ({
  isOpened: false,
  modalType: null,
  itemData: null,

  openItem: (itemData) =>
    set(() => ({
      isOpened: true,
      modalType: 'item',
      itemData: itemData,
    })),

  openCart: () =>
    set(() => ({
      isOpened: true,
      modalType: 'cart',
    })),

  closeModal: () =>
    set(() => ({
      isOpened: false,
      modalType: null,
      modalData: null,
    })),
}))
