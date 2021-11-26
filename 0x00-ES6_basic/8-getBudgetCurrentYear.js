export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const getCurrentYear = 2021;
  budget[`income-${getCurrentYear}`] = income;
  budget[`gdp-${getCurrentYear}`] = gdp;
  budget[`capita-${getCurrentYear}`] = capita;

  return budget;
}
