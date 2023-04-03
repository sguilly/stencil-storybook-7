# Install stencil packages

```
npm i
```

# Run stencil project

```
npm run start
```

# Test stencil project

```
npm run test
```

# Build stencil project

```
npm un build
```

# Open storybook in a separate shell

```
npm i
npm run storybook
```

# Why storybook in a sub folder

Stencil and storybook use jest as test tool but not the same version

Storybook as a sub folder offer a way to have a separate package.json

# Write stories in the sub folder storybook

see storybook/stories/my-component.stories.(js|ts)

# How integrate stencil's web component in the storybook project

Just add those two lines in storybook/.storybook/preview.js

```
import { defineCustomElements } from '../../loader';
defineCustomElements();
```

loader is the stencil folder generate during the compilation


