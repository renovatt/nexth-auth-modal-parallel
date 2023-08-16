import { useFormContext } from 'react-hook-form'

export type InputProps = {
  name: string
  label: string
  type: string
  placeholder: string
}

const Input = ({ ...props }: InputProps) => {
  const { register } = useFormContext()

  return (
    <>
      <label
        className="flex w-full max-w-xs cursor-pointer
         items-center justify-between text-sm text-primary-900"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        id={props.label}
        className="max-h-10 w-full max-w-xs flex-1 rounded-full border px-3 py-2 text-sm shadow-sm outline-none transition-all ease-in"
        {...register(props.name)}
        {...props}
      />
    </>
  )
}

export default Input
