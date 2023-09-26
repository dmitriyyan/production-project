type Mods = Record<string, boolean | string>;

const classNames = (mainClassName: string, mods: Mods = {}, additional: string[] = []) => {
  const modsClasses = Object.entries(mods).filter(([className, value]) => Boolean(value)).map(([className]) => className);
  return [mainClassName, ...additional.filter(Boolean), ...modsClasses].join(' ');
};

export default classNames;
