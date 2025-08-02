# GamerShop - Frontend Technical Test

Welcome to the GamerShop! This project is a frontend technical test designed to showcase skills in React, Next.js, and related frontend technologies. The application is a responsive e-commerce site for video games, allowing users to browse a catalog, filter by genre, add items to a persistent cart, and view their cart.

The detailed instructions and requirements for this test are defined in the [`CHALLENGE.md`](/CHALLENGE.md) file.

## Project Structure

The project follows a standard Next.js App Router structure. Here is an overview of the key directories and files:

```
.
├── __tests__                 # Unit tests for pages, components, and services
├── app                       # Main application directory
│   ├── api                   # Local API endpoint
│   ├── cart                  # Cart page components
│   ├── services              # Service for fetching data from the API
│   ├── store                 # Zustand store for cart state management
│   └── types                 # TypeScript type definitions
├── components            # Reusable components
│   ├── cart              # Components specific to the cart
│   ├── home              # Components for the home/catalog page
│   ├── shared            # Components used across multiple pages (Navbar, Footer)
│   └── ui                # Generic UI components (Button, Icon, etc.)
├── public                    # Static assets (icons, images)
└── ...                       # Configuration files
```

## Features and Implementation

This section details how each requirement from the `CHALLENGE.md` was implemented, with references to the relevant commits.

### Vercel and Github repo links

Vercel deployment: [https://apply-digital-assignment.vercel.app](https://apply-digital-assignment.vercel.app)

Github link: [https://github.com/isdelr/apply-digital-assignment](https://github.com/isdelr/apply-digital-assignment)


### General Requirements

*   **Persistent Cart:** The shopping cart state is managed using `zustand` and persists in the browser's local storage.
    *   **Relevant Commit:** `feat(page): Added cart page and related functionality` ([`3d99110`](https://github.com/isdelr/apply-digital-assignment/commit/3d99110e8d6572710dc36b3bc49f1f821ef681fd))

*   **Responsive Design:** The application is fully responsive, with a mobile-first approach using Tailwind CSS.
    *   **Relevant Commits:**
        *   `feat(design): Incorporate colors and font from Figma.` ([`e100576`](https://github.com/isdelr/apply-digital-assignment/commit/e1005760c04585945f1ed6a903c05ec1140a9f46))
        *   `fix(styling): Fix styling details which did not adhere with figma design` ([`712ce69`](https://github.com/isdelr/apply-digital-assignment/commit/712ce69a1d05584ac73a564c34e3cb5b168ab075))

*   **Unit Testing:** Unit tests have been implemented for components, pages, API routes, and the cart store using `vitest` and `@testing-library/react`.
    *   **Relevant Commit:** `feat(tests): Added tests for the different pages and components` ([`678adc7`](https://github.com/isdelr/apply-digital-assignment/commit/678adc7388489fff8a15f43b25d9c76587daf3fe))

*   **No 3rd Party UI Libraries:** All components were built from scratch using React and styled with Tailwind CSS, as per the requirements.

*   **Footer Logo:** The Apply Digital logo in the footer redirects to the home page (`/`).
    *   **Relevant Commit:** `feat(component): Added footer component` ([`40ab691`](https://github.com/isdelr/apply-digital-assignment/commit/40ab6919016d6100c7f44a8b4efcb9946cb91be6))

*   **Header Navigation:** The header contains a logo that links to `/` and a cart icon that links to `/cart`.
    *   **Relevant Commit:** `feat(navbar): Finished Navbar component` ([`134f620`](https://github.com/isdelr/apply-digital-assignment/commit/134f620443b0cd2cbdae1efe23671f5688b7ae4e))

### Catalog Page

*   **Loading Indicator:** A loading spinner is displayed while the initial set of games is being fetched.
    *   **Relevant Commit:** `feat(functionality): Added pagination and filters to catalog grid` ([`93754f3`](https://github.com/isdelr/apply-digital-assignment/commit/93754f3edaf9becbb0725bfb6c292ff7edf3eaf1))

*   **Persistent Genre Filter:** The selected genre is persisted in the URL. Visiting a URL with a `genre` query parameter will load the catalog with that filter applied.
    *   **Relevant Commit:** `feat(functionality): Added pagination and filters to catalog grid` ([`93754f3`](https://github.com/isdelr/apply-digital-assignment/commit/93754f3edaf9becbb0725bfb6c292ff7edf3eaf1))

*   **Add/Remove from Cart:** The "Add To Cart" button adds a game to the cart. If the item is already in the cart, the button text changes to "Remove", and clicking it will remove the item.
    *   **Relevant Commit:** `feat(component): Added catalog grid component` ([`f6dfbdd`](https://github.com/isdelr/apply-digital-assignment/commit/f6dfbdd695a950cfb40822b35c145dc630733626))

*   **"See More" Button:** This button loads the next page of games and appends them to the current list.
    *   **Relevant Commit:** `feat(functionality): Added pagination and filters to catalog grid` ([`93754f3`](https://github.com/isdelr/apply-digital-assignment/commit/93754f3edaf9becbb0725bfb6c292ff7edf3eaf1))

*   **Genre Filter:** A native `<select>` element is used for filtering games by genre.
    *   **Relevant Commit:** `feat(component): Initial implementation of catalog header` ([`2299615`](https://github.com/isdelr/apply-digital-assignment/commit/2299615ca847573ce4164950bf9d573a515c1aac))

### Cart Page

*   **Item Display:** The cart page displays all added items with their name, description, price, image, and genre. A "New" badge is shown for new items.
    *   **Relevant Commit:** `feat(page): Added cart page and related functionality` ([`3d99110`](https://github.com/isdelr/apply-digital-assignment/commit/3d99110e8d6572710dc36b3bc49f1f821ef681fd))

*   **Remove Item:** Each item in the cart has an "X" button to remove it.
    *   **Relevant Commit:** `feat(page): Added cart page and related functionality` ([`3d99110`](https://github.com/isdelr/apply-digital-assignment/commit/3d99110e8d6572710dc36b3bc49f1f821ef681fd))

*   **Order Summary:** The summary section shows the quantity of items, the price of each, and the total order amount.
    *   **Relevant Commit:** `feat(page): Added cart page and related functionality` ([`3d99110`](https://github.com/isdelr/apply-digital-assignment/commit/3d99110e8d6572710dc36b3bc49f1f821ef681fd))

*   **Back to Catalog Button:** A "Back to Catalog" button is provided to navigate back to the home page.
    *   **Relevant Commit:** `feat(page): Added cart page and related functionality` ([`3d99110`](https://github.com/isdelr/apply-digital-assignment/commit/3d99110e8d6572710dc36b3bc49f1f821ef681fd))


## Technologies Used

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **State Management:** Zustand
*   **Testing:** Vitest, React Testing Library
*   **Linting/Formatting:** ESLint, Prettier (via Next.js defaults)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js and npm (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/apply-digital-assignment.git
    cd apply-digital-assignment
    ```

2.  **Install dependencies:**

    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Set up environment variables:**

    Create a file named `.env` in the root of the project and add the following line:

    ```
    NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running Tests

To run the unit tests for this project, execute the following command:

```bash
npm test
```

or with yarn:

```bash
yarn test
```