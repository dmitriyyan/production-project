type Mods = Record<string, boolean | string>

const classNames = (mainClassName: string, mods: Mods = {}, additional: string[] = []) => {
  const modsClasses = Object.keys(mods).filter((className) => Boolean(mods[className]));
  return [mainClassName, ...additional.filter(Boolean), ...modsClasses].join(' ');
};

export default classNames;
