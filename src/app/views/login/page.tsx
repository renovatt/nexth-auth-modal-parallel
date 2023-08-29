'use client'

import { LoginModal } from '@/app/components/Login'
import { useSession } from 'next-auth/react'

export default function Login() {
  const { data: session } = useSession()
  return (
    <>
      {!session && (
        <LoginModal.Root>
          <LoginModal.Content>
            <LoginModal.CloseIcon />
            <LoginModal.ThumbContainer>
              <LoginModal.Thumbnail />
            </LoginModal.ThumbContainer>
            <LoginModal.FormContainer>
              <LoginModal.Form />
              {/* <LoginModal.SignGoogle /> */}
              <LoginModal.SignUp />
            </LoginModal.FormContainer>
          </LoginModal.Content>
        </LoginModal.Root>
      )}
    </>
  )
}
