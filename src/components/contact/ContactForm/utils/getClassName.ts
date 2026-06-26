export const getClassName = (...classNames: Array<string | false | undefined>) => classNames.filter(Boolean).join(' ');
