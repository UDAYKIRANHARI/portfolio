---
name: threejs-fundamentals
description: >
  Build clean, performant Three.js scenes for web landing pages and product experiences.
  Use modern patterns and keep the code easy to integrate into React/Next.js.
---

# Goal

Create basic but solid Three.js scenes that can be embedded into marketing websites.
Examples: a rotating product, floating 3D logo, or simple interactive hero section.

# Core Requirements

- Always create:
  - THREE.Scene
  - Camera (PerspectiveCamera)
  - Renderer with antialiasing enabled
  - One or more lights (directional + ambient or hemisphere)
  - Animation loop using requestAnimationFrame
- Handle window resize correctly (update camera aspect and renderer size).
- Keep the code organized in small functions or a class/module.

# Best Practices

- Use WebGLRenderer with alpha:true when you want transparent backgrounds.
- Avoid excessive polygon counts and heavy textures; aim for fast load times.
- Use physically based materials (MeshStandardMaterial) when possible.
- Center models and scale them to a reasonable size.
- Put all Three.js setup inside a function that accepts a container element.

# Integration With Websites

- When used with React / Next.js:
  - Either use a React Three Fiber component,
  - Or encapsulate Three.js setup in a React component that creates and cleans up the scene.
- The 3D canvas should be responsive and adapt to the container size.
- Do not block the main thread with long loops; use requestAnimationFrame only.

# Example Uses

- Rotating 3D product in the hero section of a landing page.
- Slowly orbiting camera around a product.
- Simple interactive hover / click effects (e.g. change color on hover).

# When to Use This Skill

Use this skill when the user asks for:

- 3D hero sections
- 3D product visuals
- Three.js scenes inside a website