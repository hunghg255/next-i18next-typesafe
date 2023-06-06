import { ITemplates } from "../types/type";

export const templates = ({ paths, interfaceNames, library = 'next-i18next' }: ITemplates) => {
  return `
import { useTranslation } from "${library}";
import { TFlatten } from "next-i18next-typesafe";

${paths.map((pathItem: string, idx: number) => {
return `import { ${interfaceNames[idx]} } from "./${pathItem}";`;
}).join('\n')}

type TNamespace = ${paths.map((it: string) => `\'${it}\'`).join(' | ')};

type TObj = {
  ${paths.map((pathItem: string, idx: number) => {
return `${pathItem}: keyof TFlatten<${interfaceNames[idx]}>;`;
}).join('\n\t')}
\};

type TKey<T extends TNamespace> = TObj[T];

export const useI18n = () => {
  const { t: i18n } = useTranslation();

  function t<T1 extends TNamespace, T2 extends TKey<T1>>(ns: T1, key: T2) {
    return i18n(\`\${ns}:\${key}\`);
  }

  return { t };
}
`
};
