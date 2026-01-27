# QA Fundamentals

## What is Quality Assurance (QA)

Quality Assurance is the discipline of ensuring software meets specified
requirements and user expectations through planned processes, validation,
and continuous improvement. QA focuses on preventing defects and improving
the development lifecycle, not just detecting issues.

## QA vs Quality Control (QC)

| Aspect | QA | QC |
| --- | --- | --- |
| Focus | Process | Product |
| Goal | Prevent defects | Detect defects |
| Timing | Throughout lifecycle | During testing/execution |
| Examples | Reviews, standards, process improvement | Test execution, inspections |

## Black Box Testing

Testing the system from the user's perspective without knowledge of internal
code or implementation details.

- Best for validating requirements and user behavior
- Common techniques: equivalence partitioning, boundary value analysis
- Example: Verify login fails with an invalid password

## White Box Testing

Testing with full knowledge of internal code structure and logic.

- Best for code paths, branches, and internal logic coverage
- Common techniques: statement, branch, and path coverage
- Example: Verify all branches of a payment calculation are executed

## Gray Box Testing

Testing with partial knowledge of the internal system, combining user-centric
and code-aware approaches.

- Useful for integration and data flow validation
- Example: Validate that user role changes update authorization caches

## Quick comparisons

| Type | Knowledge of internals | Strengths | Risks |
| --- | --- | --- | --- |
| Black Box | None | User-focused validation | Misses deep logic faults |
| White Box | Full | Strong logic coverage | May miss UX gaps |
| Gray Box | Partial | Balanced system insight | Requires domain knowledge |
