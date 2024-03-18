import Logger from "../../utils/loggerStep";
import Stack from "../../stack/Stack";

const WorseVariantSimpleStockSpan = (quotes) => {
  const logger = new Logger();
  const spans = [];

  quotes.forEach((_, i) => {
    logger.add();
    let k = 1;

    while (i - k >= 0) {
      logger.add();
      if (quotes[i - k] <= quotes[i]) {
        k += 1;
      } else break;
    }

    spans[i] = k;
  });

  logger.logged();
  return spans;
};

const BetterVariantSimpleStockSpan = (quotes) => {
  const logger = new Logger();
  const spans = [];
  const S = new Stack();
  S.push(0);

  quotes.forEach((_, i) => {
    logger.add();

    while (!S.isEmpty() && quotes[S.peek()] <= quotes[i]) {
      logger.add();
      S.pop();
    }

    if (S.isEmpty()) {
      spans[i] = quotes[i + 1];
    } else {
      spans[i] = quotes[i - S.peek()];
    }

    S.push(i);
  });

  logger.logged();

  return spans;
};

export { WorseVariantSimpleStockSpan, BetterVariantSimpleStockSpan };
