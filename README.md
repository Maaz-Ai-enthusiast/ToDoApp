Here's your updated README file with the live demo link added at the beginning, and with `npm start` replaced with `npm run dev`:

---

# Live Demo: [Todo Application](https://todo-app-maaz.netlify.app/)

# Todo Application

A simple Todo application built with React that allows users to add, toggle, and delete tasks. The tasks are saved in the browser's local storage, ensuring persistence across page reloads.

## Features

- **Add Tasks**: Users can add new tasks to their todo list.
- **Toggle Task Completion**: Mark tasks as complete or incomplete by clicking on the task.
- **Delete Tasks**: Remove tasks from the list.
- **Persistent Storage**: Tasks are saved in the browser's local storage and remain available even after the page is refreshed.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```
   The application will start on `http://localhost:3000`.

## Project Structure

- **`/src`**: Main source folder.
  - **`/components/todo/Todo.js`**: Main Todo component that handles state management, adding, toggling, and deleting tasks.
  - **`/components/todoItem/TodoItem.js`**: Component that renders each task in the todo list.
  - **`/assets`**: Contains icons used in the Todo application.
  - **`App.js`**: The root component that renders the Todo component.
  - **`App.css`**: Contains the styling for the application.

## Main Components

### 1. `Todo`
- Manages the state of the todo list using `useState`.
- Adds new tasks, toggles completion status, and deletes tasks.
- Saves the current state of the todo list in local storage using `localStorage.setItem()` to maintain persistence.
- Handles input with `useRef` for direct manipulation without state re-renders.

### 2. `TodoItem`
- Renders individual tasks with options to toggle completion and delete.
- Displays an icon based on the completion status (`tick` or `not_tick`).
- Uses props to handle task actions (`deleteTodo` and `toggle`).

## How It Works

1. **Adding a Task**: 
   - Enter a task in the input field and click "ADD +".
   - The task appears in the list and is stored in local storage.

2. **Toggling Task Completion**:
   - Click on the task text or icon to toggle between complete and incomplete states.

3. **Deleting a Task**:
   - Click on the delete icon to remove the task from the list and local storage.

## Technologies Used

- **React**: For building the UI and managing state.
- **JavaScript**: For logic and interactivity.
- **CSS**: For styling the components.
- **Local Storage**: To persist data across sessions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

