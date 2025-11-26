# Design Guidelines: ML Flashcards Study Application

## Design Approach
**System-Based Approach** inspired by Material Design and modern productivity tools (Notion, Linear)
- Rationale: Utility-focused study tool requiring clarity, efficiency, and distraction-free learning experience
- Key Principles: Visual clarity, functional consistency, smooth micro-interactions, focus-driven design

## Typography System

**Font Family:** Inter (CDN: Google Fonts)
- Primary: Inter 400, 500, 600

**Type Scale:**
- App Title: 24px, weight 600
- Card Question (Front): 22px, weight 500, line-height 1.4
- Card Answer (Back): 20px, weight 400, line-height 1.5
- Meta Text/Labels: 14px, weight 500
- Small Text/Hints: 13px, weight 400
- Button Text: 15px, weight 500

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 8, 12, 16, 20
- Component padding: p-4, p-6, p-8
- Section spacing: mb-4, mb-8, mt-12
- Button spacing: px-4, py-2
- Card internal padding: p-6 to p-8

**Container:**
- Max-width: 900px centered
- Page padding: px-8 on desktop, px-4 on mobile
- Vertical rhythm: py-8 for main container

## Component Library

### Flashcard Component
- Dimensions: 600px width × 340px height (desktop), scales responsively
- Border radius: 16px
- Shadow: Soft elevated shadow (0 8px 24px rgba(0,0,0,0.08))
- Flip animation: 0.5s ease-out transform, preserve-3d perspective
- Content alignment: Center-aligned with generous padding (p-8)
- Interactive state: Subtle scale on hover (scale 1.01), cursor pointer

### Button System
**Primary Button:**
- Background: Solid accent fill
- Padding: px-6 py-2.5
- Border radius: 8px
- Font weight: 600
- Shadow: 0 2px 8px rgba(accent, 0.2)

**Secondary/Ghost Button:**
- Background: Transparent or subtle fill
- Border: 1px solid border color
- Same padding and radius as primary

**Know/Didn't Buttons:**
- "I knew it": Success-oriented styling (primary variant)
- "I didn't": Neutral/ghost styling
- Equal width for visual balance

### Navigation Controls
- Horizontal button group with 8px gap
- Previous/Next buttons as ghost style
- Compact sizing for quick navigation

### Header Section
- Flex layout: Title left, stats right
- Progress indicator: Small badge style with current/total
- Score display: Prominent pill/badge with accent background
- Subtitle/meta text below title (muted color)

### Footer Section
- Minimal, flex layout between help text and card count
- Muted text treatment
- Small size (13px)

## Interaction Patterns

**Card Flipping:**
- Click anywhere on card to flip
- "Show Answer" button also triggers flip
- Space bar keyboard shortcut
- Smooth 3D rotation animation
- Front side always visible initially

**Navigation Flow:**
- Arrow keys for Previous/Next
- Auto-advance after marking "I knew it" or "I didn't"
- Circular navigation (wraps around deck)
- Card resets to front side on navigation

**Score Tracking:**
- Increments only on "I knew it"
- Persistent display in header
- No score decrease (positive reinforcement)

## Visual Hierarchy

**Primary Focus:** The flashcard itself - largest, most prominent element
**Secondary Elements:** Navigation and action buttons below card
**Tertiary Elements:** Header stats and footer hints

**Contrast Strategy:**
- High contrast for card content (dark text on white background)
- Medium contrast for UI chrome (buttons, labels)
- Low contrast for hints and meta information

## Accessibility

- Focus states: 3px outline on all interactive elements
- ARIA labels: Card has role="button" and aria-pressed states
- Keyboard navigation: Full support (arrows, space)
- Color contrast: Minimum WCAG AA for all text
- Touch targets: Minimum 44×44px for all buttons

## Responsive Behavior

**Desktop (≥768px):**
- Card: 600px width, full height
- Single-column centered layout
- All controls in single row

**Mobile (<768px):**
- Card: Full width minus padding, reduced height (280px)
- Controls may stack vertically
- Maintained touch-friendly sizing

## Animation Guidelines

**Use Sparingly:**
- Card flip: Primary interaction animation (0.5s)
- Button hover: Subtle scale (1.02) or background shift
- Score update: Optional subtle pulse on increment
- NO loading spinners, NO complex scroll animations, NO decorative motion

This is a focused study tool - animations should enhance usability, not distract from learning.