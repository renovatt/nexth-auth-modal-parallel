import Link from 'next/link'
import { RouterLinksProps } from '@/@types'

const RouterLinks = ({ href, text, onClick }: RouterLinksProps) => {
  return (
    <Link
      className={`${
        onClick ? 'text-2xl' : 'text-base'
      } text-white transition-all ease-in hover:text-primary-700`}
      href={href}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}

export default RouterLinks
