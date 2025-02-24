import { useLocale } from "next-intl";
import {
  Ensolutions,
  Essolutions,
  enCategories,
  esCategories,
} from "../../messages/data";

type Category = {
  name: string;
  post: {
    id: number;
    text: string;
  };
};

type Solution = {
  id: number;
  title: string;
  description: string;
};

const useData = (dataType: "categories" | "solutions") => {
  const locale = useLocale();
  const data: { categories: Category[]; solutions: Solution[] } = {
    categories: locale === "es" ? esCategories : enCategories,
    solutions: locale === "es" ? Essolutions : Ensolutions,
  };
  return data[dataType];
};

export default useData;
