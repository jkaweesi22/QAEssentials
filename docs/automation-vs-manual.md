# Automation vs Manual Testing

## Manual Testing

Manual testing is human-driven validation of behavior and experience.

When it is strongest:

- Exploratory discovery
- UX and usability evaluation
- One-time or rapidly changing features

## Automated Testing

Automation uses scripts or tools to validate predictable behaviors repeatedly.

When it is strongest:

- Regression coverage at scale
- High-risk or high-frequency paths
- Data-driven validation

## When to use each

| Factor | Manual | Automation |
| --- | --- | --- |
| Change frequency | High | Low to medium |
| Test repetition | Low | High |
| Subjective judgment | Strong | Weak |
| Coverage scale | Limited | High |

## Shift-left testing

Move testing earlier into development:

- Requirements and acceptance criteria reviews
- Unit and integration tests in CI
- Static analysis and early security checks

## Shift-right testing

Extend testing into production and real usage:

- Monitoring and observability
- Feature flags and canary releases
- A/B testing and real user metrics
