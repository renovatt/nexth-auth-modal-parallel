import { LoginModal } from '@/app/components/Login'

export default function Login() {
  return (
    <LoginModal.Root>
      <LoginModal.Content>
        <LoginModal.CloseIcon />
        <LoginModal.ThumbContainer>
          <LoginModal.Thumbnail />
        </LoginModal.ThumbContainer>
        <LoginModal.FormContainer>
          <LoginModal.Form />
          <LoginModal.SignGoogle />
          <LoginModal.SignUp />
        </LoginModal.FormContainer>
      </LoginModal.Content>
    </LoginModal.Root>
  )
}
