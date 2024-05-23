import { IoArrowBackOutline } from "react-icons/io5"

const page = () => {
  return (
    <section>
      <div className="boxWidth py-5">
        <div className="w-fit flexCenter gap-[6px] text-slate-300 text-xl">
          <IoArrowBackOutline className="text-[25px]" />
          <span className="font-medium">Back</span>
        </div>
      </div>
    </section>
  )
}

export default page
