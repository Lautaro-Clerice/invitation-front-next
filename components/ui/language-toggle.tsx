import { Button } from "@/components/ui/button";
import { stripLocaleFromPath, Link, usePathname } from "@/src/i18n/routing";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function LanguageToggle() {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPath(pathname);
  const currentLocale = pathname.split("/")[1];

  return (
    <Select
      value={currentLocale === "en" ? "en" : "es"}
      onValueChange={(locale) => {
        window.location.href = `/${locale}${cleanPath}`;
      }}
    >
      <SelectTrigger className="w-24">
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">ES</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
}
