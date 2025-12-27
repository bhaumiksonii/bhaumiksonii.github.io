// Load configuration from JSON file
async function loadConfig() {
  try {
    const response = await fetch("data/site-config.json")
    if (!response.ok) {
      throw new Error("Failed to load configuration")
    }
    return await response.json()
  } catch (error) {
    console.error("Error loading configuration:", error)
    return null
  }
}

// Utility function to create element with classes
function createElement(tag, classes, content) {
  const element = document.createElement(tag)
  if (classes) element.className = classes
  if (content) element.innerHTML = content
  return element
}
