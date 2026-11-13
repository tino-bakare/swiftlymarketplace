import {
  BookOpen, Car, Handshake, HardHat, HeartPulse, Landmark, ListChecks, type LucideIcon,
  Network, Scale, School, Sprout, Store, Users, Warehouse,
} from "lucide-react";

// Explicit map so only the icons the catalogue uses end up in the bundle.
// Add an entry here when a product in data/products.ts names a new icon.
export const artIcons: Record<string, LucideIcon> = {
  BookOpen, Car, Handshake, HardHat, HeartPulse, Landmark, ListChecks, Network, Scale,
  School, Sprout, Store, Users, Warehouse,
};
