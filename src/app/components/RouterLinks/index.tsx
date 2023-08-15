import Link from 'next/link'
import { RouterLinksProps } from '@/@types'

const RouterLinks = ({ href, text, onClick }: RouterLinksProps) => {
  return (
    <Link
      className={`${
        onClick ? 'text-2xl' : 'text-base'
      } hover:text-primary-700 text-white transition-all ease-in`}
      href={href}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}

export default RouterLinks
