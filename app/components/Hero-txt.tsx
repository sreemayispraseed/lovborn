"use client";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHeader({ title, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <section className="w-full h-full bg-white ">
      <div className="container mx-auto px-[15px] md:px-[50px] lg:px-[100px] ">
       <div className="flex flex-col pt-[200px] border-b border-gray-200">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-3 text-sm text-gray-500">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gray-700">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="mx-2">—</span>}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-[clamp(32px,6vw,60px)] font-semibold text-gray-900 pb-[61px] pt-[40px]">
          {title}
        </h1>
      </div>
      </div>
    </section>
  );
}
