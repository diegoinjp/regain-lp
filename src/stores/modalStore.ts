import { atom, WritableStore } from 'nanostores'
import type { ModalContentType } from '../utils/types'

export const isModalOpen = atom(false)
export const isGalleryOpen = atom(true)
export const modalContent: WritableStore<ModalContentType> = atom(null)
