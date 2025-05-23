import React from 'react'

const Button = ({title,position, icon, handleClick, otherClasses}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white gap-2 backdrop-blur-3xl ${otherClasses} `}>
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
</button>
  )
}

export default Button