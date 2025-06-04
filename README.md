# Homepage Slicing - Pixel Perfect from Figma Design

This repository contains the complete slicing and responsive implementation of the homepage based on the provided Figma design:  
[https://www.figma.com/design/JRU7syeOq0e7hDd3corwP2/Test-File](https://www.figma.com/design/JRU7syeOq0e7hDd3corwP2/Test-File)

---

## Project Overview

The goal of this project is to deliver a pixel-perfect, fully responsive homepage that matches the Figma design with high fidelity, ensuring:

- Exact typography, colors, spacing, and layout  
- Mobile-first and responsive design for multiple device widths  
- Clean and reusable component structure  
- Subtle hover and motion effects to enhance user experience without compromising design accuracy

---

## Technology Stack

- React.js for component-based development  
- Tailwind CSS for efficient styling and responsiveness  
- Framer Motion (optional) for smooth, elegant animations and hover effects  
- Accessibility and SEO best practices considered

---

## How I Built the Homepage

- Components structured per section as per Figma  
- Each section uses responsive Tailwind utility classes with breakpoints matching design specs  
- Motion animations applied subtly on scroll and hover for user engagement  
- Images optimized and handled properly with alt attributes for accessibility  
- Used semantic HTML tags for better SEO

---

## WordPress Implementation Proposal

If this website were to be built on WordPress, I would implement the following **Custom Post Types (CPT)** and **Advanced Custom Fields (ACF)** to ensure flexibility, scalability, and ease of content management:

### Custom Post Types (CPT)

- **Property**  
  Used for the property listings section, containing all relevant data such as price, area, bedrooms, bathrooms, status, images, and location.

- **Team Member**  
  For the team section, including fields for name, position, photo, bio, and social media links.

- **Service**  
  Representing the services offered with title, description, icon/image, and related content.

- **New Arrival**  
  For highlighting new properties or offers, including images, descriptions, and availability status.

### Advanced Custom Fields (ACF)

- **Repeater Fields**  
  For flexible content like multiple property images or team member social links.

- **Flexible Content**  
  To create modular homepage sections that can be added, removed, or reordered easily by content managers.

- **Relationship Fields**  
  Linking related posts, such as properties to agents or services to teams.

- **Options Pages**  
  For global settings such as contact information, footer content, social media links, and site-wide banners.

---

## How to Run

1. Clone the repository  
2. Run `npm install` to install dependencies  
3. Run `npm start` to launch the local development server  
4. View the project in your browser at `http://localhost:3000`

---

## Final Notes

I carefully followed the design and requirements, ensuring the highest level of precision and responsiveness. Hover effects were added tastefully without deviating from the design language. The WordPress CPT and ACF strategy ensures this project can be extended and managed easily by non-technical content editors.

---

If you have any questions or would like to discuss further improvements or integrations, please do not hesitate to reach out.

---

Thank you for the opportunity!

Joseph Tanudjaja  
[josephtanudjaja10@gmail.com](mailto:josephtanudjaja10@gmail.com)
