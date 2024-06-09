"use client"
import { usePageTransition } from "./PageTransitionStart"

const LinkTransition = ({href, label}:{href: string, label: string | React.ReactNode}) => {
  const { changeHref } = usePageTransition()

  const activateLink = () => {
    changeHref(href)
  }
  return (
    <button onClick={activateLink}>{label}</button>
  )
}

export default LinkTransition
