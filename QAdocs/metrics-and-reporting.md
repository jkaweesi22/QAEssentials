# Metrics and Reporting

## QA metrics

Common metrics and what they indicate:

- Coverage: how much of requirements or code is tested
- Defect density: defects per module or size unit
- Defect leakage: defects found after release
- MTTD: mean time to detect issues
- MTTR: mean time to resolve issues
- Reopen rate: quality of fixes
- Test pass rate: execution health, not quality alone

## Reporting best practices

- Report trends, not just single data points
- Tie metrics to risk and business impact
- Separate quality signals from velocity signals
- Include context: scope, build, environment, and timeframe
- Use clear visuals and consistent definitions

## Metrics that matter vs vanity metrics

| Matter | Why | Vanity | Why |
| --- | --- | --- | --- |
| Defect leakage | Measures release quality | Raw test count | Ignores coverage |
| MTTD/MTTR | Reflects operational quality | Pass rate alone | Can hide gaps |
| Coverage vs risk | Aligns testing to priorities | Bug count alone | No severity context |
| Reopen rate | Indicates fix quality | Automation % | Not equal to value |
