import type React from "react"
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg className="leading-7" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      
      <circle cx="12" cy="20" r="3" fill="currentColor" />
      <text x="28" y="26" fill="currentColor" fontSize="18" fontWeight="700" fontFamily="monospace">
        NIGHTCLUB
      </text>
    </svg>
  )
}
