import React, { useState } from "react";
import { useTaskStore } from "./store/store";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Checkbox } from "./components/ui/Checkbox";

function App() {
  const { tasks, addTask, updateTask, toggleTask, deleteTask } = useTaskStore();
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Zustand To-Do</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (newTask.trim()) {
              addTask(newTask.trim());
              setNewTask("");
            }
          }}
          className="flex gap-2 mb-6"
        >
          <Input
            className="flex-1"
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <Button type="submit">Add</Button>
        </form>
        <ul className="space-y-2">
          {tasks.length === 0 && (
            <li className="text-gray-400 text-center">No tasks yet.</li>
          )}
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex items-center gap-2 bg-gray-100 rounded px-3 py-2"
            >
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {editId === task.id ? (
                <Input
                  className="flex-1"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  onBlur={() => {
                    setEditId(null);
                    setEditValue("");
                  }}
                  onKeyDown={e => {
                    if (e.key === "Enter" && editValue.trim()) {
                      updateTask(task.id, editValue.trim());
                      setEditId(null);
                      setEditValue("");
                    }
                  }}
                  autoFocus
                />
              ) : (
                <span
                  className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
                  onDoubleClick={() => {
                    setEditId(task.id);
                    setEditValue(task.title);
                  }}
                >
                  {task.title}
                </span>
              )}
              <Button
                type="button"
                className="px-2 py-1 text-xs"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default App;
