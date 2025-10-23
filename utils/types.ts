export interface BankAccount {
  id: string;
  title?: string;
  description?: string;
  bankName: string;
  accountNumber: string;
  alias?: string;
  cbu?: string;
  ownerName?: string;
}
export interface MediaAsset {
  id: string;
  url: string;
  meta: Record<string, unknown>;
}
export interface Timestamps {
  createdAt: string;
  activatedAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface EventTemplateProps {
  id: string;
  playlistId?: number;
  eventDate: Date;
  templateId: string;
  title: string;
  venueAddress: {
    name: string;
    location: string;
  };
  subtitle: string;
  publicSlug: string;
  primaryColor: string;
  secondaryColor: string;
  coverImageUrl: string;
  status: "draft" | "active";
  timestamps: Timestamps;
  participants: string[];
  mediaAssets: MediaAsset[];
  dressCode: string;
  bankAccounts: BankAccount[];
}
export interface PlaylistProps {
  recommendedBy: string;
  title: string;
  artist: string;
  url?: string;
  playlistId?: number;
}

export interface Guest {
  eventId: string;
  name: string;
  surname: string;
  email: string;
  attendance: boolean;
  importantInfo?: string;
  companions: Array<{
    name: string;
    surname: string;
  }>;
}
export interface Category {
  id: string;
  key: string;
  display_name: string;
  description: string;
  cover_image_url: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
export interface ScreenLoadedProps {
  bgColor: string;
  colorPrimary: string;
}
