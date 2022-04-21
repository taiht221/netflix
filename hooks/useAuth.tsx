import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'

import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase'

export interface useAuthProps {}

export default function useAuth(props: useAuthProps) {
  const [user, setUser] = useState<User | null>(null)
  return <div></div>
}
