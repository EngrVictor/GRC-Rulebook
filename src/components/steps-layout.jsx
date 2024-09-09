import Link from "next/link"

export const StepsLayout = ({ children }) => {
  return (
    <article className='flex justify-start gap-28 min-w-[82%]'>
      <div className='flex flex-col px-8 py-6 mx-20 h-[200px] border-r-2 border-[#8586887c] border-dashed'>
        <Link href='/step-one'>
          <p>Step 1</p>
        </Link>
        <Link href='/step-two'>
          <p>Step 2</p>
        </Link>
        <Link href='/your-answers'>Your Answers</Link>
      </div>
      <form>{children}</form>
    </article>
  )
}