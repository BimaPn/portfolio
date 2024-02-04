import { socialMedia } from "@/constants/list"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="boxWidth pb-3 pt-6 mt-12">
      <div className="flexBetween mb-16">
        <div className="basis-1/2 flex flex-col gap-3">
          <span className="font-semibold text-2xl">Wanna make project together ?</span>
          <Link href={`/contact`} className="w-fit text-lg font-semibold border-b-[2px] border-black">Contact Me</Link>
        </div>
        <div className="basis-1/3 flex flex-col gap-2">
          <span className="font-semibold text-lg">Follow Me On : </span>
          <ul className="flex items-center gap-5">
            {socialMedia.map((item, i) => (
              <li key={i}>
                <Link 
                href={item.link}
                className={`${i == 0 ? "text-[39px]":"text-[42px]"}`}>{item.icon}</Link>
              </li>
            ))}
          </ul> 
        </div>
      </div>
      
      <div className="flexCenter">
        <span className="font-semibold">
          copyright © 2024 Bima Pn. All rights reserved
        </span>
      </div>

    </footer> 
  )
}

export default Footer
