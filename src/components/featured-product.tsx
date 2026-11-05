import type { Content } from "@/content/types";
import Image from "next/image";

import { ProductGallery } from "@/components/product-gallery";
import { MockupDesktop } from "@/components/ui/mockup-desktop";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

type FeaturedProductProps = {
  content: Content;
};

export function FeaturedProduct({ content }: FeaturedProductProps) {
  const { featuredProduct, gallery } = content;

  return (
    <section className="featured-product" id="work">
      <div className="container">
        <SectionHeading
          eyebrow={featuredProduct.eyebrow}
          title={featuredProduct.title}
          copy={featuredProduct.sectionCopy}
        />
        <div className="product-band">
          <div className="product-content" data-reveal>
            <span
              className="product-logo-frame"
              role="img"
              aria-label={featuredProduct.logoAlt}
            >
              <Image
                className="product-logo product-logo-light"
                src="/images/orcafast/logo.svg"
                alt=""
                aria-hidden="true"
                width={170}
                height={48}
              />
              <Image
                className="product-logo product-logo-dark"
                src="/images/orcafast/logo-dark.png"
                alt=""
                aria-hidden="true"
                width={171}
                height={49}
              />
            </span>
            <h3>{featuredProduct.name}</h3>
            <p>{featuredProduct.description}</p>
            <p>{featuredProduct.designCredit}</p>
            <div className="tag-row">
              {featuredProduct.technologies.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </div>
          </div>
          <div className="product-preview" data-reveal>
            <MockupDesktop
              src="/images/orcafast/dashboard-desktop.png"
              alt={featuredProduct.desktopAlt}
              width={1917}
              height={947}
              loading="eager"
            />
          </div>
        </div>
        <ProductGallery gallery={gallery} />
      </div>
    </section>
  );
}
