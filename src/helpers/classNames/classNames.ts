type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, additional: string[] = [], mods: Mods = {}): string => {
    return [
        cls,
        ...additional,
        ...Object.keys(mods).filter(key => mods[key])
    ].join(' ');
};


