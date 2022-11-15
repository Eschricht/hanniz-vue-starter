import {
  type InjectionKey,
  inject,
  provide,
} from 'vue';

export default <
  R,
  A extends Array<any>,
  T extends (...args: A) => R
>(key: string, contextScope: T) => {
  const SYMBOL = Symbol(key) as InjectionKey<ReturnType<T>>;

  const useInjectContext = () => {
    const context = inject(SYMBOL);

    if (context === undefined) {
      throw Error(`Context with key ${key} was not provided`);
    }

    return context as ReturnType<T>;
  };

  const useProvideContext = (...args: Parameters<T>) => {
    const context = contextScope(...args);

    provide(SYMBOL, context);

    return context as ReturnType<T>;
  };

  return {
    SYMBOL,
    useInjectContext,
    useProvideContext,
  };
};
