import Property from "../core/Property";

/**
 * Принимает объект, превращает его в Property[]. То есть каждый ключ записывает в [[Property.property]], а возле него
 * его пару в поле [[Property.value]]
 * @param args - объект для преобразования
 */
export function objectToProperties<T>(args: T): Property<T>[] {
  let newArgs = [];
  for (let i in args) {
    // noinspection JSUnfilteredForInLoop
    newArgs.push({
      property: i,
      value: args[i]
    });
  }
  return newArgs;
}
