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
  const result = {};
  domains.forEach((elem) => {
    const domainsKey = elem.split('.').reverse();
    domainsKey.reduce((previous, current) => {
      const output = `${previous}.${current}`;
      if (output in result) {
        result[output] += 1;
      } else {
        result[output] = 1;
      }
      return output;
    }, '');
  });
  return result;
}

module.exports = getDNSStats;
