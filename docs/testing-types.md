# Testing Types

Software testing is not a single activity but a collection of complementary
testing types, each serving a distinct purpose. Selecting the right testing
type at the right time helps teams manage risk, validate changes efficiently,
and maintain confidence in software quality.

---

## Core Regression Categories

These testing types are primarily used to protect existing functionality
as changes are introduced.

| Type | Purpose | Example use case |
| --- | --- | --- |
| Smoke | Verify critical paths quickly | App launches and login works |
| Sanity | Validate specific change scope | Hotfix to password reset |
| Regression | Ensure nothing broke | Full suite before release |

### Key distinctions
- Smoke testing is broad and shallow
- Sanity testing is narrow and deep
- Regression testing is broad and deep

---

## Functional Levels

Functional testing validates behavior at different layers of the system.

### Unit Testing
- Validates a single function, method, or class in isolation
- Typically written and executed by developers
- Fast and deterministic

Example: Validating a tax calculation function returns the correct value.

---

### Integration Testing
- Validates interactions between modules, services, or APIs
- Focuses on contracts and data flow between components

Example: Verifying that an order service correctly communicates with a payment service.

---

### System Testing
- Validates the fully integrated system as a whole
- Executed in an environment that closely resembles production
- Focuses on end-user behavior

Example: Creating an account, logging in, and updating profile information.

---

### User Acceptance Testing (UAT)
- Confirms the system meets business requirements
- Performed by stakeholders or business representatives
- Acts as final validation before release

Example: Business approval of a reporting dashboard.

---

## Specialized Testing

These testing types focus on non-functional requirements and risk areas.

| Type | Purpose | Example use case |
| --- | --- | --- |
| Performance | Validate speed, load, and stability | Peak traffic stress |
| Security | Identify vulnerabilities and risks | OWASP checks |
| Accessibility | Ensure inclusive access | Screen reader navigation |
| Exploratory | Learn and discover risks quickly | New feature probing |
| End-to-End | Validate full user journeys | Checkout flow |

---

## Exploratory vs Scripted Testing

- Scripted testing follows predefined steps and expected results
- Exploratory testing combines learning, execution, and observation
- Scripted testing ensures consistency and coverage
- Exploratory testing uncovers unknown risks

Both approaches are complementary and should be used together.

---

## When to Use What

- Smoke testing: after each build to confirm basic readiness
- Sanity testing: after a small change, before deeper testing
- Regression testing: before release or after major code changes
- Exploratory testing: early in development or when requirements are unclear

---

## Automation Considerations

- Smoke and regression tests are strong candidates for automation
- Sanity and exploratory testing are often more effective when executed manually
- Automation should support testing, not replace critical thinking

---

## Key Takeaway

No single testing type ensures quality on its own. Effective QA relies on
layered testing strategies aligned to risk, change scope, and system complexity.

Quality is achieved through thoughtful testing, not exhaustive testing.
