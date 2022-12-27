# DEVIOO Portal

DEVIOO Portal is a login portal created with Nuxt 3. It is available at [portal.devioo.com](portal.devioo.com) and allows users to log in to the DEVIOO platform and modify their account. The login is handled in the backend using a token system that is accessible from the entire devioo.com domain to authenticate users.

## Prerequisites

- Node.js
- Nuxt.js

## Installation

1. Clone the Git repository to your computer:

```bash
git clone https://github.com/devioo-network/devioo-portal.git
```

2. Install the project dependencies using npm:
```bash
npm install
```
3. Start the development server using npm:
```bash
npm run dev
```
The project should now be accessible at http://localhost:3000/.

## Deployment
To deploy the project in production, use npm to generate a static build:

Copy code
npm run generate
The generated files are located in the dist/ folder. You can deploy them to your web server using your preferred method.

License
This project is licensed under the GNU GPLv3 license. You can find the full text of the license in the [https://github.com/devioo-network/devioo-portal/blob/main/LICENSE](LICENSE) file.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

![DEVIOO_BANNER](https://devioo.alwaysdata.net/Others/DEVIOO_BANNER.png)
