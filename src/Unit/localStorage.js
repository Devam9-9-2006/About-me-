// Get data from localStorage
export const getData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error reading "${key}" from localStorage:`, error);
    return [];
  }
};

// Save data to localStorage
export const saveData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving "${key}" to localStorage:`, error);
  }
};

// Update data (same as save, but easier to understand in CRUD pages)
export const updateData = (key, data) => {
  saveData(key, data);
};

// Delete a single key from localStorage
export const deleteData = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error deleting "${key}" from localStorage:`, error);
  }
};

// Clear all localStorage data
export const clearAllData = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};