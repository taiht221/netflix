import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { FaPlay } from 'react-icons/fa'
import {
  CheckIcon,
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from '@heroicons/react/outline'
import MuiModal from '@mui/material/Modal'
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import useAuth from '../hooks/useAuth'
import { modalState } from '../atoms/modalAtom'
export interface ModalProps {}

export default function Modal(props: ModalProps) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <div>Modal</div>
    </MuiModal>
  )
}
