import {
  Banknote, BookOpen, CalendarRange, Camera, FileSignature, Handshake, HandCoins,
  HardHat, HeartPulse, Landmark, ListChecks, type LucideIcon, MapPin, Network,
  Receipt, Scale, ScanBarcode, ShoppingBag, Smartphone, Sprout, Store, Tag, Users,
  Wallet, Warehouse,
} from "lucide-react";

// Explicit map so only the icons the catalogue uses end up in the bundle.
// Add an entry here when a product in data/products.ts names a new icon.
export const artIcons: Record<string, LucideIcon> = {
  Banknote, BookOpen, CalendarRange, Camera, FileSignature, Handshake, HandCoins,
  HardHat, HeartPulse, Landmark, ListChecks, MapPin, Network, Receipt, Scale,
  ScanBarcode, ShoppingBag, Smartphone, Sprout, Store, Tag, Users, Wallet, Warehouse,
};
