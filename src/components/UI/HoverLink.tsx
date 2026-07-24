type HoverLinkProps = {
    children: React.ReactNode;
    className?:string
}

function HoverLink ({children,className=""}:HoverLinkProps) {
    return (
        <div 
        className={`
        relative
        group
        w-fit
        cursor-pointer
        ${className}
        `}>
            {children}


      <span
        className="
          absolute
          left-0
          -bottom-2
          h-[1px]
          w-0
          bg-neutral-300
          transition-all
          duration-500
          group-hover:w-full
        "
      />
        </div>
    )
}
export default HoverLink