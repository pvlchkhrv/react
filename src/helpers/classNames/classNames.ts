type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, extraClasses: string[] = [], mods: Mods = {}): string => {
    return [
        cls,
        ...extraClasses.filter(Boolean),
        ...Object.keys(mods).filter(key => mods[key])
    ].join(' ');
};


