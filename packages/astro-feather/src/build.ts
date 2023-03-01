import path from "path";
import feather from "feather-icons/dist/icons.json" assert { type: "json" };
import { pascalCase } from "pascal-case";
import fs from "fs-extra";

type Icon = {
  name: string;
  pascalCasedName: string;
};

const componentTemplate = (icon: Icon) => `---
export interface Props {
  size?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  customClasses?: string;
  viewBox?: string;
  strokeLinecap?: "round" | "butt" | "square" | "inherit";
  strokeLinejoin?: "round" | "inherit" | "miter" | "bevel";
}

const {
  size = 24,
  strokeWidth = 2,
  width = size,
  height = size,
  stroke = "currentColor",
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  fill = "none",
  customClasses = '',
  viewBox = '0 0 24 24',
} = Astro.props;
---
<svg xmlns="http://www.w3.org/2000/svg" class={\`feather feather-x \${customClasses}\`} width={width} height={height} fill={fill} viewBox={viewBox}  stroke={stroke} stroke-width={strokeWidth} stroke-linecap={strokeLinecap} stroke-linejoin={strokeLinejoin}>
${feather[icon.name]}
</svg>

`;

const handleComponentName = (name: string) => name.replace(/\-(\d+)/, "$1");

const icons: Icon[] = Object.keys(feather).map((name) => {
  return {
    name,
    pascalCasedName: pascalCase(`${handleComponentName(name)}-icon`),
  };
});

try {
  for (const icon of icons) {
    const component = componentTemplate(icon);
    const filePath = `./dist/components/${icon.pascalCasedName}.astro`;
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, component, "utf-8");
  }
  const main = icons
    .map(
      (icon) =>
        `export { default as ${icon.pascalCasedName} } from './components/${icon.pascalCasedName}.astro';`
    )
    .join("\n\n");
  fs.outputFile("./dist/index.ts", main, "utf-8");
} catch (error) {
  console.error("Error building feather-icons into Astro components: ", error);
}
