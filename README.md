# InteractiveChipSelector

InteractiveChipSelector is a dynamic and interactive input rendering tool developed using Vite, React, TypeScript, and Tailwind CSS. It enables users to efficiently select and display items as chips through a user-friendly interface.

## Features

- **Dynamic Filtering**: As you type in the input field, a list of matching items is dynamically filtered and displayed.
- **Interactive Selection**: Clicking on an item in the filtered list turns it into a chip at the top of the input field.
- **Automatic Adjustment**: The input field adjusts automatically as items are selected, ensuring a seamless user experience.
- **Chip Removal**: Each chip includes an "X" icon for removal. Clicking the icon removes the chip and adds the item back to the list.
- - **Backspace Deletion Functionality**: Pressing backspace on an empty search field highlights the latest chip. Pressing backspace again deletes the highlighted chip.
- **Keyboard Shortcuts**: Convenient keyboard shortcuts enhance usability, including:
  - `Esc` to quit searching
  - Arrow keys for navigation within the search results
  - `Enter` to select an item
  - `Backspace` functionality for managing chips
- **User-Friendly Interface**: Intuitive user interface design ensures ease of use for both novice and experienced users.
- **Built from Scratch**: Every component is built from scratch in React without using any external component libraries like MUI.

## Demo Video

https://github.com/maanasb01/Interactive-Chip-Selector/assets/94924895/9ac7968b-ee91-462a-9338-ea31298b83c1

## Photos

![AddUser2](https://github.com/maanasb01/Interactive-Chip-Selector/assets/94924895/e7656ec2-4462-4174-bd63-5b9da5c8d797)
![AddUser3](https://github.com/maanasb01/Interactive-Chip-Selector/assets/94924895/522e481b-b684-4885-8fbe-431f28531820)
![AddUser1](https://github.com/maanasb01/Interactive-Chip-Selector/assets/94924895/72bb3064-9fba-4b9f-ae06-0609239adae2)


## Getting Started

### Prerequisites

To run this project, you need to have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (recommended, though you can use npm as well)

### Installation

1. Clone this repository to your local machine.

2. Install the project dependencies using Yarn (Recommended):

    ```bash
    yarn install
    ```

    **OR**

    You can also use npm:

    ```bash
    npm install
    ```

## Usage

### Development

During development, start the development using the following command:

    yarn dev

**OR (Using npm)**
    
    npm run dev

### Production

To build the app, use the following command:

    yarn build


**OR (Using npm)**

    npm run build
