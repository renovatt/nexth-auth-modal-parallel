'use client'

import { useSession } from 'next-auth/react'
import { RegisterModal } from '@/app/components/Register'

export default function Register() {
  console.log('intercepted route register')
  const { data: session } = useSession()

  return (
    <>
      {!session && (
        <RegisterModal.Root>
          <RegisterModal.Content>
            <RegisterModal.CloseIcon />
            <RegisterModal.ThumbContainer>
              <RegisterModal.Thumbnail />
            </RegisterModal.ThumbContainer>
            <RegisterModal.FormContainer>
              <RegisterModal.Form />
              <RegisterModal.SignIn />
            </RegisterModal.FormContainer>
          </RegisterModal.Content>
        </RegisterModal.Root>
      )}
    </>
  )
}
