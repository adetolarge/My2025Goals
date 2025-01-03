// script.js

document.addEventListener("DOMContentLoaded", () => {
    const goalsList = document.querySelector("#goals ul");
    const addGoalForm = document.querySelector("#add-goal-form");
    const progressSection = document.querySelector("#progress");
  
    // Array to store goals
    let goals = [
      { title: "Complete my B.eng", progress: 90 },
      { title: "Advance AI/ML skills", progress: 60 },
      { title: "Exercise 3 times a week", progress: 50 },
      { title: "Read at least 12 books", progress: 0 },
      { title: "Take my emotional life serious, meet Temi's mom and siblings.", progress: 10 },
      { title: "Improve my golf game by playing at least 18 holes per week", progress: 0 },
      { title: "Start NYSC at Abuja (Under preview)", progress: 0 },
      { title: "Secure an internship at a top tech company", progress: 60 },
      { title: "Spiritual growth: Work more on the rescue of the perishing and caring for the needy", progress: 50 }
    ];
  
    // Function to render goals
    function renderGoals() {
      goalsList.innerHTML = ""; // Clear the list
      goals.forEach((goal, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${goal.title}</span>
          <progress value="${goal.progress}" max="100"></progress>
          <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        goalsList.appendChild(li);
      });
      renderProgressTracker();
    }
  
    // Function to render progress tracker
    function renderProgressTracker() {
      const totalGoals = goals.length;
      const totalProgress = goals.reduce((sum, goal) => sum + goal.progress, 0);
      const averageProgress = totalGoals > 0 ? totalProgress / totalGoals : 0;
  
      progressSection.innerHTML = `
        <h3>Overall Progress</h3>
        <progress value="${averageProgress}" max="100"></progress>
        <p>${Math.round(averageProgress)}% completed</p>
      `;
    }
  
    // Add goal event
    addGoalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const goalTitle = document.querySelector("#goal-title").value;
      if (goalTitle.trim() !== "") {
        goals.push({ title: goalTitle, progress: 0 });
        document.querySelector("#goal-title").value = ""; // Clear the input
        renderGoals();
      }
    });
  
    // Delete goal event
    goalsList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        const index = event.target.dataset.index;
        goals.splice(index, 1); // Remove goal from the array
        renderGoals();
      }
    });
  
    // Initial render
    renderGoals();
  });
  