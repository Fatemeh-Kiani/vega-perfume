import { Link as RouterLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import type {
  FooterColumn as FooterColumnType,
} from "../../types/footer";

type FooterColumnProps = {
  column: FooterColumnType;
  onNavigate?: () => void;
};

export default function FooterColumn({
  column,
  onNavigate,
}: FooterColumnProps) {
  return (
    <div>
      <h3
        className="
          mb-6
          font-roboto
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-[#F2EBDF]
        "
      >
        {column.title}
      </h3>

      <nav
        aria-label={column.title}
        className="
          flex
          flex-col
          gap-4
        "
      >
        {column.links.map((link) => (
          <RouterLink
            key={link.label}
            to={link.href}
            onClick={onNavigate}
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              font-roboto
              text-[10px]
              font-medium
              text-[#8E8A82]
              transition-colors
              duration-300
              hover:text-[#F2EBDF]
            "
          >
            <span>{link.label}</span>

            <ArrowUpRight
              size={11}
              strokeWidth={1.3}
              className="
                opacity-0
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:opacity-100
              "
              aria-hidden="true"
            />
          </RouterLink>
        ))}
      </nav>
    </div>
  );
}