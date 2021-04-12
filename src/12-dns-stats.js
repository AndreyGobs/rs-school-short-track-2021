/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainArrays = [];
  const result = {};

  // 'code.yandex.ru' -> '.ru', '.ru.yandex', '.ru.yandex.code'
  // 'music.yandex.ru' -> '.ru', '.ru.yandex', '.ru.yandex.music'
  // 'yandex.ru' -> '.ru', '.ru.yandex'
  domains.forEach((domain) => {
    // 'code.yandex.ru' -> 'ru', 'yandex', 'code'
    const subDomains = domain.split('.').map((str) => `.${str}`).reverse();
    // 'ru', 'yandex', 'code' -> '.ru', '.ru.yandex', '.ru.yandex.music'
    for (let i = 0; i < subDomains.length; i++) {
      const concatSubDomains = subDomains.slice(0, i + 1);
      domainArrays.push(concatSubDomains.join(''));
    }
  });

  domainArrays.forEach((subDomain) => {
    if (typeof result[subDomain] !== 'undefined') {
      result[subDomain] = (+result[subDomain]) + 1;
    } else {
      result[subDomain] = 1;
    }
  });

  return result;
}

module.exports = getDNSStats;
