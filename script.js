// ExamSchool JavaScript

console.log("ExamSchool Loaded Successfully");

// Get Started Button
const startBtn = document.querySelector(".btn-warning");

if (startBtn) {
    startBtn.addEventListener("click", function (e) {
        e.preventDefault();

        alert("স্বাগতম ExamSchool-এ!\n\nখুব শীঘ্রই এখানে অনলাইন কোর্স, Mock Test এবং Job Preparation সিস্টেম যুক্ত হবে।");
    });
}

// Smooth Scroll (Future Use)
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
    });
});