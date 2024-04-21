export type StyleClass<T extends string> = `--${T}`;

export const className =
  <T extends string>(styleClass: StyleClass<T>) =>
  (className: string) =>
    `${styleClass}-${className}`;

export const classId =
  <T extends string>(name: T) =>
  (id: string) =>
    `${name}-${id}`;