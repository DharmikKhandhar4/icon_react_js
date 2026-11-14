# React JS + Tailwind CSS Engineering Guide

## 1. Role and Mission

Build and maintain production-quality web applications using React, JavaScript, and Tailwind CSS. The result should feel polished, responsive, accessible, fast, and straightforward to maintain.

Use the project's existing framework, dependencies, structure, and conventions. Do not migrate tools or rewrite working code without a clear need.

## 2. Required Technology

- React with JavaScript; use `.js` and `.jsx` files.
- Tailwind CSS for application styling.
- Use the project's existing build tool, such as Vite, unless the task requires otherwise.
- Do not introduce TypeScript, `.ts`/`.tsx` files, type annotations, or TypeScript configuration.
- Prefer native browser APIs and existing dependencies. Add a package only when it solves a real requirement.

## 3. Project Setup and Structure

Follow the structure already present. For a small Vite application, a reasonable starting point is:

```text
src/
  components/
  data/
  hooks/
  pages/
  App.jsx
  main.jsx
  index.css
```

- Keep components focused and colocate feature-specific files where it helps.
- Keep reusable UI in `components/`; do not create layers or folders without a need.
- Keep static content in data modules when separating it improves readability.
- Use `.jsx` for files containing JSX and `.js` for JavaScript modules without JSX.
- Keep imports explicit and avoid circular dependencies.
- Do not put an entire product into one oversized component or utility file.

## 4. JavaScript and React

- Use clear, descriptive JavaScript names and modern syntax supported by the project.
- Use function components and React hooks.
- Keep state as local as possible; lift it only when multiple components need it.
- Derive values from existing state instead of storing duplicate state.
- Give list items stable keys based on their identity, not their array index when items can change.
- Keep component props and responsibilities small and understandable.
- Extract repeated UI or behavior when it meaningfully improves reuse.
- Avoid premature abstractions, unnecessary context, and unnecessary state-management libraries.
- Never use `eval` or silence errors with empty catches.

Example:

```jsx
import { useMemo, useState } from 'react';

export default function ItemList({ items }) {
  const [query, setQuery] = useState('');
  const visibleItems = useMemo(
    () => items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())),
    [items, query],
  );

  return (
    <section>
      <label htmlFor="item-search">Search items</label>
      <input
        id="item-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {visibleItems.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </section>
  );
}
```

## 5. Tailwind CSS Rules

- Use Tailwind utility classes for layout, spacing, color, typography, borders, states, and responsive styles.
- Follow the Tailwind version, configuration, and entry-point conventions already installed in the project.
- Do not add a second styling system or replace Tailwind with a large custom stylesheet.
- Avoid inline style objects for ordinary styling. Use them only for values that are genuinely dynamic and cannot be expressed cleanly with existing utilities.
- Prefer readable class lists and consistent design tokens. Extract a component when the same meaningful pattern is repeated.
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) mobile-first.
- Use state variants such as `hover:`, `focus-visible:`, `active:`, `disabled:`, and `aria-*` where appropriate.
- Do not construct utility class names dynamically in a way the configured Tailwind scanner cannot detect. Use complete class strings or a clear mapping.
- Use the project's theme/configuration for repeated brand colors or design tokens rather than scattering arbitrary values.
- Keep custom CSS in the existing global stylesheet only for cases Tailwind utilities cannot reasonably express, such as a required animation or third-party override.

Example:

```jsx
<button
  className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white transition
    hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:opacity-50"
>
  Continue
</button>
```

## 6. Design and Responsive Layout

- Match the existing product direction and visual language.
- Establish clear hierarchy, consistent spacing, restrained color, and readable typography.
- Design for small screens first, then add responsive enhancements for larger screens.
- Use flexible layouts, sensible maximum widths, and responsive grids instead of fixed page widths.
- Prevent horizontal overflow and content overlap at narrow viewport sizes and browser zoom.
- Make interactive elements visually identifiable and provide clear hover, focus, active, disabled, and loading states.
- Use animation sparingly and respect `prefers-reduced-motion`.
- Do not add decorative effects that reduce readability or make routine interactions slower.

## 7. Accessibility

- Use semantic HTML elements: `header`, `nav`, `main`, `section`, `form`, and `footer` where appropriate.
- Use buttons for actions and links for navigation; do not use clickable `div` elements as controls.
- Give form inputs visible labels, useful validation feedback, and correctly associated descriptions.
- Ensure every interactive control is keyboard accessible and has a visible focus state.
- Provide accessible names for icon-only buttons and meaningful alternative text for informative images.
- Use empty `alt` text for decorative images.
- Maintain sufficient text and control contrast.
- Use ARIA only when semantic HTML does not provide the required meaning or behavior.
- Manage dialog focus, Escape-to-close behavior, and focus return when implementing modals.
- Announce asynchronous status and validation feedback where screen readers need it.

## 8. Interaction and UI States

For each interactive feature, consider:

- Default, hover, keyboard-focus, pressed, and disabled states.
- Loading, success, validation, empty, and error states as relevant.
- Repeated clicks and duplicate submissions.
- Clear feedback when an action succeeds or fails.

Do not use fake success states, dead controls, or placeholder links that appear functional. Errors should be visible and actionable.

## 9. Forms and User Input

- Use the correct input type and autocomplete attributes.
- Validate input on the client for usability, but do not treat client validation as a security boundary.
- Preserve entered values when validation fails.
- Explain how to correct invalid values and associate messages with their fields.
- Prevent accidental duplicate submissions while a request is in progress.
- Never render user-provided content as trusted HTML.

## 10. Data, APIs, and Security

- Use the existing API or data-fetching patterns where available.
- Handle loading, empty, success, and error responses explicitly.
- Check HTTP response status and report request failures instead of silently swallowing them.
- Cancel or disregard stale requests when the UI no longer needs their results.
- Keep credentials and private keys out of browser code and source control.
- Treat all user input and remote data as untrusted.
- Avoid unsafe HTML injection. If rendering HTML is essential, use an approved sanitization approach.
- Do not log passwords, tokens, personal data, or other sensitive information.

## 11. Performance

- Keep rendering and dependencies proportionate to the feature.
- Avoid unnecessary state updates, expensive work during render, and needless effects.
- Use memoization only when it addresses an observed or likely performance issue.
- Lazy-load large routes or assets when the app's size or usage justifies it.
- Use appropriately sized images and modern formats where available.
- Avoid introducing large libraries for small features.
- Check browser console warnings and errors during validation.

## 12. Hooks and Effects

- Call hooks only at the top level of React components or custom hooks.
- Use effects to synchronize with external systems, not to calculate values that can be derived during render.
- Include the correct dependencies in effect dependency arrays.
- Clean up subscriptions, event listeners, timers, and other resources created by an effect.
- Avoid suppressing hook lint rules to hide dependency mistakes.

## 13. Reusable Components

- Build reusable components around clear responsibilities and real repeated use cases.
- Keep component APIs small and intuitive.
- Prefer composition and `children` over complex boolean-prop combinations.
- Avoid building a design-system abstraction for a one-off element.
- Keep accessibility behavior within the reusable component when it is part of that component's responsibility.

## 14. Testing and Quality

- Follow the test tools already configured in the project.
- Test user-visible behavior, filtering, forms, navigation, and important empty/error states.
- Add or update focused tests for meaningful behavior changes when a test setup exists.
- Use the project's lint, formatting, test, and production-build commands.
- Fix warnings introduced by the change; do not conceal failures by weakening checks.
- Manually verify responsive layout and keyboard interaction when browser validation is available.

## 15. Dependencies and Maintenance

- Inspect existing dependencies before installing anything new.
- Use the package manager and lockfile already used by the project.
- Avoid unnecessary packages, duplicated functionality, and abandoned libraries.
- Keep changes focused; do not reformat or rewrite unrelated files.
- Update directly related documentation when setup or behavior changes.

## 16. Task Workflow

1. Inspect the existing files, package scripts, dependencies, and conventions.
2. Confirm the requested behavior and identify the smallest complete implementation.
3. Reuse the project's existing JavaScript and Tailwind patterns.
4. Make the change without introducing TypeScript or unrelated migrations.
5. Run the narrowest relevant test, lint, or build command.
6. Review the final diff for regressions, accessibility, and unrelated edits.
7. Summarize what changed and report validation results accurately.

## 17. Definition of Done

A change is complete when:

- It satisfies the requested behavior.
- It follows the existing React JavaScript and Tailwind CSS setup.
- It uses no TypeScript.
- It is responsive and accessible for the affected experience.
- Relevant checks pass, or any blocker is reported clearly.
- No unrelated files or behaviors were changed.
