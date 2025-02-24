"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import GB from "country-flag-icons/react/3x2/GB";
import FR from "country-flag-icons/react/3x2/FR";
import ES from "country-flag-icons/react/3x2/ES";
import IT from "country-flag-icons/react/3x2/IT";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

// Lista de idiomas disponibles
const languages = [
  { code: "en", name: "English", short: "EN", flag: GB },
  { code: "fr", name: "Français", short: "FR", flag: FR },
  { code: "es", name: "Español", short: "ES", flag: ES },
  { code: "it", name: "Italiano", short: "IT", flag: IT },
];

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  // Extraer el idioma actual de la URL
  const pathSegments = pathname.split("/");
  const currentLocale = languages.some((lang) => lang.code === pathSegments[1])
    ? pathSegments[1]
    : null;

  const [language, setLanguage] = React.useState(
    languages.find((lang) => lang.code === currentLocale) || languages[0]
  );

  const handleChange = (newLocale: string) => {
    localStorage.setItem("preferredLocale", newLocale);
    setLanguage(
      languages.find((lang) => lang.code === newLocale) || languages[0]
    );

    let newPath = pathname;

    if (currentLocale) {
      newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname}`;
    }

    router.replace(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-36 justify-start gap-2">
          <language.flag className="h-4 w-5" />
          <span className="hidden sm:inline">{language.name}</span>
          <span className="sm:hidden">{language.short}</span>
          <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-28">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className="gap-2"
          >
            <lang.flag className="h-4 w-5" />
            <span className="hidden sm:inline">{lang.name}</span>
            <span className="sm:hidden">{lang.short}</span>
            {language.code === lang.code && (
              <Check className="ml-auto h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
