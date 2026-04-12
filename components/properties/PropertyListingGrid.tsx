import { PropertyCard } from "@/components/cards/PropertyCard";
import type { PropertyCardData } from "@/lib/property-card";

type Props = {
  items: PropertyCardData[];
};

export function PropertyListingGrid({ items }: Props) {
  return (
    <ul className="grid list-none gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id}>
          <PropertyCard property={item} />
        </li>
      ))}
    </ul>
  );
}
