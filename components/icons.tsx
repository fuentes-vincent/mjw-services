import {
  ArrowLeftRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Receipt,
  Star,
  TrendingUp,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIcon } from "@/lib/services";

/*
 * One place to resolve every icon in the site, so stroke weight and grid
 * stay consistent. Before this, service icons were drawn at stroke 1.75,
 * the navbar at 2, and stars and checkmarks in a different filled family.
 */

export const SERVICE_ICONS: Record<ServiceIcon, LucideIcon> = {
  book: BookOpen,
  receipt: Receipt,
  users: Users,
  chart: TrendingUp,
  exchange: ArrowLeftRight,
  lightbulb: Lightbulb,
};

export const ICON_STROKE = 1.5;

export {
  Check,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Star,
  X,
  type LucideIcon,
};
